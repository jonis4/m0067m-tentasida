# CLAUDE.md – Tentasidan för M0067M Linjär algebra

> Den här filen är din karta. Läs hela innan du gör något. Projektet är stort och byggs i faser. **Gör en fas i taget, stanna efter varje fas och vänta på Jonatans OK innan du går vidare.** Uppdatera avsnittet *Status* längst ner när en fas är klar.

---

## 1. Vad vi bygger

En personlig, statisk HTML-sida för att plugga inför tentan i **M0067M Linjär algebra (LTU)**. Tentan är **27 oktober 2026**. Tiden är kort, så sidan ska gå att använda för att räkna tentor redan efter fas 2.

Sidan samlar alla gamla tentor, övningstentor och diagnostiska test med lösningsförslag. Den kopplas till Jonatans egen planeringsapp, som visar hur säker han är på varje kapitel. Den byggs runt ett **tentapluggschema** som svarar på frågan *"Vad ska jag göra nu?"* när sidan öppnas.

**Designfilosofi:** Dieter Rams och Apple som *tankesätt*, inte som grafisk stil. Det betyder less but better, ärlighet, fokus och att innehållet (matten) går före gränssnittet. Minimalistiskt men lätt att navigera. Den fullständiga layoutspecen finns i `AI/tentasida-layout.md`. **Den är facit för layout och navigering. Följ den, och fråga innan du avviker.**

### Om Jonatan

- Designstudent (Teknisk design, LTU). Han har koll på design men är inte utvecklare, så förklara kodbeslut kort och konkret.
- Skriv till honom på **svenska**, gärna informellt. Kod, filnamn och kommentarer i koden får vara på engelska eller svenska, men var konsekvent.
- Matte i svar till honom skrivs i LaTeX.

---

## 2. Mappstruktur och filer

Projektroten är `Documents\tentor\` (Windows). Starta Claude Code från `tentor\AI\`. Sökvägar i den här filen (t.ex. `AI/...`, `sida/...`) är ändå relativa till `tentor/`.

```
tentor/
├── AI/                                   ← underlag skrivet för AI (läs dessa)
│   ├── CLAUDE.md                         ← den här filen
│   ├── tentasida-layout.md               ← LAYOUTSPEC: vyer, navigering, visuella regler
│   ├── mind-for-numbers-tentastrategi.md ← 15 strategiblock (A Mind for Numbers)
│   ├── M0067M_kunskapsbas.md             ← examinatorprofil + HELA uppgiftsbanken, transkriberad
│   ├── M0067M_examinatorprofil.md        ← samma profil som i början av kunskapsbasen, fristående
│   └── M0067M_traningsdata.jsonl         ← 72 fråga/svar-par (chattformat). Behövs INTE för sidan
│
├── tolos_260319 (1).pdf          ← Tenta 2026-03-19 + lösningsförslag (handskrivet)
├── tolos_M0067M_260526 (1).pdf   ← Tenta 2026-05-26 + lösningsförslag
├── toloM0067M_260827 (1).pdf     ← Tenta 2026-08-27 + lösningsförslag
├── xT1.pdf / xT2.pdf / xT3.pdf   ← Övningstentor
├── losSkiss_xT1/2/3.pdf          ← Lösningsskisser till övningstentorna
├── diag1.pdf / diag2.pdf / diag3.pdf ← Diagnostiska test
├── Diag1Los.pdf / Diag2Los.pdf   ← Lösningar till diag1 och diag2 (diag3 har ingen lösning)
│
└── sida/                         ← HÄR byggs sidan (skapas i fas 1)
```

### Viktigast att förstå: `M0067M_kunskapsbas.md`

Den här filen är **huvudkällan för allt innehåll**. Du behöver inte läsa PDF:erna för att få ut uppgifterna, eftersom de redan är transkriberade här med LaTeX.

- **Rad 1–106:** examinatorprofil (tentans form, betygsgränser, uppgiftsfördelning, hur examinatorn vill ha svaren, metodmallar per uppgiftstyp, formelblad).
- **Därefter:** `# Uppgiftsbank M0067M`, med **9 tentor × 9 uppgifter = 81 uppgifter**.

