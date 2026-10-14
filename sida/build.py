"""Bygger sida/data/bank.js från AI/M0067M_kunskapsbas.md och sida/data/mappning.json.

Kör:  python build.py            (bygger och validerar)
      python build.py --tabell   (skriver dessutom ut mappningen som markdown-tabell)

Källfilen ändras aldrig. Om valideringen hittar fel skrivs ingen bank.js och skriptet avslutas med felkod 1.
"""

import json
import re
import sys
from datetime import date
from pathlib import Path

SIDA = Path(__file__).resolve().parent
ROT = SIDA.parent
KALLA = ROT / "AI" / "M0067M_kunskapsbas.md"
MAPPNING = SIDA / "data" / "mappning.json"
UT = SIDA / "data" / "bank.js"
SCHEMA = SIDA / "data" / "schema.json"
SCHEMA_UT = SIDA / "data" / "schema.js"

SAKNAS = "*Lösningsförslag saknas i materialet.*"
TYPORDNING = ["tenta", "ovningstenta", "diagnos"]

TENTA_RE = re.compile(r"^# (\S+) \| (.+?) \| (.+?) \| (.+)$")
UPPG_RE = re.compile(r"^## \[(\S+)\] Uppgift (\d+) \| (\d+)p \| (G|VG) \| (.+)$")


def parsa(text):
    """Delar upp uppgiftsbanken i tentor och uppgifter, ordagrant."""
    rader = text.splitlines()
    start = rader.index("# Uppgiftsbank M0067M")
    tentor, uppgifter = [], []
    aktuell = None  # uppgiften vi samlar text till
    falt = None     # "uppgift" eller "losning"

    for rad in rader[start + 1:]:
        if m := TENTA_RE.match(rad):
            aktuell = None
            tentor.append({"id": m[1], "namn": m[2], "datum": m[3], "uppgifter": []})
            continue
        if m := UPPG_RE.match(rad):
            aktuell = {
                "id": f"{m[1]}-{m[2]}", "tenta": m[1], "nr": int(m[2]),
                "poang": int(m[3]), "del": m[4],
                "amnen": [t.strip() for t in m[5].split(",")],
                "uppgift": [], "losning": [],
            }
            uppgifter.append(aktuell)
            tentor[-1]["uppgifter"].append(aktuell["id"])
            falt = None
            continue
        if aktuell is None:
            continue
        if rad == "**Uppgift:**":
            falt = "uppgift"
        elif rad == "**Lösning:**":
            falt = "losning"
        elif falt:
            aktuell[falt].append(rad)

    for u in uppgifter:
        u["uppgift"] = "\n".join(u["uppgift"]).strip()
        los = "\n".join(u["losning"]).strip()
        u["losning"] = None if los == SAKNAS else los
    return tentor, uppgifter


def klassa(u, mappning, fel):
    """Sätter typ och avsnitt utifrån taggarna, och tillämpar sedan undantagen."""
    taggar = mappning["taggar"]
    typ, avsnitt = None, set()
    for amne in u["amnen"]:
        post = taggar.get(amne.lower())
        if post is None:
            fel.append(f"{u['id']}: okänd tagg '{amne}' (lägg till den i mappning.json)")
            continue
        avsnitt.update(post["avsnitt"])
        if typ is None and post["typ"]:
            typ = post["typ"]
    if any(a.lower() == "bevis" for a in u["amnen"]):
        typ = "bevis"

    undantag = mappning["undantag"].get(u["id"], {})
    typ = undantag.get("typ", typ)
    if "avsnitt" in undantag:
        avsnitt = set(undantag["avsnitt"])

    u["typ"] = typ
    u["avsnitt"] = sorted(avsnitt, key=lambda s: tuple(int(x) for x in s.split(".")))


