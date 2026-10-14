// Gör om en uppgifts- eller lösningstext (markdown-light + LaTeX) till HTML.
// Matten plockas ut först så att markdown-reglerna aldrig rör den, och renderas sedan med KaTeX.
(function () {
  "use strict";

  const PH = "\u0000"; // platshållare för matte: \u0000<n>\u0000

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function matte(tex, display, kalla) {
    try {
      return katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: "ignore" });
    } catch (e) {
      Format.fel.push({ kalla, tex, fel: e.message });
      console.error("KaTeX-fel i " + kalla + ": " + e.message + "\n" + tex);
      return '<code class="tex-fel">' + esc(tex) + "</code>";
    }
  }

  function inline(s) {
    return s
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, "$1<em>$2</em>");
  }

  function figurrad(s, pdf) {
    const lank = pdf ? ' <a class="figurlank" href="' + esc(encodeURI(pdf)) + '" target="_blank" rel="noopener">Se figuren i PDF:en</a>' : "";
    return '<p class="figur"><em>' + s + "</em>" + lank + "</p>";
  }

  // text: källtexten. pdf: länk för figurer. kalla: t.ex. "t260319-3 uppgift" (för felmeddelanden).
  function formatera(text, pdf, kalla) {
    const formler = [];
    const spara = (tex, display) => { formler.push([tex, display]); return PH + (formler.length - 1) + PH; };

    let t = text
      .replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => spara(m, true))
      .replace(/\$([^$\n]+?)\$/g, (_, m) => spara(m, false));
    t = esc(t);

    const ut = [];
    for (const block of t.split(/\n[ \t]*\n/)) {
      const rader = block.split("\n").filter((r) => r.trim() !== "");
      if (!rader.length) continue;

      // Inom ett block: vanliga rader blir ett stycke med radbrytningar, rader som börjar
      // med "- " blir en lista, och en rad som bara är en displayformel eller figur blir ett eget element.
      let stycke = [], lista = [];
      const tom = () => {
        if (stycke.length) ut.push("<p>" + stycke.join("<br>") + "</p>");
        if (lista.length) ut.push("<ul>" + lista.map((r) => "<li>" + r + "</li>").join("") + "</ul>");
        stycke = []; lista = [];
      };
      for (const r of rader) {
        const ensamFormel = new RegExp("^" + PH + "(\\d+)" + PH + "$").exec(r.trim());
        const figur = /^\[Figur:([\s\S]*)\]$/.exec(r.trim());
        const arLista = /^- /.test(r);
        if (arLista ? stycke.length : lista.length) tom();
        if (arLista) {
          lista.push(inline(r.slice(2)));
        } else if (r.startsWith("&gt; ")) {
          tom();
          ut.push('<p class="citat">' + inline(r.slice(5)) + "</p>");
        } else if (ensamFormel && formler[+ensamFormel[1]][1]) {
          tom();
          ut.push('<div class="formel">' + r.trim() + "</div>");
        } else if (figur) {
          tom();
          ut.push(figurrad("Figur:" + figur[1], pdf));
        } else {
          stycke.push(inline(r));
        }
      }
      tom();
    }

    return ut.join("\n")
      .replace(/\[Figur:([^\]]*)\]/g, (_, f) => '<em class="figur-inline">[Figur:' + f + "]</em>")
      .replace(new RegExp(PH + "(\\d+)" + PH, "g"), (_, i) => matte(formler[+i][0], formler[+i][1], kalla));
  }

  const Format = { formatera, esc, fel: [] };
  window.Format = Format;
})();