Formatet är:

```
# <tenta-id> | <namn> | <datum> | <typ av lösning>

## [<tenta-id>] Uppgift <n> | <poäng> | <G/VG> | <ämnen, kommaseparerade>

**Uppgift:**
<uppgiftstext med LaTeX>

**Lösning:**
<examinatorns lösning med LaTeX>
```

| tenta-id | Vad | Typ | PDF-källor |
|---|---|---|---|
| `t260827` | Tenta 27 aug 2026 | gammal tenta | `toloM0067M_260827 (1).pdf` |
| `t260526` | Tenta 26 maj 2026 | gammal tenta | `tolos_M0067M_260526 (1).pdf` |
| `t260319` | Tenta 19 mars 2026 | gammal tenta | `tolos_260319 (1).pdf` |
| `xT1`–`xT3` | Övningstenta 1–3 | övningstenta | `xTn.pdf` + `losSkiss_xTn.pdf` |
| `diag1`–`diag3` | Diagnostiskt test 1–3 | diagnos | `diagN.pdf` + `DiagNLos.pdf` |

**Kända egenheter i datan (hantera dem, rätta dem inte i källfilen):**

- Uppgift 1–6 är **G** (del för godkänt) och 7–9 är **VG** (högre betyg). Varje uppgift ger 4 p.
- `diag3` saknar lösningar. Lösningsfältet säger *"Lösningsförslag saknas i materialet."* Visa det tydligt, och dölj inte uppgiften.
- Datumen för övningstentor och diagnoser är osäkra. `xT2` har datumet `2025-02-30`, som inte finns, och diag-datumen `2024-12-24` ser ut att vara utfyllnad. **Sortera och visa inte på dessa datum**; använd id/namn.
- Figurer finns bara som textplatshållare: `[Figur: …]`. Visa dem som diskret kursiv text, och ge en länk till original-PDF:en så att Jonatan kan se den riktiga figuren.
- Det finns `*Transkriberarens not: …*` på några ställen. Visa dem som de är.
- Ämnestaggarna är fri text och inte helt konsekventa (t.ex. "Gausselimination" vs "Linjära ekvationssystem, Gausselimination"). De normaliseras i fas 1.
- Matriser är skrivna med `\begin{bmatrix}`. KaTeX klarar det.

### Kursens avsnitt (från kursplaneringen, Anton & Rorres 12 uppl.)

Planeringsfilen ligger inte i mappen, så här är avsnitten. **Avsnittsnumret (t.ex. `"1.4"`) är nyckeln** som kopplar ihop planeringsappen och tentauppgifterna.

| Avsnitt | Innehåll |
|---|---|
| 1.1, 1.2 | Linjära ekvationssystem, Gausselimination |
| 1.3 | Matriser och matrisoperationer |
| 1.4, 1.5 | Matrisinvers |
| 1.6, 1.7 | Mer om linjära ekvationssystem, symmetriska matriser |
| 1.8, 1.9 | Linjära avbildningar |
| 2.1, 2.2, 2.3 | Determinanter |
| — | *Diagnostiskt test 1 (täcker kap 1–2)* |
| 3.1 | Vektorer i planet, rummet och $\mathbb R^n$ |
| 3.2 | Skalärprodukt och avstånd |
| 3.3 | Ortogonalitet och projektion |
| 3.4 | Geometrin för linjära system |
| 3.5 | Kryssprodukt |
| 4.1, 4.2 | Vektorrum och underrum |
| 4.3, 4.4 | Linjärt hölje och linjärt oberoende |
| 4.5 | Bas och koordinater |
| 4.6 | Dimension |
| 4.7 | Basbyte |
| 4.8, 4.9 | Kolonnrum, radrum och nollrum. Rang |
| — | *Diagnostiskt test 2 (täcker kap 3–4)* |
| 5.1 | Egenvärden och egenvektorer |
| 5.2 | Diagonalisering |
| 5.4 | Tillämpning (bl.a. differentialekvationssystem) |
| 6.1 | Skalärproduktrum |
| 6.2, 6.3 | Ortogonalitet i skalärproduktrum, Gram–Schmidt |
| 6.4, 6.5 | Bästa approximation och minsta kvadratmetoden |
| 6.6 | Funktionsapproximationer |
| — | *Diagnostiskt test 3 (täcker kap 5–6)* |