def validera(tentor, uppgifter, mappning):
    fel = []
    typer, avsnittsnamn = mappning["typer"], mappning["avsnitt"]

    if len(tentor) != 9:
        fel.append(f"Förväntade 9 tentor, hittade {len(tentor)}")
    if len(uppgifter) != 81:
        fel.append(f"Förväntade 81 uppgifter, hittade {len(uppgifter)}")
    if len({u["id"] for u in uppgifter}) != len(uppgifter):
        fel.append("Det finns dubbletter bland uppgifts-id")

    for t in tentor:
        if t["id"] not in mappning["tentor"]:
            fel.append(f"{t['id']}: saknas under 'tentor' i mappning.json")
            continue
        nr = [int(i.split("-")[1]) for i in t["uppgifter"]]
        if nr != list(range(1, 10)):
            fel.append(f"{t['id']}: uppgiftsnummer {nr}, förväntade 1–9")
        for pdf in mappning["tentor"][t["id"]]["pdf"]:
            if not (SIDA / pdf).is_file():
                fel.append(f"{t['id']}: PDF saknas: {pdf}")

    for u in uppgifter:
        klassa(u, mappning, fel)
        if u["typ"] not in typer:
            fel.append(f"{u['id']}: saknar giltig typ ({u['typ']})")
        if not u["avsnitt"]:
            fel.append(f"{u['id']}: saknar avsnitt")
        for a in u["avsnitt"]:
            if a not in avsnittsnamn:
                fel.append(f"{u['id']}: okänt avsnitt '{a}'")
        if u["del"] != ("G" if u["nr"] <= 6 else "VG"):
            fel.append(f"{u['id']}: del {u['del']} stämmer inte med uppgiftsnumret")
        if u["poang"] != 4:
            fel.append(f"{u['id']}: {u['poang']} p, förväntade 4")
        if not u["uppgift"]:
            fel.append(f"{u['id']}: tom uppgiftstext")

    utan_losning = [u["id"] for u in uppgifter if u["losning"] is None]
    if utan_losning != [f"diag3-{n}" for n in range(1, 10)]:
        fel.append(f"Uppgifter utan lösning ska vara exakt diag3-1..9, men är: {utan_losning}")

    ids = {u["id"] for u in uppgifter}
    for uid in mappning["undantag"]:
        if uid not in ids:
            fel.append(f"Undantag för okänd uppgift '{uid}'")
    for tagg, post in mappning["taggar"].items():
        if post["typ"] is not None and post["typ"] not in typer:
            fel.append(f"Taggen '{tagg}' pekar på okänd typ '{post['typ']}'")

    return fel, utan_losning


def validera_schema(schema, uppgifter, tentor):
    """Kontrollerar att schemat bara pekar på uppgifter och tentor som finns."""
    fel = []
    ids = {u["id"] for u in uppgifter}
    tenta_ids = {t["id"] for t in tentor}
    try:
        tentadag = date.fromisoformat(schema["tentadatum"])
    except (KeyError, ValueError):
        return ["schema: ogiltigt eller saknat tentadatum"]
    datum = []
    for dag in schema.get("dagar", []):
        try:
            d = date.fromisoformat(dag["datum"])
        except (KeyError, ValueError):
            fel.append(f"schema: ogiltigt datum {dag.get('datum')!r}")
            continue
        datum.append(d)
        if d > tentadag:
            fel.append(f"schema {d}: efter tentadatum")
        if not dag.get("pass") and not dag.get("notis"):
            fel.append(f"schema {d}: dagen har varken pass eller notis")
        for i, ps in enumerate(dag.get("pass", []), 1):
            if not ps.get("rubrik"):
                fel.append(f"schema {d} pass {i}: saknar rubrik")
            if not ps.get("uppgifter") and not ps.get("beskrivning"):
                fel.append(f"schema {d} pass {i}: saknar både uppgifter och beskrivning")
            for uid in ps.get("uppgifter", []):
                if uid not in ids:
                    fel.append(f"schema {d} pass {i}: okänd uppgift {uid!r}")
            if "tenta" in ps and ps["tenta"] not in tenta_ids:
                fel.append(f"schema {d} pass {i}: okänd tenta {ps['tenta']!r}")
    if datum != sorted(datum) or len(set(datum)) != len(datum):
        fel.append("schema: dagarna måste ligga i datumordning utan dubbletter")
    return fel


