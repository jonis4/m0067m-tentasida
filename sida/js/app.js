// Router och vyer. All data kommer från window.BANK (genereras av build.py).
(function () {
  "use strict";

  const B = window.BANK;
  const esc = Format.esc;
  const app = document.getElementById("app");

  const FILTER = [
    ["alla", "Alla"],
    ["tenta", "Gamla tentor"],
    ["ovningstenta", "Övningstentor"],
    ["diagnos", "Diagnoser"],
    ["sparade", "Sparade"],
  ];
  const TYPNAMN = { tenta: "Gammal tenta", ovningstenta: "Övningstenta", diagnos: "Diagnostiskt test" };
  const tentaMap = Object.fromEntries(B.tentor.map((t) => [t.id, t]));

  // Avsnitt → uppgifts-id, i samma ordning som i Bank. Bevis hålls isär (låg prioritet).
  const avsnittOrdning = Object.keys(B.avsnitt);
  const perAvsnitt = Object.fromEntries(avsnittOrdning.map((a) => [a, { ovning: [], bevis: [] }]));
  for (const t of B.tentor) {
    for (const id of t.uppgifter) {
      const u = B.uppgifter[id];
      for (const a of u.avsnitt) perAvsnitt[a][u.typ === "bevis" ? "bevis" : "ovning"].push(id);
    }
  }
  // ---------- Schema och datum ----------
  // Vilket schema som används: standard (window.SCHEMA) eller ett valt ur window.SCHEMOR (t.ex. Eriks).
  const SCHEMA_NYCKEL = "m0067m.schema";
  let valtSchema = null;
  try { valtSchema = localStorage.getItem(SCHEMA_NYCKEL); } catch (e) { /* standard */ }
  const SCHEMOR = window.SCHEMOR || {};
  if (!SCHEMOR[valtSchema]) valtSchema = null;
  const S = valtSchema ? SCHEMOR[valtSchema] : window.SCHEMA;
  const dagMap = Object.fromEntries(S.dagar.map((d) => [d.datum, d]));
  const VECKODAG = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
  const MANAD = ["jan", "feb", "mars", "april", "maj", "juni", "juli", "aug", "sep", "okt", "nov", "dec"];
  const tvaSiffror = (n) => String(n).padStart(2, "0");
  const isoAv = (d) => d.getFullYear() + "-" + tvaSiffror(d.getMonth() + 1) + "-" + tvaSiffror(d.getDate());
  const datumAv = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  const plusDagar = (iso, n) => { const d = datumAv(iso); d.setDate(d.getDate() + n); return isoAv(d); };
  const dagarMellan = (a, b) => Math.round((datumAv(b) - datumAv(a)) / 864e5);
  const datumText = (iso) => { const d = datumAv(iso); return VECKODAG[d.getDay()] + " " + d.getDate() + " " + MANAD[d.getMonth()]; };
  // window.IDAG_DATUM finns bara för att testerna ska kunna låtsas att det är en annan dag.
  const idagIso = () => window.IDAG_DATUM || isoAv(new Date());
  const forstaDag = S.dagar[0].datum;

  // ---------- Strategirader (layoutspec §7) och metodmallar ----------
  const INST_NYCKEL = "m0067m.installningar.v1";
  let inst = { strategi: true };
  try { inst = Object.assign(inst, JSON.parse(localStorage.getItem(INST_NYCKEL)) || {}); } catch (e) { /* standard */ }
  function sparaInst() { try { localStorage.setItem(INST_NYCKEL, JSON.stringify(inst)); } catch (e) { /* ignoreras */ } }

  const utanP = (html) => html.replace(/^<p>/, "").replace(/<\/p>$/, "");

  // En diskret rad som går att klicka upp till hela blocket. Tom om strategiraderna är avstängda.
  function strategiRad(nr) {
    if (!inst.strategi) return "";
    const b = B.strategi[nr - 1];
    return '<details class="strategi"><summary><span class="strategi-titel">' + esc(b.titel) + ".</span> "
      + utanP(Format.formatera(b.kort, null, "strategi " + nr)) + "</summary>"
      + '<div class="text">' + Format.formatera(b.text, null, "strategi " + nr) + "</div></details>";
  }

  // "Så vill examinatorn ha det": metodmallen för uppgiftens typ, hopfälld.
  function mallHtml(u) {
    const mallar = [].concat(B.typer[u.typ].mall);
    return '<details class="mall"><summary>Så vill examinatorn ha det</summary><div class="text">'
      + mallar.map((m) => Format.formatera("**" + m + ":**\n" + B.profil.mallar[m], null, "mall " + m)).join("")
      + "</div></details>";
  }

  function passBeskrivning(ps) {
    if (ps.beskrivning) return ps.beskrivning;
    const typer = [...new Set(ps.uppgifter.map((id) => B.typer[B.uppgifter[id].typ].namn.toLowerCase()))];
    return "Blandat: " + typer.join(" · ");
  }

  const klarad = (id) => { const s = Status.get(id); return !!s && (s.status === "sjalv" || s.status === "sitter"); };

  // ---------- Historik: så att "Tillbaka" går dit man kom ifrån ----------
  // Varje historikpost får ett djup i history.state. Djup > 1 betyder att det finns en
  // tidigare sida inne i appen, och då gör Tillbaka samma sak som webbläsarens bakåtknapp.
  let djup = 0;
  let ersatt = false;

  function markeraHistorik() {
    const s = history.state;
    if (s && typeof s.djup === "number") {
      djup = s.djup;
    } else {
      djup = ersatt ? Math.max(djup, 1) : djup + 1;
      try { history.replaceState({ djup }, ""); } catch (e) { /* file:// i vissa webbläsare */ }
    }
    ersatt = false;
  }

  function ga(href, { ersatt: e = false } = {}) {
    if (href === location.hash) return; // ingen hashchange skulle komma
    if (e) {
      ersatt = true;
      location.replace(href);
    } else {
      location.hash = href;
    }
  }

  function tillbaka(foralder) {
    if (djup > 1) history.back();
    else ga(foralder, { ersatt: true });
  }

  // Sätts av uppgiftsvyn så att tangenterna vet vad som är föregående/nästa.
  let tangentKontext = null;

  // ---------- Hjälpare ----------
  function pdfLankar(tenta) {
    const etiketter =
      tenta.pdf.length === 2 ? ["Uppgifter", "Lösningsförslag"]
      : [tenta.harLosning ? "Tenta med lösningsförslag" : "Uppgifter"];
    return tenta.pdf
      .map((p, i) => '<a href="' + esc(encodeURI(p)) + '" target="_blank" rel="noopener">' + etiketter[i] + " (PDF)</a>")
      .join('<span class="sep"> · </span>');
  }

  function avsnittText(u) {
    return u.avsnitt.join(" ");
  }

  // Statusmarkering i listor (layoutspec §4.2 använder ○ ●). Ordet finns som title och för skärmläsare.
  function statusEtikett(id) {
    const s = Status.get(id);
    const namn = s ? Status.STATUSAR[s.status] : "Ej gjord";
    return '<span class="rad-status" data-status="' + (s ? s.status : "ej") + '" title="' + namn + '">'
      + '<span class="markor" aria-hidden="true"></span><span class="dold">' + namn + "</span></span>";
  }

  function statusKnappar(id) {
    const s = Status.get(id);
    return Object.entries(Status.STATUSAR).map(([k, namn], i) =>
      '<button type="button" class="statusval" data-status="' + k + '" aria-pressed="' + (!!s && s.status === k) + '"'
      + ' title="Tangent ' + (i + 1) + '">' + namn + "</button>").join("");
  }

  // Bokmärke: sparar uppgiften under Bank → Sparade.
  const BOKMARKE = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">'
    + '<path d="M6.5 3.5h11v17l-5.5-4.2-5.5 4.2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  function sparaKnapp(id) {
    const p = Status.arSparad(id);
    return '<button type="button" class="spara" data-spara="' + id + '" aria-pressed="' + p + '" aria-label="'
      + (p ? "Sparad. Tryck för att ta bort" : "Spara uppgiften") + '" title="' + (p ? "Sparad (S)" : "Spara uppgiften (S)") + '">' + BOKMARKE + "</button>";
  }
  function vaxlaSpara(knapp) {
    const p = Status.vaxlaSparad(knapp.dataset.spara);
    knapp.setAttribute("aria-pressed", String(p));
    knapp.setAttribute("aria-label", p ? "Sparad. Tryck för att ta bort" : "Spara uppgiften");
    knapp.title = p ? "Sparad (S)" : "Spara uppgiften (S)";
  }
  document.addEventListener("click", (e) => {
    const k = e.target.closest("[data-spara]");
    if (k) vaxlaSpara(k);
  });

  function kontextrad(foralder, hoger) {
    return '<div class="kontext"><a href="' + esc(foralder) + '" class="tillbaka" data-tillbaka="' + esc(foralder) + '">← Tillbaka</a>'
      + (hoger ? '<span class="kontext-namn">' + esc(hoger) + "</span>" : "") + "</div>";
  }

  // ---------- Vyer ----------
  // Pass med uppgifter men utan tenta: det sista av dem får dagens repetitionsuppgift.
  function repPassIndex(dag) {
    if (!dag || !dag.pass) return -1;
    let r = -1;
    dag.pass.forEach((ps, i) => { if (ps.uppgifter.length && !ps.tenta) r = i; });
    return r;
  }

  // Dagens repetitionsuppgift väljs en gång per dag och sparas, så att den inte byts ut medan man räknar.
  function dagensRepetition(dag, datum) {
    if (datum !== idagIso() || repPassIndex(dag) < 0) return null;
    const nyckel = "m0067m.repetition." + datum;
    try { const sparad = localStorage.getItem(nyckel); if (sparad && B.uppgifter[sparad]) return sparad; } catch (e) { /* väljs igen */ }
    const forsta = repeteraLista(dag)[0] || null;
    if (forsta) { try { localStorage.setItem(nyckel, forsta); } catch (e) { /* ignoreras */ } }
    return forsta;
  }

  // Uppgifterna i ett pass, inklusive dagens repetition om passet är dagens sista.
  function passIds(datum, i) {
    const dag = dagMap[datum];
    const ps = dag && dag.pass && dag.pass[i];
    if (!ps) return [];
    const ids = ps.uppgifter.slice();
    if (i === repPassIndex(dag)) {
      const r = dagensRepetition(dag, datum);
      if (r && !ids.includes(r)) ids.push(r);
    }
    return ids;
  }

  function vyIdag(visad) {
    const idag = idagIso();
    const fore = idag < forstaDag;
    if (!visad) {
      if (idag > S.tentadatum) {
        document.title = "Idag · M0067M";
        return '<h1>Tentan har varit</h1><p class="tyst"><a href="#/idag/schema">Visa hela schemat</a></p>';
      }
      visad = fore ? forstaDag : idag;
    }
    const dag = dagMap[visad];
    const arIdag = visad === idag;
    document.title = datumText(visad) + " · M0067M";
    const kvar = dagarMellan(visad, S.tentadatum);
    const forra = plusDagar(visad, -1), nasta = plusDagar(visad, 1);
    const pil = (iso, tecken, namn) => dagMap[iso]
      ? '<a class="dagpil" href="#/idag/' + iso + '" data-ersatt aria-label="' + namn + '">' + tecken + "</a>"
      : '<span class="dagpil av" aria-hidden="true">' + tecken + "</span>";

    let html = '<div class="daghuvud">' + pil(forra, "←", "Föregående dag")
      + "<h1>" + datumText(visad) + "</h1>" + pil(nasta, "→", "Nästa dag")
      + '<span class="kvar">' + (kvar > 0 ? kvar + (kvar === 1 ? " dag kvar" : " dagar kvar") : kvar === 0 ? "Tentadag" : "") + "</span></div>";

    if (Object.keys(SCHEMOR).length) {
      html += '<p class="tyst schema-namn">' + esc(S.namn || "Schema") + ' · <a href="#/installningar">Byt schema</a></p>';
    }
    if (!arIdag) {
      html += '<p class="tyst annan-dag">' + (fore && visad === forstaDag ? "Schemat börjar " + datumText(forstaDag).toLowerCase() + "." : "Du tittar på en annan dag än idag.")
        + (dagMap[idag] ? ' <a href="#/idag" data-ersatt>Till idag</a>' : "") + "</p>";
    }

    const repId = arIdag ? dagensRepetition(dag, visad) : null;
    let nu = -1;

    if (!dag) {
      html += '<p class="tyst">Inget inlagt den här dagen.</p>';
    } else if (dag.notis) {
      html += '<p class="notis">' + esc(dag.notis) + "</p>";
    } else {
      const lista = dag.pass.map((ps, i) => passIds(visad, i));
      const klart = (i) => lista[i].length > 0 && lista[i].every((id) => Status.get(id));
      nu = arIdag ? dag.pass.findIndex((ps, i) => lista[i].length > 0 && !klart(i)) : -1;

      dag.pass.forEach((ps, i) => {
        const nr = i + 1, ids = lista[i];
        const forsta = ids.find((id) => !klarad(id)) || ids[0];
        const href = ps.tenta ? "#/tentalage/ny/idag/" + visad + "/" + nr : forsta ? "#/idag/" + visad + "/" + nr + "/" + forsta : null;
        const etikett = ps.tenta ? "Starta tentaläge" : "Starta";
        const besk = ps.beskrivning ? '<p class="pass-beskrivning">' + esc(ps.beskrivning) + "</p>" : "";
        const antal = ids.length + (ids.length === 1 ? " uppgift" : " uppgifter");
        // Ett tentapass listar inte uppgifterna (avsnitt och typ skulle avslöja metoden).
        const rader = ps.tenta || !ids.length ? "" : '<ul class="rader">' + ids.map((id) => {
          const u = B.uppgifter[id];
          return '<li><a href="#/idag/' + visad + "/" + nr + "/" + id + '">'
            + statusEtikett(id)
            + '<span class="rad-namn">' + esc(tentaMap[u.tenta].namn) + ", uppg. " + u.nr + "</span>"
            + (id === repId && !ps.uppgifter.includes(id) ? '<span class="rad-meta">repetition</span>' : "")
            + '<span class="pil" aria-hidden="true">→</span></a></li>';
        }).join("") + "</ul>";

        if (!ids.length) {
          // Läsning, dugga, lätt dag: bara en rad text.
          html += '<section class="pass text-pass"><h2 class="del">' + esc(ps.rubrik) + "</h2>" + besk + "</section>";
        } else if (i === nu) {
          html += '<section class="pass pass-nu"><div class="pass-huvud"><h2 class="del">Nu · ' + esc(ps.rubrik) + "</h2>"
            + '<span class="pass-antal">' + antal + "</span></div>" + besk + rader
            + '<p><a class="knapp-stor" href="' + href + '">' + etikett + "</a></p></section>";
        } else if (arIdag) {
          // Klara och kommande pass är hopfällda till en rad.
          const k = klart(i);
          html += '<details class="pass hopfallt' + (k ? " klart" : "") + '"><summary><span class="pass-rubrik">' + esc(ps.rubrik) + "</span>"
            + '<span class="pass-antal">' + (k ? "Klart" : antal) + "</span></summary>"
            + besk + rader + (k ? "" : '<p><a class="pass-starta" href="' + href + '">' + etikett + " →</a></p>") + "</details>";
        } else {
          // En annan dag: allt synligt men lågmält.
          html += '<section class="pass"><div class="pass-huvud"><h2 class="del">' + esc(ps.rubrik) + "</h2>"
            + '<span class="pass-antal">' + antal + "</span></div>" + besk + rader
            + (href ? '<p><a class="pass-starta" href="' + href + '">' + etikett + " →</a></p>" : "") + "</section>";
        }
      });
    }

    if (arIdag) html += repeteraRad(dag, repId, nu === -1);
    return html + '<p class="hela-schemat"><a href="#/idag/schema">Visa hela schemat</a></p>';
  }

  // ---------- Repetera (spridd repetition) ----------
  // Gjord med hjälp (tidigast dagen efter) eller gjord själv för minst tre dagar sedan.
  // Genereras automatiskt och står inte i schemat. Uppgifter i dagens pass tas inte med.
  let repeteraFrys = [];

  function repeteraLista(dag) {
    const idag = idagIso();
    const iDagensPass = new Set(dag && dag.pass ? dag.pass.flatMap((ps) => ps.uppgifter) : []);
    return Object.keys(B.uppgifter)
      .map((id) => ({ id, s: Status.get(id) }))
      .filter(({ id, s }) => {
        if (!s || iDagensPass.has(id)) return false;
        const sedan = dagarMellan(isoAv(new Date(s.tid)), idag);
        return (s.status === "hjalp" && sedan >= 1) || (s.status === "sjalv" && sedan >= 3);
      })
      .sort((a, b) => (a.s.status === "hjalp" ? 0 : 1) - (b.s.status === "hjalp" ? 0 : 1) || Date.parse(a.s.tid) - Date.parse(b.s.tid))
      .map(({ id }) => id);
  }

  function repeteraRad(dag, repId, passKlara) {
    repeteraFrys = repeteraLista(dag).filter((id) => id !== repId);
    if (!repeteraFrys.length) return "";
    const href = "#/idag/repetera/" + repeteraFrys[0];
    const n = repeteraFrys.length;
    return passKlara
      ? '<section class="pass pass-nu repetera"><div class="pass-huvud"><h2 class="del">Repetera</h2><span class="pass-antal">'
        + n + (n === 1 ? " uppgift" : " uppgifter") + '</span></div><p class="pass-beskrivning">Sitter de fortfarande? Räkna dem från noll utan att titta.</p>'
        + '<p><a class="knapp-stor" href="' + href + '">Starta</a></p></section>'
      : '<p class="repetera repetera-rad"><span>Repetera · ' + n + (repId ? " till" : (n === 1 ? " uppgift" : " uppgifter")) + "</span>"
        + '<a class="pass-starta" href="' + href + '">Starta →</a></p>';
  }

  function repeteraKontext(id) {
    return {
      ids: repeteraFrys.includes(id) ? repeteraFrys : [id],
      href: (x) => "#/idag/repetera/" + x,
      foralder: "#/idag",
      foralderNamn: "Repetera",
      sistaText: "Tillbaka till Idag",
      visaKalla: true,
    };
  }

  // ---------- Alla strategiblock (länkas från sidfoten) ----------
  function vyStrategi() {
    document.title = "Strategi · M0067M";
    return kontextrad("#/idag", "") + "<h1>Strategi</h1>"
      + '<p class="tyst">Femton block ur <em>A Mind for Numbers</em> (Barbara Oakley), sammanfattade för de sista veckorna före tentan. '
      + "Strategiraderna i sidan är " + (inst.strategi ? "på" : "av") + '. <button type="button" class="lank" data-sidfot="strategi-vaxla">'
      + (inst.strategi ? "Stäng av" : "Slå på") + "</button></p>"
      + B.strategi.map((b) => '<section class="strategiblock" id="strategi-' + b.nr + '"><h2>' + b.nr + ". " + esc(b.titel) + "</h2>"
        + '<p class="strategi-kort">' + utanP(Format.formatera(b.kort, null, "strategi " + b.nr)) + "</p>"
        + '<div class="text">' + Format.formatera(b.text, null, "strategi " + b.nr) + "</div></section>").join("");
  }

  function vySchema() {
    document.title = "Schema · M0067M";
    const idag = idagIso();
    const rader = S.dagar.map((d) => {
      let sammanfattning;
      if (d.notis) sammanfattning = esc(d.notis);
      else {
        const ids = [...new Set(d.pass.flatMap((ps) => ps.uppgifter))];
        // En kort rad per pass: tentapass får tentans namn, vanliga pass sin beskrivning.
        const kort = (ps) => ps.tenta ? ps.rubrik + ": " + tentaMap[ps.tenta].namn
          : !ps.beskrivning ? passBeskrivning(ps)
          : /^(Pass \d+|Morgonpass)$/.test(ps.rubrik) ? ps.beskrivning
          : ps.rubrik;
        sammanfattning = d.pass.map((ps) => esc(kort(ps))).join("<br>")
          + (ids.length ? ' <span class="tyst">· ' + Status.antalGjorda(ids) + "/" + ids.length + " gjorda</span>" : "");
      }
      const ar = d.datum === idag;
      return '<li' + (ar ? ' class="idag"' : "") + '><a href="#/idag/' + d.datum + '">'
        + '<span class="schema-datum">' + datumText(d.datum) + (ar ? ' <span class="nu">idag</span>' : "") + "</span>"
        + '<span class="schema-innehall">' + sammanfattning + "</span></a></li>";
    }).join("");
    return kontextrad("#/idag", "") + "<h1>Hela schemat</h1>"
      + '<p class="tyst">' + datumText(S.dagar[0].datum) + " – " + datumText(S.tentadatum).toLowerCase() + "</p>"
      + '<ul class="schemalista">' + rader + "</ul>";
  }

  function idagKontext(datum, nr) {
    const ps = dagMap[datum].pass[nr - 1];
    return {
      ids: passIds(datum, nr - 1),
      href: (id) => "#/idag/" + datum + "/" + nr + "/" + id,
      foralder: "#/idag/" + datum,
      foralderNamn: datumText(datum) + " · " + ps.rubrik,
      sistaText: "Tillbaka till dagen",
      visaKalla: true,
    };
  }

  // ---------- Tentaläge (layoutspec §6) ----------
  // Pågående tenta sparas i localStorage så att den överlever omladdning och flikbyte.
  // Timern räknas alltid från starttiden, aldrig genom att räkna ner ett tal.
  const TL_NYCKEL = "m0067m.tentalage.v1";
  let tl = (() => { try { return JSON.parse(localStorage.getItem(TL_NYCKEL)) || null; } catch (e) { return null; } })();
  let tlFraga = null; // null | "avbryt" | "lamna"
  let tlFormelblad = false;

  function sparaTL() {
    try {
      if (tl) localStorage.setItem(TL_NYCKEL, JSON.stringify(tl));
      else localStorage.removeItem(TL_NYCKEL);
    } catch (e) { /* fungerar ändå så länge fliken är öppen */ }
  }

  // Vad som ska skrivas: från en tenta i Bank eller från ett tentapass i Idag.
  function tlUpplagg(delar) {
    const [, , kalla, a, b] = delar;
    if (kalla === "bank" && tentaMap[a] && delar.length === 4) {
      const t = tentaMap[a];
      return { namn: t.namn, uppgifter: t.uppgifter.slice(), tidMin: 300, tillbaka: "#/bank/" + t.id, kallaHref: "#/tentalage/ny/bank/" + t.id };
    }
    if (kalla === "idag" && dagMap[a] && dagMap[a].pass && delar.length === 5) {
      const ps = dagMap[a].pass[+b - 1];
      if (!ps || !ps.tenta) return null;
      return { namn: tentaMap[ps.tenta].namn, uppgifter: ps.uppgifter.slice(), tidMin: ps.tid || 300,
        tillbaka: "#/idag/" + a, kallaHref: "#/tentalage/ny/idag/" + a + "/" + b };
    }
    return null;
  }

  const tidText = (min) => { const h = Math.floor(min / 60), m = min % 60; return h + " h" + (m ? " " + m + " min" : ""); };

  function vyTentaStart(upp) {
    document.title = "Tentaläge · " + upp.namn + " · M0067M";
    const nr = upp.uppgifter.map((id) => B.uppgifter[id].nr);
    const helTenta = upp.uppgifter.length === 9;
    const omfang = helTenta ? "Hela tentan: 9 uppgifter à 4 p, skrivtid " + tidText(upp.tidMin) + "."
      : "Det här passet: uppgift " + nr[0] + "–" + nr[nr.length - 1] + " (" + upp.uppgifter.length * 4 + " p), skrivtid " + tidText(upp.tidMin) + ".";
    return kontextrad(upp.tillbaka, "")
      + '<h1>' + esc(upp.namn) + '</h1><p class="tyst">Tentaläge</p>'
      + '<p class="tl-omfang">' + omfang + "</p>"
      + '<h2 class="del">Tentans form</h2>'
      + '<div class="text tl-form">' + Format.formatera(B.profil.tentansForm, null, "profil tentans form") + "</div>"
      + '<p class="tyst">I tentaläget syns ingen navigering, inga lösningar och inga statusval. Formelbladet finns. '
      + "Timern går även om du byter flik, och du kan dölja den.</p>"
      + strategiRad(12)
      + '<p><button type="button" class="knapp-stor" data-tl="starta">Starta tentan</button></p>';
  }

  function tlTimerText() {
    if (!tl || !tl.start) return "";
    const slut = tl.inlamnad ? Date.parse(tl.inlamnad) : Date.now();
    const gatt = Math.floor((slut - Date.parse(tl.start)) / 1000);
    if (tl.inlamnad) return "Inlämnad efter " + Math.floor(gatt / 3600) + " h " + Math.floor((gatt % 3600) / 60) + " min";
    if (tl.timerDold) return "Tiden är dold";
    const kvar = tl.tidMin * 60 - gatt;
    if (kvar <= 0) return "Tiden är ute";
    return Math.floor(kvar / 3600) + ":" + tvaSiffror(Math.floor((kvar % 3600) / 60)) + ":" + tvaSiffror(kvar % 60);
  }

  function vyTentalage(nr) {
    const i = Math.min(Math.max((+nr || 1) - 1, 0), tl.uppgifter.length - 1);
    tl.aktuell = i + 1;
    sparaTL();
    const id = tl.uppgifter[i];
    const u = B.uppgifter[id];
    const tenta = tentaMap[u.tenta];
    const genomgang = !!tl.inlamnad;
    document.title = (genomgang ? "Genomgång" : "Tentaläge") + " · " + tl.namn + " · M0067M";
    const href = (j) => "#/tentalage/" + (j + 1);
    tangentKontext = {
      forra: i > 0 ? href(i - 1) : null,
      nasta: i + 1 < tl.uppgifter.length ? href(i + 1) : null,
      uppgift: genomgang ? id : null, // statustangenterna fungerar bara i genomgången
    };

    const knappar = genomgang
      ? '<button type="button" class="lank" data-tl="avsluta">Avsluta genomgången</button>'
      : '<button type="button" class="lank" data-tl="timer">' + (tl.timerDold ? "Visa tid" : "Dölj tid") + "</button>"
        + '<button type="button" class="lank" data-tl="formelblad" aria-expanded="' + tlFormelblad + '">Formelblad</button>'
        + '<button type="button" class="lank" data-tl="lamna">Lämna in</button>'
        + '<button type="button" class="lank" data-tl="avbryt">Avbryt</button>';

    let fraga = "";
    if (tlFraga === "avbryt") {
      fraga = '<div class="tl-fraga" role="alert"><p>Avbryta tentan? Tiden och tentaläget försvinner. Statusen på uppgifterna ändras inte.</p>'
        + '<p><button type="button" class="knapp" data-tl="avbryt-ok">Avbryt tentan</button>'
        + '<button type="button" class="knapp" data-tl="fortsatt">Fortsätt skriva</button></p></div>';
    } else if (tlFraga === "lamna") {
      fraga = '<div class="tl-fraga" role="alert"><p>Lämna in? Därefter visas lösningarna och du går igenom uppgift för uppgift.</p>'
        + strategiRad(14)
        + '<p><button type="button" class="knapp" data-tl="lamna-ok">Lämna in</button>'
        + '<button type="button" class="knapp" data-tl="fortsatt">Fortsätt skriva</button></p></div>';
    }

    const nrlista = tl.uppgifter.map((x, j) => {
      const s = genomgang ? Status.get(x) : null;
      return '<a href="' + href(j) + '" data-ersatt' + (j === i ? ' aria-current="page"' : "")
        + (s ? ' class="har-status" title="' + Status.STATUSAR[s.status] + '"' : "") + ">" + B.uppgifter[x].nr + "</a>";
    }).join("");

    const losning = !genomgang ? ""
      : '<section class="losning"><h2 class="del">Lösningsförslag</h2>'
        + (u.losning === null ? '<p class="saknas">Lösningsförslag saknas i materialet.</p>'
          : '<div class="text">' + Format.formatera(u.losning, tenta.pdf[tenta.pdf.length - 1], id + " lösning") + "</div>")
        + mallHtml(u) + losningsPdf(tenta)
        + "</section>";
    const status = !genomgang ? ""
      : '<section class="status" aria-labelledby="status-rubrik"><h2 id="status-rubrik">Hur gick det?</h2>'
        + '<div class="statusvalen">' + statusKnappar(id) + "</div></section>";

    const nastaLank = i + 1 < tl.uppgifter.length
      ? '<a href="' + href(i + 1) + '" data-ersatt>Nästa uppgift →</a>'
      : genomgang ? '<button type="button" class="lank" data-tl="avsluta">Avsluta genomgången</button>' : "";

    if (genomgang) {
      setTimeout(() => app.querySelectorAll(".statusval").forEach((b) => b.addEventListener("click", () => valjStatus(id, b.dataset.status))));
    }

    return '<div class="tl-huvud"><span class="tl-namn">' + esc(tl.namn) + "</span>"
      + '<span id="tl-timer" class="tl-timer" role="timer">' + tlTimerText() + "</span>"
      + '<span class="tl-knappar">' + knappar + "</span></div>"
      + fraga
      + (tlFormelblad && !genomgang ? '<div class="tl-formelblad text"><h2 class="del">Formelblad</h2>'
        + Format.formatera(B.profil.formelblad, null, "formelblad") + "</div>" : "")
      + '<nav class="tl-nr" aria-label="Uppgifter">' + nrlista + "</nav>"
      + '<article class="uppgift">'
      + uppgiftHuvud(u, u.poang + " p · " + (u.del === "G" ? "del för godkänt" : "del för högre betyg")
        + (genomgang ? " · " + esc(B.typer[u.typ].namn) + " · " + esc(avsnittText(u)) : ""), genomgang)
      + '<div class="text">' + Format.formatera(u.uppgift, tenta.pdf[0], id + " uppgift") + "</div>"
      + (genomgang ? kopieraKnapp(u, true) : "")
      + losning
      + '<div class="avslut">' + status
      + '<nav class="nasta">' + (i > 0 ? '<a href="' + href(i - 1) + '" data-ersatt>← Föregående</a>' : "<span></span>") + nastaLank + "</nav></div>"
      + "</article>";
  }

  function tlAvsluta() {
    const tillbaka = tl.tillbaka;
    tl = null;
    tlFraga = null;
    tlFormelblad = false;
    sparaTL();
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) { /* ignoreras */ }
    ga(tillbaka, { ersatt: true });
  }

  document.addEventListener("click", (e) => {
    const k = e.target.closest("[data-tl]");
    if (!k) return;
    const h = k.dataset.tl;
    if (h === "starta") {
      const upp = tlUpplagg(rutt().delar);
      if (!upp) return;
      tl = { ...upp, start: new Date().toISOString(), inlamnad: null, timerDold: false, aktuell: 1 };
      sparaTL();
      try { document.documentElement.requestFullscreen().catch(() => {}); } catch (e2) { /* ignoreras */ }
      ga("#/tentalage/1", { ersatt: true });
      return;
    }
    if (!tl) return;
    if (h === "timer") { tl.timerDold = !tl.timerDold; sparaTL(); }
    else if (h === "formelblad") tlFormelblad = !tlFormelblad;
    else if (h === "avbryt" || h === "lamna") tlFraga = h;
    else if (h === "fortsatt") tlFraga = null;
    else if (h === "avbryt-ok") { tlAvsluta(); return; }
    else if (h === "lamna-ok") {
      tl.inlamnad = new Date().toISOString();
      tlFraga = null;
      tlFormelblad = false;
      sparaTL();
      ga("#/tentalage/1", { ersatt: true });
      if (location.hash === "#/tentalage/1") rendera();
      return;
    } else if (h === "avsluta") { tlAvsluta(); return; }
    rendera();
  });

  setInterval(() => {
    const el = document.getElementById("tl-timer");
    if (el && tl) el.textContent = tlTimerText();
  }, 1000);
  document.addEventListener("visibilitychange", () => {
    const el = document.getElementById("tl-timer");
    if (el && tl) el.textContent = tlTimerText();
  });

  const SORTERING = [["ordning", "Ordning"], ["svagast", "Svagast först"]];

  function kapitelHref(avsnitt, sort) {
    return "#/kapitel" + (avsnitt ? "/" + avsnitt : "") + (sort === "svagast" ? "?sort=svagast" : "");
  }

  function vyKapitel(q, oppet) {
    document.title = (oppet ? oppet + " " + B.avsnitt[oppet] + " · " : "") + "Kapitel · M0067M";
    const sort = q.get("sort") === "svagast" ? "svagast" : "ordning";
    const flikar = SORTERING.map(([k, namn]) =>
      '<a href="' + kapitelHref(oppet, k) + '" data-ersatt' + (k === sort ? ' aria-current="page"' : "") + ">" + namn + "</a>").join("");

    let ordning = avsnittOrdning.slice();
    if (sort === "svagast") {
      const andel = (a) => { const o = perAvsnitt[a].ovning; return o.length ? o.filter(klarad).length / o.length : 2; };
      ordning.sort((a, b) => andel(a) - andel(b)
        || perAvsnitt[b].ovning.length - perAvsnitt[a].ovning.length
        || avsnittOrdning.indexOf(a) - avsnittOrdning.indexOf(b));
    }

    const uppgRad = (a) => (id) => {
      const u = B.uppgifter[id];
      return '<li><a href="#/kapitel/' + a + "/" + id + '">'
        + statusEtikett(id)
        + '<span class="rad-namn">' + esc(tentaMap[u.tenta].namn) + ", uppg. " + u.nr
        + ' <span class="tyst">· ' + esc(B.typer[u.typ].namn) + "</span></span>"
        + '<span class="pil" aria-hidden="true">→</span></a></li>';
    };

    const rader = ordning.map((a) => {
      const { ovning, bevis } = perAvsnitt[a];
      const namn = '<span class="avsnitt-nr">' + a + '</span><span class="rad-namn">' + esc(B.avsnitt[a]) + "</span>";
      if (!ovning.length && !bevis.length) {
        return '<li class="kapitel tomt"><div class="kapitelrad">' + namn
          + '<span class="rad-meta">inga tentauppgifter</span></div></li>';
      }
      const n = ovning.filter(klarad).length;
      const stapel = ovning.length
        ? '<span class="stapel" role="img" aria-label="' + n + " av " + ovning.length + ' klarade"><span style="width:'
          + Math.round((100 * n) / ovning.length) + '%"></span></span><span class="rad-meta antal">' + n + "/" + ovning.length + "</span>"
        : '<span class="rad-meta">bara bevis</span>';
      const ar = a === oppet;
      let html = '<li class="kapitel' + (ar ? " oppen" : "") + '" id="avsnitt-' + a.replace(".", "-") + '">'
        + '<a class="kapitelrad" href="' + kapitelHref(ar ? null : a, sort) + '" data-ersatt aria-expanded="' + ar + '">'
        + namn + stapel + "</a>";
      if (ar) {
        const forsta = ovning.find((id) => !klarad(id)) || ovning[0] || bevis[0];
        html += '<div class="utfallt">'
          + (ovning.length ? '<ul class="rader">' + ovning.map(uppgRad(a)).join("") + "</ul>" : "")
          + (bevis.length ? '<h3 class="del">Bevis · om tid finns</h3><ul class="rader">' + bevis.map(uppgRad(a)).join("") + "</ul>" : "")
          + '<p><a class="knapp-stor" href="#/kapitel/' + a + "/" + forsta + '">Öva bara det här kapitlet</a></p>'
          + "</div>";
      }
      return html + "</li>";
    }).join("");

    return '<h1 class="dold">Kapitel</h1><nav class="flikar" aria-label="Sortering">' + flikar + "</nav>"
      + '<p class="tyst forklaring">Stapeln visar hur många av avsnittets tentauppgifter du gjort själv eller som sitter. Bevis räknas inte.</p>'
      + '<ul class="kapitellista">' + rader + "</ul>";
  }

  function vyBank(q) {
    document.title = "Bank · M0067M";
    const filter = FILTER.some(([k]) => k === q.get("visa")) ? q.get("visa") : "alla";
    const flikar = FILTER.map(([k, namn]) =>
      '<a href="#/bank' + (k === "alla" ? "" : "?visa=" + k) + '" data-ersatt'
      + (k === filter ? ' aria-current="page"' : "") + ">" + namn + "</a>").join("");
    if (filter === "sparade") {
      const ids = Status.sparadeIds().filter((id) => B.uppgifter[id]);
      const lista = ids.length
        ? '<ul class="rader">' + ids.map((id) => {
          const u = B.uppgifter[id];
          return '<li><a href="#/bank/sparade/' + id + '">' + statusEtikett(id)
            + '<span class="rad-namn">' + esc(tentaMap[u.tenta].namn) + ", uppg. " + u.nr
            + ' <span class="tyst">· ' + esc(B.typer[u.typ].namn) + "</span></span>"
            + '<span class="pil" aria-hidden="true">→</span></a></li>';
        }).join("") + "</ul>"
        : '<p class="tyst">Inga sparade uppgifter än. Tryck på bokmärket bredvid <em>Gjord med hjälp · Gjord själv · Sitter</em> i en uppgift för att spara den här.</p>';
      return '<h1 class="dold">Bank</h1><nav class="flikar" aria-label="Filter">' + flikar + "</nav>" + lista;
    }
    const rader = B.tentor
      .filter((t) => filter === "alla" || t.typ === filter)
      .map((t) =>
        '<li><a href="#/bank/' + t.id + '">'
        + '<span class="rad-namn">' + esc(t.namn) + "</span>"
        + '<span class="rad-meta">' + (t.harLosning ? "" : "Saknar lösningar · ")
        + Status.antalGjorda(t.uppgifter) + "/" + t.uppgifter.length + " gjorda</span>"
        + '<span class="pil" aria-hidden="true">→</span></a></li>')
      .join("");
    return '<h1 class="dold">Bank</h1><nav class="flikar" aria-label="Filter">' + flikar + "</nav>"
      + '<ul class="rader">' + rader + "</ul>";
  }

  function vyTenta(tenta) {
    document.title = tenta.namn + " · M0067M";
    const rad = (id) => {
      const u = B.uppgifter[id];
      return '<li><a href="#/bank/' + tenta.id + "/" + u.nr + '">'
        + statusEtikett(u.id)
        + '<span class="nr">' + u.nr + "</span>"
        + '<span class="rad-namn">' + esc(B.typer[u.typ].namn) + "</span>"
        + '<span class="rad-meta">' + esc(avsnittText(u)) + "</span>"
        + '<span class="pil" aria-hidden="true">→</span></a></li>';
    };
    const g = tenta.uppgifter.filter((id) => B.uppgifter[id].del === "G");
    const vg = tenta.uppgifter.filter((id) => B.uppgifter[id].del === "VG");
    return kontextrad("#/bank", "")
      + "<h1>" + esc(tenta.namn) + "</h1>"
      + '<p class="tyst">' + TYPNAMN[tenta.typ] + " · 9 uppgifter à 4 p · "
      + Status.antalGjorda(tenta.uppgifter) + "/" + tenta.uppgifter.length + " gjorda"
      + (tenta.harLosning ? "" : " · <strong>lösningsförslag saknas</strong>") + "</p>"
      + '<p class="kalla">' + pdfLankar(tenta) + "</p>"
      + '<p><a class="knapp-stor" href="#/tentalage/ny/bank/' + tenta.id + '">Skriv som tenta</a></p>'
      + '<h2 class="del">Del för godkänt</h2><ul class="rader">' + g.map(rad).join("") + "</ul>"
      + '<h2 class="del">Del för högre betyg</h2><ul class="rader">' + vg.map(rad).join("") + "</ul>";
  }

  const delText = (u) => '<span title="' + (u.del === "G" ? "Del för godkänt" : "Del för högre betyg") + '">del ' + u.del + "</span>";

  function uppgiftHuvud(u, meta, medBokmarke) {
    return '<header class="uppgift-huvud"><div class="uppgift-titel"><h1>Uppgift ' + u.nr + "</h1>"
      + '<p class="meta">' + meta + "</p></div>" + (medBokmarke ? sparaKnapp(u.id) : "") + "</header>";
  }

  // ctx: { ids, href(id), foralder, foralderNamn, sistaText, visaKalla }
  function vyUppgift(u, ctx) {
    const tenta = tentaMap[u.tenta];
    document.title = "Uppgift " + u.nr + " · " + tenta.namn + " · M0067M";
    const kalla = u.id;
    const figurPdfUppgift = tenta.pdf[0];
    const figurPdfLosning = tenta.pdf[tenta.pdf.length - 1];
    const index = ctx.ids.indexOf(u.id);
    const forra = index > 0 ? ctx.href(ctx.ids[index - 1]) : null;
    const nasta = index + 1 < ctx.ids.length ? ctx.href(ctx.ids[index + 1]) : null;
    tangentKontext = { forra, nasta, uppgift: u.id };

    const losning = u.losning === null
      ? '<p class="saknas">Lösningsförslag saknas i materialet.</p>' + mallHtml(u)
      : '<p class="visa-rad"><button type="button" class="lank visa-losning" aria-expanded="false" aria-controls="losning">Visa lösningsförslag</button></p>'
        + '<div id="losning" class="losningstext" hidden></div>';

    const nastaLank = nasta
      ? '<a class="knapp-stor" href="' + nasta + '" data-ersatt>Nästa uppgift →</a>'
      : '<a class="knapp-stor" href="' + ctx.foralder + '" data-tillbaka="' + ctx.foralder + '">Sista uppgiften. ' + ctx.sistaText + "</a>";

    const html = kontextrad(ctx.foralder, ctx.foralderNamn)
      + '<article class="uppgift">'
      + uppgiftHuvud(u, (ctx.visaKalla ? esc(tenta.namn) + " · " : "") + delText(u) + " · " + esc(B.typer[u.typ].namn) + " · " + esc(avsnittText(u)), true)
      + '<div class="text">' + Format.formatera(u.uppgift, figurPdfUppgift, kalla + " uppgift") + "</div>"
      + kopieraKnapp(u, false)
      + '<section class="losning">' + losning + "</section>"
      + '<div class="avslut"><section class="status" aria-labelledby="status-rubrik"><h2 id="status-rubrik">Hur gick det?</h2>'
      + '<div class="statusvalen">' + statusKnappar(u.id) + "</div></section>"
      + '<nav class="nasta">' + nastaLank + "</nav></div>"
      + "</article>";

    // Lösningen renderas först när man klickar, så den finns inte ens i sidan innan dess.
    setTimeout(() => {
      app.querySelectorAll(".statusval").forEach((b) => b.addEventListener("click", () => valjStatus(u.id, b.dataset.status)));
      const knapp = app.querySelector(".visa-losning");
      if (!knapp) return;
      const ruta = app.querySelector("#losning");
      knapp.addEventListener("click", () => {
        const visas = knapp.getAttribute("aria-expanded") === "true";
        if (!visas && !ruta.innerHTML) {
          ruta.innerHTML = strategiRad(3)
            + '<div class="text">' + Format.formatera(u.losning, figurPdfLosning, kalla + " lösning") + "</div>"
            + mallHtml(u) + losningsPdf(tenta);
        }
        ruta.hidden = visas;
        knapp.setAttribute("aria-expanded", String(!visas));
        const kk = app.querySelector(".kopiera");
        if (kk) { kk.dataset.medLosning = visas ? "0" : "1"; kk.textContent = visas ? "Kopiera uppgiften" : "Kopiera med lösning"; }
        knapp.textContent = visas ? "Visa lösningsförslag" : "Dölj lösningsförslag";
      });
    });
    return html;
  }

  // Text att klistra in i en AI: källa, typ, avsnitt och uppgiften (och lösningen om den är öppnad), med LaTeX.
  function kopieraText(u, medLosning) {
    const t = tentaMap[u.tenta];
    const rader = [
      "Kurs: M0067M Linjär algebra (LTU), kursbok Anton & Rorres. Matten är skriven i LaTeX.",
      "Källa: " + t.namn + ", uppgift " + u.nr + " (" + u.poang + " p, " + (u.del === "G" ? "del för godkänt" : "del för högre betyg") + ").",
      "Typ: " + B.typer[u.typ].namn + ". Avsnitt: " + u.avsnitt.join(", ") + ".",
      "",
      "Uppgift:",
      u.uppgift,
    ];
    if (medLosning && u.losning) rader.push("", "Lösningsförslag (examinatorns):", u.losning);
    return rader.join("\n");
  }

  // Raden under uppgiften: Kopiera uppgiften · Formelblad (formelbladet fälls ut under raden).
  // Verktygsraden under uppgiften: Formelblad · Kopiera uppgiften · PDF (uppgifternas original).
  function kopieraKnapp(u, medLosning) {
    const pdf = tentaMap[u.tenta].pdf[0];
    return '<p class="kopiera-rad verktyg">'
      + '<button type="button" class="lank" data-formelblad aria-expanded="false" aria-controls="formelblad-ruta" title="Formelbladet från tentan (F)">Formelblad</button>'
      + ' · <button type="button" class="lank kopiera" data-kopiera="' + u.id + '" data-med-losning="' + (medLosning ? 1 : 0) + '"'
      + ' title="Kopiera för att klistra in i en AI (K)">' + (medLosning && u.losning ? "Kopiera med lösning" : "Kopiera uppgiften") + "</button>"
      + ' · <a href="' + esc(encodeURI(pdf)) + '" target="_blank" rel="noopener" title="Uppgiften i original-PDF:en">PDF</a></p>'
      + '<div id="formelblad-ruta" class="tl-formelblad text" hidden></div>';
  }

  // Länk till lösningsförslaget i original, visas först inne i den öppnade lösningen.
  function losningsPdf(tenta) {
    if (!tenta.harLosning) return "";
    return '<p class="kalla">Lösningsförslaget i original: <a href="' + esc(encodeURI(tenta.pdf[tenta.pdf.length - 1]))
      + '" target="_blank" rel="noopener">PDF</a></p>';
  }

  function vaxlaFormelblad() {
    const k = app.querySelector("[data-formelblad]");
    const ruta = app.querySelector("#formelblad-ruta");
    if (!k || !ruta) return false;
    if (!ruta.innerHTML) ruta.innerHTML = '<h2 class="del">Formelblad</h2>' + Format.formatera(B.profil.formelblad, null, "formelblad");
    ruta.hidden = !ruta.hidden;
    k.setAttribute("aria-expanded", String(!ruta.hidden));
    return true;
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-formelblad]")) vaxlaFormelblad();
  });

  async function kopiera(knapp) {
    const u = B.uppgifter[knapp.dataset.kopiera];
    const text = kopieraText(u, knapp.dataset.medLosning === "1");
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) {
      // Reserv om Clipboard API inte är tillgängligt.
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { ok = document.execCommand("copy"); } catch (e2) { ok = false; }
      ta.remove();
    }
    const etikett = knapp.textContent;
    knapp.textContent = ok ? "Kopierat" : "Kunde inte kopiera";
    setTimeout(() => { if (knapp.isConnected) knapp.textContent = etikett; }, 1600);
  }

  document.addEventListener("click", (e) => {
    const k = e.target.closest("[data-kopiera]");
    if (k) kopiera(k);
  });

  function sparadeKontext(id) {
    const ids = Status.sparadeIds().filter((x) => B.uppgifter[x]);
    return {
      ids: ids.includes(id) ? ids : [id],
      href: (x) => "#/bank/sparade/" + x,
      foralder: "#/bank?visa=sparade",
      foralderNamn: "Sparade",
      sistaText: "Tillbaka till sparade",
      visaKalla: true,
    };
  }

  function bankKontext(tenta) {
    return {
      ids: tenta.uppgifter,
      href: (id) => "#/bank/" + tenta.id + "/" + B.uppgifter[id].nr,
      foralder: "#/bank/" + tenta.id,
      foralderNamn: tenta.namn,
      sistaText: "Tillbaka till tentan",
      visaKalla: false,
    };
  }

  function kapitelKontext(a) {
    const ids = perAvsnitt[a].ovning.concat(perAvsnitt[a].bevis);
    return {
      ids,
      href: (id) => "#/kapitel/" + a + "/" + id,
      foralder: "#/kapitel/" + a,
      foralderNamn: a + " " + B.avsnitt[a],
      sistaText: "Tillbaka till kapitlet",
      visaKalla: true,
    };
  }

  // Klick på vald status tar bort den igen (tillbaka till "ej gjord").
  function valjStatus(id, status) {
    const nu = Status.get(id);
    Status.satt(id, nu && nu.status === status ? null : status);
    const s = Status.get(id);
    app.querySelectorAll(".statusval").forEach((b) => {
      b.setAttribute("aria-pressed", String(!!s && s.status === b.dataset.status));
    });
    // I tentalägets genomgång: markera uppgiftsnumret.
    const nr = app.querySelector('.tl-nr a[aria-current="page"]');
    if (nr) nr.classList.toggle("har-status", !!s);
    renderaSidfot();
  }

  function vyHittadesInte() {
    document.title = "Hittades inte · M0067M";
    return '<h1>Hittades inte</h1><p class="tyst">Sidan finns inte. <a href="#/bank">Till Bank →</a></p>';
  }

  // ---------- Router ----------
  function rutt() {
    const h = location.hash.replace(/^#\/?/, "");
    const [vag, fraga] = h.split("?");
    return { delar: vag.split("/").filter(Boolean).map(decodeURIComponent), q: new URLSearchParams(fraga || "") };
  }

  function rendera() {
    const { delar, q } = rutt();
    if (!delar.length) { ga("#/idag", { ersatt: true }); return; }
    markeraHistorik();
    if (sidfotLage && sidfotLage.typ === "meddelande" && !sidfotLage.ny) sidfotLage = null;
    if (sidfotLage) sidfotLage.ny = false;

    const [vy, a1, a2] = delar;
    tangentKontext = null;

    // En pågående tenta går inte att lämna utan Avbryt eller Avsluta.
    if (tl && (vy !== "tentalage" || a1 === "ny")) { ga("#/tentalage/" + (tl.aktuell || 1), { ersatt: true }); return; }
    document.body.classList.toggle("tentalage", vy === "tentalage");

    let html, rullaTill = null;
    if (vy === "tentalage" && a1 === "ny" && tlUpplagg(delar)) html = vyTentaStart(tlUpplagg(delar));
    else if (vy === "tentalage" && tl && delar.length <= 2) html = vyTentalage(a1);
    else if (vy === "idag" && delar.length === 1) html = vyIdag(null);
    else if (vy === "idag" && a1 === "schema" && delar.length === 2) html = vySchema();
    else if (vy === "idag" && a1 === "repetera" && B.uppgifter[a2] && delar.length === 3) html = vyUppgift(B.uppgifter[a2], repeteraKontext(a2));
    else if (vy === "strategi" && delar.length === 1) html = vyStrategi();
    else if (vy === "installningar" && delar.length === 1) html = vyInstallningar();
    else if (vy === "idag" && dagMap[a1] && delar.length === 2) html = vyIdag(a1);
    else if (vy === "idag" && dagMap[a1] && delar.length === 4 && passIds(a1, +a2 - 1).includes(delar[3])) {
      html = vyUppgift(B.uppgifter[delar[3]], idagKontext(a1, +a2));
    }
    else if (vy === "kapitel" && delar.length === 1) html = vyKapitel(q, null);
    else if (vy === "kapitel" && perAvsnitt[a1] && delar.length === 2) {
      html = vyKapitel(q, a1);
      rullaTill = "avsnitt-" + a1.replace(".", "-");
    }
    else if (vy === "kapitel" && perAvsnitt[a1] && delar.length === 3 && kapitelKontext(a1).ids.includes(a2)) {
      html = vyUppgift(B.uppgifter[a2], kapitelKontext(a1));
    }
    else if (vy === "bank" && delar.length === 1) html = vyBank(q);
    else if (vy === "bank" && a1 === "sparade" && B.uppgifter[a2] && delar.length === 3) html = vyUppgift(B.uppgifter[a2], sparadeKontext(a2));
    else if (vy === "bank" && tentaMap[a1] && delar.length === 2) html = vyTenta(tentaMap[a1]);
    else if (vy === "bank" && tentaMap[a1] && B.uppgifter[a1 + "-" + a2] && delar.length === 3) {
      html = vyUppgift(B.uppgifter[a1 + "-" + a2], bankKontext(tentaMap[a1]));
    }
    else html = vyHittadesInte();

    app.innerHTML = html;
    document.querySelectorAll(".huvudnav a").forEach((a) => {
      if (a.dataset.vy === vy) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    renderaSidfot();
    const mal = rullaTill && document.getElementById(rullaTill);
    // Vid utfällning: behåll scrollläget om avsnittet redan syns, annars rulla dit.
    if (mal) {
      const r = mal.getBoundingClientRect();
      if (r.top < 0 || r.top > window.innerHeight * 0.6) mal.scrollIntoView({ block: "start" });
    } else window.scrollTo(0, 0);
  }

  // ---------- Sidfot: säkerhetskopia av status ----------
  const sidfot = document.getElementById("sidfot");
  let sidfotLage = null; // null | { typ: "import", granskning } | { typ: "rensa" } | { typ: "meddelande", text }

  // Sidfoten är en enda rad (layoutspec §2 och §7). Bara sådant som kräver handling visas därutöver.
  function renderaSidfot() {
    let varning = "";
    if (!Status.sparbar) varning += "<p><strong>Statusen kan inte sparas i den här webbläsaren.</strong> Ladda ner en kopia under Inställningar innan du stänger fliken.</p>";
    if (Sparfil.stod && (Sparfil.lage === "behover-ok" || Sparfil.lage === "fel")) varning += sparfilRad();
    sidfot.innerHTML = varning + '<p><button type="button" class="lank" data-hjalp>Hjälp</button> · '
      + '<a href="#/strategi">Strategi</a> · <a href="#/installningar">Inställningar</a></p>';
    const instEl = document.getElementById("installningar");
    if (instEl) instEl.innerHTML = installningarInnehall();
  }

  // ---------- Inställningar: rader med namn till vänster och val till höger ----------
  // Segmenterat val: [ A | B | C ]. Varje knapp har data-sidfot med sin handling.
  function segment(etikett, val) {
    return '<div class="val" role="group" aria-label="' + esc(etikett) + '">'
      + val.map(([handling, namn, vald]) => '<button type="button" data-sidfot="' + handling + '" aria-pressed="' + vald + '">' + namn + "</button>").join("")
      + "</div>";
  }

  function instRad(namn, hjalp, kontroll) {
    return '<div class="inst-rad"><div class="inst-text"><p class="inst-namn">' + namn + "</p>"
      + (hjalp ? '<p class="inst-hjalp">' + hjalp + "</p>" : "") + "</div>"
      + (kontroll ? '<div class="inst-kontroll">' + kontroll + "</div>" : "") + "</div>";
  }

  function aktuelltTema() {
    try { return localStorage.getItem("m0067m.tema") || "auto"; } catch (e) { return "auto"; }
  }

  // Kopia på disken: namn, förklaring och knappar beroende på läge.
  function kopiaRad() {
    if (!Sparfil.stod) return instRad("Kopia på disken", "Finns bara i Edge och Chrome. Använd Ladda ner nedan i stället.", "");
    const namn = "<strong>" + esc(Sparfil.namn || "") + "</strong>";
    const lank = (h, t) => '<button type="button" class="lank" data-sidfot="' + h + '">' + t + "</button>";
    switch (Sparfil.lage) {
      case "aktiv":
        return instRad("Kopia på disken", "Skrivs automatiskt till " + namn + " varje gång du markerar något.",
          lank("sparfil-valj", "Byt fil") + " · " + lank("sparfil-sluta", "Stäng av"));
      case "behover-ok":
        return instRad("Kopia på disken", "Webbläsaren vill att du godkänner kopian till " + namn + " en gång per besök.",
          '<button type="button" class="knapp" data-sidfot="sparfil-ateranslut">Fortsätt</button> ' + lank("sparfil-sluta", "Stäng av"));
      case "fel":
        return instRad("Kopia på disken", "<strong>Kunde inte skriva till " + esc(Sparfil.namn || "filen") + ".</strong>",
          lank("sparfil-valj", "Välj fil igen") + " · " + lank("sparfil-sluta", "Stäng av"));
      default:
        return instRad("Kopia på disken", "Sparar filen m0067m-status.json i en mapp du väljer, t.ex. <em>tentor</em>. "
          + "Den uppdateras sedan automatiskt och skyddar om webbläsardatan rensas.",
          '<button type="button" class="knapp" data-sidfot="sparfil-valj">Spara kopia…</button>');
    }
  }

  function installningarInnehall() {
    const n = Status.antal();
    const nSparade = Status.sparadeIds().length;

    // Schema, tema, studietips
    const allaScheman = [["", window.SCHEMA]].concat(Object.entries(SCHEMOR));
    const kortNamn = (sc) => esc((sc.namn || "Standard").replace(/ schema$/, ""));
    const allmant = (Object.keys(SCHEMOR).length
        ? instRad("Schema", "Vilket pluggschema Idag visar.",
          segment("Schema", allaScheman.map(([k, sc]) => ["schema:" + k, kortNamn(sc), (valtSchema || "") === k])))
        : "")
      + instRad("Tema", "", segment("Tema", [["tema:auto", "Auto", aktuelltTema() === "auto"], ["tema:light", "Ljust", aktuelltTema() === "light"], ["tema:dark", "Mörkt", aktuelltTema() === "dark"]]))
      + instRad("Studietips", 'Korta tips ur <em>A Mind for Numbers</em> där de passar. Alla finns under <a href="#/strategi">Strategi</a>.',
        segment("Studietips", [["strategi:pa", "På", inst.strategi], ["strategi:av", "Av", !inst.strategi]]));

    // Din data
    let data;
    if (sidfotLage && sidfotLage.typ === "import") {
      data = '<div class="inst-fraga"><p>Kopian innehåller status för ' + sidfotLage.granskning.antal + " uppgifter. Den ersätter det du har nu ("
        + n + " uppgifter).</p>"
        + '<p><button type="button" class="knapp" data-sidfot="importera-ok">Ersätt med kopian</button> '
        + '<button type="button" class="knapp" data-sidfot="avbryt">Avbryt</button></p></div>';
    } else if (sidfotLage && sidfotLage.typ === "rensa") {
      data = '<div class="inst-fraga"><p>Rensa status för alla ' + n + " uppgifter" + (nSparade ? " och " + nSparade + " sparade" : "") + "?</p>"
        + '<p><button type="button" class="knapp" data-sidfot="rensa-ok">Rensa all data</button> '
        + '<button type="button" class="knapp" data-sidfot="avbryt">Avbryt</button></p></div>';
    } else {
      data = (sidfotLage && sidfotLage.typ === "meddelande"
          ? '<p class="meddelande">' + esc(sidfotLage.text)
            + (sidfotLage.angra ? ' <button type="button" class="lank" data-sidfot="angra">Ångra</button>' : "") + "</p>"
          : "")
        + kopiaRad()
        + instRad("Flytta till en annan dator", "Ladda ner ger filen m0067m-status-&lt;datum&gt;.json. Läs in den på den andra datorn.",
          '<button type="button" class="knapp" data-sidfot="exportera">Ladda ner</button>'
          + '<button type="button" class="knapp" data-sidfot="importera">Läs in</button>')
        + '<p class="rensa-rad"><button type="button" class="lank" data-sidfot="rensa">Rensa all data</button></p>';
    }

    return '<section class="inst-grupp">' + allmant + "</section>"
      + '<section class="inst-grupp"><h2 class="del">Din data</h2>'
      + '<p class="inst-sammanfattning">Allt du markerar sparas automatiskt i webbläsaren.<br><span class="tyst">'
      + n + " av " + Object.keys(B.uppgifter).length + " uppgifter har status" + (nSparade ? " · " + nSparade + (nSparade === 1 ? " sparad" : " sparade") : "") + "</span></p>"
      + data + "</section>";
  }

  function vyInstallningar() {
    document.title = "Inställningar · M0067M";
    return kontextrad("#/idag", "") + "<h1>Inställningar</h1>" + '<div id="installningar">' + installningarInnehall() + "</div>";
  }

  // Automatisk säkerhetskopia till en fil (bara Edge/Chrome). Statusen sparas alltid i webbläsaren ändå.
  function sparfilRad() {
    if (!Sparfil.stod) return '<p class="tyst">Automatisk kopia till fil fungerar bara i Edge och Chrome. Använd "Ladda ner en kopia" nedan.</p>';
    const namn = esc(Sparfil.namn || "");
    const sluta = ' · <button type="button" class="lank" data-sidfot="sparfil-sluta">Sluta</button>';
    switch (Sparfil.lage) {
      case "aktiv":
        return "<p>En kopia skrivs automatiskt till <strong>" + namn + "</strong> varje gång du markerar något."
          + ' <button type="button" class="lank" data-sidfot="sparfil-valj">Byt fil</button>' + sluta + "</p>";
      case "behover-ok":
        return '<p><button type="button" class="knapp" data-sidfot="sparfil-ateranslut">Fortsätt kopiera till ' + namn + "</button>"
          + sluta + '</p><p class="tyst">Webbläsaren vill att du godkänner kopian en gång per besök. Statusen sparas ändå i webbläsaren.</p>';
      case "fel":
        return "<p><strong>Kunde inte skriva kopian till " + namn + ".</strong> "
          + '<button type="button" class="lank" data-sidfot="sparfil-valj">Välj fil igen</button>' + sluta + "</p>";
      default:
        return '<p><button type="button" class="lank" data-sidfot="sparfil-valj">Välj en fil att kopiera till…</button>'
          + ' <span class="tyst">Filen uppdateras sedan av sig själv varje gång du markerar något.</span></p>';
    }
  }

  function exportera() {
    const json = JSON.stringify(Status.exportera(), null, 1);
    const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "m0067m-status-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const filval = document.createElement("input");
  filval.type = "file";
  filval.accept = ".json,application/json";
  filval.hidden = true;
  document.body.appendChild(filval);
  filval.addEventListener("change", () => {
    const fil = filval.files[0];
    if (!fil) return;
    fil.text().then((text) => {
      filval.value = "";
      let g;
      try { g = Status.granska(JSON.parse(text)); } catch (e) { g = { ok: false, fel: "Filen gick inte att läsa som JSON." }; }
      sidfotLage = g.ok ? { typ: "import", granskning: g } : { typ: "meddelande", text: g.fel };
      renderaSidfot();
    });
  });

  document.addEventListener("click", (e) => {
    const k = e.target.closest("[data-sidfot]");
    if (!k) return;
    const handling = k.dataset.sidfot;
    if (k.closest(".val") && k.getAttribute("aria-pressed") === "true") return; // redan valt
    if (handling === "strategi:pa" || handling === "strategi:av") { inst.strategi = handling === "strategi:pa"; sparaInst(); rendera(); return; }
    if (handling === "exportera") { exportera(); return; }
    if (handling === "importera") { filval.click(); return; }
    if (handling === "sparfil-valj") { Sparfil.valj(); return; }
    if (handling.startsWith("tema:")) {
      const tema = handling.slice(5);
      try { if (tema === "auto") localStorage.removeItem("m0067m.tema"); else localStorage.setItem("m0067m.tema", tema); } catch (e2) { /* bara den här gången */ }
      if (tema === "auto") delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = tema;
      renderaSidfot();
      return;
    }
    if (handling.startsWith("schema:")) {
      const nyckel = handling.slice(7);
      try { if (nyckel) localStorage.setItem(SCHEMA_NYCKEL, nyckel); else localStorage.removeItem(SCHEMA_NYCKEL); } catch (e2) { /* ignoreras */ }
      location.hash = "#/idag";
      location.reload();
      return;
    }
    if (handling === "strategi-vaxla") { inst.strategi = !inst.strategi; sparaInst(); rendera(); return; }
    if (handling === "sparfil-ateranslut") { Sparfil.ateranslut(); return; }
    if (handling === "sparfil-sluta") { Sparfil.sluta(); return; }
    if (handling === "angra") {
      Status.angra();
      sidfotLage = { typ: "meddelande", text: "Ångrat.", ny: true };
      rendera();
      return;
    }
    if (handling === "rensa") sidfotLage = { typ: "rensa" };
    else if (handling === "avbryt") sidfotLage = null;
    else if (handling === "importera-ok") {
      Status.ersattAllt(sidfotLage.granskning.uppgifter, sidfotLage.granskning.sparade);
      sidfotLage = { typ: "meddelande", text: "Kopian är inläst.", angra: true, ny: true };
      rendera();
      return;
    } else if (handling === "rensa-ok") {
      Status.rensa();
      sidfotLage = { typ: "meddelande", text: "All status är rensad.", angra: true, ny: true };
      rendera();
      return;
    }
    renderaSidfot();
  });

  // ---------- Hjälp: visas första gången, sedan via "Hjälp" i sidfoten ----------
  const HJALP_NYCKEL = "m0067m.hjalp.sedd";
  const hjalp = document.getElementById("hjalp");

  function hjalpHtml() {
    const scheman = Object.keys(SCHEMOR).length
      ? "<li><strong>Schema:</strong> du använder " + esc(S.namn) + ". "
        + (() => {
          const andra = [window.SCHEMA].concat(Object.values(SCHEMOR)).filter((x) => x !== S);
          if (andra.length === 1) return esc(andra[0].namn) + " finns också";
          const kort = andra.map((x) => esc(x.namn.replace(/ schema$/, "")));
          return kort.slice(0, -1).join(", ") + " och " + kort[kort.length - 1] + " scheman finns också";
        })()
        + ", under Inställningar.</li>"
      : "";
    return '<h2 id="hjalp-rubrik">Så funkar sidan</h2><ul>'
      + "<li><strong>Idag:</strong> passet du ska göra nu. Sist ligger en repetition.</li>"
      + scheman
      + "<li><strong>Bank:</strong> alla 81 uppgifter från 9 tentor, och de du sparat med bokmärket.</li>"
      + "<li><strong>Kapitel:</strong> uppgifterna per avsnitt.</li>"
      + "<li><strong>Lösningen är dold</strong> tills du klickar. Markera sedan hur det gick.</li>"
      + "<li><strong>Tentaläge:</strong> <em>Skriv som tenta</em> i Bank.</li>"
      + "<li><strong>Kopiera uppgiften</strong> för att fråga en AI.</li>"
      + "<li>Allt sparas automatiskt.</li>"
      + '</ul><p><button type="button" class="knapp-stor" data-hjalp-stang>Kom igång</button></p>';
  }

  function visaHjalp() {
    if (!hjalp || hjalp.open) return;
    hjalp.innerHTML = hjalpHtml();
    try { hjalp.showModal(); } catch (e) { hjalp.setAttribute("open", ""); }
    const k = hjalp.querySelector("[data-hjalp-stang]");
    if (k) k.focus();
  }

  function stangHjalp() {
    try { localStorage.setItem(HJALP_NYCKEL, "1"); } catch (e) { /* visas igen nästa gång */ }
    if (hjalp && hjalp.open) hjalp.close();
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-hjalp]")) visaHjalp();
    else if (e.target.closest("[data-hjalp-stang]")) stangHjalp();
    else if (e.target === hjalp) stangHjalp(); // klick utanför rutan
  });
  if (hjalp) hjalp.addEventListener("close", () => { try { localStorage.setItem(HJALP_NYCKEL, "1"); } catch (e) { /* ignoreras */ } });

  // ---------- Tangentbord (layoutspec §8.6) ----------
  // ← → mellan uppgifter, L visar/döljer lösningen, 1 2 3 sätter status.
  document.addEventListener("keydown", (e) => {
    if (!tangentKontext || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || (hjalp && hjalp.open)) return;
    if (e.target.closest && e.target.closest("input, textarea, select, [contenteditable]")) return;
    const statusar = Object.keys(Status.STATUSAR);
    if (e.key === "ArrowLeft" && tangentKontext.forra) ga(tangentKontext.forra, { ersatt: true });
    else if (e.key === "ArrowRight" && tangentKontext.nasta) ga(tangentKontext.nasta, { ersatt: true });
    else if ((e.key === "k" || e.key === "K") && app.querySelector(".kopiera")) kopiera(app.querySelector(".kopiera"));
    else if ((e.key === "f" || e.key === "F") && app.querySelector("[data-formelblad]")) vaxlaFormelblad();
    else if ((e.key === "s" || e.key === "S") && app.querySelector("[data-spara]")) vaxlaSpara(app.querySelector("[data-spara]"));
    else if (e.key === "l" || e.key === "L") {
      const k = app.querySelector(".visa-losning");
      if (!k) return;
      k.click();
    } else if (["1", "2", "3"].includes(e.key) && tangentKontext.uppgift) valjStatus(tangentKontext.uppgift, statusar[+e.key - 1]);
    else return;
    e.preventDefault();
  });

  // Klick på länkar som ska ersätta historikposten, eller gå tillbaka.
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest("a");
    if (!a) return;
    if (a.hasAttribute("data-tillbaka")) {
      e.preventDefault();
      tillbaka(a.getAttribute("data-tillbaka"));
    } else if (a.hasAttribute("data-ersatt")) {
      e.preventDefault();
      ga(a.getAttribute("href"), { ersatt: true });
    }
  });

  window.addEventListener("hashchange", rendera);
  Sparfil.vidAndring(renderaSidfot);
  rendera();
  Sparfil.init();
  let settHjalp = false;
  try { settHjalp = !!localStorage.getItem(HJALP_NYCKEL); } catch (e) { settHjalp = true; }
  if (!settHjalp && !tl && !window.INGEN_HJALP) visaHjalp();
})();