### Jonatans planeringsapp

Han har byggt en egen planeringsapp med varje kapitel, hur säker han är på det och vilka bokuppgifter han gjort. **Var den ligger och vilket format datan har är okänt.** Gissa inte. Fråga Jonatan i början av fas 4.

---

## 3. Tekniska ramar

- **Vanilla HTML, CSS och JS.** Inga ramverk (React, Vue, Svelte), ingen bundler och ingen npm-byggkedja för själva sidan. En `index.html`, en CSS-fil och några få JS-filer.
- **Sidan ska fungera genom att dubbelklicka på `index.html`** (`file://`). Därför fungerar inte `fetch()` mot lokala filer. Lös det med ett **byggskript** som läser `AI/M0067M_kunskapsbas.md` och genererar `sida/data/bank.js` (t.ex. `window.BANK = {...}`). Skriptet körs om när källan ändras.
  - Kolla i fas 0 vad som finns installerat (`python --version`, `node --version`) och välj det som finns. Python är förstahandsval.
- **KaTeX** för matten, med auto-render. Lägg en **lokal kopia** i `sida/vendor/katex/` så att sidan fungerar offline. Använd en låst, stabil version.
- **Routing med hash** (`#/bank/t260319/3`), så att bakåtknappen fungerar och man kan bokmärka.
- **Status sparas i `localStorage`**, och allt läs/skriv ska ligga i `try/catch`. Lägg till **export/import av status som JSON-fil** som backup.
- **Ljust och mörkt läge** via `prefers-color-scheme`, med färger som CSS-variabler.
- Ett typsnitt (systemfont-stack räcker), gråskala som bas och **en** accentfärg som bara används när den betyder något. Se layoutspecen §9.

---

## 4. Regler – så går du inte vilse

1. **En fas i taget.** Stanna när fasen är klar, visa vad du gjort och vänta på OK.
2. **Ändra aldrig källfilerna** i `AI/` (förutom avsnittet *Status* i den här filen) och aldrig PDF:erna. Allt du bygger hamnar i `sida/`.
3. **Hitta aldrig på matte.** Uppgiftstexter och lösningar kopieras ordagrant från kunskapsbasen. Om något ser fel ut i en lösning: flagga det för Jonatan, rätta det inte tyst.
4. **Skriv inte schemat på egen hand.** Schemat tas fram *tillsammans* med Jonatan i fas 5.
5. **Layoutspecen är facit.** Om något i den inte går att bygga eller verkar dumt i praktiken: fråga, avvik inte tyst.
6. **Ingen "feature creep".** Layoutspecen §11 listar sådant som medvetet *inte* ska vara med (streaks, badges, stor nedräkning, kalendervy, synliga lösningar i listor). Lägg inte till det.
7. **Verifiera varje fas** genom att öppna sidan i en webbläsare och klicka igenom. "Det kompilerar" räcker inte.
8. **Om du är osäker: fråga.** Hellre en fråga för mycket än en timme åt fel håll.

---

## 5. Faser

Varje fas har ett mål, vad som ska göras och **klart när**. Ordningen följer layoutspecen §12: sidan ska gå att använda så tidigt som möjligt.

### Fas 0 – Orientering (ingen kod)

**Mål:** Förstå materialet och miljön innan något byggs.

- Läs `AI/tentasida-layout.md`, `AI/mind-for-numbers-tentastrategi.md` och `AI/M0067M_kunskapsbas.md` (åtminstone profilen, formatbeskrivningen och några uppgifter från varje tentatyp).
- Lista filerna i `tentor/` och bekräfta att PDF-tabellen i §2 stämmer.
- Kolla om Python eller Node finns.

**Klart när:** Du har gett Jonatan en kort rapport med (a) vad du hittat, (b) vilket språk byggskriptet ska skrivas i, (c) eventuella frågor eller avvikelser. **Stanna.**

### Fas 1 – Datamodell och byggskript

**Mål:** All data finns som strukturerad JS som sidan kan läsa.

