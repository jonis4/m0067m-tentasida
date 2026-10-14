# Tentasidan – layout och navigering

> Struktur för en personlig tentapluggsida i M0067M. Beskriver **hur sidan är uppbyggd och navigeras**, inte vad som står i schemat. Schemat och materialet fylls i senare.

---

## 0. Grundidén i en mening

**Sidan ska svara på en fråga direkt när den öppnas: _"Vad ska jag göra nu?"_**

Allt annat (tentabank, kapitelöversikt, strategi) finns för att stödja svaret på den frågan och ska inte konkurrera med det.

---

## 1. Designfilosofi – vad som prioriteras

Rams och Apple som *tankesätt*, översatt till den här sidan:

| Princip | Vad det betyder här |
|---|---|
| **Less, but better** (Rams) | Tre vyer, inte tio. Varje element måste hjälpa dig plugga, annars åker det. |
| **Gör en produkt förståelig** (Rams) | Man ska aldrig behöva tänka på var något finns. Max två klick till vilken uppgift som helst. |
| **Ärlig** (Rams) | Säkerhetsnivåer visar hur det faktiskt ligger till. Inga gröna bockar för "läst". |
| **Diskret** (Rams) | Sidan är ett verktyg, inte en upplevelse. Innehållet (matten) är det viktiga, inte gränssnittet. |
| **Fokus** (Apple) | En sak i taget på skärmen. Tentaläget tar över hela skärmen. |
| **Progressive disclosure** (Apple) | Visa det du behöver nu och gör resten nåbart med ett klick, men inte synligt hela tiden. |
| **Deference** (Apple) | UI:t viker undan för innehållet. Ingen dekoration, inga ikoner som inte betyder något. |

**En extra princip från *A Mind for Numbers*:** sidan ska göra det *svårt* att lura sig själv. Lösningsförslag döljs som standard, eftersom en synlig lösning lockar till att läsa i stället för att räkna (illusion av kompetens).

---

## 2. Informationsarkitektur

Tre huvudvyer och ett läge:

```
┌────────────────────────────────────────────┐
│  IDAG        KAPITEL        BANK            │   ← huvudnav, alltid synlig
└────────────────────────────────────────────┘

  IDAG     → vad du ska göra idag (från schemat)
  KAPITEL  → varje kapitel: säkerhet, gjorda uppgifter, kopplade tentauppgifter
  BANK     → alla tentor, övningstentor och diagnoser, med lösningar

  TENTALÄGE → helskärm, startas från Idag eller Bank, ingen nav synlig
```

**Strategin** (blocken från `mind-for-numbers-tentastrategi.md`) blir *inte* en egen huvudvy. Den dyker upp i sammanhang där den behövs (se avsnitt 7). En liten länk i sidfoten leder till alla block samlade.

### Varför just de tre

- **Idag** = *handling*. Det är här du är 90 % av tiden.
- **Kapitel** = *läget*. Var står jag? Var är jag svag?
- **Bank** = *materialet*. Att leta upp en specifik tenta eller uppgift.

De svarar på tre olika frågor och överlappar inte varandra.

---

## 3. Den viktigaste idén: uppgiften som minsta byggsten

All data byggs kring **en uppgift**. En uppgift i en gammal tenta är samma objekt oavsett om den visas under Idag, Kapitel eller Bank. Det är det som gör att navigeringen hänger ihop.

Varje uppgift har:

- **källa**: t.ex. *Tenta 2024-01-12, uppg. 3* eller *Diagnos 2, uppg. 1*
- **kapitel/avsnitt**: t.ex. 5.2 (Anton & Rorres-numrering)
- **typ**: kort tagg för metoden, t.ex. `egenvärden`, `invers`, `baskontroll`. Behövs för blandade pass.
- **lösningsförslag**: länk, bild eller text
- **status**: ej gjord / gjord med hjälp / gjord själv / sitter

> Statusen "gjord med hjälp" vs "gjord själv" är viktig: att ha *läst* en lösning är inte samma sak som att kunna uppgiften.

---

## 4. Vyerna i detalj

### 4.1 IDAG (startsida)

```
┌────────────────────────────────────────────┐
│  IDAG        KAPITEL        BANK            │
├────────────────────────────────────────────┤
│                                            │
│  Tisdag 20 okt                 7 dagar kvar│
│                                            │
│  ── Pass 1 ──────────────────────────────  │
│  Blandat: egenvärden, invers, baser        │
│  ○ Tenta 2023-08, uppg. 4        5.1       │
│  ○ Diagnos 3, uppg. 2            1.6       │
│  ○ Tenta 2024-01, uppg. 2        4.4       │
│                                 [Starta]   │
│                                            │
│  ── Pass 2 ──────────────────────────────  │
│  Hel övningstenta, 5 h                     │
│                          [Starta tentaläge]│
│                                            │
│  ── Repetera ────────────────────────────  │
│  Uppgifter du klarat för 3+ dagar sedan    │
│  ○ ...                                     │
│                                            │
└────────────────────────────────────────────┘
```

