// Status per uppgift, sparad i localStorage. Allt läs/skriv ligger i try/catch:
// om localStorage inte går att använda fungerar sidan ändå, men statusen sparas bara tills fliken stängs.
(function () {
  "use strict";

  const NYCKEL = "m0067m.status.v1";
  const STATUSAR = {
    hjalp: "Gjord med hjälp",
    sjalv: "Gjord själv",
    sitter: "Sitter",
  };

  // data.uppgifter[id] = { status, tid, historik: [{ status, tid }] }
  // status null betyder "ej gjord" (posten finns kvar för historikens skull).
  let data = { version: 1, uppgifter: {} };
  let sparbar = true;
  let fore = null; // kopia före senaste rensa/import, för Ångra
  const lyssnare = [];
  const meddela = () => lyssnare.forEach((f) => { try { f(); } catch (e) { console.error(e); } });

  function las() {
    try {
      const r = localStorage.getItem(NYCKEL);
      if (r) {
        const d = JSON.parse(r);
        if (d && typeof d.uppgifter === "object") data = { version: 1, uppgifter: d.uppgifter };
      }
    } catch (e) {
      sparbar = false;
      console.warn("Status kunde inte läsas från localStorage:", e);
    }
  }

  function spara() {
    try {
      localStorage.setItem(NYCKEL, JSON.stringify(data));
      sparbar = true;
    } catch (e) {
      sparbar = false;
      console.warn("Status kunde inte sparas i localStorage:", e);
    }
  }

  function get(id) {
    const p = data.uppgifter[id];
    return p && p.status ? p : null;
  }

  // status: "hjalp" | "sjalv" | "sitter" | null (= ej gjord)
  function satt(id, status) {
    if (status !== null && !STATUSAR[status]) throw new Error("Okänd status: " + status);
    const tid = new Date().toISOString();
    const p = data.uppgifter[id] || { status: null, tid: null, historik: [] };
    p.status = status;
    p.tid = tid;
    p.historik = (p.historik || []).concat([{ status, tid }]);
    data.uppgifter[id] = p;
    spara();
    meddela();
  }

  function antalGjorda(ids) {
    return ids.filter((id) => get(id)).length;
  }

  function antal() {
    return Object.keys(data.uppgifter).filter((id) => get(id)).length;
  }

  function exportera() {
    return {
      app: "m0067m-tentasida",
      version: 1,
      exporterad: new Date().toISOString(),
      uppgifter: data.uppgifter,
    };
  }

  // Kontrollerar en importerad fil. Returnerar { ok, uppgifter, antal, fel }.
  function granska(obj) {
    if (!obj || obj.app !== "m0067m-tentasida" || typeof obj.uppgifter !== "object") {
      return { ok: false, fel: "Filen är inte en statusexport från den här sidan." };
    }
    const ut = {};
    for (const [id, p] of Object.entries(obj.uppgifter)) {
      if (!p || (p.status !== null && !STATUSAR[p.status]) || isNaN(Date.parse(p.tid))) {
        return { ok: false, fel: "Ogiltig post för " + id + " i filen." };
      }
      ut[id] = { status: p.status, tid: p.tid, historik: Array.isArray(p.historik) ? p.historik : [] };
    }
    return { ok: true, uppgifter: ut, antal: Object.values(ut).filter((p) => p.status).length };
  }

  function ersattAllt(uppgifter) {
    fore = data.uppgifter;
    data = { version: 1, uppgifter };
    spara();
    meddela();
  }

  function rensa() {
    fore = data.uppgifter;
    data = { version: 1, uppgifter: {} };
    spara();
    meddela();
  }

  // Ångrar senaste rensa/import. Returnerar true om något återställdes.
  function angra() {
    if (!fore) return false;
    data = { version: 1, uppgifter: fore };
    fore = null;
    spara();
    meddela();
    return true;
  }

  las();
  window.Status = {
    STATUSAR, get, satt, antalGjorda, antal, exportera, granska, ersattAllt, rensa, angra,
    vidAndring: (f) => lyssnare.push(f),
    get sparbar() { return sparbar; },
  };
})();