- Skapa `sida/` och ett byggskript (t.ex. `sida/build.py`) som parsar kunskapsbasen till `sida/data/bank.js`.
- Datamodell enligt layoutspecen §3 och §10:
  - **tentor**: `id`, `namn`, `typ` (`tenta` / `ovningstenta` / `diagnos`), `pdf` (lista med relativa sökvägar, t.ex. `../xT1.pdf`), `harLosning`, `uppgifter` (lista med id).
  - **uppgifter**: `id` (t.ex. `t260319-3`), `tenta`, `nr`, `poang`, `del` (`G`/`VG`), `amnen` (originaltaggarna), `typ` (normaliserad metodtagg), `avsnitt` (lista, t.ex. `["5.1","5.2"]`), `uppgift` (text), `losning` (text eller `null`).
- **Typ och avsnitt är inte med i källan.** Gör en separat, handredigerbar mappningsfil (t.ex. `sida/data/mappning.json`) från ämnestaggar till `typ` och `avsnitt`. Använd metodmallarna i examinatorprofilen (§4 i profilen) som utgångspunkt för typerna, t.ex. `gausselimination`, `matrisekvation`, `linjar-avbildning`, `spegling-projektion`, `plan-avstand`, `bas-dimension`, `nollrum-kolonnrum`, `diagonalisering`, `diffekv-system`, `minsta-kvadrat`, `gram-schmidt`, `inre-produktrum`, `determinantlagar`, `bevis`. Håll det kort, runt 12–16 typer.
- Byggskriptet ska **validera** och skriva ut en sammanfattning: 9 tentor, 81 uppgifter, att alla uppgifter har typ och avsnitt, och vilka som saknar lösning (ska vara exakt de 9 i diag3).

**Klart när:** `bank.js` genereras utan fel, valideringen går igenom, och Jonatan har fått se mappningen av ämnen till typ och avsnitt (som en tabell) och godkänt den. **Stanna.**

### Fas 2 – Skal, Bank och uppgiftsvy *(första användbara versionen)*

**Mål:** Jonatan kan öppna sidan och räkna vilken uppgift som helst.

- `index.html` med huvudnav **Idag · Kapitel · Bank** (layoutspecen §2). Idag och Kapitel får vara tomma platshållare tills vidare.
- **Bank** (§4.3): filterflikar Alla / Gamla tentor / Övningstentor / Diagnoser. En rad per tenta som öppnar tentans uppgiftslista.
- **Uppgiftsvy** (§5): uppgiftstext med KaTeX, G/VG, avsnitt och typ, **lösning dold** bakom "Visa lösningsförslag", länk till original-PDF, samt "Nästa uppgift →" inom samma sammanhang.
- Hash-routing, och Tillbaka går dit man kom ifrån (§8).
- Visuella regler (§9) och ljust/mörkt läge.

**Klart när:** Alla 81 uppgifter renderar utan KaTeX-fel (kontrollera konsolen och gå igenom minst en tenta av varje typ), lösningarna är dolda som standard, och bakåtknappen fungerar. **Stanna.**

### Fas 3 – Status

**Mål:** Sidan vet vad Jonatan har gjort.

- Statusval i uppgiftsvyn: **Gjord med hjälp · Gjord själv · Sitter** (§5), plus implicit *ej gjord*. Spara med tidsstämpel, eftersom det behövs för Repetera i fas 7.
- Visa `x/9 gjorda` per tenta i Bank.
- Export/import av status som JSON.
- Valfritt: tangentbordsgenvägar `←` `→` `L` `1` `2` `3` (§8.6).

**Klart när:** Status överlever omladdning, export → rensa → import återställer allt, och Bank visar rätt siffror. **Stanna.**

### Fas 4 – Kapitel och planeringsappen

**Mål:** Läget per kapitel syns, och planeringsappen är ihopkopplad med tentauppgifterna.