- **Överst:** dagens datum och dagar kvar till tentan. Ingen stor nedräkningsklocka, bara en siffra.
- **Pass:** dagens block från schemat, i ordning. Varje pass har en rubrik, en kort beskrivning och uppgifterna.
- **Uppgiftsrad:** källa till vänster, kapitel till höger. Klick öppnar uppgiften (avsnitt 5).
- **Repetera-sektion:** genereras automatiskt av uppgifter du klarat för några dagar sedan (spaced repetition). Ska *inte* skrivas för hand i schemat.
- **Navigera mellan dagar:** små pilar ← → vid datumet. Hela schemat som översikt nås via en länk "Visa hela schemat", som en enkel lista, inte en kalender.

### 4.2 KAPITEL

```
┌────────────────────────────────────────────┐
│  IDAG        KAPITEL        BANK            │
├────────────────────────────────────────────┤
│                                            │
│  1.1  Linjära ekvationssystem   ████████░░ │
│  1.2  Gausseliminering          ██████████ │
│  1.3  Matriser                  ██████░░░░ │
│  1.4  Inverser                  ███░░░░░░░ │   ← svaga syns direkt
│  ...                                       │
│                                            │
│  Sortera:  ordning · säkerhet              │
└────────────────────────────────────────────┘
```

- En lista med alla kapitel/avsnitt. **Säkerheten** (från din planeringsapp) visas som en enkel stapel. Det är grafiskt, så läget syns på en blick utan att läsa siffror.
- **Sortera på säkerhet** lägger de svagaste kapitlen överst, så att du ser var tiden ska läggas.
- Klick på ett kapitel fäller ut det (eller öppnar en undersida):

```
  1.4  Inverser                    ███░░░░░░░

  Bokuppgifter (från planeringsappen)
  ● 1, 3, 5, 7   ○ 9, 11, 13

  Tentauppgifter i det här kapitlet
  ○ Tenta 2023-08, uppg. 2
  ● Tenta 2024-01, uppg. 5    gjord själv
  ○ Diagnos 1, uppg. 4

  [Öva bara det här kapitlet]
```

- Här kopplas planeringsappen ihop med tentamaterialet. Bokuppgifterna du gjort *och* tentauppgifterna som hör till kapitlet syns på samma ställe.

### 4.3 BANK

```
┌────────────────────────────────────────────┐
│  IDAG        KAPITEL        BANK            │
├────────────────────────────────────────────┤
│                                            │
│  Alla · Gamla tentor · Övningstentor ·     │
│  Diagnoser                                  │
│                                            │
│  Tenta 2024-01-12           3/6 gjorda  →  │
│  Tenta 2023-08-21           0/6         →  │
│  Övningstenta A             6/6         →  │
│  Diagnos 1                  4/4         →  │
│  ...                                       │
└────────────────────────────────────────────┘
```

- Filter som enkla textflikar högst upp, inga dropdowns.
- Varje tenta är en rad med hur många uppgifter som är gjorda. Klick öppnar tentan med alla dess uppgifter i ordning, plus knappen **[Skriv som tenta]** som startar tentaläge.

---

## 5. Uppgiftsvyn

Den här vyn är densamma oavsett varifrån du kommer (Idag, Kapitel eller Bank).

```
┌────────────────────────────────────────────┐
│  ← Tillbaka                 Tenta 2024-01  │
├────────────────────────────────────────────┤
│                                            │
│  Uppgift 3                     5.2 · diag. │
│                                            │
│  [uppgiftstexten / bilden]                 │
│                                            │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │  Visa lösningsförslag                │  │   ← dolt som standard
│  └──────────────────────────────────────┘  │
│                                            │
│  Hur gick det?                             │
│  Gjord med hjälp · Gjord själv · Sitter    │
│                                            │
│                         Nästa uppgift →    │
└────────────────────────────────────────────┘
```

- **Lösningen är dold** tills du aktivt klickar. Om du har tid över kan klicket fråga "Har du räknat klart?". Det är en liten friktion som gör att du räknar innan du kollar.
- **Status sätts efter uppgiften**, med tre ärliga val. Det är detta som driver Repetera-sektionen och siffrorna i Bank.
- **Nästa uppgift →** går till nästa i *samma sammanhang*: nästa i passet om du kom från Idag, nästa i tentan om du kom från Bank.

---

## 6. Tentaläge

Startas från ett pass i Idag eller från en tenta i Bank.

