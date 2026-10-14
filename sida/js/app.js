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
        + '<span class="rad-meta">' + (t.harLosning ? "" : "Saknar lösningar") + "</span>"
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
        + '<span class="rad-meta">' + esc(avsnittText(u)) + "</span>"
        + '<span class="pil" aria-hidden="true">→</span></a></li>';
    };
    const g = tenta.uppgifter.filter((id) => B.uppgifter[id].del === "G");
    const vg = tenta.uppgifter.filter((id) => B.uppgifter[id].del === "VG");
    return kontextrad("#/bank", "")
      + "<h1>" + esc(tenta.namn) + "</h1>"
      + '<p class="tyst">' + TYPNAMN[tenta.typ] + " · 9 uppgifter à 4 p"
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
    const nasta = tenta.uppgifter.indexOf(u.id) + 1;

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
      + '<p class="kalla">Original: ' + pdfLankar(tenta) + "</p>"
      + '<nav class="nasta">' + nastaLank + "</nav>"
      + "</article>";

    // Lösningen renderas först när man klickar, så den finns inte ens i sidan innan dess.
    setTimeout(() => {
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

    const [vy, tentaId, nr] = delar;
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
    window.scrollTo(0, 0);
  }

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
  rendera();
})();