- **Börja med att fråga Jonatan** var planeringsappen ligger och hur datan ser ut. Läs den sedan och föreslå hur den ska importeras (helst genom att byggskriptet läser den direkt; annars en exportfil).
- Kapitelvy enligt §4.2: lista per avsnitt med säkerhetsstapel, sortering på ordning eller säkerhet, och utfällning med bokuppgifter (från appen) och tentauppgifter (från `bank.js`) samt knappen "Öva bara det här kapitlet".
- Avsnittsnycklarna måste matcha (`"1.4"` etc.). Om appen använder andra nycklar: gör en mappning och fråga Jonatan.

**Klart när:** Säkerhet och bokuppgifter visas korrekt för alla avsnitt, och tentauppgifterna ligger under rätt avsnitt. **Stanna.**

### Fas 5 – Schema och Idag

**Mål:** Startsidan svarar på "Vad ska jag göra nu?".

- **Schemat skrivs tillsammans med Jonatan.** Ta fram ett *förslag* utifrån:
  - dagarna kvar till 27 oktober,
  - säkerheten per kapitel från planeringsappen (svaga kapitel först),
  - uppgiftsbanken (tentor och diagnoser),
  - strategin i `mind-for-numbers-tentastrategi.md`: blandade pass (interleaving), spridd repetition, hela tentor under tentaliknande former, lätt sista dag, sömn.
- Visa förslaget för Jonatan och justera tills han godkänner det. **Bygg inte in det förrän han sagt OK.**
- Lagra schemat i en egen fil (t.ex. `sida/data/schema.json` → genereras till JS), med dag → pass → uppgifts-id eller avsnitt. Inga kopior av uppgiftstexter (§10).
- Idag-vyn (§4.1): datum, dagar kvar (bara en siffra), dagens pass i ordning, pilar mellan dagar och länken "Visa hela schemat" som en enkel lista.

**Klart när:** Idag visar rätt dag med rätt pass, man kan bläddra mellan dagar, och schemat är godkänt av Jonatan. **Stanna.**

### Fas 6 – Tentaläge

**Mål:** Kunna skriva en hel tenta under tentaliknande förhållanden.

- Enligt layoutspecen §6: helskärm, ingen nav, inga lösningar och en timer (5 h, går att dölja). Alla 9 uppgifter går att hoppa mellan. [Lämna in] visar lösningarna och går igenom uppgift för uppgift med statusval. Avbryt kräver bekräftelse (gör en egen bekräftelse i sidan, inte `confirm()`).
- Visa tentans form från examinatorprofilen vid start: 9 × 4 p, del G 1–6, del VG 7–9, betygsgränser.
- Startas från en tenta i Bank och från ett pass i Idag.

**Klart när:** En hel tenta kan genomföras från start till inlämning och statusgenomgång, och timern överlever att man byter flik. **Stanna.**

### Fas 7 – Strategi, Repetera och examinatormallar

**Mål:** De smarta lagren ovanpå.

- **Repetera-sektion** i Idag (§4.1): uppgifter markerade *gjord själv* för 3 eller fler dagar sedan, eller *gjord med hjälp*. Den genereras automatiskt och skrivs inte i schemat.
- **Strategirader i sammanhang** enligt tabellen i layoutspecen §7. Diskret text som går att klicka för att se hela blocket och som går att stänga av. Sidfoten länkar till alla 15 block samlade.
- **"Så vill examinatorn ha det"**: efter att lösningen visats, visa metodmallen för uppgiftens `typ` ur examinatorprofilen (§4 i profilen). Hopfällt som standard.

**Klart när:** Allt ovan fungerar och inget av det tar fokus från uppgiften. **Stanna.**

### Fas 8 – Finslipning och kontroll

- Gå igenom hela sidan mot layoutspecen punkt för punkt och lista avvikelser.
- Mobilvy för Idag och Repetera (§9).
- Kontrollera att alla 81 uppgifter fortfarande renderar och att det inte finns några konsolfel.
- Fråga Jonatan om han vill ha sidan tillgänglig på mobilen. Det kräver hosting och är hans beslut, så publicera inget utan att fråga.

---

## 6. Status

> Uppdatera efter varje fas: vad som är klart, beslut som tagits och öppna frågor. Det här är minnet mellan sessioner.