- **Helskärm**: ingen navigering, inga lösningar och inga statusknappar synliga.
- Överst bara: tentans namn och en **timer**. Timern kan döljas, för vissa stressas av att se den.
- Alla uppgifter listade, så att du kan hoppa fritt mellan dem (det stöder *hard start, jump to easy*).
- **[Lämna in]** avslutar och visar alla lösningsförslag. Sedan går du igenom uppgift för uppgift och sätter status.
- Avbryta kräver en bekräftelse, så att du inte råkar lämna läget.

---

## 7. Strategin i sammanhang

Strategiblocken från boken visas där de är relevanta, som **en rad diskret text**, aldrig som popup:

| Var | Vilket block |
|---|---|
| Starta tentaläge | *Hard start, jump to easy* (block 12) |
| Inlämning i tentaläge | *Kontrollera svaren* (block 14) |
| Blandat pass i Idag | *Interleaving* (block 6) |
| Repetera-sektionen | *Spaced repetition* (block 7) |
| Klick på "Visa lösning" | *Illusioner av kompetens* (block 3) |
| Dagen innan tentan | *Sista dagen* + *Sömn* (block 15, 2) |
| Sidfot | Länk till alla block samlade |

Varje rad går att klicka för att läsa hela blocket. Det ska gå att stänga av, eftersom tips som syns hela tiden blir till brus efter en vecka.

---

## 8. Navigeringsregler

1. **Huvudnaven är alltid synlig** (utom i tentaläget) och alltid i samma ordning.
2. **Max två klick** från startsidan till vilken uppgift som helst.
3. **Tillbaka går alltid dit du kom ifrån**, inte till en fast plats.
4. **Inga sidomenyer, inga hamburgermenyer.** Tre ord räcker.
5. **URL:en speglar var du är** (t.ex. `#/kapitel/1.4`, `#/bank/tenta-2024-01/3`), så att bakåtknappen i webbläsaren fungerar och du kan bokmärka.
6. **Tangentbord (valfritt):** `←` `→` mellan uppgifter, `L` för att visa lösning, `1` `2` `3` för status.

---

## 9. Visuella regler

Inte en grafisk stil, utan *regler* för hur stilen ska väljas:

- **Ett typsnitt**, högst två vikter. Hierarki skapas med storlek och luft, inte med färger och boxar.
- **Gråskala som bas.** En enda accentfärg som **bara** används för något som betyder något, t.ex. säkerhetsnivå eller "nu". Används färgen för dekoration slutar den betyda något.
- **Vitt utrymme är struktur.** Avstånd delar in sidan i stället för linjer och ramar.
- **Inga ikoner** utan text, förutom de helt självklara (← →).
- **Matten renderas ordentligt**, t.ex. med KaTeX. Formler är innehållet och ska se bäst ut av allt.
- **Fungerar på mobilen** i första hand för Idag och Repetera, så att du kan bocka av på bussen. Tentaläge och Bank får vara datorfokuserade.
- **Ljust och mörkt läge** som följer systemet.

---

## 10. Data – hur sakerna hänger ihop

Fyra källor som sidan läser in:

```
uppgifter      ← en lista, en post per uppgift (källa, kapitel, typ, lösning, status)
tentor         ← en post per tenta/diagnos (namn, typ, datum, lista med uppgifts-id)
kapitel        ← från planeringsappen (avsnitt, säkerhet, gjorda bokuppgifter)
schema         ← du skriver senare: dag → pass → uppgifts-id eller kapitel
```

- **Schemat refererar bara till uppgifts-id och kapitel.** Det innehåller inga kopior av uppgifter, så om du ändrar en status syns det överallt.
- **Status sparas lokalt** (t.ex. `localStorage`) eller i samma format som planeringsappen, om du vill att de ska dela data.
- Kapitelnamnen ska vara **samma nyckel** i planeringsappen och på tentasidan (t.ex. `"1.4"`), annars går de inte att koppla ihop.

---

## 11. Det som medvetet *inte* är med

Lika viktigt som det som är med:

- ❌ Poäng, streaks och badges. Det blir motivation för fel sak.
- ❌ Stor nedräkningsklocka. Den skapar stress utan att hjälpa.
- ❌ Kalendervy för schemat. En lista räcker för två veckor.
- ❌ Synliga lösningar i listor.
- ❌ "Procent klart totalt" som huvudsiffra. Den säger inget om var du är svag; kapitelstaplarna gör det.
- ❌ Animationer utöver det som förklarar en övergång.

---

## 12. Byggordning (förslag)

Så att sidan går att använda tidigt, även innan allt är klart:

1. **Bank + uppgiftsvy.** Det räcker för att börja räkna tentor.
2. **Status** på uppgifter.
3. **Kapitelvyn** med data från planeringsappen.
4. **Idag** när schemat är skrivet.
5. **Tentaläge.**
6. Repetera-sektionen, strategirader och tangentbordsgenvägar.