def bygg_bank(tentor, uppgifter, mappning):
    tentor_ut = []
    for t in tentor:
        info = mappning["tentor"][t["id"]]
        tentor_ut.append({
            "id": t["id"],
            "namn": t["namn"],
            "typ": info["typ"],
            # Bara de riktiga tentornas datum är pålitliga (se CLAUDE.md).
            "datum": t["datum"] if info["typ"] == "tenta" else None,
            "pdf": info["pdf"],
            "harLosning": all(u["losning"] is not None for u in uppgifter if u["tenta"] == t["id"]),
            "uppgifter": t["uppgifter"],
        })
    # Tentor nyast först (källans ordning), övningstentor och diagnoser i id-ordning.
    tentor_ut.sort(key=lambda t: (TYPORDNING.index(t["typ"]), 0 if t["typ"] == "tenta" else t["id"]))

    falt = ["id", "tenta", "nr", "poang", "del", "amnen", "typ", "avsnitt", "uppgift", "losning"]
    return {
        "tentor": tentor_ut,
        "uppgifter": {u["id"]: {k: u[k] for k in falt} for u in uppgifter},
        "typer": mappning["typer"],
        "avsnitt": mappning["avsnitt"],
    }


def skriv_tabell(uppgifter, mappning):
    print("\n| Uppgift | Ämnen (original) | Typ | Avsnitt |")
    print("|---|---|---|---|")
    for u in uppgifter:
        stjarna = " *" if u["id"] in mappning["undantag"] else ""
        print(f"| {u['id']}{stjarna} | {', '.join(u['amnen'])} | {u['typ']} | {', '.join(u['avsnitt'])} |")
    print("\n\\* = undantag i mappning.json")


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    mappning = json.loads(MAPPNING.read_text(encoding="utf-8"))
    tentor, uppgifter = parsa(KALLA.read_text(encoding="utf-8"))
    fel, utan_losning = validera(tentor, uppgifter, mappning)
    schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
    fel += validera_schema(schema, uppgifter, tentor)

    if fel:
        print(f"VALIDERING MISSLYCKADES ({len(fel)} fel):")
        for f in fel:
            print("  -", f)
        sys.exit(1)

    bank = bygg_bank(tentor, uppgifter, mappning)
    UT.write_text("// Genererad av build.py. Redigera inte för hand.\nwindow.BANK = "
                  + json.dumps(bank, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")

    schema_ut = {k: v for k, v in schema.items() if not k.startswith("_")}
    SCHEMA_UT.write_text("// Genererad av build.py från schema.json. Redigera schema.json, inte den här filen.\nwindow.SCHEMA = "
                         + json.dumps(schema_ut, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")

    alla_text = [u["uppgift"] + "\n" + (u["losning"] or "") for u in uppgifter]
    per_typ = {}
    for u in uppgifter:
        per_typ[u["typ"]] = per_typ.get(u["typ"], 0) + 1
    print("Validering OK")
    print(f"  Tentor:            {len(bank['tentor'])}  "
          + ", ".join(f"{sum(t['typ'] == ty for t in bank['tentor'])} {ty}" for ty in TYPORDNING))
    print(f"  Uppgifter:         {len(uppgifter)} (alla har typ och avsnitt)")
    print(f"  Utan lösning:      {', '.join(utan_losning)}")
    print(f"  Figurplatshållare: {sum(t.count('[Figur') for t in alla_text)}")
    print(f"  Transkr.-noter:    {sum(t.count('Transkriberarens not') for t in alla_text)}")
    print(f"  Undantag använda:  {len(mappning['undantag'])}")
    print("  Per typ:          " + ", ".join(f"{k} {v}" for k, v in sorted(per_typ.items(), key=lambda kv: -kv[1])))
    antal_pass = sum(len(d.get("pass", [])) for d in schema["dagar"])
    i_schema = {uid for d in schema["dagar"] for ps in d.get("pass", []) for uid in ps.get("uppgifter", [])}
    print(f"  Schema:            {len(schema['dagar'])} dagar, {antal_pass} pass, {len(i_schema)} olika uppgifter")
    print(f"Skrev {UT.relative_to(ROT)} ({UT.stat().st_size // 1024} kB) och {SCHEMA_UT.relative_to(ROT)}")

    if "--tabell" in sys.argv:
        skriv_tabell(uppgifter, mappning)


if __name__ == "__main__":
    main()