- [x] Fas 0 – Orientering
- [x] Fas 1 – Datamodell och byggskript
- [x] Fas 2 – Skal, Bank och uppgiftsvy
- [x] Fas 3 – Status
- [x] Fas 4 – Kapitel (utan planeringsappen, se Beslut)
- [x] Fas 5 – Schema och Idag
- [x] Fas 6 – Tentaläge
- [x] Fas 7 – Strategi, Repetera och examinatormallar
- [x] Fas 8 – Finslipning (avvikelselistan är visad för Jonatan, se Öppna frågor)

**Beslut:**
- Byggskriptet skrivs i Python (3.14.6 finns; Node v24 finns också).
- KaTeX laddas ner en gång (låst version) till `sida/vendor/katex/`. Godkänt av Jonatan.
- Claude Code startas från `tentor/AI/`.
- Transkriberarnoter (t.ex. t260827-3, $A^2=I$) visas som de står.
- Fas 1: mappningen (16 typer, `sida/data/mappning.json`) är godkänd. Bygg med `python build.py` i `sida/`.
- **Bevis (typ `bevis`, 11 uppgifter) har låg prioritet.** Jonatan vill helst slippa plugga dem och lägga tid på dem bara om det blir tid över. Ta hänsyn till det i schemat (fas 5).
- Avsnittsnycklarna (en per avsnitt, t.ex. `"1.4"`) kan behöva justeras mot planeringsappen i fas 4.
- Fas 2: KaTeX 0.16.11 i `sida/vendor/katex/`. Formler renderas med `katex.renderToString` i `js/text.js` (inte auto-render), och fel loggas med uppgifts-id. Lösningen läggs in i DOM först vid klick.
- Historik: "Nästa uppgift" och filterflikar ersätter historikposten (`data-ersatt`), så att Tillbaka/bakåtknappen går till listan man kom från. Djupet sparas i `history.state`.
- Breda displayformler (`.formel`) får gå bredare än textspalten (upp till 74rem).
- Ej byggt än: [Skriv som tenta] (fas 6), statusval (fas 3), "Har du räknat klart?"-friktion (valfri, §5).
- Verifiering: headless Edge + puppeteer-core (testskript i scratchpad, inte i projektet).
- Fas 3: status i `js/status.js` (localStorage-nyckel `m0067m.status.v1`, varje post har `status`, `tid` och `historik`). Statusnycklar: `hjalp`, `sjalv`, `sitter` (null = ej gjord). Klick på vald status tar bort den. Tangenter ← → L 1 2 3. Sidfoten har Exportera/Importera/Rensa med bekräftelse i sidan och Ångra.
- Automatisk sparfil (`js/sparfil.js`, File System Access API, bara Edge/Chrome): filhandtaget sparas i IndexedDB (`m0067m`/`kv`/`sparfil`), och filen har samma format som exporten. `m0067m-status*.json` ligger i `.gitignore`. Den riktiga filväljaren på file:// är inte automattestad (testat via lokal server).
- **Fas 4: planeringsappen kopplas INTE in** (Jonatans beslut). Den ligger i `C:\Users\jonat\Desktop\matte schema\` och får **bara läsas, aldrig ändras**. Jonatan använder den för repetition, och tentasidan för tentaplugg.
- Kapitel bygger i stället på tentauppgifterna: stapeln = andel av avsnittets uppgifter (utom bevis) med status `sjalv` eller `sitter`. Sortering: Ordning / Svagast först (flikarna ligger överst, inte längst ner som i specen). Rutter: `#/kapitel`, `#/kapitel/1.4`, `#/kapitel/1.4/<uppgift-id>`. Avsnittsnamnen i `mappning.json` är bokens titlar.
- Fas 5: "säkerheten per kapitel från planeringsappen" ersätts av Kapitel-staplarna och det Jonatan själv säger.
- Fas 5: schemat är godkänt (14 okt, reviderat: start 15 okt, läs 6.5 först) och ligger i `sida/data/schema.json`. `build.py` validerar det och skriver `data/schema.js`. Jonatan pluggar 2–3 h på vardagar, ett morgonpass per helg, siktar på betyg 3 (kanske 4). Hela tentor = del G (uppg. 1–6) på 3 h, t260319 den 20 okt och t260827 den 23 okt. Bevis och diag3 är inte med i schemat. Rutter: `#/idag`, `#/idag/<datum>`, `#/idag/<datum>/<pass>/<uppgift-id>`, `#/idag/schema`. `window.IDAG_DATUM` kan sättas i tester för att låtsas att det är en annan dag.
- Fas 6: tentaläget startas från Bank (`#/tentalage/ny/bank/<tenta>`, 9 uppg., 5 h) eller från ett tentapass i Idag (`#/tentalage/ny/idag/<datum>/<pass>`, passets uppgifter och `tid`). Pågående tenta i localStorage `m0067m.tentalage.v1` (starttid, inlämnad, timerDold, aktuell). Timern räknas från starttiden. Under pågående tenta omdirigeras alla andra rutter till tentan. Typ/avsnitt döljs under tentan och visas i genomgången. `bank.js` innehåller `profil.tentansForm` och `profil.formelblad`, ordagrant ur kunskapsbasen. Tentapass i Idag listar inte uppgifterna.
- Fas 7: Repetera = status `hjalp` (tidigast dagen efter) eller `sjalv` för minst 3 dagar sedan, utom `sitter` och utom uppgifter i dagens pass. Hjälp först, sedan äldst. Visas bara på dagens datum. Rutt `#/idag/repetera/<id>`. Strategiraderna är `<details>` (en rad som går att fälla ut) på platserna i specen §7. Av/på sparas i localStorage `m0067m.installningar.v1`, och sidan med alla block är `#/strategi`. Metodmallen ("Så vill examinatorn ha det") visas efter lösningen, är hopfälld och finns också i tentalägets genomgång. `typer[].mall` i `mappning.json` kan vara en lista. `bank.js` har `profil.mallar` och `strategi` (15 block), och båda valideras av `build.py`.
- Fas 8: större klickytor på pekskärm/smal skärm (`@media (pointer: coarse), (max-width: 560px)`), och uppgiftsrader på två rader på mobil. Ingen sidledsscroll på 320/390 px.
- Tema: sidfoten har Auto/Ljust/Mörkt (localStorage `m0067m.tema` → `data-theme` på `<html>`, sätts i `<head>` innan sidan ritas).
- Flera scheman: `data/schema.json` (Jonatans, standard) + `data/schema-<namn>.json` (t.ex. `schema-erik.json`, Jonatans kompis Erik). `build.py` validerar alla och skriver `window.SCHEMA` + `window.SCHEMOR`. Sidfoten visar "Importera Eriks schema", och valet sparas i localStorage `m0067m.schema` och laddar om sidan. Eriks schema: start 19 okt, 2–3 h/dag varje dag, betyg 3, inga bevis, diag 1–2 först (svag på kap 1–4), tentor t260319 (22 okt) och t260827 (24 okt).
- Efter fas 8: sidfoten är en enda rad, "Strategi · Inställningar". Där visas bara det som kräver handling (sparfil behöver klick eller har fel, localStorage blockerat). Status-backup, sparfil, schema, tema och strategirader ligger på `#/installningar`. Detta löser också "Status x av 81"-frågan.
- "Kopiera uppgiften" (även tangent K) under uppgiftstexten kopierar kurs, källa, typ, avsnitt och uppgiften ordagrant med LaTeX, för att klistra in i en AI. Är lösningen öppnad heter knappen "Kopiera uppgift och lösning" och tar med lösningen. Knappen finns inte under tentan, men i genomgången.
- Hjälpfönster (`<dialog id="hjalp">`): visas första gången (localStorage `m0067m.hjalp.sedd`), inte i tentaläget, och öppnas igen med "Hjälp" i sidfoten. Kortfattat (8 punkter), och nämner vilket schema som används. Testerna sätter `window.INGEN_HJALP = true` för att slippa det. Idag visar en liten rad "<schemanamn> · Byt schema" när det finns flera scheman.
- Hosting: `tentor/index.html` skickar vidare till `sida/index.html`, och `.nojekyll` gör att GitHub Pages publicerar filerna orörda. **GitHub Pages är påslaget (16 okt):** https://jonis4.github.io/m0067m-tentasida/. Den publicerade versionen är kontrollerad: matte, PDF:er och hjälp fungerar. Varje push publiceras automatiskt inom någon minut.
- UX-genomgång (16 okt), punkt 2–6 genomförda, punkt 1 (dölja typ/avsnitt före lösning) inte vald:
  - "Visa lösningsförslag" är en textknapp, och strategiraden "Illusioner av kompetens" står före klicket. "Nästa uppgift →" är uppgiftsvyns huvudknapp.
  - Idag: bara nästa ogjorda pass (på dagens datum) får den stora Starta-knappen. Andra pass får länken "Starta →", och klara pass visar "Klart · x/x gjorda" och tonas ner. Repetera får den stora knappen bara när dagens pass är klara.
  - Repetera visar 3 uppgifter och "Visa alla (n)". Raderna visar bara "n dagar sedan".
  - Status i listor är en CSS-ritad markering: ○ ej gjord, ◐ med hjälp, ● själv, ● sitter i accent. Ordet ligger i `title` och i dold text (`.dold`).
  - Princip: det stora grå blocket (`.knapp-stor`) används bara för sidans huvudhandling.
