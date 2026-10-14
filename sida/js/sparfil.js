// Automatisk sparfil: varje statusändring skrivs till en JSON-fil som man väljer en gång.
// Använder File System Access API (finns i Edge och Chrome, även för file://).
// Filhandtaget sparas i IndexedDB. Webbläsaren kräver ofta ett klick per besök för att
// ge skrivrätt igen; då visar sidfoten en knapp för det.
// Filen har samma format som exporten, så den kan alltid läsas in med Importera.
(function () {
  "use strict";

  const stod = typeof window.showSaveFilePicker === "function" && "indexedDB" in window;
  let handtag = null;
  let lage = "av"; // "av" | "aktiv" | "behover-ok" | "fel"
  let fel = null;
  let senast = null; // tid för senaste lyckade skrivning
  let timer = null;
  const lyssnare = [];
  const meddela = () => lyssnare.forEach((f) => f());

  // ---------- IndexedDB (ett enda nyckel/värde-par) ----------
  function db() {
    return new Promise((ok, nej) => {
      const r = indexedDB.open("m0067m", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("kv");
      r.onsuccess = () => ok(r.result);
      r.onerror = () => nej(r.error);
    });
  }
  async function idb(metod, ...arg) {
    const d = await db();
    return new Promise((ok, nej) => {
      const tx = d.transaction("kv", metod === "get" ? "readonly" : "readwrite");
      const r = tx.objectStore("kv")[metod](...arg);
      r.onsuccess = () => ok(r.result);
      r.onerror = () => nej(r.error);
    });
  }

  // ---------- Skrivning ----------
  async function skriv() {
    if (!handtag || lage !== "aktiv") return;
    try {
      const w = await handtag.createWritable();
      await w.write(JSON.stringify(Status.exportera(), null, 1));
      await w.close();
      senast = new Date();
      fel = null;
    } catch (e) {
      console.warn("Kunde inte skriva sparfilen:", e);
      lage = "fel";
      fel = e.message || String(e);
    }
    meddela();
  }

  function schemalagg() {
    if (lage !== "aktiv") return;
    clearTimeout(timer);
    timer = setTimeout(skriv, 300);
  }

  // ---------- Publika funktioner ----------
  async function init() {
    if (!stod) return;
    try {
      handtag = await idb("get", "sparfil");
      if (!handtag) return;
      const p = await handtag.queryPermission({ mode: "readwrite" });
      lage = p === "granted" ? "aktiv" : "behover-ok";
    } catch (e) {
      console.warn("Sparfilen kunde inte läsas in:", e);
      handtag = null;
      lage = "av";
    }
    meddela();
  }

  // Måste anropas från ett klick.
  async function valj() {
    try {
      const h = await window.showSaveFilePicker({
        suggestedName: "m0067m-status.json",
        types: [{ description: "Status (JSON)", accept: { "application/json": [".json"] } }],
      });
      handtag = h;
      await idb("put", h, "sparfil");
      lage = "aktiv";
      await skriv();
    } catch (e) {
      if (e && e.name === "AbortError") return; // användaren avbröt
      lage = "fel";
      fel = e.message || String(e);
      meddela();
    }
  }

  // Måste anropas från ett klick.
  async function ateranslut() {
    if (!handtag) return;
    try {
      const p = await handtag.requestPermission({ mode: "readwrite" });
      lage = p === "granted" ? "aktiv" : "behover-ok";
      if (lage === "aktiv") await skriv();
      else meddela();
    } catch (e) {
      lage = "fel";
      fel = e.message || String(e);
      meddela();
    }
  }

  async function sluta() {
    clearTimeout(timer);
    handtag = null;
    lage = "av";
    fel = null;
    try { await idb("delete", "sparfil"); } catch (e) { /* ignoreras */ }
    meddela();
  }

  Status.vidAndring(schemalagg);

  window.Sparfil = {
    stod, init, valj, ateranslut, sluta,
    vidAndring: (f) => lyssnare.push(f),
    get lage() { return lage; },
    get namn() { return handtag ? handtag.name : null; },
    get fel() { return fel; },
    get senast() { return senast; },
  };
})();
