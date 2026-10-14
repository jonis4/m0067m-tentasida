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
  ];
  const TYPNAMN = { tenta: "Gammal tenta", ovningstenta: "Övningstenta", diagnos: "Diagnostiskt test" };
  const tentaMap = Object.fromEntries(B.tentor.map((t) => [t.id, t]));

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

  function statusEtikett(id) {
    const s = Status.get(id);
    return s ? '<span class="rad-status" data-status="' + s.status + '">' + Status.STATUSAR[s.status] + "</span>" : "";
  }

  function statusKnappar(id) {
    const s = Status.get(id);
    return Object.entries(Status.STATUSAR).map(([k, namn], i) =>
      '<button type="button" class="statusval" data-status="' + k + '" aria-pressed="' + (!!s && s.status === k) + '"'
      + ' title="Tangent ' + (i + 1) + '">' + namn + "</button>").join("");
  }

  function kontextrad(foralder, hoger) {
    return '<div class="kontext"><a href="' + esc(foralder) + '" class="tillbaka" data-tillbaka="' + esc(foralder) + '">← Tillbaka</a>'
      + (hoger ? '<span class="kontext-namn">' + esc(hoger) + "</span>" : "") + "</div>";
  }

  // ---------- Vyer ----------
  function vyIdag() {
    document.title = "Idag · M0067M";
    return '<h1>Idag</h1><p class="tyst">Här kommer dagens pass när schemat är klart. Tills vidare finns allt i '
      + '<a href="#/bank">Bank →</a></p>';
  }

  function vyKapitel() {
    document.title = "Kapitel · M0067M";
    return '<h1>Kapitel</h1><p class="tyst">Här kommer läget per kapitel, när planeringsappen är inkopplad.</p>';
  }

  function vyBank(q) {
    document.title = "Bank · M0067M";
    const filter = FILTER.some(([k]) => k === q.get("visa")) ? q.get("visa") : "alla";
    const flikar = FILTER.map(([k, namn]) =>
      '<a href="#/bank' + (k === "alla" ? "" : "?visa=" + k) + '" data-ersatt'
      + (k === filter ? ' aria-current="page"' : "") + ">" + namn + "</a>").join("");
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
        + '<span class="nr">' + u.nr + "</span>"
        + '<span class="rad-namn">' + esc(B.typer[u.typ].namn) + "</span>"
        + statusEtikett(u.id)
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
      + '<h2 class="del">Del för godkänt</h2><ul class="rader">' + g.map(rad).join("") + "</ul>"
      + '<h2 class="del">Del för högre betyg</h2><ul class="rader">' + vg.map(rad).join("") + "</ul>";
  }

  function vyUppgift(tenta, nr) {
    const u = B.uppgifter[tenta.id + "-" + nr];
    document.title = "Uppgift " + nr + " · " + tenta.namn + " · M0067M";
    const kalla = u.id;
    const figurPdfUppgift = tenta.pdf[0];
    const figurPdfLosning = tenta.pdf[tenta.pdf.length - 1];
    const index = tenta.uppgifter.indexOf(u.id);
    const nasta = index + 1;
    tangentKontext = {
      forra: index > 0 ? "#/bank/" + tenta.id + "/" + index : null,
      nasta: nasta < tenta.uppgifter.length ? "#/bank/" + tenta.id + "/" + (nasta + 1) : null,
      uppgift: u.id,
    };

    const losning = u.losning === null
      ? '<p class="saknas">Lösningsförslag saknas i materialet.</p>'
      : '<button type="button" class="visa-losning" aria-expanded="false" aria-controls="losning">Visa lösningsförslag</button>'
        + '<div id="losning" class="losningstext text" hidden></div>';

    const nastaLank = nasta < tenta.uppgifter.length
      ? '<a href="#/bank/' + tenta.id + "/" + (nasta + 1) + '" data-ersatt>Nästa uppgift →</a>'
      : '<a href="#/bank/' + tenta.id + '" data-tillbaka="#/bank/' + tenta.id + '">Sista uppgiften. Tillbaka till tentan</a>';

    const html = kontextrad("#/bank/" + tenta.id, tenta.namn)
      + '<article class="uppgift">'
      + '<header class="uppgift-huvud"><h1>Uppgift ' + nr + "</h1>"
      + '<p class="meta"><span title="' + (u.del === "G" ? "Del för godkänt" : "Del för högre betyg") + '">' + u.del + "</span>"
      + " · " + esc(avsnittText(u)) + " · " + esc(B.typer[u.typ].namn) + "</p></header>"
      + '<div class="text">' + Format.formatera(u.uppgift, figurPdfUppgift, kalla + " uppgift") + "</div>"
      + '<section class="losning">' + losning + "</section>"
      + '<section class="status" aria-labelledby="status-rubrik"><h2 id="status-rubrik">Hur gick det?</h2>'
      + '<div class="statusvalen">' + statusKnappar(u.id) + "</div></section>"
      + '<p class="kalla">Original: ' + pdfLankar(tenta) + "</p>"
      + '<nav class="nasta">' + nastaLank + "</nav>"
      + "</article>";

    // Lösningen renderas först när man klickar, så den finns inte ens i sidan innan dess.
    setTimeout(() => {
      app.querySelectorAll(".statusval").forEach((b) => b.addEventListener("click", () => valjStatus(u.id, b.dataset.status)));
      const knapp = app.querySelector(".visa-losning");
      if (!knapp) return;
      const ruta = app.querySelector("#losning");
      knapp.addEventListener("click", () => {
        const visas = knapp.getAttribute("aria-expanded") === "true";
        if (!visas && !ruta.innerHTML) ruta.innerHTML = Format.formatera(u.losning, figurPdfLosning, kalla + " lösning");
        ruta.hidden = visas;
        knapp.setAttribute("aria-expanded", String(!visas));
        knapp.textContent = visas ? "Visa lösningsförslag" : "Dölj lösningsförslag";
      });
    });
    return html;
  }

  // Klick på vald status tar bort den igen (tillbaka till "ej gjord").
  function valjStatus(id, status) {
    const nu = Status.get(id);
    Status.satt(id, nu && nu.status === status ? null : status);
    const s = Status.get(id);
    app.querySelectorAll(".statusval").forEach((b) => {
      b.setAttribute("aria-pressed", String(!!s && s.status === b.dataset.status));
    });
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

    const [vy, tentaId, nr] = delar;
    tangentKontext = null;
    let html;
    if (vy === "idag" && delar.length === 1) html = vyIdag();
    else if (vy === "kapitel" && delar.length === 1) html = vyKapitel();
    else if (vy === "bank" && delar.length === 1) html = vyBank(q);
    else if (vy === "bank" && tentaMap[tentaId] && delar.length === 2) html = vyTenta(tentaMap[tentaId]);
    else if (vy === "bank" && tentaMap[tentaId] && B.uppgifter[tentaId + "-" + nr] && delar.length === 3) html = vyUppgift(tentaMap[tentaId], nr);
    else html = vyHittadesInte();

    app.innerHTML = html;
    document.querySelectorAll(".huvudnav a").forEach((a) => {
      if (a.dataset.vy === vy) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    renderaSidfot();
    window.scrollTo(0, 0);
  }

  // ---------- Sidfot: säkerhetskopia av status ----------
  const sidfot = document.getElementById("sidfot");
  let sidfotLage = null; // null | { typ: "import", granskning } | { typ: "rensa" } | { typ: "meddelande", text }

  function renderaSidfot() {
    const n = Status.antal();
    let html;
    if (sidfotLage && sidfotLage.typ === "import") {
      html = "<p>Filen innehåller status för " + sidfotLage.granskning.antal + " uppgifter. Den ersätter nuvarande status ("
        + n + " uppgifter).</p>"
        + '<p><button type="button" class="knapp" data-sidfot="importera-ok">Importera</button> '
        + '<button type="button" class="knapp" data-sidfot="avbryt">Avbryt</button></p>';
    } else if (sidfotLage && sidfotLage.typ === "rensa") {
      html = "<p>Rensa status för alla " + n + " uppgifter?</p>"
        + '<p><button type="button" class="knapp" data-sidfot="rensa-ok">Rensa</button> '
        + '<button type="button" class="knapp" data-sidfot="avbryt">Avbryt</button></p>';
    } else {
      html = (Status.sparbar ? "" : "<p><strong>Statusen kan inte sparas i den här webbläsaren.</strong> Exportera innan du stänger fliken.</p>")
        + (sidfotLage && sidfotLage.typ === "meddelande"
          ? "<p>" + esc(sidfotLage.text)
            + (sidfotLage.angra ? ' <button type="button" class="lank" data-sidfot="angra">Ångra</button>' : "") + "</p>"
          : "")
        + "<p>Status: " + n + " av " + Object.keys(B.uppgifter).length + " uppgifter · "
        + '<button type="button" class="lank" data-sidfot="exportera">Exportera</button> · '
        + '<button type="button" class="lank" data-sidfot="importera">Importera</button> · '
        + '<button type="button" class="lank" data-sidfot="rensa">Rensa</button></p>'
        + sparfilRad();
    }
    sidfot.innerHTML = html;
  }

  function sparfilRad() {
    if (!Sparfil.stod) return "";
    const namn = esc(Sparfil.namn || "");
    const sluta = ' · <button type="button" class="lank" data-sidfot="sparfil-sluta">Sluta</button>';
    switch (Sparfil.lage) {
      case "aktiv":
        return "<p>Sparas automatiskt i " + namn
          + ' · <button type="button" class="lank" data-sidfot="sparfil-valj">Byt fil</button>' + sluta + "</p>";
      case "behover-ok":
        return '<p><button type="button" class="knapp" data-sidfot="sparfil-ateranslut">Fortsätt spara automatiskt i ' + namn + "</button>"
          + sluta + "</p>";
      case "fel":
        return "<p><strong>Kunde inte spara till " + namn + ".</strong> "
          + '<button type="button" class="lank" data-sidfot="sparfil-valj">Välj fil igen</button>' + sluta + "</p>";
      default:
        return '<p><button type="button" class="lank" data-sidfot="sparfil-valj">Spara automatiskt till fil…</button></p>';
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

  sidfot.addEventListener("click", (e) => {
    const k = e.target.closest("[data-sidfot]");
    if (!k) return;
    const handling = k.dataset.sidfot;
    if (handling === "exportera") { exportera(); return; }
    if (handling === "importera") { filval.click(); return; }
    if (handling === "sparfil-valj") { Sparfil.valj(); return; }
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
      Status.ersattAllt(sidfotLage.granskning.uppgifter);
      sidfotLage = { typ: "meddelande", text: "Statusen är importerad.", angra: true, ny: true };
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

  // ---------- Tangentbord (layoutspec §8.6) ----------
  // ← → mellan uppgifter, L visar/döljer lösningen, 1 2 3 sätter status.
  document.addEventListener("keydown", (e) => {
    if (!tangentKontext || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (e.target.closest && e.target.closest("input, textarea, select, [contenteditable]")) return;
    const statusar = Object.keys(Status.STATUSAR);
    if (e.key === "ArrowLeft" && tangentKontext.forra) ga(tangentKontext.forra, { ersatt: true });
    else if (e.key === "ArrowRight" && tangentKontext.nasta) ga(tangentKontext.nasta, { ersatt: true });
    else if (e.key === "l" || e.key === "L") {
      const k = app.querySelector(".visa-losning");
      if (!k) return;
      k.click();
    } else if (["1", "2", "3"].includes(e.key)) valjStatus(tangentKontext.uppgift, statusar[+e.key - 1]);
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
})();