- Idag omgjord (16 okt, Jonatans val): ett pass i taget. "Nu · Pass n" är utfällt med den enda stora knappen. Klara och kommande pass är `<details>`-rader ("Pass 1 · Klart" / "Pass 2 · 2 uppgifter"). Läsning, dugga och lätt dag är en textrad. Ingen "Blandat: …"-rad, inga avsnittsnummer och inga strategirader i Idag (förklaras i hjälpen).
- Repetition: varje dag läggs den första i Repetera-listan in sist i dagens sista vanliga pass, märkt "repetition". Valet sparas per dag i localStorage `m0067m.repetition.<datum>`. `passIds(datum, i)` ger passets uppgifter inklusive repetitionen och används av rutter och Nästa. Resten visas som raden "Repetera · n till", eller som eget huvudpass när dagen saknar övriga uppgifter (t.ex. lätt dag).
- Formelblad i uppgiftsvyn: raden under uppgiften är "Kopiera uppgiften · Formelblad". Formelbladet (`profil.formelblad`) fälls ut under raden, tangent F. Under en pågående tenta används tentalägets egen Formelblad-knapp.
- Sparade uppgifter (19 okt): bokmärkesikon sist i raden med statusval (tangent S), ifylld i accentfärg när uppgiften är sparad. Lagras i `Status` som `data.sparade[id] = tid` och följer med i kopia/import/sparfil, Rensa och Ångra. Bank har fliken "Sparade" (`#/bank?visa=sparade`, senast sparad först). Uppgiftsrutt `#/bank/sparade/<id>`, där Nästa går igenom sparade. Inget bokmärke under pågående tenta, men i genomgången.
- Testerna (i scratchpad) kör sedan 19 okt mot en nedladdad chrome-headless-shell 131, eftersom en halvklar Edge-uppdatering hindrar Edge från att starta headless.
- Gren `enklare-uppgiftsvy` (19 okt): lugnare uppgiftsvy med samma funktioner. Rubriken visar titel och meta (källa · del · typ · avsnitt) till vänster och bokmärket till höger. Verktygsraden under uppgiften är "Formelblad · Kopiera uppgiften · PDF". "Visa lösningsförslag" står ensam. Strategiraden (block 3), metodmallen och lösnings-PDF:en visas inne i den öppnade lösningen. Statusvalen och "Nästa uppgift →" står på samma rad längst ner (på mobil blir Nästa full bredd). Tentalägets genomgång använder samma rubrik och avslut.
- Git-repo i `tentor/` (gren `main`), pushat till det **publika** repot https://github.com/jonis4/m0067m-tentasida (Jonatans val: inget i materialet är hemligt). Pusha bara när Jonatan ber om det. PDF:erna är med i repot (sidans PDF- och figurlänkar behöver dem). Bara `AI/M0067M_traningsdata.jsonl` ligger i `.gitignore`. `gh` finns inte installerat.

**Öppna frågor:**
- Avvikelser från layoutspecen (fas 8) är visade men inte kommenterade: sortering överst i Kapitel, tre klick via Bank/Kapitel, ingen "Har du räknat klart?".
