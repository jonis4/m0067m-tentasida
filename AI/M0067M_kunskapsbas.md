# Examinatorprofil: Linjär algebra M0067M (LTU), examinator Stefan Ericsson

Underlag: 9 tentor (3 riktiga tentor 2026-03-19, 2026-05-26 och 2026-08-27, 3 övningstentor xT1–xT3, 3 diagnostiska test diag1–diag3) och 8 lösningsförslag skrivna av examinatorn själv. diag3 har inget lösningsförslag. Använd profilen som instruktion för **hur** ett svar ska skrivas för att få full poäng.

## 1. Tentans form

- 9 uppgifter à 4 p. Uppgift 1–6 är **Del för godkänt** (GP) och uppgift 7–9 är **Del för högre betyg** (XP).
- Betyg 3: $GP\ge12$. Betyg 4: $GP\ge12$ och $XP\ge4$. Betyg 5: $GP\ge12$ och $XP\ge8$. Om $GP\ge18$ får man en extra XP-poäng. Bonuspoäng (från diagnostiska test) läggs till GP.
- Skrivtid 5 h. Inga hjälpmedel utöver skrivverktyg och linjal. Ett formelblad följer med tentan (se §6).
- Instruktionen på varje tenta, ordagrant: *"Till alla uppgifter ska fullständiga lösningar lämnas. Resonemang, införda beteckningar och uträkningar får inte vara så knapphändigt redovisade att de blir svåra att följa. Lösningarna ska vara systematiska och följa metoderna som behandlats i kursen."*
- Övriga anvisningar: en uppgift per lösningsblad, skriv inte på baksidan, ingen rödpenna.

## 2. Typisk uppgiftsfördelning (mönster över alla 9 tentor)

| Nr | Vanligaste typ |
|---|---|
| 1 | Gausselimination: lös ett system, bestäm vilka $\mathbf b$ som ger lösning, eller matrisekvation $X=\dots$ med invers |
| 2 | Linjär avbildning (rotation/spegling/sammansättning, eller "$T$ avbildar $\mathbf u$ på $\mathbf v$"), eller system med parameter $a$ |
| 3 | Geometri i $\mathbb R^3$: plan genom 3 punkter, linje–plan, avstånd. Ibland spegling eller projektion i en linje |
| 4 | Bas/dimension: linjärt oberoende med parameter, bas för col/null/span, koordinater |
| 5 | Diagonalisering, ofta med $A^5$ eller ett system av differentialekvationer |
| 6 | Inre produktrum ($\int_0^1 pq\,dx$), Gram–Schmidt, projektion eller minsta kvadrat |
| 7 | (VG) Determinantlagar ($\det[\mathbf b_1\ \mathbf b_2]$ via linjäritet), geometri/tillämpning eller bevis |
| 8 | (VG) Bästa approximation/projektion i funktionsrum, eller en egenvärdesteori-fråga |
| 9 | (VG) Bevis: underrum + bas, linjärt oberoende för egenvektorer/ortogonala mängder, definitioner |

## 3. Hur examinatorn vill ha svaret: generella regler

1. **Börja med att säga vad du gör.** Första raden är en kort strategi, t.ex. "Ställ upp motsvarande utökade koefficientmatris och gausseliminera", "Kalla matrisen $A$", "Uppgiften är att bestämma $\operatorname{proj}_{\mathbb P_1}x^3$". Inför och namnge beteckningar: "Låt $\mathbf u=\overrightarrow{AB}$".
2. **Följ kursens standardmetod**, inte genvägar. Lös system med radreducering av den utökade matrisen. Ta egenvärden ur $\det(\lambda I-A)=0$ (notera: $\lambda I-A$, inte $A-\lambda I$). Ta inversen ur $[A\mid I]\sim[I\mid A^{-1}]$ eller ur $2\times2$-formeln. Gör ortogonala baser med Gram–Schmidt och projektioner med projektionsformeln.
3. **Visa radreduceringen steg för steg** med "$\sim$" mellan matriserna. Markera (ringa in) pivotelementen och skriv sedan ut vilka variabler som är **bundna** och vilka som är **fria** ("$x,y$ bundna, $z=t$ fri"). Bakåtsubstituera och ge lösningen på parameter-/vektorform: $\mathbf x=\mathbf p+s\mathbf v_1+t\mathbf v_2$.
4. **Använd teorin med namn** när den bär argumentet: "enligt bassatsen", "dimensionssatsen", "enligt teorin", "$\det(AB)=\det A\det B$", "en matris är inverterbar omm $\det\neq0$". Ange vilken lag som används i varje steg, gärna med en pil eller ord under likhetstecknet: "enkel tr-lag", "$C\in H$", "transponatlag".
5. **Gör kontroller och skriv ut dem** i hakparentes:
   - Egenvärden: $[\text{Koll: }\lambda_1+\lambda_2=\operatorname{tr}A,\ \lambda_1\lambda_2=\det A]$. Detta görs i **varje** diagonaliseringsuppgift.
   - Plan genom tre punkter: sätt in alla tre punkterna i ekvationen.
   - Speglingsmatris: kontrollera att $A^2=I$.
   - Gram–Schmidt: kontrollera att skalärprodukterna är 0.
   - Koordinater: sätt ihop linjärkombinationen och se att det blir rätt element.
6. **Snygga till vektorer.** Skala bort bråk: "välj $3\mathbf v_2=(1,2,3,1)$", "välj $\begin{bmatrix}4\\3\end{bmatrix}$", "multiplicera med 4 för snyggare siffror". Detta görs med egenvektorer, normaler, riktningar och Gram–Schmidt-vektorer.
7. **Rita en figur** när det är geometri, en projektion eller Gram–Schmidt: plan med normal, vektor och projektion, eller spegling med $\mathbf x$, $S(\mathbf x)$ och linjen. Figuren behöver inte vara exakt, men den ska förklara idén.
8. **Svaret ska stå tydligt och avslutat**: inramat eller tydligt utskrivet till sist ("Svar: …", "Så …", "$\therefore$"). Exakta värden ska användas ($\frac{2}{\sqrt3}$, $\frac{1}{\sqrt{30}}$, bråk), aldrig decimaler.
9. **Svara på varje delfråga**, även på kontrollfrågor som "Vad avbildas $(1,1)$ på?" eller "Förklara varför $\mathcal B_a$ nu är en bas".
10. **Motivera, men kort.** Lösningarna är skisser med fullständiga *steg*, inte långa texter. En mening per resonemangssteg räcker.

## 4. Metodmallar per uppgiftstyp (så som examinatorn själv löser)

**Lösbarhet av $A\mathbf x=\mathbf b$:** sätt $\mathbf b=(b_1,\dots)$ och gausseliminera med $\mathbf b$ i högerledet. En nollrad i vänsterledet ger villkoret "högerledet $=0$". Svaret är ekvationen, t.ex. $4b_1+b_2-2b_3=0$.

**System med parameter $a$ (kvadratisk matris):** beräkna $\det A$ som polynom i $a$. Precis en lösning omm $\det A\neq0$. Behandla sedan *varje* rot separat med elimination och avgör "ingen lösning" (rad $[0\cdots0\mid c\neq0]$) eller "oändligt många" (ge lösningen på parameterform).

**Matrisekvation:** lös ut $X$ algebraiskt först (faktorisera $X$ till vänster eller höger, var noga med ordningen), t.ex. $(A+B^T+2I)X=A\iff X=(A+B^T+2I)^{-1}A$. Beräkna sedan.

**Standardmatris för $T$:** $A=[T(\mathbf e_1)\ T(\mathbf e_2)\ \dots]$. Om $T$ är given på andra vektorer, skriv $\mathbf e_j$ (eller den efterfrågade vektorn) som en linjärkombination av dem och utnyttja linjäriteten. "Vad avbildas på $\mathbf y$" löses som $A\mathbf x=\mathbf y$; säg uttryckligen "saknar lösning, alltså avbildas inget på …" om det inte går.

**Sammansatta avbildningar:** "först $R$, sedan $S$" ger $S\circ R$, med matris $SR$. Rotationsmatrisen finns på formelbladet. Speglingsmatriser tas ur figur ($S(\mathbf e_1)$, $S(\mathbf e_2)$). Inversen till en sammansättning är $(SR)^{-1}=R^{-1}S^{-1}$.

**Spegling/projektion i linje eller plan:** projicera på riktningen (eller normalen). Spegling: $S(\mathbf x)=2\operatorname{proj}_{\mathbf d}\mathbf x-\mathbf x$, eller $\mathbf x-2\operatorname{proj}_{\mathbf n}\mathbf x$. Projektion på plan: $\mathbf x-\operatorname{proj}_{\mathbf n}\mathbf x$, utskrivet till en matris.

**Plan genom tre punkter:** $\mathbf n=\overrightarrow{AB}\times\overrightarrow{AC}$, punkt–normalform $n_1(x-x_0)+\dots=0$, förenkla, och gör sedan koll med alla tre punkterna.

**Avstånd punkt–plan / linje–plan / linje–linje:** ta en vektor från en punkt i planet (eller på ena linjen) till punkten, projicera den på normalen, och avståndet är längden av projektionen. Visa först parallellitet ($\mathbf v\bullet\mathbf n=0$) eller att skärning saknas (inkonsistent system). Parallella linjer: avståndet fås med Pythagoras, $a^2=\|\mathbf v\|^2-\|\operatorname{proj}\|^2$.

**Linjärt oberoende:** "Antag $c_1\mathbf v_1+\dots=\mathbf 0$ och visa $c_1=\dots=0$". För polynom identifieras koefficienterna för $x^0,x^1,x^2$. Med parameter: L.O. omm $\det\neq0$. Bas följer sedan ur bassatsen ("tre L.O. element i ett tredimensionellt rum").

**Bas för $\operatorname{col}(A)$ / $\operatorname{span}$:** lägg vektorerna som kolonner, radreducera, och ta pivotkolonnerna **i ursprungsmatrisen** som bas. Utöka till en bas för $\mathbb R^n$ genom att välja ett $\mathbf b$ som gör $A\mathbf x=\mathbf b$ olösbart.

**Bas för $\operatorname{null}(A)$:** lös $A\mathbf x=\mathbf 0$, sätt de fria variablerna till $s,t,u$ och dela upp lösningen i en vektor per parameter. Vektorerna "spänner upp och är uppenbart L.O.".

**Diagonalisering:**
1. Ta egenvärden ur $\det(\lambda I-A)=0$. För $3\times3$: gör rad-/kolumnoperationer för att bryta ut en faktor $(\lambda-c)$ innan du utvecklar. Koll med spår och determinant.
2. För varje $\lambda$: radreducera $(\lambda I-A)\mathbf v=\mathbf 0$, ange bundna och fria variabler och välj snygga egenvektorer.
3. Vid dubbelrot: konstatera "två fria variabler, så det går att diagonalisera".
4. Svaret: $A=PDP^{-1}$ med $P$ och $D$ explicit och kolonnerna i samma ordning.
5. Potens: $A^n=PD^nP^{-1}$, med $P^{-1}$ ur $2\times2$-formeln.

**Differentialekvationssystem:** skriv på matrisform $\mathbf y'=A\mathbf y$. Gör variabelbytet $\mathbf y=P\mathbf u$, vilket ger $P\mathbf u'=AP\mathbf u$, alltså $\mathbf u'=D\mathbf u$. Lös $u_i=c_ie^{\lambda_ix}$, sätt tillbaka $\mathbf y=P\mathbf u$ och bestäm konstanterna ur begynnelsevillkoren. Rama in svaret för $y$ och $z$.

**Minsta kvadrat:** sätt in datapunkterna i modellen. Konstatera "systemet är inkonsistent". Skriv $A\begin{bmatrix}\alpha\\\beta\end{bmatrix}=\mathbf b$, lös normalekvationen $A^TA\hat{\mathbf x}=A^T\mathbf b$, ange funktionen och rita gärna datapunkterna med kurvan.

**Gram–Schmidt:** $\mathbf v_1=\mathbf u_1$, $W_1=\operatorname{span}\{\mathbf v_1\}$, $\mathbf v_2=\mathbf u_2-\operatorname{proj}_{W_1}\mathbf u_2$, skala, $W_2=\dots$ och så vidare. Projektionen skrivs ut med formeln $\frac{\langle\mathbf u,\mathbf v\rangle}{\langle\mathbf v,\mathbf v\rangle}\mathbf v$. Anmärkning som examinatorn själv gör: om vektorerna inte är L.O. syns det genom att någon $\mathbf v_k$ blir $\mathbf 0$.

**Projektion/bästa approximation i funktionsrum:** formulera om problemet till "$\operatorname{proj}_W f$". Ett minimeringsproblem $\int(\dots)^2$ ska känns igen som $\|f-p\|^2$. Ortogonalisera basen för $W$ och samla skalärprodukterna separat under rubriken "Några skalärprodukter". Använd att en udda integrand ger 0 på $[-1,1]$. Ange svaret som polynom.

**Underrum (bevis):** tre punkter: (1) $\mathbf 0\in H$, (2) $C,D\in H\Rightarrow C+D\in H$, (3) $C\in H\Rightarrow\alpha C\in H$, med motivering i varje steg. Bas: skriv ett allmänt element, översätt villkoret till ekvationer, lös och dela upp efter fria parametrar.

**Determinantlagar:** använd linjäritet i varje kolumn, teckenbyte vid byte av kolumner, att linjärt beroende kolumner ger 0 och att $\det(cA)=c^n\det A$. Skriv ut varje steg. För "lös $A\mathbf x=\mathbf b_1-\mathbf b_2$": skriv högerledet som en kombination av $\mathbf a_1,\mathbf a_2$ och läs av $\mathbf x$. Unikheten följer av $\det A\neq0$.

**Bevis allmänt:** "Antag … och visa …". Använd definitionen (skriv ut den när det efterfrågas, t.ex. "$\mathbf v\neq\mathbf 0$ och $A\mathbf v=\lambda\mathbf v$"). Typiska knep: multiplicera med $A$ och subtrahera $\lambda_1\cdot(1)$; ta skalärprodukten med $\mathbf u_j$; $\operatorname{col}(AB)\subseteq\operatorname{col}(A)$; $\operatorname{rank}A=\operatorname{rank}A^T$; dimensionssatsen $\operatorname{rank}A+\dim\operatorname{null}A=n$. Ett motexempel eller en kommentar om "åtminstone" uppskattas.

## 5. Notation examinatorn använder

- Vektorer med fet stil eller streck: $\mathbf u$, $\bar u$. Punkter skrivs $(x,y,z)$ och kolonnvektorer $\begin{bmatrix}\cdot\end{bmatrix}$.
- Skalärprodukt $\bullet$ i $\mathbb R^n$ och $\langle\cdot,\cdot\rangle$ i allmänna rum. $\operatorname{proj}_{\mathbf n}\mathbf u$, $\operatorname{proj}_W$, $\operatorname{span}$, $\operatorname{col}$, $\operatorname{null}$, $\operatorname{rank}$, $\operatorname{tr}$, $\mathbb P_n$, $M_{2\times2}$, $[\mathbf x]_{\mathcal B}$.
- Ord som återkommer: "bundna/fria", "pivot", "utökade koefficientmatrisen", "identifiera" (koefficienter), "ok", "Koll", "välj", "omm", "L.O."/"L.B.", "$\therefore$/så".

## 6. Formelbladet som följer med tentan

1. $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}\Rightarrow A^{-1}=\frac1{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$
2. Rotationsmatris $\alpha$ radianer moturs: $\begin{bmatrix}\cos\alpha&-\sin\alpha\\\sin\alpha&\cos\alpha\end{bmatrix}$
3. $\mathbf u\bullet\mathbf v=u_1v_1+u_2v_2+u_3v_3$; $\mathbf u\times\mathbf v=(u_2v_3-v_2u_3,\ v_1u_3-u_1v_3,\ u_1v_2-v_1u_2)$; $\operatorname{proj}_{\mathbf v}\mathbf u=\frac{\mathbf u\bullet\mathbf v}{\|\mathbf v\|^2}\mathbf v$; $\mathbf u\times(\mathbf v\times\mathbf w)=(\mathbf u\bullet\mathbf w)\mathbf v-(\mathbf u\bullet\mathbf v)\mathbf w$; $\begin{vmatrix}u_1&u_2&u_3\\v_1&v_2&v_3\\w_1&w_2&w_3\end{vmatrix}=\mathbf u\bullet(\mathbf v\times\mathbf w)$
4. $P=P_{\mathcal B\to\mathcal C}=[[\mathbf u_1]_{\mathcal C}\dots[\mathbf u_n]_{\mathcal C}]$, $[\mathbf x]_{\mathcal C}=P[\mathbf x]_{\mathcal B}$
5. $\{\mathbf v_1,\dots,\mathbf v_p\}$ ortogonal bas för $V$: $\operatorname{proj}_V\mathbf u=\sum_{j=1}^p\frac{\langle\mathbf u,\mathbf v_j\rangle}{\|\mathbf v_j\|^2}\mathbf v_j$

## 7. Instruktion till en AI som ska svara som examinatorn vill

> Du hjälper en student i M0067M Linjär algebra (LTU). Skriv lösningar på svenska i samma stil som examinatorn Stefan Ericssons lösningsförslag: börja med en mening om strategin, använd kursens standardmetod och visa alla radreduceringar med $\sim$. Ange bundna och fria variabler, hänvisa till satser vid namn, gör en utskriven [Koll: …] där det går (särskilt spår/determinant för egenvärden) och skala vektorer till heltal. Beskriv en figur vid geometri, ge exakta svar och avsluta med ett tydligt inramat svar. Håll motiveringen kort men låt inget steg vara så knapphändigt att det blir svårt att följa. Om studenten visar en egen lösning: bedöm den mot dessa krav och säg konkret vad som skulle kosta poäng.


---

# Uppgiftsbank M0067M

Format per uppgift: `## [tenta-id] Uppgift n | poäng | G/VG | ämnen`, följt av uppgift och examinatorns lösning. Tenta-id: t260827 = Tenta 27 aug 2026 (2026-08-27), t260526 = Tenta 26 maj 2026 (2026-05-26), t260319 = Tenta 19 mars 2026 (2026-03-19), xT3 = Övningstenta 3 (2026-01), xT2 = Övningstenta 2 (2025-02-30), xT1 = Övningstenta 1 (2024-12-24), diag3 = Diagnostiskt test 3 (2024-12-24), diag2 = Diagnostiskt test 2 (2024-12-24), diag1 = Diagnostiskt test 1 (2024-12-24).

# t260827 | Tenta 27 aug 2026 | 2026-08-27 | Lösningsförslag (handskrivet)

## [t260827] Uppgift 1 | 4p | G | Matrisekvationer, invers

**Uppgift:**
Låt $A=\begin{bmatrix}1&2\\-1&0\end{bmatrix}$, $B=\begin{bmatrix}1&2\\-3&4\end{bmatrix}$. Bestäm $X$ så att
$$AX+(X^TB)^T=A-2X.$$

**Lösning:**
Lös $X$ ur:
$$AX+(X^TB)^T=A-2X\iff AX+B^TX=A-2X\iff AX+B^TX+2X=A\iff(A+B^T+2I)X=A\iff X=(A+B^T+2I)^{-1}A.$$
Invers:
$$A+B^T+2I=\begin{bmatrix}1&2\\-1&0\end{bmatrix}+\begin{bmatrix}1&-3\\2&4\end{bmatrix}+\begin{bmatrix}2&0\\0&2\end{bmatrix}=\begin{bmatrix}4&-1\\1&6\end{bmatrix}.$$
Detta ger
$$(A+B^T+2I)^{-1}=\frac1{25}\begin{bmatrix}6&1\\-1&4\end{bmatrix}.$$
$$X=\frac1{25}\begin{bmatrix}6&1\\-1&4\end{bmatrix}\begin{bmatrix}1&2\\-1&0\end{bmatrix}=\frac1{25}\begin{bmatrix}5&12\\-5&-2\end{bmatrix}.$$
**Svar:** $X=\frac1{25}\begin{bmatrix}5&12\\-5&-2\end{bmatrix}$.

## [t260827] Uppgift 2 | 4p | G | Ekvationssystem med parameter, determinant

**Uppgift:**
Låt $a$ vara en reell parameter och betrakta
$$\begin{bmatrix}0&a-1&1\\-1&a&-1\\-2&2&a\end{bmatrix}\mathbf x=\begin{bmatrix}2\\0\\a\end{bmatrix}.$$
För vilka värden på $a$ har ekvationen precis en lösning? Ingen lösning? Oändligt många lösningar? Bestäm också lösningarna i de eventuella fall då oändligt många lösningar finns.

**Lösning:**
Ekvationen $A\mathbf x=\mathbf b$; eftersom $A$ är kvadratisk, använd determinant. Utveckla efter första kolonnen:
$$\det(A)=\begin{vmatrix}0&a-1&1\\-1&a&-1\\-2&2&a\end{vmatrix}=0\cdot|\cdots|-(-1)\begin{vmatrix}a-1&1\\2&a\end{vmatrix}+(-2)\begin{vmatrix}a-1&1\\a&-1\end{vmatrix}$$
$$=a^2-a-2+(-2)(-a+1-a)=a^2+3a-4.$$
$$\det A=0\iff a=-\tfrac32\pm\sqrt{\tfrac94+\tfrac{16}4}=-\tfrac32\pm\tfrac52,\ \text{dvs }a=-4\text{ eller }1.$$
Precis en lösning $\iff a\neq-4$ och $a\neq1$.

De återstående fallen behandlas separat.

$a=-4$: den utökade koefficientmatrisen:
$$\left[\begin{array}{ccc|c}0&-5&1&2\\-1&-4&-1&0\\-2&2&-4&-4\end{array}\right]\sim\left[\begin{array}{ccc|c}1&4&1&0\\0&-5&1&2\\-2&2&-4&-4\end{array}\right]\sim\left[\begin{array}{ccc|c}1&4&1&0\\0&-5&1&2\\0&10&-2&-4\end{array}\right]\sim\left[\begin{array}{ccc|c}\boxed1&4&1&0\\0&\boxed{-5}&1&2\\0&0&0&0\end{array}\right].$$
$x_1,x_2$ bundna, $x_3=t$ fri. $x_2=(2-t)/(-5)=-\frac25+\frac15t$, $x_1=\frac85-\frac45t-t=\frac85-\frac95t$.
$$\mathbf x=\left(\tfrac85,-\tfrac25,0\right)+t\left(-\tfrac95,\tfrac15,1\right),\ t\in\mathbb R.$$
$a=1$: den utökade koefficientmatrisen:
$$\left[\begin{array}{ccc|c}0&0&1&2\\-1&1&-1&0\\-2&2&1&1\end{array}\right]\sim\left[\begin{array}{ccc|c}1&-1&1&0\\0&0&1&2\\-2&2&1&1\end{array}\right]\sim\left[\begin{array}{ccc|c}1&-1&1&0\\0&0&1&2\\0&0&3&1\end{array}\right]\sim\left[\begin{array}{ccc|c}1&-1&1&0\\0&0&1&2\\0&0&0&-5\end{array}\right]\leftarrow$$
lösning saknas ($0x_1+0x_2+0x_3=-5$ ???).

**Svar:**
- $a=1$: lösning saknas.
- $a=-4$: oändligt många lösningar, $\mathbf x=\left(\frac85,-\frac25,0\right)+t\left(-\frac95,\frac15,1\right)$, $t\in\mathbb R$ (kanske snyggare med $t(-9,1,5)$).
- Annars precis en lösning.

## [t260827] Uppgift 3 | 4p | G | Spegling i linje, projektion, standardmatris

**Uppgift:**
Bestäm matrisen för den avbildning som speglar i linjen $x+3y=0$. Vad speglas $(2,1)$ på?

**Lösning:**
$x+3y=0\iff y=-\frac13x$. Riktning för linjen: $(3,-1)$.

Bestäm på vad $(1,0)$ resp. $(0,1)$ speglas på.

[Figur: linjen, $(1,0)$, dess projektion $\mathbf p$ på linjen och spegelbilden $S(1,0)$; vektorn $\mathbf p-(1,0)$.]

Vi utläser
$$S(1,0)=(1,0)+2(\mathbf p-(1,0))=2\mathbf p-(1,0),$$
där
$$\mathbf p=\operatorname{proj}_{(3,-1)}(1,0)=\frac{(1,0)\bullet(3,-1)}{(3,-1)\bullet(3,-1)}(3,-1)=\frac3{10}(3,-1).$$
Alltså
$$S(1,0)=\tfrac35(3,-1)-(1,0)=\tfrac15\big((9,-3)-(5,0)\big)=\tfrac15(4,-3).$$
Analogt för $(0,1)$: $\mathbf p=\frac{(0,1)\bullet(3,-1)}{10}(3,-1)=-\frac1{10}(3,-1)$ och
$$S(0,1)=(0,1)+2(\mathbf p-(0,1))=-(0,1)-\tfrac15(3,-1)=-\tfrac15\big((0,5)+(3,-1)\big)=-\tfrac15(3,4)=\tfrac15(-3,-4).$$
$$A=[S]=[S(\mathbf e_1)\ S(\mathbf e_2)]=\frac15\begin{bmatrix}4&-3\\-3&-4\end{bmatrix}\quad(\text{kontrollera }A^2=I).$$
$$S(2,1)=A\begin{bmatrix}2\\1\end{bmatrix}=\frac15\begin{bmatrix}4&-3\\-3&-4\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=\frac15\begin{bmatrix}5\\-10\end{bmatrix}=\begin{bmatrix}1\\-2\end{bmatrix}.$$
[Figur: en L-formad figur och dess spegelbild i linjen $x+3y=0$.]

*Transkriberarens not: originalet skriver "kontrollera $A^2=A$"; för en spegling ska det vara $A^2=I$.*

**Svar:** $A=\frac15\begin{bmatrix}4&-3\\-3&-4\end{bmatrix}$; $(2,1)\mapsto(1,-2)$.

## [t260827] Uppgift 4 | 4p | G | Kolonnrum, nollrum, bas, koordinater

**Uppgift:**
Låt
$$A=\begin{bmatrix}1&1&-1&-1&2&0\\1&1&0&1&3&1\\-2&-2&2&2&-4&1\\1&1&1&3&4&6\end{bmatrix}\ \text{och}\ \mathbf b=\begin{bmatrix}-3\\1\\1\\-1\\1\\0\end{bmatrix}.$$
Bestäm en bas för $\operatorname{col}(A)$ och en bas för $\operatorname{null}(A)$. Bestäm koordinaterna för $\mathbf b$ relativt basen för nollrummet du just bestämt.

**Lösning:**
Vi börjar med att gausseliminera:
$$A\sim\begin{bmatrix}1&1&-1&-1&2&0\\0&0&1&2&1&1\\0&0&0&0&0&1\\0&0&2&4&2&6\end{bmatrix}\sim\begin{bmatrix}1&1&-1&-1&2&0\\0&0&1&2&1&1\\0&0&0&0&0&1\\0&0&0&0&0&4\end{bmatrix}\sim\begin{bmatrix}\boxed1&1&-1&-1&2&0\\0&0&\boxed1&2&1&1\\0&0&0&0&0&\boxed1\\0&0&0&0&0&0\end{bmatrix}.$$
Kolumnerna 1, 3, 6 är pivotkolumner. Motsvarande kolumner i $A$ utgör därför en bas för kolumnrummet:
$$\text{En bas för }\operatorname{col}(A)\text{ är }\left\{\begin{bmatrix}1\\1\\-2\\1\end{bmatrix},\begin{bmatrix}-1\\0\\2\\1\end{bmatrix},\begin{bmatrix}0\\1\\1\\6\end{bmatrix}\right\}.$$
För nollrummet: lös $A\mathbf x=\mathbf 0$; $x_1,x_3,x_6$ bundna; $x_2=s$, $x_4=t$, $x_5=u$ fria.
$x_6=0$, $x_3=-2t-u$, $x_1=-s+(-2t-u)+t-2u=-s-t-3u$.
$$\mathbf x=\begin{bmatrix}-s-t-3u\\s\\-2t-u\\t\\u\\0\end{bmatrix}=s\begin{bmatrix}-1\\1\\0\\0\\0\\0\end{bmatrix}+t\begin{bmatrix}-1\\0\\-2\\1\\0\\0\end{bmatrix}+u\begin{bmatrix}-3\\0\\-1\\0\\1\\0\end{bmatrix}.$$
En bas för $\operatorname{null}(A)$ är
$$\mathcal B=\left\{\begin{bmatrix}-1\\1\\0\\0\\0\\0\end{bmatrix},\begin{bmatrix}-1\\0\\-2\\1\\0\\0\end{bmatrix},\begin{bmatrix}-3\\0\\-1\\0\\1\\0\end{bmatrix}\right\}.$$
Koordinaterna för $\mathbf b$:
$$\begin{bmatrix}-3\\1\\1\\-1\\1\\0\end{bmatrix}=\alpha\begin{bmatrix}-1\\1\\0\\0\\0\\0\end{bmatrix}+\beta\begin{bmatrix}-1\\0\\-2\\1\\0\\0\end{bmatrix}+\gamma\begin{bmatrix}-3\\0\\-1\\0\\1\\0\end{bmatrix}.$$
Betrakta position 2, 4, 5 och vi finner $\alpha=1$, $\beta=-1$, $\gamma=1$.

**Svar:** Bas för $\operatorname{col}(A)$ se ovan; bas $\mathcal B$ för $\operatorname{null}(A)$ se ovan; $[\mathbf b]_{\mathcal B}=\begin{bmatrix}1\\-1\\1\end{bmatrix}$.

## [t260827] Uppgift 5 | 4p | G | Egenvärden, diagonalisering

**Uppgift:**
Diagonalisera följande matris,
$$A=\begin{bmatrix}-2&-3&3\\-3&-2&3\\-3&-3&4\end{bmatrix},$$
det vill säga finn matriser $P$ och $D$, $D$ diagonal, så att $A=PDP^{-1}$.

**Lösning:**
Bestäm egenvärden och egenvektorer.

**Egenvärden:** kar.ekv. $\det(\lambda I-A)=0$:
$$\begin{vmatrix}\lambda+2&3&-3\\3&\lambda+2&-3\\3&3&\lambda-4\end{vmatrix}=0\iff\begin{vmatrix}\lambda+2&3&-3\\3&\lambda+2&-3\\0&-\lambda+1&\lambda-1\end{vmatrix}=0\iff(\lambda-1)\begin{vmatrix}\lambda+2&3&-3\\3&\lambda+2&-3\\0&-1&1\end{vmatrix}=0$$
(rad 2 drogs från rad 3; sedan bröts $\lambda-1$ ut ur sista raden). Utveckla efter sista raden:
$$(\lambda-1)\left(-(-1)\underbrace{\begin{vmatrix}\lambda+2&-3\\3&-3\end{vmatrix}}_{=-3\lambda+3}+1\underbrace{\begin{vmatrix}\lambda+2&3\\3&\lambda+2\end{vmatrix}}_{=\lambda^2+4\lambda-5}\right)=0\iff(\lambda-1)(\lambda^2+\lambda-2)=0\iff(\lambda-1)^2(\lambda+2)=0.$$
[$\lambda^2+\lambda-2=0\iff\lambda=-\frac12\pm\sqrt{\frac14+\frac84}=-\frac12\pm\frac32=-2;1$.]

Egenvärdena: $1$ (mult 2); $-2$. [Koll: $1+1+(-2)=0$, $\operatorname{tr}A=-2-2+4=0$.]

**Egenvektorer:**
$\lambda=1$: $A\mathbf v=\mathbf v\iff(I-A)\mathbf v=\mathbf 0$:
$$\left[\begin{array}{ccc|c}3&3&-3&0\\3&3&-3&0\\3&3&-3&0\end{array}\right]\sim\left[\begin{array}{ccc|c}\boxed1&1&-1&0\\0&0&0&0\\0&0&0&0\end{array}\right].$$
$x_1$ bunden, $x_2=s$, $x_3=t$ fria, $x_1=-s+t$:
$$\mathbf v=\begin{bmatrix}-s+t\\s\\t\end{bmatrix}=s\begin{bmatrix}-1\\1\\0\end{bmatrix}+t\begin{bmatrix}1\\0\\1\end{bmatrix}.\quad\text{Välj }\begin{bmatrix}-1\\1\\0\end{bmatrix},\begin{bmatrix}1\\0\\1\end{bmatrix}.$$
$\lambda=-2$: $A\mathbf v=-2\mathbf v\iff(-2I-A)\mathbf v=\mathbf 0$:
$$\left[\begin{array}{ccc|c}0&3&-3&0\\3&0&-3&0\\3&3&-6&0\end{array}\right]\sim\left[\begin{array}{ccc|c}3&0&-3&0\\0&3&-3&0\\0&3&-3&0\end{array}\right]\sim\left[\begin{array}{ccc|c}\boxed1&0&-1&0\\0&\boxed1&-1&0\\0&0&0&0\end{array}\right].$$
$x_1,x_2$ bundna, $x_3=t$ fri, $x_2=t$, $x_1=t$. $\mathbf v=t\begin{bmatrix}1\\1\\1\end{bmatrix}$; välj $\begin{bmatrix}1\\1\\1\end{bmatrix}$.

**Svar:** $A=PDP^{-1}$ med
$$P=\begin{bmatrix}-1&1&1\\1&0&1\\0&1&1\end{bmatrix},\quad D=\begin{bmatrix}1&0&0\\0&1&0\\0&0&-2\end{bmatrix}.$$

## [t260827] Uppgift 6 | 4p | G | Inre produktrum, ortogonalitet, projektion

**Uppgift:**
Betrakta $\mathbb P_2$, polynomen av gradtal maximalt två, med skalärprodukten
$$\langle p,q\rangle=\int_0^1p(x)q(x)\,dx.$$
a) Bestäm $\alpha$ så att $\{x^2-\alpha,x\}$ är en ortogonal mängd i $\mathbb P_2$.
b) Bestäm den ortogonala projektionen av $f(x)=1$ på
$$W=\operatorname{span}\{x^2-\alpha,x\}$$
med värdet på $\alpha$ från a)-uppgiften.

**Lösning:**
a) Att det är en ortogonalmängd betyder att elementen är parvis ortogonala; här blir det $\langle x^2-\alpha,x\rangle=0$. Vi får:
$$\langle x^2-\alpha,x\rangle=\int_0^1(x^2-\alpha)x\,dx=\int_0^1(x^3-\alpha x)\,dx=\frac14-\frac\alpha2=0\iff\alpha=\frac12.$$
b)
$$\operatorname{proj}_W1=\frac{\langle1,x^2-\frac12\rangle}{\langle x^2-\frac12,x^2-\frac12\rangle}\left(x^2-\tfrac12\right)+\frac{\langle1,x\rangle}{\langle x,x\rangle}x.$$
Några skalärprodukter (*):
$$\langle1,x^2-\tfrac12\rangle=\int_0^1\left(x^2-\tfrac12\right)dx=\tfrac13-\tfrac12=-\tfrac16,$$
$$\langle x^2-\tfrac12,x^2-\tfrac12\rangle=\int_0^1\left(x^4-x^2+\tfrac14\right)dx=\tfrac15-\tfrac13+\tfrac14=\frac{12-20+15}{60}=\frac7{60},$$
$$\langle1,x\rangle=\int_0^1x\,dx=\tfrac12,\qquad\langle x,x\rangle=\int_0^1x^2\,dx=\tfrac13.$$
$$\operatorname{proj}_W1\overset{(*)}{=}\frac{-1/6}{7/60}\left(x^2-\tfrac12\right)+\frac{1/2}{1/3}x=-\frac{10}7\left(x^2-\tfrac12\right)+\frac32x=-\frac{10}7x^2+\frac32x+\frac57.$$
**Svar:** a) $\alpha=\frac12$; b) $\operatorname{proj}_W1=-\frac{10}{7}x^2+\frac32x+\frac57$.

## [t260827] Uppgift 7 | 4p | VG | Linjär avbildning, parallellprojektion på plan, tillämpning

**Uppgift:**
I en brant backe står en vägskylt. Vi lägger ut ett koordinatsystem med stolpen längs $z$-axeln och origo där stolpen möter marken. I närheten av vägskylten beskrivs marken av $x-2y+6z=0$. Koordinaterna för triangelns hörn är $(0,0,2)$, $(-1/5,0,12/5)$ respektive $(1/5,0,12/5)$ (enheten är meter). Samtidigt skiner solen och den befinner sig i punkten $a(2,2,3)$ med $a\approx3{,}6\cdot10^{10}$. Solen är så långt bort att dess strålar kan antas komma in parallellt. Var faller skuggan?
Ledning: Bestäm matrisen för avbildningen som tar en punkt i rummet till den punkten där skuggan fallet. Bestäm sedan var triangelns hörn avbildas.

[Figur: lutande markplan, vägskylt (triangel på stolpe) och parallella solstrålar.]

**Lösning:**
Skuggan av $(x,y,z)$ är där linjen $(x,y,z)+t(2,2,3)$ skär planet. Sätt in i planets ekvation:
$$x+2t-2(y+2t)+6(z+3t)=0.$$
Detta ger: $t=(-x+2y-6z)/16$. Så skuggan faller i
$$(x,y,z)+\frac{-x+2y-6z}{16}(2,2,3)=\frac1{16}(14x+4y-12z,\ -2x+20y-12z,\ -3x+6y-2z)=\underbrace{\frac1{16}\begin{bmatrix}14&4&-12\\-2&20&-12\\-3&6&-2\end{bmatrix}}_{\text{matrisen för avbildningen}}\begin{bmatrix}x\\y\\z\end{bmatrix}.$$
Var hamnar hörnen?
$$\frac1{16}\begin{bmatrix}14&4&-12\\-2&20&-12\\-3&6&-2\end{bmatrix}\begin{bmatrix}0\\0\\2\end{bmatrix}=\frac1{16}\begin{bmatrix}-24\\-24\\-4\end{bmatrix},$$
$$\frac1{16}\begin{bmatrix}14&4&-12\\-2&20&-12\\-3&6&-2\end{bmatrix}\begin{bmatrix}-1/5\\0\\12/5\end{bmatrix}=\frac1{80}\begin{bmatrix}-158\\-142\\-21\end{bmatrix},\qquad\frac1{16}\begin{bmatrix}14&4&-12\\-2&20&-12\\-3&6&-2\end{bmatrix}\begin{bmatrix}1/5\\0\\12/5\end{bmatrix}=\frac1{80}\begin{bmatrix}-130\\-146\\-27\end{bmatrix}.$$
**Svar:** Hörnen hamnar i $\left(-\frac32,-\frac32,-\frac14\right)$, $\frac1{80}(-158,-142,-21)$ respektive $\frac1{80}(-130,-146,-27)$.

## [t260827] Uppgift 8 | 4p | VG | Diagonalisering, matrisrötter, bevis

**Uppgift:**
Låt $A$ vara en diagonaliserbar $3\times3$ matris med samtliga egenvärden större än noll. Visa att det finns åtminstone åtta olika $X$ så att $X^2=A$.

**Lösning:**
$$A=PDP^{-1}=P\begin{bmatrix}\lambda_1&&0\\&\lambda_2&\\0&&\lambda_3\end{bmatrix}P^{-1}.$$
Bilda
$$X=P\begin{bmatrix}\pm\sqrt{\lambda_1}&&0\\&\pm\sqrt{\lambda_2}&\\0&&\pm\sqrt{\lambda_3}\end{bmatrix}P^{-1}=P\tilde DP^{-1}$$
(detta ger 8 matriser, $\pm$ på tre positioner, $2^3=8$). Man får:
$$X^2=P\tilde DP^{-1}P\tilde DP^{-1}=P\tilde D^2P^{-1}=PDP^{-1}=A.$$
Men är alla olika? Ja, ty
$$PGP^{-1}=PHP^{-1}\iff P^{-1}PGP^{-1}=P^{-1}PHP^{-1}\iff GP^{-1}=HP^{-1}\iff GP^{-1}P=HP^{-1}P\iff G=H.$$
Åtminstone? Hm, $\begin{bmatrix}\cos\theta&\sin\theta&0\\\sin\theta&-\cos\theta&0\\0&0&1\end{bmatrix}$ kvadrerar till $I$ för alla $\theta$, så oändligt många om $A=I$.

## [t260827] Uppgift 9 | 4p | VG | Inre produktrum, ortogonal mängd, linjärt oberoende, koordinater

**Uppgift:**
Låt $V$ vara ett skalärproduktsrum. Visa att en ortogonal mängd av nollskilda element är linjärt oberoende. Härled också en formel för koordinaterna relativt en ortogonal bas.

**Lösning:**
$\{\mathbf u_1,\dots,\mathbf u_n\}$ ortogonal mängd, $\mathbf u_j\neq\mathbf 0$.

**L.O.:** Antag $c_1\mathbf u_1+\dots+c_j\mathbf u_j+\dots+c_n\mathbf u_n=\mathbf 0$. Tag skalärprodukten med $\mathbf u_j$:
$$\langle c_1\mathbf u_1+\dots+c_j\mathbf u_j+\dots+c_n\mathbf u_n,\mathbf u_j\rangle=\langle\mathbf 0,\mathbf u_j\rangle\iff c_1\underbrace{\langle\mathbf u_1,\mathbf u_j\rangle}_{=0}+\dots+c_j\underbrace{\langle\mathbf u_j,\mathbf u_j\rangle}_{=\|\mathbf u_j\|^2}+\dots+c_n\underbrace{\langle\mathbf u_n,\mathbf u_j\rangle}_{=0}=0$$
$$\iff c_j\|\mathbf u_j\|^2=0.$$
Men $\|\mathbf u_j\|\neq0$ ty $\mathbf u_j\neq\mathbf 0$, så $c_j=0$. Detta gjordes oavsett $j$, så $c_1=c_2=\dots=c_n=0$; alltså L.O.

**Formel för koordinater:** $\{\mathbf u_1,\dots,\mathbf u_n\}$ ortogonal bas. Antag $c_1\mathbf u_1+\dots+c_n\mathbf u_n=\mathbf y$. Tag $\langle\cdot,\cdot\rangle$ med $\mathbf u_j$; som ovan fås $c_j\|\mathbf u_j\|^2=\langle\mathbf y,\mathbf u_j\rangle$, dvs
$$c_j=\frac{\langle\mathbf y,\mathbf u_j\rangle}{\|\mathbf u_j\|^2},\quad j=1,\dots,n.$$

# t260526 | Tenta 26 maj 2026 | 2026-05-26 | Lösningsförslag (handskrivet)

## [t260526] Uppgift 1 | 4p | G | Linjära ekvationssystem, Gausselimination

**Uppgift:**
Bestäm samtliga lösningar till
$$\begin{cases}x-y+2z+3v=0\\-2x+2y-2z-u-4v=-2\\x-y+2z+2v=1\\-x+y-4z+u-2v=-1.\end{cases}$$

**Lösning:**
Ställ upp motsvarande utökade koefficientmatris (variabelordning $x,y,z,u,v$) och gausseliminera:
$$\left[\begin{array}{ccccc|c}1&-1&2&0&3&0\\-2&2&-2&-1&-4&-2\\1&-1&2&0&2&1\\-1&1&-4&1&-2&-1\end{array}\right]\sim\left[\begin{array}{ccccc|c}1&-1&2&0&3&0\\0&0&2&-1&2&-2\\0&0&0&0&-1&1\\0&0&-2&1&1&-1\end{array}\right]$$
$$\sim\left[\begin{array}{ccccc|c}1&-1&2&0&3&0\\0&0&2&-1&2&-2\\0&0&0&0&-1&1\\0&0&0&0&3&-3\end{array}\right]\sim\left[\begin{array}{ccccc|c}\boxed1&-1&2&0&3&0\\0&0&\boxed2&-1&2&-2\\0&0&0&0&\boxed{-1}&1\\0&0&0&0&0&0\end{array}\right].$$
$x,z,v$ bundna; de övriga $y,u$ fria. Sätt $y=s$, $u=t$.
- Tredje ekv. ger: $v=-1$.
- Andra ekv. ger: $2z-u+2v=-2\iff2z=-2+t+2\iff z=\frac12t$.
- Första ekv. ger: $x-y+2z+3v=0\iff x=s-t+3$.

Så lösningarna ges av
$$(x,y,z,u,v)=\left(s-t+3,\ s,\ \tfrac12t,\ t,\ -1\right)=(3,0,0,0,-1)+s(1,1,0,0,0)+t\left(-1,0,\tfrac12,1,0\right),\quad s,t\in\mathbb R.$$
**Svar:** $(3,0,0,0,-1)+s(1,1,0,0,0)+t(-2,0,1,2,0)$, $s,t\in\mathbb R$ (eller med $t(-1,0,\frac12,1,0)$).

## [t260526] Uppgift 2 | 4p | G | Linjära avbildningar, linjärkombination, standardmatris

**Uppgift:**
Den linjära avbildningen $T:\mathbb R^2\to\mathbb R^3$ avbildar $(1,2)$ på $(1,3,-1)$ och $(3,-1)$ på $(1,2,3)$. Vad avbildas $(2,2)$ på? Finns det något $\mathbf x$ som avbildas på $(1,1,1)$? Om det finns ett sådant, bestäm ett eller visa att det inte finns.

**Lösning:**
$T:\mathbb R^2\to\mathbb R^3$ linjär; $(1,2)\mapsto(1,3,-1)$, $(3,-1)\mapsto(1,2,3)$.

Vad avbildas $(2,2)$ på? Skriv $(2,2)$ som en linjärkombination av $(1,2)$ och $(3,-1)$ och utnyttja linjäriteten:
$$\alpha(1,2)+\beta(3,-1)=(2,2):\quad\left[\begin{array}{cc|c}1&3&2\\2&-1&2\end{array}\right]\sim\left[\begin{array}{cc|c}1&3&2\\0&-7&-2\end{array}\right],$$
så $\beta=2/7$, $\alpha=8/7$. Alltså (linjär)
$$T(2,2)=T\!\left(\tfrac87(1,2)+\tfrac27(3,-1)\right)=\tfrac87T(1,2)+\tfrac27T(3,-1)=\tfrac87(1,3,-1)+\tfrac27(1,2,3)=\tfrac17(10,28,-2).$$
Vad avbildas på $(1,1,1)$ (om något)?
$$\alpha(1,3,-1)+\beta(1,2,3)=(1,1,1):\quad\left[\begin{array}{cc|c}1&1&1\\3&2&1\\-1&3&1\end{array}\right]\sim\left[\begin{array}{cc|c}1&1&1\\0&-1&-2\\0&4&2\end{array}\right]\sim\left[\begin{array}{cc|c}1&1&1\\0&-1&-2\\0&0&-6\end{array}\right].$$
Saknar lösning, alltså avbildas inget på $(1,1,1)$.

Alternativ lösning: bestäm matrisen för $T$, $T=T_A$, $A=[T(\mathbf e_1)\ T(\mathbf e_2)]$.
$T(\mathbf e_1)$: $(1,0)=\alpha(1,2)+\beta(3,-1)$, $\left[\begin{array}{cc|c}1&3&1\\2&-1&0\end{array}\right]\sim\left[\begin{array}{cc|c}1&3&1\\0&-7&-2\end{array}\right]$, $\beta=2/7$, $\alpha=1/7$:
$$T(\mathbf e_1)=\tfrac17(1,3,-1)+\tfrac27(1,2,3)=\tfrac17(3,7,5).$$
$T(\mathbf e_2)$: $(0,1)=\alpha(1,2)+\beta(3,-1)$, $\beta=-1/7$, $\alpha=3/7$:
$$T(\mathbf e_2)=\tfrac37(1,3,-1)-\tfrac17(1,2,3)=\tfrac17(2,7,-6).$$
$$A=\frac17\begin{bmatrix}3&2\\7&7\\5&-6\end{bmatrix},\qquad T(2,2)=\frac17\begin{bmatrix}3&2\\7&7\\5&-6\end{bmatrix}\begin{bmatrix}2\\2\end{bmatrix}=\frac17\begin{bmatrix}10\\28\\-2\end{bmatrix}.$$
$A\mathbf x=(1,1,1)^T$ lösning? $[A\mid(1,1,1)^T]\sim\dots$ Nej.

*Transkriberarens not: i originalets alternativa lösning står första komponenten som 8, men $3\cdot2+2\cdot2=10$, i överensstämmelse med huvudlösningen.*

**Svar:** $T(2,2)=\frac17(10,28,-2)$; inget $\mathbf x$ avbildas på $(1,1,1)$.

## [t260526] Uppgift 3 | 4p | G | Plan genom tre punkter, avstånd punkt–plan

**Uppgift:**
Låt $A$, $B$, $C$ och $D$ vara punkterna $(1,-1,1)$, $(-2,0,-1)$, $(-2,1,2)$ respektive $(4,-2,0)$. Bestäm en ekvation för planet som innehåller punkterna $A$, $B$ och $C$. Bestäm också avståndet mellan planet och punkten $D$.

**Lösning:**
[Figur: $A=(1,-1,1)$ med $\overrightarrow{AB}$ och $\overrightarrow{AC}$.]

Plan: punkt $(1,-1,1)$ och normal $\overrightarrow{AB}\times\overrightarrow{AC}$:
$$\mathbf n=\overrightarrow{AB}\times\overrightarrow{AC}=(-3,1,-2)\times(-3,2,1)=(5,9,-3).$$
Planets ekvation:
$$5(x-1)+9(y-(-1))-3(z-1)=0\iff5x+9y-3z=-7\iff-5x-9y+3z=7.$$
Nu avståndet mellan $D=(4,-2,0)$ och planet.

[Figur: planet, $A$, $D$, normalen $\mathbf n$ och $\operatorname{proj}_{\mathbf n}\overrightarrow{AD}$.]

$\overrightarrow{AD}=(3,-1,-1)$, $\mathbf n=(5,9,-3)$:
$$\operatorname{proj}_{\mathbf n}\overrightarrow{AD}=\frac{(3,-1,-1)\bullet(5,9,-3)}{(5,9,-3)\bullet(5,9,-3)}(5,9,-3)=\frac9{115}(5,9,-3).$$
$$\text{Avståndet}=\|\operatorname{proj}_{\mathbf n}\overrightarrow{AD}\|=\frac9{115}\sqrt{115}=\frac9{\sqrt{115}}.$$
**Svar:** $-5x-9y+3z=7$ (eller $5x+9y-3z=-7$); avståndet är $\frac9{\sqrt{115}}$.

## [t260526] Uppgift 4 | 4p | G | Linjärt oberoende, determinant, bas, koordinater

**Uppgift:**
För vilka värden på $a$ är $\mathcal B_a=\{1+ax+x^2,\ 1-2x^2,\ a+x-x^2\}$ linjärt oberoende. Välj nu ett sådant $a$. Förklara varför $\mathcal B_a$ nu är en bas för $\mathbb P_2$. Vilket element har koordinaterna $(1,-1,2)$ relativt denna basen?

**Lösning:**
Linjärt oberoende?
$$c_1(1+ax+x^2)+c_2(1-2x^2)+c_3(a+x-x^2)=0\quad\text{alla }x$$
$$\iff\ x^0:\ c_1+c_2+ac_3=0,\quad x^1:\ c_1a+c_3=0,\quad x^2:\ c_1-2c_2-c_3=0.$$
På matrisform:
$$\begin{bmatrix}1&1&a\\a&0&1\\1&-2&-1\end{bmatrix}\begin{bmatrix}c_1\\c_2\\c_3\end{bmatrix}=\begin{bmatrix}0\\0\\0\end{bmatrix}.$$
L.O. $\iff$ endast nollösning $\iff\det\begin{bmatrix}1&1&a\\a&0&1\\1&-2&-1\end{bmatrix}\neq0$. Utveckla efter andra kolonnen:
$$\begin{vmatrix}1&1&a\\a&0&1\\1&-2&-1\end{vmatrix}=-1\cdot1\begin{vmatrix}a&1\\1&-1\end{vmatrix}-1\cdot(-2)\begin{vmatrix}1&a\\a&1\end{vmatrix}=-(-a-1)+2(1-a^2)=-2a^2+a+3.$$
Så L.B. $\iff-2a^2+a+3=0\iff a^2-\frac12a-\frac32=0\iff a=\frac14\pm\sqrt{\frac1{16}+\frac{24}{16}}=\frac14\pm\frac54$, dvs $a=\frac32$ eller $a=-1$.

Alltså L.O. $\iff a\neq\frac32$ och $a\neq-1$.

Välj $a=0$. $\mathcal B_0$ innehåller tre element och de är linjärt oberoende. Enligt bassatsen är det därför en bas för $\mathbb P_2$ ty $\dim(\mathbb P_2)=3$ ($\{1,x,x^2\}$ bas).

Vilket element har koordinaterna $(1,-1,2)$? Jo,
$$1(1+x^2)-1(1-2x^2)+2(x-x^2)=2x+x^2.$$
**Svar:** L.O. omm $a\neq\frac32$ och $a\neq-1$; med $a=0$ är elementet $2x+x^2$.

## [t260526] Uppgift 5 | 4p | G | Differentialekvationssystem, diagonalisering

**Uppgift:**
Använd diagonalisering för att bestämma lösningen till $y'=-10y+12z$, $z'=-9y+11z$ med $y(0)=0$ och $z(0)=-1$.

**Lösning:**
På matrisform med $\mathbf y=\begin{bmatrix}y\\z\end{bmatrix}$ blir det
$$\mathbf y'=\underbrace{\begin{bmatrix}-10&12\\-9&11\end{bmatrix}}_{=A}\mathbf y,\qquad\mathbf y(0)=\begin{bmatrix}0\\-1\end{bmatrix}.$$
Variabelbyte $\mathbf y=P\mathbf u$ ger $P\mathbf u'=AP\mathbf u\iff\mathbf u'=P^{-1}AP\mathbf u=D\mathbf u$ om $A=PDP^{-1}$. Så diagonalisera $A$.

**Egenvärden:** kar.ekv. $\det(\lambda I-A)=0$:
$$\begin{vmatrix}\lambda+10&-12\\9&\lambda-11\end{vmatrix}=0\iff(\lambda+10)(\lambda-11)+108=0\iff\lambda^2-\lambda-2=0\iff\lambda=\tfrac12\pm\sqrt{\tfrac14+\tfrac84}=\tfrac12\pm\tfrac32,$$
dvs $\lambda=-1$ eller $2$. [Koll: $-1+2=1=\operatorname{tr}A=-10+11$; $-1\cdot2=-2=\det A=-110+108$, ok.]

**Egenvektorer:**
$\lambda=-1$: $A\mathbf v=-\mathbf v\iff(I+A)\mathbf v=\mathbf 0$:
$$\left[\begin{array}{cc|c}-9&12&0\\-9&12&0\end{array}\right]\sim\left[\begin{array}{cc|c}\boxed{-3}&4&0\\0&0&0\end{array}\right],$$
$x_1$ bunden, $x_2=t$ fri, $x_1=\frac43t$. $\mathbf v=t\begin{bmatrix}4/3\\1\end{bmatrix}$; välj $\begin{bmatrix}4\\3\end{bmatrix}$.

$\lambda=2$: $(2I-A)\mathbf v=\mathbf 0$:
$$\left[\begin{array}{cc|c}12&-12&0\\9&-9&0\end{array}\right]\sim\left[\begin{array}{cc|c}\boxed1&-1&0\\0&0&0\end{array}\right],$$
$x_1=t$. $\mathbf v=t\begin{bmatrix}1\\1\end{bmatrix}$; välj $\begin{bmatrix}1\\1\end{bmatrix}$.

Så $A=PDP^{-1}$ med $P=\begin{bmatrix}4&1\\3&1\end{bmatrix}$, $D=\begin{bmatrix}-1&0\\0&2\end{bmatrix}$.

Tillbaka till diffsen: $\mathbf u'=D\mathbf u$. Om $\mathbf u=\begin{bmatrix}u\\v\end{bmatrix}$ så $u'=-u$, $v'=2v$, vilket ger $u=\alpha e^{-x}$, $v=\beta e^{2x}$. Så
$$\mathbf y=P\mathbf u=\begin{bmatrix}4&1\\3&1\end{bmatrix}\begin{bmatrix}\alpha e^{-x}\\\beta e^{2x}\end{bmatrix}=\begin{bmatrix}4\alpha e^{-x}+\beta e^{2x}\\3\alpha e^{-x}+\beta e^{2x}\end{bmatrix}.$$
Men $\mathbf y(0)=\begin{bmatrix}0\\-1\end{bmatrix}$ ger $4\alpha+\beta=0$, $3\alpha+\beta=-1$; $\alpha=1$, $\beta=-4$.

**Svar:** $y=4e^{-x}-4e^{2x}$, $z=3e^{-x}-4e^{2x}$.

## [t260526] Uppgift 6 | 4p | G | Minsta kvadratmetoden

**Uppgift:**
Betrakta följande data

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|
| $y$ | $1$ | $-1$ | $-1$ | $3$ |

Bestäm den funktion på formen $y=\alpha x^2+\beta x$ som bäst anpassar sig till datapunkterna i minstakvadratmetodens mening.

**Lösning:**
Sätt in datapunkterna i modellfunktionen:
$$\begin{cases}1=\alpha-\beta\\-1=0\quad\leftarrow\text{saknar lösning}\\-1=\alpha+\beta\\3=4\alpha+2\beta\end{cases}$$
På matrisform:
$$\begin{bmatrix}1&-1\\0&0\\1&1\\4&2\end{bmatrix}\begin{bmatrix}\alpha\\\beta\end{bmatrix}=\begin{bmatrix}1\\-1\\-1\\3\end{bmatrix}.$$
Motsvarande normalekvation:
$$\begin{bmatrix}1&0&1&4\\-1&0&1&2\end{bmatrix}\begin{bmatrix}1&-1\\0&0\\1&1\\4&2\end{bmatrix}\begin{bmatrix}\alpha\\\beta\end{bmatrix}=\begin{bmatrix}1&0&1&4\\-1&0&1&2\end{bmatrix}\begin{bmatrix}1\\-1\\-1\\3\end{bmatrix}\iff\begin{bmatrix}18&8\\8&6\end{bmatrix}\begin{bmatrix}\alpha\\\beta\end{bmatrix}=\begin{bmatrix}12\\4\end{bmatrix}.$$
Motsvarande utökade koefficientmatris:
$$\left[\begin{array}{cc|c}18&8&12\\8&6&4\end{array}\right]\sim\left[\begin{array}{cc|c}9&4&6\\4&3&2\end{array}\right]\sim\left[\begin{array}{cc|c}36&16&24\\36&27&18\end{array}\right]\sim\left[\begin{array}{cc|c}36&16&24\\0&11&-6\end{array}\right],$$
så $\beta=-6/11$, $\alpha=\frac14\left(2+\frac{18}{11}\right)=\frac{10}{11}$ (ur $4\alpha+3\beta=2$).

Aha, den bästa modellen (i minstakvadratmetodens mening) på denna form är

[Figur: datapunkterna och parabeln $y=\frac{10}{11}x^2-\frac6{11}x$.]

**Svar:** $y=\frac{10}{11}x^2-\frac{6}{11}x$.

## [t260526] Uppgift 7 | 4p | VG | Determinanter, linjäritet i kolonner

**Uppgift:**
Låt $\mathbf a_1$ och $\mathbf a_2$ vara två vektorer i $\mathbb R^2$ skrivna som $2\times1$ matriser. Låt $A=[\mathbf a_1\ \mathbf a_2]$ och antag $\det A=-2$. Bestäm $\det([\mathbf b_1\ \mathbf b_2])$ då $\mathbf b_1=-\mathbf a_1+2\mathbf a_2$ och $\mathbf b_2=-\mathbf a_1+3\mathbf a_2$. Lös också $A\mathbf x=\mathbf b_1-\mathbf b_2$.

**Lösning:**
Determinanten är linjär i varje kolumn var för sig:
$$\det[-\mathbf a_1+2\mathbf a_2,\ -\mathbf a_1+3\mathbf a_2]=\underbrace{\det[-\mathbf a_1,-\mathbf a_1]}_{=0\text{ (L.B.)}}+\det[-\mathbf a_1,3\mathbf a_2]+\det[2\mathbf a_2,-\mathbf a_1]+\underbrace{\det[2\mathbf a_2,3\mathbf a_2]}_{=0\text{ (linjärt beroende kolonner)}}$$
där $\det[2\mathbf a_2,-\mathbf a_1]=-2\det[\mathbf a_2,\mathbf a_1]=2\det[\mathbf a_1,\mathbf a_2]$. Alltså
$$=-3\det(A)+2\det(A)=-\det(A)=2.$$
$A\mathbf x=\mathbf b_1-\mathbf b_2$ med $\mathbf x=\begin{bmatrix}x_1\\x_2\end{bmatrix}$:
$$x_1\mathbf a_1+x_2\mathbf a_2=-\mathbf a_1+2\mathbf a_2-(-\mathbf a_1+3\mathbf a_2)=-\mathbf a_2,$$
så $x_1=0$, $x_2=-1$.

**Svar:** $\det([\mathbf b_1\ \mathbf b_2])=2$; $\mathbf x=\begin{bmatrix}0\\-1\end{bmatrix}$.

## [t260526] Uppgift 8 | 4p | VG | Inre produktrum, Gram–Schmidt, ortogonal projektion

**Uppgift:**
Betrakta $\mathbb P_2$ med skalärprodukt $\langle p,q\rangle=\int_0^1p(x)q(x)\,dx$. Låt
$$W=\operatorname{span}\{1-x,x^2\}.$$
Bestäm den ortogonala projektionen av $f(x)=1$ på $W$, det vill säga bestäm $\operatorname{proj}_W1$.

**Lösning:**
En bas för $W$ är $\{1-x,x^2\}$. Ortogonalisera denna:
1. $q_1(x)=1-x$, $W_1=\operatorname{span}\{q_1\}$.
2. [Figur: $x^2$, $\operatorname{proj}_{W_1}x^2$ och $q_2$ vinkelrät.]
$$q_2(x)=x^2-\operatorname{proj}_{W_1}x^2=x^2-\frac{\langle x^2,1-x\rangle}{\langle1-x,1-x\rangle}(1-x)=x^2-\frac{1/12}{1/3}(1-x)=x^2-\frac14(1-x).$$
2'. Välj $\hat q_2(x)=4q_2(x)=4x^2+x-1$.

En ortogonal bas är $\{1-x,\ 4x^2+x-1\}$.

Några skalärprodukter:
$$\langle x^2,1-x\rangle=\int_0^1(x^2-x^3)\,dx=\tfrac13-\tfrac14=\tfrac1{12},\qquad\langle1-x,1-x\rangle=\int_0^1(1-2x+x^2)\,dx=1-1+\tfrac13=\tfrac13,$$
$$\langle1,1-x\rangle=\int_0^1(1-x)\,dx=1-\tfrac12=\tfrac12,\qquad\langle1,4x^2+x-1\rangle=\int_0^1(4x^2+x-1)\,dx=\tfrac43+\tfrac12-1=\tfrac56,$$
$$\langle4x^2+x-1,4x^2+x-1\rangle=\int_0^1(16x^4+x^2+1+8x^3-8x^2-2x)\,dx=\tfrac{16}5+\tfrac13+1+2-\tfrac83-1=\tfrac{43}{15}.$$
Man får nu
$$\operatorname{proj}_W1=\frac{\langle1,1-x\rangle}{\langle1-x,1-x\rangle}(1-x)+\frac{\langle1,4x^2+x-1\rangle}{\langle4x^2+x-1,4x^2+x-1\rangle}(4x^2+x-1)=\frac{1/2}{1/3}(1-x)+\frac{5/6}{43/15}(4x^2+x-1)$$
$$=\frac32(1-x)+\frac{25}{86}(4x^2+x-1)=\frac32(1-x)+\frac{50}{43}x^2+\frac{25}{86}(x-1)=\frac{50}{43}x^2-\frac{52}{43}x+\frac{52}{43}.$$
[Figur: konstanten 1 och $\operatorname{proj}_W1$ på $[0,1]$.]

**Svar:** $\operatorname{proj}_W1=\frac{50}{43}x^2-\frac{52}{43}x+\frac{52}{43}$.

## [t260526] Uppgift 9 | 4p | VG | Egenvärden, karakteristiskt polynom, determinant, bevis

**Uppgift:**
Låt $A$ vara en $n\times n$ matris. Definiera begreppen egenvärden och egenvektorer. Bevisa att $\lambda$ är ett egenvärde om och endast om $\det(\lambda I-A)=0$. Visa slutligen att produkten av egenvärdena är $\det(A)$ genom att utnyttja att det karakteristiska polynomet för $A$ är ett $n$:te gradspolynom med ledande koefficient ett.

**Lösning:**
En vektor $\mathbf v\neq\mathbf 0$ är en egenvektor för $A$ med tillhörande egenvärde $\lambda$ om
$$A\mathbf v=\lambda\mathbf v.$$
Men $A\mathbf v=\lambda\mathbf v\iff\lambda\mathbf v-A\mathbf v=\mathbf 0\iff(\lambda I-A)\mathbf v=\mathbf 0$. $\lambda$ är egenvärde till $A$ om och endast om $(\lambda I-A)\mathbf v=\mathbf 0$ har nollskilda lösningar, vilket precis betyder $\det(\lambda I-A)=0$.

Eftersom $\det(\lambda I-A)$ är ett $n$:te gradspolynom med ledande koefficient 1 är
$$\det(\lambda I-A)=(\lambda-\lambda_1)(\lambda-\lambda_2)\cdots(\lambda-\lambda_n).$$
Sätt in $\lambda=0$:
$$\det(-A)=(-\lambda_1)(-\lambda_2)\cdots(-\lambda_n),$$
och $\det(-A)=(-1)^n\det(A)$, så
$$\det(A)=\lambda_1\lambda_2\cdots\lambda_n.$$

# t260319 | Tenta 19 mars 2026 | 2026-03-19 | Lösningsförslag (handskrivet)

## [t260319] Uppgift 1 | 4p | G | Linjära ekvationssystem, lösbarhet

**Uppgift:**
Bestäm alla $a$, $b$ och $c$ så att systemet
$$\begin{cases}x+2y-z=a\\3x+4y-2z=b\\-2x+2y-z=c\end{cases}$$
har lösning, det vill säga så att systemet är konsistent.

**Lösning:**
Den utökade koefficientmatrisen elimineras enligt
$$\left[\begin{array}{ccc|c}1&2&-1&a\\3&4&-2&b\\-2&2&-1&c\end{array}\right]\sim\left[\begin{array}{ccc|c}1&2&-1&a\\0&-2&1&b-3a\\0&6&-3&c+2a\end{array}\right]\sim\left[\begin{array}{ccc|c}1&2&-1&a\\0&-2&1&b-3a\\0&0&0&c+2a+3(b-3a)\end{array}\right].$$
Nu utläses att systemet har lösning om och endast om $c+2a+3(b-3a)=0$, dvs omm

**Svar:** $-7a+3b+c=0$.

## [t260319] Uppgift 2 | 4p | G | Linjära avbildningar, rotation, spegling, sammansättning

**Uppgift:**
Bestäm matrisen för den linjära avbildning $T_A:\mathbb R^2\to\mathbb R^2$ som först roterar $\pi/3$ radianer moturs och därefter speglar i $y$-axeln. Vad avbildas $(1,1)$ på?

**Lösning:**
$T_A=S\circ R$ ($S$ spegling, $R$ rotation). $\begin{bmatrix}\cos\alpha&-\sin\alpha\\\sin\alpha&\cos\alpha\end{bmatrix}$ ger rotation $\alpha$ radianer moturs, så matrisen för $R$:
$$\begin{bmatrix}\cos\frac\pi3&-\sin\frac\pi3\\\sin\frac\pi3&\cos\frac\pi3\end{bmatrix}=\begin{bmatrix}1/2&-\sqrt3/2\\\sqrt3/2&1/2\end{bmatrix}.$$
Matrisen för $S$: $[S(\mathbf e_1)\ S(\mathbf e_2)]=\begin{bmatrix}-1&0\\0&1\end{bmatrix}$ (figur: $S(\mathbf e_1)=-\mathbf e_1$, $S(\mathbf e_2)=\mathbf e_2$).

Detta ger att matrisen för $T_A$ är
$$A=\begin{bmatrix}-1&0\\0&1\end{bmatrix}\begin{bmatrix}1/2&-\sqrt3/2\\\sqrt3/2&1/2\end{bmatrix}=\begin{bmatrix}-1/2&\sqrt3/2\\\sqrt3/2&1/2\end{bmatrix}.$$
$(1,1)$ avbildas på
$$A\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}-1/2&\sqrt3/2\\\sqrt3/2&1/2\end{bmatrix}\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}(\sqrt3-1)/2\\(\sqrt3+1)/2\end{bmatrix}.$$
Kontroll steg för steg (först rotation, sedan spegling):
$$R(1,1)=\begin{bmatrix}1/2&-\sqrt3/2\\\sqrt3/2&1/2\end{bmatrix}\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}(1-\sqrt3)/2\\(1+\sqrt3)/2\end{bmatrix},\quad S\!\left(\tfrac{1-\sqrt3}2,\tfrac{1+\sqrt3}2\right)=\begin{bmatrix}(\sqrt3-1)/2\\(\sqrt3+1)/2\end{bmatrix}.$$
[Figur: $(1,1)$, $R(1,1)$ och $S\circ R(1,1)$; samt en L-formad figur: original, roterad och roterad-sedan-speglad.]

**Svar:** $A=\begin{bmatrix}-1/2&\sqrt3/2\\\sqrt3/2&1/2\end{bmatrix}$; $(1,1)\mapsto\left(\frac{\sqrt3-1}2,\frac{\sqrt3+1}2\right)$.

## [t260319] Uppgift 3 | 4p | G | Linje och plan, parallellitet, avstånd

**Uppgift:**
Låt $L$ vara den räta linje som går genom $(1,-2,1)$ och $(0,1,-3)$ och låt $\Pi$ vara planet med ekvation $x-y-z=4$. Om linjen är parallell med planet bestäm avståndet mellan $L$ och $\Pi$, bestäm annars skärningspunkten.

**Lösning:**
Linjens riktning: $\mathbf v=(0,1,-3)-(1,-2,1)=(-1,3,-4)$.
$$L:\ \mathbf x=(1,-2,1)+t(-1,3,-4),\ t\in\mathbb R;\qquad\Pi:\ x-y-z=4,\ \text{normal }\mathbf n=(1,-1,-1).$$
$$\mathbf v\bullet\mathbf n=(-1,3,-4)\bullet(1,-1,-1)=-1-3+4=0,$$
så de är ortogonala mot varandra, alltså är linjen parallell med planet.

Bestäm avståndet. En punkt på planet: $(4,0,0)$; en punkt på linjen: $(1,-2,1)$. Vektorn mellan dem: $\mathbf u=(1,-2,1)-(4,0,0)=(-3,-2,1)$. Projicera denna på $\mathbf n$:

[Figur: linjen $L$ ovanför planet $\Pi$, $\mathbf u$ från $(4,0,0)$ till $(1,-2,1)$ och $\operatorname{proj}_{\mathbf n}\mathbf u$.]

$$\operatorname{proj}_{\mathbf n}\mathbf u=\frac{\mathbf u\bullet\mathbf n}{\mathbf n\bullet\mathbf n}\mathbf n=\frac{(-3,-2,1)\bullet(1,-1,-1)}{(1,-1,-1)\bullet(1,-1,-1)}(1,-1,-1)=-\frac23(1,-1,-1).$$
Avståndet är
$$\|\operatorname{proj}_{\mathbf n}\mathbf u\|=\tfrac23\sqrt{1^2+(-1)^2+(-1)^2}=\tfrac23\sqrt3=\tfrac2{\sqrt3}.$$
**Svar:** $L$ är parallell med $\Pi$; avståndet är $\frac2{\sqrt3}$.

## [t260319] Uppgift 4 | 4p | G | Linjärt oberoende, linjärt hölje, matrisrum

**Uppgift:**
Visa att
$$\mathcal M=\left\{\begin{bmatrix}1&1\\0&-1\end{bmatrix},\begin{bmatrix}0&1\\-1&0\end{bmatrix},\begin{bmatrix}-2&1\\-1&2\end{bmatrix}\right\}$$
är linjärt oberoende. Avgör sedan, utan räkningar men med motiveringar, vilka av följande matriser som ligger i $\operatorname{span}(\mathcal M)$,
$$\begin{bmatrix}1&2\\3&4\end{bmatrix},\ \begin{bmatrix}\sqrt2-1&\pi-1\\\sqrt7&1-\sqrt2\end{bmatrix},\ \begin{bmatrix}1&0&1\\0&-2&0\\1&0&1\end{bmatrix},\ \begin{bmatrix}-1&2\\-3&1\end{bmatrix}.$$

**Lösning:**
Visa linjärt oberoende. Antag
$$c_1\begin{bmatrix}1&1\\0&-1\end{bmatrix}+c_2\begin{bmatrix}0&1\\-1&0\end{bmatrix}+c_3\begin{bmatrix}-2&1\\-1&2\end{bmatrix}=\begin{bmatrix}0&0\\0&0\end{bmatrix}$$
och visa $c_1=c_2=c_3=0$. Position för position:
$$(1,1):\ c_1-2c_3=0,\quad(1,2):\ c_1+c_2+c_3=0,\quad(2,1):\ -c_2-c_3=0,\quad(2,2):\ -c_1+2c_3=0.$$
Den motsvarande utökade matrisen:
$$\left[\begin{array}{ccc|c}1&0&-2&0\\1&1&1&0\\0&-1&-1&0\\-1&0&2&0\end{array}\right]\sim\left[\begin{array}{ccc|c}1&0&-2&0\\0&1&3&0\\0&-1&-1&0\\0&0&0&0\end{array}\right]\sim\left[\begin{array}{ccc|c}\boxed1&0&-2&0\\0&\boxed1&3&0\\0&0&\boxed2&0\\0&0&0&0\end{array}\right].$$
Pivot i alla kolumner, så endast nollösning, dvs linjärt oberoende.

Matriserna i $\mathcal M$ är på formen $\begin{bmatrix}a&b\\c&-a\end{bmatrix}$, och då även alla i $\operatorname{span}(\mathcal M)$. Ger $\operatorname{span}(\mathcal M)$ alla sådana? Ja, ty de utgör ett underrum till $M_{2\times2}$ med dimension max 3 (inte hela rummet), men då precis 3 eftersom $\mathcal M$ innehåller 3 linjärt oberoende element.

**Svar:** $\mathcal M$ är linjärt oberoende. De som ligger i höljet är $\begin{bmatrix}\sqrt2-1&\pi-1\\\sqrt7&1-\sqrt2\end{bmatrix}$ och $\begin{bmatrix}-1&2\\-3&1\end{bmatrix}$ (spår noll). $\begin{bmatrix}1&2\\3&4\end{bmatrix}$ har inte den formen, och $3\times3$-matrisen ligger inte ens i $M_{2\times2}$.

## [t260319] Uppgift 5 | 4p | G | Egenvärden, diagonalisering, matrispotens

**Uppgift:**
Diagonalisera $A=\begin{bmatrix}-1&2\\4&1\end{bmatrix}$, det vill säga finn matriser $P$ och $D$, $D$ diagonal, så att $A=PDP^{-1}$. Bestäm $A^5$ med hjälp av diagonaliseringen.

**Lösning:**
Bestäm egenvärden/egenvektorer.

**Egenvärden:** karakteristiska ekvationen $\det(\lambda I-A)=0$:
$$\begin{vmatrix}\lambda+1&-2\\-4&\lambda-1\end{vmatrix}=0\iff(\lambda+1)(\lambda-1)-8=0\iff\lambda^2=9\iff\lambda=\pm3.$$
[Koll: $3+(-3)=0=\operatorname{tr}A=-1+1$; $3(-3)=-9=\det A=-1-8$, ok.]

**Egenvektorer:**
$\lambda=3$: $A\mathbf v=3\mathbf v\iff(3I-A)\mathbf v=\mathbf 0$:
$$\left[\begin{array}{cc|c}4&-2&0\\-4&2&0\end{array}\right]\sim\left[\begin{array}{cc|c}\boxed2&-1&0\\0&0&0\end{array}\right].$$
$x_1$ bunden, $x_2=t$ fri, $x_1=t/2$, så $\mathbf v=t\begin{bmatrix}1/2\\1\end{bmatrix}$. Välj $\begin{bmatrix}1\\2\end{bmatrix}$.

$\lambda=-3$: $(-3I-A)\mathbf v=\mathbf 0$:
$$\left[\begin{array}{cc|c}-2&-2&0\\-4&-4&0\end{array}\right]\sim\left[\begin{array}{cc|c}\boxed1&1&0\\0&0&0\end{array}\right].$$
$x_1=-t$, så $\mathbf v=t\begin{bmatrix}-1\\1\end{bmatrix}$. Välj $\begin{bmatrix}-1\\1\end{bmatrix}$.

Alltså $A=PDP^{-1}$ med
$$P=\begin{bmatrix}1&-1\\2&1\end{bmatrix},\quad D=\begin{bmatrix}3&0\\0&-3\end{bmatrix}.$$
Bestäm $A^5$: $A^5=(PDP^{-1})^5=PD^5P^{-1}$, med $P^{-1}=\frac13\begin{bmatrix}1&1\\-2&1\end{bmatrix}$:
$$A^5=\begin{bmatrix}1&-1\\2&1\end{bmatrix}\begin{bmatrix}3^5&0\\0&-3^5\end{bmatrix}\frac13\begin{bmatrix}1&1\\-2&1\end{bmatrix}=\frac13\begin{bmatrix}1&-1\\2&1\end{bmatrix}\begin{bmatrix}3^5&3^5\\2\cdot3^5&-3^5\end{bmatrix}=\frac13\begin{bmatrix}-3^5&2\cdot3^5\\4\cdot3^5&3^5\end{bmatrix}=3^4\begin{bmatrix}-1&2\\4&1\end{bmatrix}$$
(använd $(-3)^5=-3^5$).

**Svar:** $P=\begin{bmatrix}1&-1\\2&1\end{bmatrix}$, $D=\begin{bmatrix}3&0\\0&-3\end{bmatrix}$, $A^5=\begin{bmatrix}-81&162\\324&81\end{bmatrix}$.

## [t260319] Uppgift 6 | 4p | G | Gram–Schmidt, ortogonal bas

**Uppgift:**
Bestäm en ortogonal bas för
$$\operatorname{span}\{(1,-1,0,1),(1,0,1,1),(2,0,0,1)\}.$$

**Lösning:**
$\mathbf u_1=(1,-1,0,1)$, $\mathbf u_2=(1,0,1,1)$, $\mathbf u_3=(2,0,0,1)$. Bestäm en ortogonal bas för $\operatorname{span}\{\mathbf u_1,\mathbf u_2,\mathbf u_3\}$ med Gram–Schmidt.

Anm.: Om de inte är linjärt oberoende kommer det visa sig genom att en vektor blir $\mathbf 0$.

1. $\mathbf v_1=\mathbf u_1$; $W_1=\operatorname{span}\{\mathbf v_1\}$.
2. [Figur: $\mathbf u_2$, $\operatorname{proj}_{W_1}\mathbf u_2$ längs $W_1$ och $\mathbf v_2$ vinkelrät.]
$$\mathbf v_2=\mathbf u_2-\operatorname{proj}_{W_1}\mathbf u_2=(1,0,1,1)-\frac{(1,0,1,1)\bullet(1,-1,0,1)}{(1,-1,0,1)\bullet(1,-1,0,1)}(1,-1,0,1)=(1,0,1,1)-\tfrac23(1,-1,0,1)=\left(\tfrac13,\tfrac23,1,\tfrac13\right).$$
Välj $\mathbf v_2'=3\mathbf v_2=(1,2,3,1)$ och $W_2=\operatorname{span}\{\mathbf v_1,\mathbf v_2'\}$.
3. 
$$\mathbf v_3=\mathbf u_3-\operatorname{proj}_{W_2}\mathbf u_3=(2,0,0,1)-\left(\frac{(2,0,0,1)\bullet(1,-1,0,1)}{(1,-1,0,1)\bullet(1,-1,0,1)}(1,-1,0,1)+\frac{(2,0,0,1)\bullet(1,2,3,1)}{(1,2,3,1)\bullet(1,2,3,1)}(1,2,3,1)\right)$$
$$=(2,0,0,1)-\tfrac33(1,-1,0,1)-\tfrac3{15}(1,2,3,1)=\tfrac15\big((10,0,0,5)-(5,-5,0,5)-(1,2,3,1)\big)=\tfrac15(4,3,-3,-1).$$
Välj $(4,3,-3,-1)$.

En kontroll (ortogonaliteten):
$$(1,-1,0,1)\bullet(1,2,3,1)=1-2+0+1=0,\ (1,-1,0,1)\bullet(4,3,-3,-1)=4-3+0-1=0,\ (1,2,3,1)\bullet(4,3,-3,-1)=4+6-9-1=0.$$
**Svar:** En ortogonal bas för höljet är $\{(1,-1,0,1),(1,2,3,1),(4,3,-3,-1)\}$.

## [t260319] Uppgift 7 | 4p | VG | Determinanter, invers, räknelagar, rang

**Uppgift:**
Determinant och invers.

a) Låt $A$ och $B$ vara kvadratiska matriser. Använd determinanten för att bevisa att om $AB$ är inverterbar så måste $A$ och $B$ vara inverterbara.

b) Låt $A$ vara en $4\times4$ matris med $\det(A)=2$ och bilda $B$ genom att ersätta rad fyra med summan av rad ett och två. Avgör om $B$ är inverterbar.

c) Låt $A$ vara en $5\times5$ matris med $\det(A)=-3$ och bilda $B$ genom att först lägga till rad ett och rad två till rad tre och därefter byta plats på kolumn fyra och kolumn fem. Bestäm $\det(-2B)$.

d) Finns det $a$, $b$ och $c$ så att matrisen $\begin{bmatrix}a&b&c\end{bmatrix}^T\begin{bmatrix}a&b&c\end{bmatrix}$ är inverterbar? Förklara.

**Lösning:**
a) En matris är inverterbar omm determinanten är skild från noll. För determinanten gäller $\det(AB)=\det A\det B$. Om $\det(AB)\neq0$ måste $\det A\neq0\neq\det B$. Alltså är $A$, $B$ inverterbara.

b) Rad 1, 2, 4 blir linjärt beroende (rad 4 = rad 1 + rad 2), så $\det B=0$. Alltså ej inverterbar.

c) Första operationen ändrar ej determinanten. Kolumnbytet ger teckenbyte. Så $\det(B)=-\det(A)=3$. Sedan (elementär determinantregel, en faktor $-2$ för varje rad):
$$\det(-2B)=(-2)^5\det(B)=-32\cdot3=-96.$$
d) $\begin{bmatrix}a\\b\\c\end{bmatrix}\begin{bmatrix}a&b&c\end{bmatrix}$ har rang 1 (kolumnerna alla en multipel av $(a,b,c)^T$; om $a=b=c=0$ är rangen 0), så ej inverterbar.

**Svar:** a) se ovan; b) $B$ är inte inverterbar; c) $\det(-2B)=-96$; d) Nej, inte inverterbar oavsett $a,b,c$.

## [t260319] Uppgift 8 | 4p | VG | Inre produktrum, underrum, ortogonal bas, projektion

**Uppgift:**
Betrakta $\mathbb P_3$, polynomen av gradtal maximalt tre, med skalärprodukten
$$\langle p,q\rangle=\int_{-1}^1p(x)q(x)\,dx.$$
Låt också
$$W=\{p\in\mathbb P_3:p(0)=0\}\quad\text{och}\quad\mathcal P=\{x,x^2,5x^3-3x\}.$$
a) Visa att $W$ är ett underrum till $\mathbb P_3$.
b) Visa att $\mathcal P$ är en ortogonal bas för $W$.
c) Utvidga $\mathcal P$ till en ortogonal bas för $\mathbb P_3$.

**Lösning:**
a) $\mathbf 0\in W$, ok, ty $p(x)=0$ för alla $x$ så $p(0)=0$.
$p,q\in W$: visa $p+q\in W$: $(p+q)(0)=p(0)+q(0)=0+0=0$, ok.
$p\in W$: visa $cp\in W$: $(cp)(0)=cp(0)=c\cdot0=0$, ok.
$W$ är ett underrum.

b)
$$\langle x,x^2\rangle=\int_{-1}^1x\cdot x^2\,dx=0\quad(\text{integranden udda}),$$
$$\langle x,5x^3-3x\rangle=\int_{-1}^1(5x^4-3x^2)\,dx=\big[x^5-x^3\big]_{-1}^1=1-1-(-1+1)=0,$$
$$\langle x^2,5x^3-3x\rangle=\int_{-1}^1x^2(5x^3-3x)\,dx=0\quad(\text{udda}).$$
$\mathcal P$ är en ortogonal mängd, så linjärt oberoende ($\mathbf0\notin\mathcal P$). $W$ kan max ha dimensionen 3 (konstanten 1 ligger inte i $W$) och nu har vi tre linjärt oberoende, alltså en ortogonal bas.

c) Om $1$ läggs till fås en bas, men den måste ortogonaliseras, så lägg till
$$1-\operatorname{proj}_W1=1-\frac{\langle1,x\rangle}{\langle x,x\rangle}x-\frac{\langle1,x^2\rangle}{\langle x^2,x^2\rangle}x^2-\frac{\langle1,5x^3-3x\rangle}{\langle5x^3-3x,5x^3-3x\rangle}(5x^3-3x).$$
Två av tre skalärprodukter är noll (udda integrand). Kvar:
$$\frac{\langle1,x^2\rangle}{\langle x^2,x^2\rangle}x^2=\frac{2/3}{2/5}x^2=\frac53x^2,\quad\text{där }\int_{-1}^11\cdot x^2\,dx=\tfrac23,\ \int_{-1}^1x^2\cdot x^2\,dx=\tfrac25.$$
Så $1-\operatorname{proj}_W1=1-\frac53x^2$. Välj hellre $3-5x^2$.

Alternativt (inte lika stiligt): ansätt $p(x)=1+ax+bx^2+cx^3$:
$$\langle p,x\rangle=\tfrac23a+\tfrac25c=0,\quad\langle p,x^2\rangle=\tfrac25b+\tfrac23=0,\quad\langle p,5x^3-3x\rangle=\tfrac8{35}c=0,$$
vilket ger $c=0$, $b=-\frac53$, $a=0$, dvs $p(x)=1-\frac53x^2$.

**Svar:** c) En ortogonal bas för $\mathbb P_3$ är $\{x,\ x^2,\ 5x^3-3x,\ 3-5x^2\}$.

## [t260319] Uppgift 9 | 4p | VG | Egenvektorer, linjärt oberoende, bevis

**Uppgift:**
En matris har egenvärden $\lambda_1\neq\lambda_2$ (kanske andra också) med tillhörande egenvektorer $\mathbf u$ och $\mathbf v$. Visa att $\{\mathbf u,\mathbf v\}$ är linjärt oberoende.

**Lösning:**
Antag
$$c_1\mathbf u+c_2\mathbf v=\mathbf 0\tag{1}$$
och visa $c_1=c_2=0$. Kalla matrisen $A$. Multiplicera (1) med $A$:
$$A(c_1\mathbf u+c_2\mathbf v)=A\mathbf 0\iff c_1A\mathbf u+c_2A\mathbf v=\mathbf 0\iff c_1\lambda_1\mathbf u+c_2\lambda_2\mathbf v=\mathbf 0.\tag{2}$$
Bilda nu $\lambda_1\cdot(1)-(2)$:
$$c_2(\lambda_1-\lambda_2)\mathbf v=\mathbf 0.$$
Men $\mathbf v\neq\mathbf 0$ (egenvektor) och $\lambda_1-\lambda_2\neq0$ (olika), så $c_2=0$. Från (1) följer det nu att $c_1=0$ ($\mathbf u$ egenvektor, så $\mathbf u\neq\mathbf 0$).

Så $c_1=c_2=0$, dvs $\{\mathbf u,\mathbf v\}$ är linjärt oberoende.

# xT3 | Övningstenta 3 | 2026-01 | Lösningsskiss (maskinskriven)

## [xT3] Uppgift 1 | 4p | G | Matrisinvers

**Uppgift:**
Bestäm inversen till $\begin{bmatrix}-4&-1&2\\6&2&-2\\-2&-1&1\end{bmatrix}$.

**Lösning:**
Kalla matrisen $A$, ställ upp $[A\mid I]$ och gausseliminera tills det står $I$ till vänster; då har vi $[I\mid A^{-1}]$.
$$\left[\begin{array}{ccc|ccc}-4&-1&2&1&0&0\\6&2&-2&0&1&0\\-2&-1&1&0&0&1\end{array}\right]\sim\left[\begin{array}{ccc|ccc}-2&-1&1&0&0&1\\6&2&-2&0&1&0\\-4&-1&2&1&0&0\end{array}\right]$$
$$\sim\left[\begin{array}{ccc|ccc}-2&-1&1&0&0&1\\0&-1&1&0&1&3\\0&1&0&1&0&-2\end{array}\right]\sim\left[\begin{array}{ccc|ccc}-2&-1&1&0&0&1\\0&-1&1&0&1&3\\0&0&1&1&1&1\end{array}\right]\sim\left[\begin{array}{ccc|ccc}\underline1&1/2&-1/2&0&0&-1/2\\0&\underline1&-1&0&-1&-3\\0&0&\underline1&1&1&1\end{array}\right].$$
Framåt-eliminationen visar att alla kolumner är pivotkolumner (annars hade det inte gått att invertera och uppgiften hade varit felaktig). Nu uppåt, fixa nollor ovanför pivoterna:
$$\sim\left[\begin{array}{ccc|ccc}1&1/2&0&1/2&1/2&0\\0&1&0&1&0&-2\\0&0&1&1&1&1\end{array}\right]\sim\left[\begin{array}{ccc|ccc}1&0&0&0&1/2&1\\0&1&0&1&0&-2\\0&0&1&1&1&1\end{array}\right].$$
**Svar:** $A^{-1}=\begin{bmatrix}0&1/2&1\\1&0&-2\\1&1&1\end{bmatrix}$.

## [xT3] Uppgift 2 | 4p | G | Ekvationssystem med parameter, determinant

**Uppgift:**
Låt $a$ vara en reell parameter och betrakta
$$\begin{bmatrix}-2&a&1\\1&1&0\\1&1&a\end{bmatrix}\mathbf x=\begin{bmatrix}2\\a\\2\end{bmatrix}.$$
För vilka värden på $a$ har ekvationen precis en lösning? Ingen lösning? Oändligt många lösningar? Bestäm också lösningarna i de eventuella fall då oändligt många lösningar finns.

**Lösning:**
Systemet är kvadratiskt, så det är smidigt att använda determinanten. Kalla matrisen $A$:
$$\det A=-1\begin{vmatrix}a&1\\1&a\end{vmatrix}+1\begin{vmatrix}-2&1\\1&a\end{vmatrix}=-(a^2-1)-2a-1=-a(a+2).$$
Precis en lösning då $a\neq0$ och $a\neq-2$. För $a=0$ eller $a=-2$ finns antingen oändligt många eller inga lösningar.

$a=0$:
$$\left[\begin{array}{ccc|c}-2&0&1&2\\1&1&0&0\\1&1&0&2\end{array}\right]\sim\left[\begin{array}{ccc|c}1&1&0&0\\-2&0&1&2\\1&1&0&2\end{array}\right]\sim\left[\begin{array}{ccc|c}1&1&0&0\\0&2&1&2\\0&0&0&2\end{array}\right],$$
nedersta raden visar att lösning saknas.

$a=-2$:
$$\left[\begin{array}{ccc|c}-2&-2&1&2\\1&1&0&-2\\1&1&-2&2\end{array}\right]\sim\left[\begin{array}{ccc|c}1&1&0&-2\\-2&-2&1&2\\1&1&-2&2\end{array}\right]\sim\left[\begin{array}{ccc|c}1&1&0&-2\\0&0&1&-2\\0&0&-2&4\end{array}\right]\sim\left[\begin{array}{ccc|c}1&1&0&-2\\0&0&1&-2\\0&0&0&0\end{array}\right].$$
$x_1$ och $x_3$ bundna, $x_2$ fri. Låt $x_2=t$: $x_3=-2$, $x_1=-2-t$.

**Svar:** Precis en lösning för $a\neq0,-2$; ingen lösning för $a=0$; oändligt många för $a=-2$: $\mathbf x=(-2,0,-2)+t(-1,1,0)$.

## [xT3] Uppgift 3 | 4p | G | Linjära avbildningar, spegling, projektion

**Uppgift:**
Bestäm matrisen för den avbildning som speglar i linjen $x+2y=0$. Vad avbildas $(1,1)$ på? Illustrera med figur.

**Lösning:**
Kalla avbildningen $S$ och matrisen $A$. Enligt teorin är $A=[S(\mathbf e_1)\ S(\mathbf e_2)]$. Linjen har riktningen $(2,-1)$. Projicera $(1,0)$ på $(2,-1)$ och dra bort det från $(1,0)$; då fås vektorn $\mathbf z$ (vinkelrät mot linjen). Speglingen blir
$$S(\mathbf e_1)=(1,0)-2\mathbf z=-(1,0)+2\frac{(1,0)\bullet(2,-1)}{(2,-1)\bullet(2,-1)}(2,-1)=-(1,0)+\frac45(2,-1)=(3/5,-4/5).$$
[Figur: $(1,0)$, $\mathbf z=(1,0)-\operatorname{proj}_{(2,-1)}(1,0)$ och $S(1,0)=(1,0)-2\mathbf z$ ritade mot linjen.]

Analogt för $\mathbf e_2$:
$$S(\mathbf e_2)=-(0,1)+2\frac{(0,1)\bullet(2,-1)}{(2,-1)\bullet(2,-1)}(2,-1)=(-4/5,-3/5).$$
Matrisen (de framräknade vektorerna som kolonner):
$$A=\frac15\begin{bmatrix}3&-4\\-4&-3\end{bmatrix}.$$
Kontroll: $A^2=\frac1{25}\begin{bmatrix}3&-4\\-4&-3\end{bmatrix}\begin{bmatrix}3&-4\\-4&-3\end{bmatrix}=I$ (samma spegling två gånger ger tillbaka utgångsläget).
$$A\begin{bmatrix}1\\1\end{bmatrix}=\frac15\begin{bmatrix}3&-4\\-4&-3\end{bmatrix}\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}-1/5\\-7/5\end{bmatrix}.$$
[Figur: $(1,1)$, dess projektion på linjen och $S(1,1)$ på andra sidan linjen.]

**Svar:** $A=\frac15\begin{bmatrix}3&-4\\-4&-3\end{bmatrix}$; $(1,1)\mapsto(-1/5,-7/5)$.

## [xT3] Uppgift 4 | 4p | G | Nollrum, bas

**Uppgift:**
Bestäm en bas för $\operatorname{null}(A)$ då
$$A=\begin{bmatrix}1&2&-2&3&4\\2&4&-3&6&11\\1&2&-2&5&8\\1&2&-1&3&7\end{bmatrix}.$$
Bestäm också $a$ så att $(0,2,a,2,-1)^T$ ligger i $\operatorname{null}(A)$.

**Lösning:**
Lös $A\mathbf x=\mathbf 0$:
$$\begin{bmatrix}1&2&-2&3&4\\2&4&-3&6&11\\1&2&-2&5&8\\1&2&-1&3&7\end{bmatrix}\sim\begin{bmatrix}1&2&-2&3&4\\0&0&1&0&3\\0&0&0&2&4\\0&0&1&0&3\end{bmatrix}\sim\begin{bmatrix}1&2&-2&3&4\\0&0&1&0&3\\0&0&0&2&4\\0&0&0&0&0\end{bmatrix}.$$
$x_2=s$ och $x_5=t$ fria; $x_4=-2t$, $x_3=-3t$, $x_1=-2s+2(-3t)-3(-2t)-4t=-2s-4t$:
$$\mathbf x=\begin{bmatrix}-2s-4t\\s\\-3t\\-2t\\t\end{bmatrix}=s\begin{bmatrix}-2\\1\\0\\0\\0\end{bmatrix}+t\begin{bmatrix}-4\\0\\-3\\-2\\1\end{bmatrix}.$$
För att kolla om en vektor ligger i nollrummet: multiplicera med matrisen och se om det blir nollvektorn.
$$A\begin{bmatrix}0\\2\\a\\2\\-1\end{bmatrix}=\begin{bmatrix}6-2a\\9-3a\\6-2a\\3-a\end{bmatrix},$$
som är nollvektorn omm $a=3$.

**Svar:** Bas för $\operatorname{null}(A)$: $\{(-2,1,0,0,0)^T,\ (-4,0,-3,-2,1)^T\}$; $a=3$.

## [xT3] Uppgift 5 | 4p | G | Egenvärden, diagonalisering

**Uppgift:**
Diagonalisera följande matris (om det går),
$$\begin{bmatrix}4&6&3\\-12&-14&-6\\18&18&7\end{bmatrix}.$$

**Lösning:**
Kalla matrisen $A$ och lös $\det(\lambda I-A)=0$:
$$\det(\lambda I-A)=\begin{vmatrix}\lambda-4&-6&-3\\12&\lambda+14&6\\-18&-18&\lambda-7\end{vmatrix}=\begin{vmatrix}\lambda-4&-\lambda-2&-3\\12&\lambda+2&6\\-18&0&\lambda-7\end{vmatrix}=(\lambda+2)\begin{vmatrix}\lambda-4&-1&-3\\12&1&6\\-18&0&\lambda-7\end{vmatrix}$$
$$=(\lambda+2)\left(-(-1)\begin{vmatrix}12&6\\-18&\lambda-7\end{vmatrix}+1\begin{vmatrix}\lambda-4&-3\\-18&\lambda-7\end{vmatrix}+0\right)=(\lambda+2)(\lambda^2+\lambda-2).$$
(Första kolonnen drogs bort från den andra, vilket inte påverkar determinanten; sedan bröts $\lambda+2$ ut och man utvecklade efter andra kolonnen.) Rötterna till andragradspolynomet är $-2$ och $1$, så egenvärdena är $-2$ (multiplicitet 2) och $1$. [Koll: $-2-2+1=-3=\operatorname{tr}A=4-14+7$; $(-2)(-2)1=4=\det A$, ok.]

$\lambda=-2$: $(2I+A)\mathbf v=\mathbf 0$:
$$\left[\begin{array}{ccc|c}-6&-6&-3&0\\12&12&6&0\\-18&-18&-9&0\end{array}\right]\sim\left[\begin{array}{ccc|c}2&2&1&0\\0&0&0&0\\0&0&0&0\end{array}\right].$$
Två fria variabler, så det går att diagonalisera. $\mathbf v=s\begin{bmatrix}-1\\1\\0\end{bmatrix}+t\begin{bmatrix}-1/2\\0\\1\end{bmatrix}$; välj $\begin{bmatrix}-1\\1\\0\end{bmatrix}$ och $\begin{bmatrix}-1\\0\\2\end{bmatrix}$.

$\lambda=1$: $(I-A)\mathbf v=\mathbf 0$:
$$\left[\begin{array}{ccc|c}-3&-6&-3&0\\12&15&6&0\\-18&-18&-6&0\end{array}\right]\sim\left[\begin{array}{ccc|c}1&2&1&0\\0&-3&-2&0\\0&3&2&0\end{array}\right]\sim\left[\begin{array}{ccc|c}1&2&1&0\\0&3&2&0\\0&0&0&0\end{array}\right].$$
$\mathbf v=t\begin{bmatrix}1/3\\-2/3\\1\end{bmatrix}$; välj $\begin{bmatrix}1\\-2\\3\end{bmatrix}$.

**Svar:** $A=PDP^{-1}$ med $P=\begin{bmatrix}-1&-1&1\\1&0&-2\\0&2&3\end{bmatrix}$, $D=\begin{bmatrix}-2&0&0\\0&-2&0\\0&0&1\end{bmatrix}$.

## [xT3] Uppgift 6 | 4p | G | Inre produkt, Gram–Schmidt

**Uppgift:**
Definiera $\langle\mathbf x,\mathbf y\rangle=A\mathbf x\bullet A\mathbf y$ på $\mathbb R^3$ med
$$A=\begin{bmatrix}1&1&0\\0&1&0\\0&0&2\end{bmatrix}.$$
Bestäm en ortogonal bas för $\mathbb R^3$ genom att använda Gram–Schmidt.

**Lösning:**
Skalärprodukten betyder
$$\left\langle\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix},\begin{bmatrix}y_1\\y_2\\y_3\end{bmatrix}\right\rangle=(x_1+x_2)(y_1+y_2)+x_2y_2+4x_3y_3=x_1y_1+2x_2y_2+4x_3y_3+x_1y_2+x_2y_1.$$
Börja med en bas, t.ex. standardbasen, och ortogonalisera. $\mathbf v_1=(1,0,0)^T$,
$$\mathbf v_2=\begin{bmatrix}0\\1\\0\end{bmatrix}-\frac{\langle\mathbf e_2,\mathbf e_1\rangle}{\langle\mathbf e_1,\mathbf e_1\rangle}\begin{bmatrix}1\\0\\0\end{bmatrix}=\begin{bmatrix}0\\1\\0\end{bmatrix}-\frac11\begin{bmatrix}1\\0\\0\end{bmatrix}=\begin{bmatrix}-1\\1\\0\end{bmatrix},$$
$$\mathbf v_3=\begin{bmatrix}0\\0\\1\end{bmatrix}-\frac{\langle\mathbf e_3,\mathbf v_1\rangle}{\langle\mathbf v_1,\mathbf v_1\rangle}\mathbf v_1-\frac{\langle\mathbf e_3,\mathbf v_2\rangle}{\langle\mathbf v_2,\mathbf v_2\rangle}\mathbf v_2=\begin{bmatrix}0\\0\\1\end{bmatrix}.$$
**Svar:** En ortogonal bas är $\left\{(1,0,0)^T,\ (-1,1,0)^T,\ (0,0,1)^T\right\}$.

## [xT3] Uppgift 7 | 4p | VG | Bevis, rang, kolonnrum

**Uppgift:**
Bevisa $\operatorname{rank}(AB)\le\min(\operatorname{rank}(A),\operatorname{rank}(B))$.
Ledning: Visa först $\operatorname{rank}(AB)\le\operatorname{rank}(A)$ genom att bevisa att $\operatorname{col}(AB)$ är ett underrum till $\operatorname{col}(A)$. Därefter visas $\operatorname{rank}(AB)\le\operatorname{rank}(B)$ genom …

**Lösning:**
Rangen är per definition dimensionen av kolonnrummet, $\operatorname{col}(A)=\{\mathbf y:\mathbf y=A\mathbf x\text{ något }\mathbf x\}$. Då är $\operatorname{col}(AB)$ ett underrum till $\operatorname{col}(A)$, ty $\operatorname{col}(AB)\ni\mathbf y=(AB)\mathbf x=A(B\mathbf x)\in\operatorname{col}(A)$. Alltså $\operatorname{rank}(AB)\le\operatorname{rank}(A)$, eftersom ett underrums dimension aldrig är större än rummets. Enligt teorin har kolonnrum och radrum samma dimension, så $\operatorname{rank}A=\operatorname{rank}A^T$. Det följer
$$\operatorname{rank}(AB)=\operatorname{rank}((AB)^T)=\operatorname{rank}(B^TA^T)\le\operatorname{rank}(B^T)=\operatorname{rank}(B).$$
Den andra likheten är en transponatlag och olikheten följer av resonemanget ovan. Slutsatsen följer.

## [xT3] Uppgift 8 | 4p | VG | Egenvärden, definitioner, bevis

**Uppgift:**
Låt $A$ vara en kvadratisk matris. Definiera begreppen egenvärden och egenvektorer för $A$. Givet att $\lambda$, $\mathbf v$ är ett egenvärde/egenvektors-par för $A$, vad kan sägas om egenvärden och egenvektorer för $A^2-I$? Märk att påståenden måste visas.

**Lösning:**
En vektor $\mathbf v$ är en egenvektor för $A$ med tillhörande egenvärde $\lambda$ om $\mathbf v\neq\mathbf 0$ och $A\mathbf v=\lambda\mathbf v$. Multiplicera $A\mathbf v=\lambda\mathbf v$ med $A$:
$$A^2\mathbf v=A(\lambda\mathbf v)=\lambda A\mathbf v=\lambda^2\mathbf v,$$
så $\lambda^2$ är ett egenvärde för $A^2$ med egenvektorn $\mathbf v$. Och
$$(A^2-I)\mathbf v=A^2\mathbf v-I\mathbf v=(\lambda^2-1)\mathbf v.$$
**Svar:** $\mathbf v$ är en egenvektor för $A^2-I$ med egenvärde $\lambda^2-1$. (Generaliseras till godtyckliga polynom.)

## [xT3] Uppgift 9 | 4p | VG | Inre produktrum, bästa approximation, Gram–Schmidt

**Uppgift:**
Utrusta $\mathbb P_3$ med skalärprodukten $\langle p(x),q(x)\rangle=\int_0^1p(x)q(x)\,dx$. Bestäm den bästa, i normen denna skalärprodukt ger, approximationen för $x^3$ med polynom av gradtal maximalt ett.

**Lösning:**
Uppgiften är att bestämma $\operatorname{proj}_{\mathbb P_1}x^3$. För projektionsformeln behövs en ortogonal bas för $\mathbb P_1$. En bas är $\{1,x\}$; ortogonalisera med Gram–Schmidt. $q_1(x)=1$, $W_1=\operatorname{span}\{q_1\}$,
$$q_2(x)=x-\operatorname{proj}_{W_1}(x)=x-\frac{\langle x,1\rangle}{\langle1,1\rangle}1=x-\frac{1/2}{1}=x-\frac12.$$
Välj $\tilde q=2q_2=2x-1$ (för att slippa bråktal). Ortogonal bas: $\{1,2x-1\}$.
$$\operatorname{proj}_{\mathbb P_1}x^3=\frac{\langle x^3,1\rangle}{\langle1,1\rangle}1+\frac{\langle x^3,2x-1\rangle}{\langle2x-1,2x-1\rangle}(2x-1)=\frac{1/4}{1}+\frac{3/20}{1/3}(2x-1)=\frac14+\frac9{20}(2x-1)=\frac{9}{10}x-\frac15.$$
[Figur: $x^3$ och linjen $\frac9{10}x-\frac15$ på $[0,1]$.]

*Transkriberarens not: originalskissen skriver $\frac{3}{10}x-\frac15$ på sista raden, men räkningen ($\frac{9}{20}\cdot2=\frac9{10}$) och figuren ger $\frac9{10}x-\frac15$.*

**Svar:** $\frac{9}{10}x-\frac15$.

# xT2 | Övningstenta 2 | 2025-02-30 | Lösningsskiss (maskinskriven)

## [xT2] Uppgift 1 | 4p | G | Linjära ekvationssystem, lösbarhet

**Uppgift:**
Låt $A=\begin{bmatrix}2&-1&3\\-2&2&-2\\3&-1&5\end{bmatrix}$. Bestäm samtliga $\mathbf b$ sådana att $A\mathbf x=\mathbf b$ har lösningar.

**Lösning:**
Låt $\mathbf b=\begin{bmatrix}b_1\\b_2\\b_3\end{bmatrix}$ och gausseliminera:
$$\left[\begin{array}{ccc|c}2&-1&3&b_1\\-2&2&-2&b_2\\3&-1&5&b_3\end{array}\right]\sim\left[\begin{array}{ccc|c}6&-3&9&3b_1\\-6&6&-6&3b_2\\6&-2&10&2b_3\end{array}\right]\sim\left[\begin{array}{ccc|c}6&-3&9&3b_1\\0&3&3&3b_2+3b_1\\0&1&1&2b_3-3b_1\end{array}\right]$$
$$\sim\left[\begin{array}{ccc|c}6&-3&9&3b_1\\0&1&1&2b_3-3b_1\\0&0&0&3b_2+3b_1-3(2b_3-3b_1)\end{array}\right].$$
Lösningar finns om och endast om elementet längst ner till höger är noll.

**Svar:** $A\mathbf x=\mathbf b$ är lösbart omm $4b_1+b_2-2b_3=0$.

## [xT2] Uppgift 2 | 4p | G | Linjära avbildningar, spegling och rotation

**Uppgift:**
Bestäm matrisen för den linjära avbildning $T_A:\mathbb R^2\to\mathbb R^2$ som först speglar i linjen $x+y=0$ och därefter roterar $\pi/6$ radianer moturs. Vad avbildas $(1,1)$ på?

**Lösning:**
Speglingsmatrisen $S$ först. Ritar man en figur ser man att $\mathbf e_1$ avbildas på $-\mathbf e_2$ och $\mathbf e_2$ på $-\mathbf e_1$, så $S=\begin{bmatrix}0&-1\\-1&0\end{bmatrix}$. Rotationsmatrisen med vinkeln $\pi/6$: $R=\begin{bmatrix}\sqrt3/2&-1/2\\1/2&\sqrt3/2\end{bmatrix}$. Det följer att
$$A=RS=\begin{bmatrix}\sqrt3/2&-1/2\\1/2&\sqrt3/2\end{bmatrix}\begin{bmatrix}0&-1\\-1&0\end{bmatrix}=\begin{bmatrix}1/2&-\sqrt3/2\\-\sqrt3/2&-1/2\end{bmatrix}$$
och
$$T_A(1,1)=A\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}\frac{1-\sqrt3}{2}\\\frac{-1-\sqrt3}{2}\end{bmatrix}.$$
**Svar:** $A=\begin{bmatrix}1/2&-\sqrt3/2\\-\sqrt3/2&-1/2\end{bmatrix}$; $(1,1)$ avbildas på $\left(\frac{1-\sqrt3}{2},\frac{-1-\sqrt3}{2}\right)$.

## [xT2] Uppgift 3 | 4p | G | Linje–plan-skärning, area, kryssprodukt

**Uppgift:**
I vilken punkt skär linjen $\mathbf x=(5,-2,3)+t(4,-1,4)$ planet $3x+y-2z=4$? Bestäm arean av triangeln med hörn i skärningspunkten, $(1,1,1)$ och $(-1,2,1)$.

**Lösning:**
Sätt in linjen i planets ekvation:
$$3(5+4t)+(-2-t)-2(3+4t)=4,$$
dvs $7+3t=4$, $t=-1$. Skärningspunkten är $(1,-1,-1)$. Kalla punkterna $S$, $A$, $B$: $\mathbf u=\overrightarrow{SA}=(0,2,2)$, $\mathbf v=\overrightarrow{SB}=(-2,3,2)$.
$$\text{Area}=\tfrac12\|\mathbf u\times\mathbf v\|=\tfrac12\|(-2,-4,4)\|=\tfrac12\sqrt{4+16+16}=3.$$
**Svar:** Skärningspunkten $(1,-1,-1)$; arean är $3$.

## [xT2] Uppgift 4 | 4p | G | Bas, kolonnrum, linjärt hölje

**Uppgift:**
Bestäm en bas för
$$\operatorname{span}\{(1,0,-1,1),(1,-2,3,-4),(-1,-2,5,-6),(1,-4,7,-9)\}.$$

**Lösning:**
Skriv vektorerna som kolonner i en matris $A$; uppgiften är att finna en bas för kolonnrummet.
$$A=\begin{bmatrix}1&1&-1&1\\0&-2&-2&-4\\-1&3&5&7\\1&-4&-6&-9\end{bmatrix}\sim\begin{bmatrix}1&1&-1&1\\0&-2&-2&-4\\0&4&4&8\\0&-5&-5&-10\end{bmatrix}\sim\begin{bmatrix}1&1&-1&1\\0&1&1&2\\0&1&1&2\\0&1&1&2\end{bmatrix}\sim\begin{bmatrix}1&1&-1&1\\0&1&1&2\\0&0&0&0\\0&0&0&0\end{bmatrix}.$$
Första och andra kolonnen är pivotkolonner.

**Svar:** $\{(1,0,-1,1),(1,-2,3,-4)\}$ är en bas för det linjära höljet.

## [xT2] Uppgift 5 | 4p | G | Differentialekvationssystem, diagonalisering

**Uppgift:**
Bestäm lösningen till $y'=y-2z$, $z'=-y$ med $y(0)=1$ och $z(0)=-1$.

**Lösning:**
På matrisform
$$\begin{bmatrix}y'\\z'\end{bmatrix}=\begin{bmatrix}1&-2\\-1&0\end{bmatrix}\begin{bmatrix}y\\z\end{bmatrix},\quad\begin{bmatrix}y(0)\\z(0)\end{bmatrix}=\begin{bmatrix}1\\-1\end{bmatrix}.$$
Kalla matrisen $A$; den diagonaliseras för att få variabelbytet. Karakteristiska ekvationen:
$$0=\det(\lambda I-A)=\begin{vmatrix}\lambda-1&2\\1&\lambda\end{vmatrix}=\lambda^2-\lambda-2.$$
Rötterna är $2$ och $-1$. [Koll: $2+(-1)=1=\operatorname{tr}A$; $2(-1)=-2=\det A$, ok.]

$\lambda=2$: $(2I-A)\mathbf v=\mathbf 0$: $\left[\begin{array}{cc|c}1&2&0\\1&2&0\end{array}\right]\sim\left[\begin{array}{cc|c}1&2&0\\0&0&0\end{array}\right]$, så $\mathbf v=t\begin{bmatrix}-2\\1\end{bmatrix}$; välj $\begin{bmatrix}-2\\1\end{bmatrix}$.

$\lambda=-1$: $(-I-A)\mathbf v=\mathbf 0$: $\left[\begin{array}{cc|c}-2&2&0\\1&-1&0\end{array}\right]\sim\left[\begin{array}{cc|c}-1&1&0\\0&0&0\end{array}\right]$, så $\mathbf v=t\begin{bmatrix}1\\1\end{bmatrix}$; välj $\begin{bmatrix}1\\1\end{bmatrix}$.

Detta ger $A=PDP^{-1}$ med $P=\begin{bmatrix}-2&1\\1&1\end{bmatrix}$, $D=\begin{bmatrix}2&0\\0&-1\end{bmatrix}$, dvs $D=P^{-1}AP$. Låt $\mathbf u=\begin{bmatrix}y\\z\end{bmatrix}=P\mathbf v$. Då är $\mathbf u'=P\mathbf v'$ och därför $P\mathbf v'=AP\mathbf v$. Multiplicera från vänster med $P^{-1}$: $\mathbf v'=D\mathbf v$, på komponentform med $\mathbf v=\begin{bmatrix}v_1\\v_2\end{bmatrix}$:
$$v_1'=2v_1,\qquad v_2'=-v_2.$$
Lösningarna är $v_1=Ae^{2x}$, $v_2=Be^{-x}$, och
$$\begin{bmatrix}y\\z\end{bmatrix}=P\mathbf v=\begin{bmatrix}-2&1\\1&1\end{bmatrix}\begin{bmatrix}Ae^{2x}\\Be^{-x}\end{bmatrix}=\begin{bmatrix}-2Ae^{2x}+Be^{-x}\\Ae^{2x}+Be^{-x}\end{bmatrix}.$$
Begynnelsevillkoren ger $-2A+B=1$, $A+B=-1$, så $A=-2/3$, $B=-1/3$.

**Svar:** $y=\frac43e^{2x}-\frac13e^{-x}$, $z=-\frac23e^{2x}-\frac13e^{-x}$.

## [xT2] Uppgift 6 | 4p | G | Inre produktrum, avstånd, Gram–Schmidt

**Uppgift:**
Låt $\mathbb P_2$ vara vektorrummet av polynom med gradtal maximalt två och utrusta det med skalärprodukten
$$\langle p,q\rangle=\int_0^1p(x)q(x)\,dx.$$
Bestäm avståndet mellan $1+x$ och $1+x^2$, $d(1+x,1+x^2)$. Bestäm också en ortogonal bas för $\operatorname{span}\{x,1+x^2\}$.

**Lösning:**
Skriv upp kvadraten av avståndet för att slippa rottecknet:
$$d(1+x,1+x^2)^2=\|x-x^2\|^2=\langle x-x^2,x-x^2\rangle=\int_0^1(x^2-2x^3+x^4)\,dx=\frac13-\frac24+\frac15=\frac1{30}.$$
Avståndet är alltså $1/\sqrt{30}$.

Ortogonal bas: en bas är $\{x,1+x^2\}$ (spänner upp per definition, linjärt oberoende är klart). Gram–Schmidt: $q_1(x)=x$, $W_1=\operatorname{span}\{q_1\}$,
$$q_2(x)=1+x^2-\frac{\langle x,1+x^2\rangle}{\langle x,x\rangle}x.$$
Med $\langle x,1+x^2\rangle=3/4$ och $\langle x,x\rangle=1/3$:
$$q_2(x)=1+x^2-\frac{3/4}{1/3}x=1+x^2-\frac94x.$$
Multiplicera med 4 för snyggare siffror: $\tilde q_2=4-9x+4x^2$.

**Svar:** $d=1/\sqrt{30}$; en ortogonal bas är $\{x,\ 4-9x+4x^2\}$.

## [xT2] Uppgift 7 | 4p | VG | Determinanter, räknelagar

**Uppgift:**
Låt $\mathbf a_1$ och $\mathbf a_2$ vara två vektorer i $\mathbb R^2$ skrivna som $2\times1$ matriser. Låt $A=[\mathbf a_1\ \mathbf a_2]$ och antag att $\det A=-3$. Bestäm $\det([\mathbf b_1\ \mathbf b_2])$ då $\mathbf b_1=-\mathbf a_1+3\mathbf a_2$ och $\mathbf b_2=2\mathbf a_1+\mathbf a_2$. Lös också $A\mathbf x=\mathbf b_1-\mathbf b_2$.

**Lösning:**
Med räknelagarna för determinanten:
$$\begin{aligned}\det([\mathbf b_1\ \mathbf b_2])&=\det([-\mathbf a_1+3\mathbf a_2,\ 2\mathbf a_1+\mathbf a_2])\\&=-\det([\mathbf a_1,\ 2\mathbf a_1+\mathbf a_2])+3\det([\mathbf a_2,\ 2\mathbf a_1+\mathbf a_2])\\&=-\det([\mathbf a_1,\mathbf a_2])+3\cdot2\det([\mathbf a_2,\mathbf a_1])\\&=-\det([\mathbf a_1,\mathbf a_2])-3\cdot2\det([\mathbf a_1,\mathbf a_2])=21.\end{aligned}$$
$A\mathbf x=\mathbf b_1-\mathbf b_2$ med $\mathbf x=\begin{bmatrix}x_1\\x_2\end{bmatrix}$ betyder
$$x_1\mathbf a_1+x_2\mathbf a_2=\mathbf b_1-\mathbf b_2=-\mathbf a_1+3\mathbf a_2-(2\mathbf a_1+\mathbf a_2)=-3\mathbf a_1+2\mathbf a_2.$$
Så $x_1=-3$, $x_2=2$. Att detta är den enda lösningen följer av att $\det A\neq0$.

**Svar:** $\det([\mathbf b_1\ \mathbf b_2])=21$; $\mathbf x=\begin{bmatrix}-3\\2\end{bmatrix}$.

## [xT2] Uppgift 8 | 4p | VG | Egenvärden, ortogonal projektion, geometrisk tolkning

**Uppgift:**
Låt $A$ vara matrisen för den linjära avbildningen som ortogonalt projicerar vektorer i ett plan $\Pi$. För $A$ är både
$$\begin{bmatrix}1\\1\\-1\end{bmatrix}\ \text{och}\ \begin{bmatrix}2\\-1\\0\end{bmatrix}$$
egenvektorer med tillhörande egenvärde $\lambda=1$. Bestäm planet $\Pi$. Bestäm övriga egenvärden och egenvektorer.
Ledning: Matrisen $A$ behöver inte bestämmas.

**Lösning:**
Planet måste gå genom origo, annars är det inte en linjär avbildning. Att $\mathbf v$ är en egenvektor med egenvärde 1 betyder $A\mathbf v=\mathbf v$, så en sådan vektor måste ligga i planet (den projiceras på sig själv). Så $(1,1,-1)$ och $(2,-1,0)$ ligger båda i planet, och en normal fås med kryssprodukten (de är inte parallella):
$$(1,1,-1)\times(2,-1,0)=(-1,-2,-3).$$
Planet: $x+2y+3z=0$.

Tredje egenvärdet: eftersom det är en projektion är det $0$; vektorer i normalens riktning avbildas på nollan. Tredje paret: $\begin{bmatrix}1\\2\\3\end{bmatrix}$, $\lambda=0$.

(Ej krävt:) Matrisen fås via diagonaliseringen:
$$A=\begin{bmatrix}1&2&1\\1&-1&2\\-1&0&3\end{bmatrix}\begin{bmatrix}1&0&0\\0&1&0\\0&0&0\end{bmatrix}\begin{bmatrix}1&2&1\\1&-1&2\\-1&0&3\end{bmatrix}^{-1}=\frac1{14}\begin{bmatrix}13&-2&-3\\-2&10&-6\\-3&-6&5\end{bmatrix}.$$
**Svar:** $\Pi: x+2y+3z=0$; övrigt egenvärde $\lambda=0$ med egenvektorer $t(1,2,3)$, $t\neq0$.

## [xT2] Uppgift 9 | 4p | VG | Underrum, bas, matrisrum

**Uppgift:**
Låt $M_{2\times2}$ vara vektorrummet av samtliga $2\times2$ matriser. Visa att
$$H=\{A\in M_{2\times2}: AB=BA\},\quad\text{där } B=\begin{bmatrix}1&2\\-1&1\end{bmatrix},$$
är ett underrum till $M_{2\times2}$. Bestäm också en bas för $H$.

**Lösning:**
Allt kommuterar med nollmatrisen, så den ligger i $H$. Antag att $C$ och $D$ ligger i $H$, dvs $CB=BC$ och $DB=BD$. Då
$$(C+D)B=CB+DB=BC+BD=B(C+D),$$
så $C+D\in H$. Även $\alpha C\in H$ om $C\in H$, ty
$$(\alpha C)B=\alpha(CB)=\alpha(BC)=B(\alpha C).$$
Bas: låt $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}\in H$:
$$AB=BA\iff\begin{bmatrix}a-b&2a+b\\c-d&2c+d\end{bmatrix}=\begin{bmatrix}a+2c&b+2d\\-a+c&-b+d\end{bmatrix}.$$
Ekvationssystemet
$$\begin{cases}a-b=a+2c\\2a+b=b+2d\\c-d=-a+c\\2c+d=-b+d\end{cases}$$
på matrisform:
$$\left[\begin{array}{cccc|c}0&-1&-2&0&0\\2&0&0&-2&0\\1&0&0&-1&0\\0&1&2&0&0\end{array}\right]\sim\left[\begin{array}{cccc|c}1&0&0&-1&0\\0&1&2&0&0\\0&0&0&0&0\\0&0&0&0&0\end{array}\right].$$
Två pivoter, två fria. Sätt $c=s$, $d=t$; då $b=-2s$, $a=t$:
$$\begin{bmatrix}t&-2s\\s&t\end{bmatrix}=s\begin{bmatrix}0&-2\\1&0\end{bmatrix}+t\begin{bmatrix}1&0\\0&1\end{bmatrix}.$$
**Svar:** En bas för $H$ är $\left\{\begin{bmatrix}0&-2\\1&0\end{bmatrix},\begin{bmatrix}1&0\\0&1\end{bmatrix}\right\}$.

# xT1 | Övningstenta 1 | 2024-12-24 | Lösningsskiss (maskinskriven)

## [xT1] Uppgift 1 | 4p | G | Matrisekvationer, invers

**Uppgift:**
Låt $A=\begin{bmatrix}1&2&-1\\1&-2&0\end{bmatrix}$, $B=\begin{bmatrix}1&-1\\-1&1\end{bmatrix}$. Bestäm matrisen $X$ så att
$$XB = XAA^T + B^TB.$$

**Lösning:**
Lös ut $X$ och man får
$$XB = XAA^T + B^TB \iff X(B-AA^T) = B^TB \iff X = B^TB(B-AA^T)^{-1}.$$
Beräkna faktorerna:
$$(B-AA^T)^{-1} = \left(\begin{bmatrix}1&-1\\-1&1\end{bmatrix} - \begin{bmatrix}1&2&-1\\1&-2&0\end{bmatrix}\begin{bmatrix}1&1\\2&-2\\-1&0\end{bmatrix}\right)^{-1} = \left(\begin{bmatrix}1&-1\\-1&1\end{bmatrix}-\begin{bmatrix}6&-3\\-3&5\end{bmatrix}\right)^{-1} = \begin{bmatrix}-5&2\\2&-4\end{bmatrix}^{-1} = \frac{1}{16}\begin{bmatrix}-4&-2\\-2&-5\end{bmatrix}.$$
Detta ger
$$X = \begin{bmatrix}1&-1\\-1&1\end{bmatrix}^T\begin{bmatrix}1&-1\\-1&1\end{bmatrix}\frac{1}{16}\begin{bmatrix}-4&-2\\-2&-5\end{bmatrix} = \frac{1}{16}\begin{bmatrix}2&-2\\-2&2\end{bmatrix}\begin{bmatrix}-4&-2\\-2&-5\end{bmatrix} = \frac18\begin{bmatrix}-2&3\\2&-3\end{bmatrix}.$$
**Svar:** $X=\frac18\begin{bmatrix}-2&3\\2&-3\end{bmatrix}$.

## [xT1] Uppgift 2 | 4p | G | Linjära avbildningar

**Uppgift:**
Den linjära avbildningen $T:\mathbb{R}^3\to\mathbb{R}^3$ avbildar $(1,0,1)$ på $(2,3,-1)$, $(0,1,2)$ på $(4,0,-1)$ och $(-1,2,-1)$ på $(1,2,3)$. Vad avbildas $(2,2,1)$ på? Vad avbildas på $(7,-1,2)$?

**Lösning:**
Första frågan: skriv $(2,2,1)$ som en linjärkombination av $(1,0,1)$, $(0,1,2)$ och $(-1,2,-1)$, dvs bestäm $c_j$ så att
$$c_1(1,0,1)+c_2(0,1,2)+c_3(-1,2,-1)=(2,2,1).$$
Gausseliminera den utökade koefficientmatrisen:
$$\left[\begin{array}{ccc|c}1&0&-1&2\\0&1&2&2\\1&2&-1&1\end{array}\right]\sim\dots\sim\left[\begin{array}{ccc|c}1&0&-1&2\\0&1&2&2\\0&0&-4&-5\end{array}\right]$$
med lösningen $c_3=5/4$, $c_2=-1/2$, $c_1=13/4$. Det följer att
$$T(2,2,1) = \tfrac{13}{4}(2,3,-1) - \tfrac12(4,0,-1) + \tfrac54(1,2,3) = (23/4,\,49/4,\,1).$$
Andra frågan: skriv $(7,-1,2)$ som linjärkombination av bilderna $(2,3,-1)$, $(4,0,-1)$, $(1,2,3)$:
$$\left[\begin{array}{ccc|c}2&4&1&7\\3&0&2&-1\\-1&-1&3&2\end{array}\right]\sim\dots\sim\left[\begin{array}{ccc|c}-1&-1&3&2\\0&-6&22&10\\0&0&1&1\end{array}\right]$$
ger $c_3=1$, $c_2=2$, $c_1=-1$. Vektorn som avbildas på $(7,-1,2)$ är alltså
$$-1(1,0,1)+2(0,1,2)+1(-1,2,-1)=(-2,4,2).$$
Alternativt: med $X=\begin{bmatrix}1&0&-1\\0&1&2\\1&2&-1\end{bmatrix}$, $Y=\begin{bmatrix}2&4&1\\3&0&2\\-1&-1&3\end{bmatrix}$ är standardmatrisen för $T$ lika med $YX^{-1}$, och $YX^{-1}(2,2,1)^T=(23/4,49/4,1)^T$, $(YX^{-1})^{-1}(7,-1,2)^T = XY^{-1}(7,-1,2)^T=(-2,4,2)^T$.

**Svar:** $T(2,2,1)=(23/4,\,49/4,\,1)$; $(-2,4,2)$ avbildas på $(7,-1,2)$.

## [xT1] Uppgift 3 | 4p | G | Plan och avstånd

**Uppgift:**
Låt $A$, $B$, $C$ och $D$ vara punkterna $(1,0,1)$, $(2,1,0)$, $(0,-2,1)$ respektive $(-3,1,1)$. Bestäm en ekvation för planet som innehåller punkterna $A$, $B$ och $C$. Bestäm också avståndet mellan planet och punkten $D$.

**Lösning:**
Låt $\mathbf u=\overrightarrow{AB}$ och $\mathbf v=\overrightarrow{AC}$; de ligger i planet, så $\mathbf u\times\mathbf v$ är en normal:
$$\mathbf n=\mathbf u\times\mathbf v=(1,1,-1)\times(-1,-2,0)=(-2,1,-1).$$
Plan med denna normal genom $A$: $-2(x-1)+1(y-0)-1(z-1)=0$, dvs
$$2x-y+z=3.$$
[Koll: $A$: $2-0+1=3$; $B$: $4-1-0=3$; $C$: $0+2+1=3$, ok.]

Avståndet: låt $\mathbf w=\overrightarrow{AD}=(-4,1,0)$. Längden av projektionen på normalen är avståndet:
$$\mathbf p=\operatorname{proj}_{\mathbf n}\mathbf w=\frac{(-4,1,0)\bullet(-2,1,-1)}{(-2,1,-1)\bullet(-2,1,-1)}(-2,1,-1)=\frac96(-2,1,-1),$$
$$\text{Avstånd}=\|\mathbf p\|=\tfrac32\sqrt{4+1+1}=\tfrac32\sqrt6.$$
Alternativ metod: linjen genom $D$ i normalens riktning, $(-3,1,1)+t(-2,1,-1)$, insatt i planets ekvation ger $2(-3-2t)-(1+t)+(1-t)=3$, så $t=-3/2$. Skärningspunkten blir $(0,-1/2,5/2)$ och avståndet till $(-3,1,1)$ är längden av $(3,-3/2,3/2)$, dvs $3\sqrt6/2$.

[Figur: planet med punkten $A=(1,0,1)$, vektorn $\mathbf w$ från $A$ till $D$ och dess projektion $\mathbf p=\operatorname{proj}_{\mathbf n}\mathbf w$ längs normalen $\mathbf n$.]

**Svar:** $2x-y+z=3$; avståndet är $\frac{3\sqrt6}{2}$.

## [xT1] Uppgift 4 | 4p | G | Linjärt oberoende, baser, koordinater

**Uppgift:**
För vilka värden på $a$ är $\mathcal B_a=\{1+x+x^2,\ 1-2x^2,\ 2+ax+x^2\}$ linjärt oberoende. Välj nu ett sådant $a$. Förklara varför $\mathcal B_a$ nu är en bas för $\mathbb P_2$. Vilket element har koordinaterna $(1,-1,2)$?

**Lösning:**
Linjärt oberoende betyder att
$$c_1(1+x+x^2)+c_2(1-2x^2)+c_3(2+ax+x^2)=0\ \text{för alla }x$$
medför $c_1=c_2=c_3=0$. Identifiera $x$-potenserna:
$$x^0:\ c_1+c_2+2c_3=0,\qquad x^1:\ c_1+ac_3=0,\qquad x^2:\ c_1-2c_2+c_3=0.$$
Detta har endast nollösningen om och endast om determinanten är nollskild:
$$\det\begin{bmatrix}1&1&2\\1&0&a\\1&-2&1\end{bmatrix}=-1\begin{vmatrix}1&2\\-2&1\end{vmatrix}-a\begin{vmatrix}1&1\\1&-2\end{vmatrix}=-5+3a.$$
Så $\mathcal B_a$ är linjärt oberoende omm $a\neq5/3$, och då är det en bas eftersom $\dim\mathbb P_2=3$ (bassatsen: tre linjärt oberoende element i ett tredimensionellt rum är en bas). Välj $a=0$; elementet med koordinaterna $(1,-1,2)$ är
$$1(1+x+x^2)+(-1)(1-2x^2)+2(2+x^2)=4+x+5x^2.$$
**Svar:** $a\neq 5/3$; med $a=0$ är elementet $4+x+5x^2$.

## [xT1] Uppgift 5 | 4p | G | Egenvärden, diagonalisering

**Uppgift:**
Diagonalisera $A=\begin{bmatrix}4&-15\\2&-7\end{bmatrix}$, det vill säga finn matriser $P$ och $D$, $D$ diagonal, så att $A=PDP^{-1}$. Bestäm $A^5$.

**Lösning:**
Egenvärden ur karakteristiska ekvationen:
$$0=\det(\lambda I-A)=\begin{vmatrix}\lambda-4&15\\-2&\lambda+7\end{vmatrix}=(\lambda-4)(\lambda+7)+30=\lambda^2+3\lambda+2.$$
Rötterna är $-1$ och $-2$. [Koll: $-1-2=-3=\operatorname{tr}A=4-7$; $(-1)(-2)=2=\det A=-28+30$, ok.]

$\lambda=-1$: $(I+A)\mathbf v=\mathbf 0$,
$$\left[\begin{array}{cc|c}5&-15&0\\2&-6&0\end{array}\right]\sim\left[\begin{array}{cc|c}1&-3&0\\0&0&0\end{array}\right],$$
så $\mathbf v=t\begin{bmatrix}3\\1\end{bmatrix}$; välj $\begin{bmatrix}3\\1\end{bmatrix}$.

$\lambda=-2$: $(2I+A)\mathbf v=\mathbf 0$,
$$\left[\begin{array}{cc|c}6&-15&0\\2&-5&0\end{array}\right]\sim\left[\begin{array}{cc|c}2&-5&0\\0&0&0\end{array}\right],$$
så $\mathbf v=t\begin{bmatrix}5/2\\1\end{bmatrix}$; välj $\begin{bmatrix}5\\2\end{bmatrix}$.

Detta ger $A=PDP^{-1}$ med $P=\begin{bmatrix}3&5\\1&2\end{bmatrix}$, $D=\begin{bmatrix}-1&0\\0&-2\end{bmatrix}$. Då är $A^5=PD^5P^{-1}$ med $P^{-1}=\begin{bmatrix}2&-5\\-1&3\end{bmatrix}$ (formeln för $2\times2$-invers):
$$A^5=\begin{bmatrix}3&5\\1&2\end{bmatrix}\begin{bmatrix}-1&0\\0&-32\end{bmatrix}\begin{bmatrix}2&-5\\-1&3\end{bmatrix}=\begin{bmatrix}3&5\\1&2\end{bmatrix}\begin{bmatrix}-2&5\\32&-96\end{bmatrix}=\begin{bmatrix}154&-465\\62&-187\end{bmatrix}.$$
**Svar:** $P=\begin{bmatrix}3&5\\1&2\end{bmatrix}$, $D=\begin{bmatrix}-1&0\\0&-2\end{bmatrix}$, $A^5=\begin{bmatrix}154&-465\\62&-187\end{bmatrix}$.

## [xT1] Uppgift 6 | 4p | G | Minsta kvadratmetoden

**Uppgift:**
Betrakta följande data

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|
| $y$ | $1$ | $-1$ | $-1$ | $3$ |

Bestäm den funktion på formen $y=Ax^2+B$ som bäst anpassar sig till datapunkterna i minstakvadratmetodens mening.

**Lösning:**
Sätt in datapunkterna i modellfunktionen $y=\alpha x^2+\beta$:
$$\begin{cases}\alpha+\beta=1\\ \beta=-1\\ \alpha+\beta=-1\\ 4\alpha+\beta=3\end{cases}$$
Systemet är uppenbart inkonsistent. På matrisform $A\begin{bmatrix}\alpha\\\beta\end{bmatrix}=\mathbf b$ med
$$A=\begin{bmatrix}1&1\\0&1\\1&1\\4&1\end{bmatrix},\quad \mathbf b=\begin{bmatrix}1\\-1\\-1\\3\end{bmatrix}.$$
Lös istället normalekvationen $A^TA\begin{bmatrix}\alpha\\\beta\end{bmatrix}=A^T\mathbf b$:
$$\begin{bmatrix}18&6\\6&4\end{bmatrix}\begin{bmatrix}\alpha\\\beta\end{bmatrix}=\begin{bmatrix}12\\2\end{bmatrix}.$$
Lösningen är $\alpha=1$, $\beta=-1$.

[Figur: datapunkterna och parabeln $y=x^2-1$.]

**Svar:** $y=x^2-1$.

## [xT1] Uppgift 7 | 4p | VG | Linjer i rymden, avstånd

**Uppgift:**
Betrakta linjerna
$$L_1:\ \mathbf x=(1,1,-2)+t(1,-1,1)\quad\text{och}\quad L_2:\ \mathbf x=(0,1,2)+t(-1,1,2).$$
Bevisa att linjerna inte skär varandra och bestäm avståndet mellan dem.

**Lösning:**
För en skärningspunkt måste
$$(1,1,-2)+s(1,-1,1)=(0,1,2)+t(-1,1,2)$$
ha en lösning. (Parametern för ena linjen är bytt till $s$; en eventuell skärningspunkt behöver inte ha samma parametervärde.) Detta ger
$$\begin{cases}s+t=-1\\-s-t=0\\s-2t=4\end{cases}$$
$$\left[\begin{array}{cc|c}1&1&-1\\-1&-1&0\\1&-2&4\end{array}\right]\sim\left[\begin{array}{cc|c}1&1&-1\\0&0&-1\\0&-3&5\end{array}\right]\sim\left[\begin{array}{cc|c}1&1&-1\\0&-3&5\\0&0&-1\end{array}\right].$$
Nedersta raden visar att lösning saknas, så linjerna skär inte varandra. (Onödigt att gausseliminera här, inkonsistensen syns direkt.)

Avståndet: bestäm ett plan som innehåller $L_1$ men inte skär $L_2$, och bestäm avståndet från en punkt på $L_2$ till planet. En normal:
$$\mathbf n=(1,-1,1)\times(-1,1,2)=(-3,-3,0)\parallel \mathbf n'=(1,1,0).$$
Planet: $x-1+y-1=0$, dvs $x+y=2$. Punkt i planet $(1,1,-2)$, punkt på $L_2$: $(0,1,2)$, $\mathbf w=(-1,0,4)$.
$$\operatorname{proj}_{\mathbf n'}(\mathbf w)=\frac{(-1,0,4)\bullet(1,1,0)}{(1,1,0)\bullet(1,1,0)}(1,1,0)=\frac{-1}{2}(1,1,0).$$
**Svar:** Avståndet är $1/\sqrt2$.

## [xT1] Uppgift 8 | 4p | VG | Inre produktrum, ortogonal projektion, Gram–Schmidt

**Uppgift:**
Bestäm talen $a$ och $b$ så att
$$\int_0^1\left(ax^2+x+b\right)^2dx$$
blir så liten som möjligt.

**Lösning:**
Det som ska minimeras är ett avstånd i kvadrat,
$$d(-x,\,ax^2+b)^2=\|x+ax^2+b\|^2=\int_0^1(ax^2+x+b)^2\,dx,$$
i $\mathbb P_2$ med $\langle p,q\rangle=\int_0^1p(x)q(x)\,dx$. Enligt teorin minimeras avståndet av projektionen $\operatorname{proj}_W(-x)$ där $W=\operatorname{span}\{1,x^2\}$. Ortogonalisera basen med Gram–Schmidt: $q_1(x)=1$, $W_1=\operatorname{span}\{q_1\}$,
$$q_2(x)=x^2-\operatorname{proj}_{W_1}(x^2)=x^2-\frac{\langle x^2,1\rangle}{\langle1,1\rangle}1=x^2-\frac{1/3}{1}=x^2-\frac13,$$
där $\langle x^2,1\rangle=\int_0^1x^2\,dx=1/3$, $\langle1,1\rangle=1$. Välj $3q_2=3x^2-1$ för att slippa tredjedelarna; ortogonal bas $\{1,3x^2-1\}$.
$$\operatorname{proj}_W(-x)=\frac{\langle -x,1\rangle}{\langle1,1\rangle}1+\frac{\langle -x,3x^2-1\rangle}{\langle3x^2-1,3x^2-1\rangle}(3x^2-1).$$
Med $\langle -x,1\rangle=-1/2$, $\langle -x,3x^2-1\rangle=-1/4$ och
$$\langle3x^2-1,3x^2-1\rangle=\int_0^1(9x^4-6x^2+1)\,dx=4/5$$
fås
$$\operatorname{proj}_W(-x)=-\frac{15}{16}x^2-\frac{3}{16}.$$
**Svar:** $a=-15/16$, $b=-3/16$; minimala värdet blir $1/192$.

## [xT1] Uppgift 9 | 4p | VG | Bevis, linjärt oberoende, kolonnrum

**Uppgift:**
Låt $A$ vara en $n\times n$ matris.

a) Antag att $\{\mathbf x_1,\mathbf x_2,\dots,\mathbf x_n\}$ är linjärt oberoende i $\mathbb R^n$. Bevisa att om $A$ är inverterbar så är $\{A\mathbf x_1,A\mathbf x_2,\dots,A\mathbf x_n\}$ också linjärt oberoende.

b) Visa att $\{A\mathbf x,A^2\mathbf x,\dots,A^n\mathbf x\}$ är linjärt beroende i $\mathbb R^n$ för varje $\mathbf x$ om $A$ är singulär.

**Lösning:**
a) Antag
$$c_1A\mathbf x_1+c_2A\mathbf x_2+\dots+c_nA\mathbf x_n=\mathbf 0$$
och visa $c_1=\dots=c_n=0$. Ekvationen är densamma som $A(c_1\mathbf x_1+\dots+c_n\mathbf x_n)=\mathbf 0$, och eftersom $A$ är inverterbar följer
$$c_1\mathbf x_1+\dots+c_n\mathbf x_n=\mathbf 0,$$
vilket ger $c_j=0$ eftersom $\{\mathbf x_1,\dots,\mathbf x_n\}$ är linjärt oberoende.

b) $A^k\mathbf x=A(A^{k-1}\mathbf x)$, dvs alla elementen ligger i kolonnrummet för $A$. Men $A$ är singulär, så $\dim\operatorname{col}(A)<n$, och $n$ element i ett rum med dimension strikt mindre än $n$ är alltid linjärt beroende.

# diag3 | Diagnostiskt test 3 | 2024-12-24 | Ingen lösning finns i materialet

## [diag3] Uppgift 1 | 4p | G | Egenvärden, diagonalisering, matrispotens

**Uppgift:**
Diagonalisera $A=\begin{bmatrix}-20&36\\-12&22\end{bmatrix}$, det vill säga finn matriser $P$ och $D$, $D$ diagonal, så att $A=PDP^{-1}$. Bestäm $A^5$.

**Lösning:**
*Lösningsförslag saknas i materialet.*

## [diag3] Uppgift 2 | 4p | G | Egenvärden, diagonalisering

**Uppgift:**
Diagonalisera följande matris om det går,
$$\begin{bmatrix}3&1&-1&1\\-1&1&-1&1\\0&0&0&0\\0&0&0&0\end{bmatrix}.$$

**Lösning:**
*Lösningsförslag saknas i materialet.*

## [diag3] Uppgift 3 | 4p | G | Differentialekvationssystem, diagonalisering

**Uppgift:**
Bestäm lösningen till $y'=5y-3z$, $z'=6y-4z$ med $y(0)=1$ och $z(0)=-1$.

**Lösning:**
*Lösningsförslag saknas i materialet.*

## [diag3] Uppgift 4 | 4p | G | Gram–Schmidt, ortogonal bas

**Uppgift:**
Bestäm en ortogonal bas för
$$\operatorname{span}\{(1,0,0,1),(0,1,1,0),(1,0,1,0)\}.$$

**Lösning:**
*Lösningsförslag saknas i materialet.*

## [diag3] Uppgift 5 | 4p | G | Minsta kvadratmetoden

**Uppgift:**
Betrakta följande data

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|
| $y$ | $-3$ | $0$ | $1$ | $2$ |

Bestäm den funktion på formen $y=\alpha x+\beta x^2$ som bäst anpassar sig till datapunkterna i minstakvadratmetodens mening.

**Lösning:**
*Lösningsförslag saknas i materialet.*

## [diag3] Uppgift 6 | 4p | G | Inre produktrum, ortogonal bas, projektion

**Uppgift:**
Betrakta $\mathbb P_4$ utrustat med skalärprodukten
$$\langle p,q\rangle=\int_0^1p(x)q(x)\,dx,$$
och låt $W=\operatorname{span}\{x^2,x^4\}$. Visa att $\{x^2,7x^4-5x^2\}$ är en ortogonal bas för $W$ och bestäm $\operatorname{proj}_W1$.

**Lösning:**
*Lösningsförslag saknas i materialet.*

## [diag3] Uppgift 7 | 4p | VG | Gram–Schmidt, kolonnrum, projektion, normalekvationen

**Uppgift:**
Låt
$$A=\begin{bmatrix}1&2&1\\1&-1&-5\\-2&2&10\end{bmatrix}.$$
Bestäm en ortogonal bas för kolonnrummet och utnyttja den för att bestämma $\operatorname{proj}_{\operatorname{col}(A)}(1,2,3)$. Jämför sedan med en uträkning med hjälp av normalekvationen.

**Lösning:**
*Lösningsförslag saknas i materialet.*

## [diag3] Uppgift 8 | 4p | VG | Inre produktrum, bästa approximation

**Uppgift:**
Bestäm talen $a$ och $b$ så
$$\int_0^4(a+bx+x^2)^2\,dx$$
blir så liten som möjligt.

**Lösning:**
*Lösningsförslag saknas i materialet.*

## [diag3] Uppgift 9 | 4p | VG | Egenvärden, positivt definit, rang, bevis

**Uppgift:**
Låt $A$ vara en $n\times n$ matris sådan att $\mathbf u\bullet A\mathbf u>0$ för alla $\mathbf u\neq\mathbf 0$ ($A$ kallas positivt definit). Visa att samtliga egenvärde för $A$ är positiva och att rangen för $A$ är $n$.

**Lösning:**
*Lösningsförslag saknas i materialet.*

# diag2 | Diagnostiskt test 2 | 2024-12-24 | Lösningsskiss (handskriven)

## [diag2] Uppgift 1 | 4p | G | Linjer och plan, avstånd, projektion

**Uppgift:**
Bestäm avståndet mellan skärningslinjen för planen $2x-z=2$ och $x-2y+z=3$ och linjen $\mathbf x=(1,2,1)+t(2,3,4)$.

**Lösning:**
Skärningslinjen mellan $2x-z=2$ och $x-2y+z=3$:
$$\left[\begin{array}{ccc|c}2&0&-1&2\\1&-2&1&3\end{array}\right]\sim\left[\begin{array}{ccc|c}1&-2&1&3\\2&0&-1&2\end{array}\right]\sim\left[\begin{array}{ccc|c}\boxed1&-2&1&3\\0&\boxed4&-3&-4\end{array}\right].$$
$x,y$ bundna, $z=t$ fri: $y=-1+\frac34t$, $x=3-2+\frac32t-t=1+\frac12t$.

Skärningslinje: $(1,-1,0)+t\left(\frac12,\frac34,1\right)$, eller kortare $(1,-1,0)+t(2,3,4)$.

Linjerna är parallella. Nu avstånd. Låt $\mathbf v=(1,2,1)-(1,-1,0)=(0,3,1)$.

[Figur: de två parallella linjerna, $\mathbf v$ från $(1,-1,0)$ till $(1,2,1)$, $\operatorname{proj}_{(2,3,4)}(0,3,1)$ längs linjen och avståndet $a$ vinkelrätt.]

Projicera $\mathbf v$ på $(2,3,4)$:
$$\operatorname{proj}_{(2,3,4)}(0,3,1)=\frac{(0,3,1)\bullet(2,3,4)}{(2,3,4)\bullet(2,3,4)}(2,3,4)=\frac{13}{29}(2,3,4).$$
Avståndet via Pythagoras:
$$a^2=\|\mathbf v\|^2-\|\operatorname{proj}_{(2,3,4)}(0,3,1)\|^2=10-\frac{13^2}{29}=\frac{290-169}{29}=\frac{121}{29}.$$
**Svar:** $a=\dfrac{11}{\sqrt{29}}$.

## [diag2] Uppgift 2 | 4p | G | Linje–plan-skärning, plan genom tre punkter

**Uppgift:**
Bestäm den punkt där linjen $\mathbf x=(0,1,2)+t(-3,2,-1)$ skär planet som innehåller $(1,2,-1)$, $(2,1,0)$ och $(-2,1,1)$.

**Lösning:**
$A=(1,2,-1)$, $B=(2,1,0)$, $C=(-2,1,1)$. En normal till planet är
$$\overrightarrow{AB}\times\overrightarrow{AC}=(1,-1,1)\times(-3,-1,2)=(-1,-5,-4).$$
En ekvation för planet:
$$-1(x-1)-5(y-2)-4(z+1)=0\iff x+5y+4z=7.$$
[Koll: $A$: $1+10-4=7$; $B$: $2+5+0=7$; $C$: $-2+5+4=7$, ok.]

Linjen $(x,y,z)=(0,1,2)+t(-3,2,-1)$: sätt in $x=-3t$, $y=1+2t$, $z=2-t$ i planet:
$$-3t+5+10t+8-4t=7\iff3t=-6\iff t=-2.$$
Punkten blir $(0,1,2)-2(-3,2,-1)=(6,-3,4)$.

**Svar:** $(6,-3,4)$.

## [diag2] Uppgift 3 | 4p | G | Ortogonal projektion på plan, standardmatris

**Uppgift:**
Bestäm matrisen för den avbildning som ortogonalt projicerar i planet $2x-3y+z=0$. Vad avbildas $(1,0,1)$ på?

**Lösning:**
$\Pi: 2x-3y+z=0$, $\mathbf n=(2,-3,1)$. Bestäm projektionen av $\mathbf x=(x,y,z)$ på $\Pi$.

[Figur: planet, normalen $\mathbf n$, $\mathbf x$ och dess projektion i planet.]

Projektionen ges av
$$\mathbf x-\operatorname{proj}_{\mathbf n}\mathbf x=(x,y,z)-\frac{(x,y,z)\bullet(2,-3,1)}{(2,-3,1)\bullet(2,-3,1)}(2,-3,1)=(x,y,z)-\frac1{14}(2x-3y+z)(2,-3,1)$$
$$=\frac1{14}\Big((14x,14y,14z)-(4x-6y+2z,\,-6x+9y-3z,\,2x-3y+z)\Big)$$
$$=\frac1{14}(10x+6y-2z,\ 6x+5y+3z,\ -2x+3y+13z)=\frac1{14}\begin{bmatrix}10&6&-2\\6&5&3\\-2&3&13\end{bmatrix}\begin{bmatrix}x\\y\\z\end{bmatrix}.$$
$(1,0,1)$ avbildas på
$$\frac1{14}\begin{bmatrix}10&6&-2\\6&5&3\\-2&3&13\end{bmatrix}\begin{bmatrix}1\\0\\1\end{bmatrix}=\frac1{14}\begin{bmatrix}8\\9\\11\end{bmatrix}.$$
**Svar:** Matrisen är $\frac1{14}\begin{bmatrix}10&6&-2\\6&5&3\\-2&3&13\end{bmatrix}$; $(1,0,1)\mapsto\frac1{14}(8,9,11)$.

## [diag2] Uppgift 4 | 4p | G | Bas, kolonnrum, utvidga till bas

**Uppgift:**
Dimensionen för
$$W=\operatorname{span}\{(1,0,1,1),(2,-1,1,3),(1,2,1,3),(0,1,0,1)\}$$
är tre. Bestäm en bas för $W$. Lägg sedan till ett element till den basen så det blir en bas för $\mathbb R^4$.

**Lösning:**
Sätt vektorerna som kolonner i en matris $A$ och bestäm en bas för dess kolonnrum.
$$A=\begin{bmatrix}1&2&1&0\\0&-1&2&1\\1&1&1&0\\1&3&3&1\end{bmatrix}\sim\begin{bmatrix}1&2&1&0\\0&-1&2&1\\0&-1&0&0\\0&1&2&1\end{bmatrix}\sim\begin{bmatrix}1&2&1&0\\0&-1&2&1\\0&0&-2&-1\\0&0&4&2\end{bmatrix}\sim\begin{bmatrix}\boxed1&2&1&0\\0&\boxed{-1}&2&1\\0&0&\boxed{-2}&-1\\0&0&0&0\end{bmatrix}.$$
Pivotkolonner 1, 2, 3. En bas för det linjära höljet är
$$\{(1,0,1,1),(2,-1,1,3),(1,2,1,3)\}.$$
För att utöka till en bas för $\mathbb R^4$ måste vi lägga till ett element som inte ligger i $W$; det blir då automatiskt en bas. Bestäm $\mathbf b$ så att $A\mathbf x=\mathbf b$ saknar lösning (utan det löjliga elementet):
$$\left[\begin{array}{ccc|c}1&2&1&b_1\\0&-1&2&b_2\\1&1&1&b_3\\1&3&3&b_4\end{array}\right]\sim\left[\begin{array}{ccc|c}1&2&1&b_1\\0&-1&2&b_2\\0&-1&0&b_3-b_1\\0&1&2&b_4-b_1\end{array}\right]\sim\left[\begin{array}{ccc|c}1&2&1&b_1\\0&-1&2&b_2\\0&0&-2&b_3-b_1-b_2\\0&0&4&b_4-b_1+b_2\end{array}\right]$$
$$\sim\left[\begin{array}{ccc|c}1&2&1&b_1\\0&-1&2&b_2\\0&0&-2&b_3-b_1-b_2\\0&0&0&b_4-b_1+b_2+2(b_3-b_1-b_2)\end{array}\right].$$
Välj t.ex. $\mathbf b=(0,0,0,1)^T$ (sista raden blir då $[0\ 0\ 0\mid1]$).

**Svar:** Bas för $W$: $\{(1,0,1,1),(2,-1,1,3),(1,2,1,3)\}$; bas för $\mathbb R^4$: $\{(1,0,1,1),(2,-1,1,3),(1,2,1,3),(0,0,0,1)\}$.

## [diag2] Uppgift 5 | 4p | G | Bas, linjärt oberoende, koordinater

**Uppgift:**
Visa att $\{1+x,1-x^2,x-x^2\}$ är en bas för $\mathbb P_2$. Bestäm koordinaterna för $2+x+x^2$ relativt denna bas.

**Lösning:**
$\dim\mathbb P_2=3$ ty en bas är $\{1,x,x^2\}$. Enligt teorin är därför en linjärt oberoende mängd med tre element en bas (bassatsen). Visa linjärt oberoende:
$$c_1(1+x)+c_2(1-x^2)+c_3(x-x^2)=0\quad\text{för alla }x.$$
Identifiera:
$$x^0:\ c_1+c_2=0,\qquad x^1:\ c_1+c_3=0,\qquad x^2:\ -c_2-c_3=0.$$
$$\left[\begin{array}{ccc|c}1&1&0&0\\1&0&1&0\\0&-1&-1&0\end{array}\right]\sim\left[\begin{array}{ccc|c}1&1&0&0\\0&-1&1&0\\0&-1&-1&0\end{array}\right]\sim\left[\begin{array}{ccc|c}\boxed1&1&0&0\\0&\boxed{-1}&1&0\\0&0&\boxed{-2}&0\end{array}\right].$$
Enda lösningen $c_1=c_2=c_3=0$, alltså linjärt oberoende och därmed en bas.

Koordinater för $2+x+x^2$: $c_1(1+x)+c_2(1-x^2)+c_3(x-x^2)=2+x+x^2$. Identifiera:
$$x^0:\ c_1+c_2=2,\qquad x^1:\ c_1+c_3=1,\qquad x^2:\ -c_2-c_3=1.$$
$$\left[\begin{array}{ccc|c}1&1&0&2\\1&0&1&1\\0&-1&-1&1\end{array}\right]\sim\left[\begin{array}{ccc|c}1&1&0&2\\0&-1&1&-1\\0&-1&-1&1\end{array}\right]\sim\left[\begin{array}{ccc|c}1&1&0&2\\0&-1&1&-1\\0&0&-2&2\end{array}\right],$$
så $c_3=-1$, $c_2=0$, $c_1=2$.

[Koll: $2(1+x)+0(1-x^2)-1(x-x^2)=2+x+x^2$, ok.]

**Svar:** $(2+x+x^2)_{\mathcal B}=(2,0,-1)$ där $\mathcal B=\{1+x,1-x^2,x-x^2\}$.

## [diag2] Uppgift 6 | 4p | G | Nollrum, bas för lösningsrum

**Uppgift:**
Bestäm en bas för vektorrummet av lösningar till
$$\begin{cases}x+2y+z+2u-v=0\\x+2y+z+u+v+w=0\\2x+u-v+w=0.\end{cases}$$

**Lösning:**
På matrisform:
$$\begin{bmatrix}1&2&1&2&-1&0\\1&2&1&1&1&1\\2&0&0&2&-1&1\end{bmatrix}\begin{bmatrix}x\\y\\z\\u\\v\\w\end{bmatrix}=\begin{bmatrix}0\\0\\0\end{bmatrix}.$$
Det efterfrågas en bas för nollrummet.
$$\left[\begin{array}{cccccc|c}1&2&1&2&-1&0&0\\1&2&1&1&1&1&0\\2&0&0&2&-1&1&0\end{array}\right]\sim\left[\begin{array}{cccccc|c}1&2&1&2&-1&0&0\\0&0&0&-1&2&1&0\\0&-4&-2&-2&1&1&0\end{array}\right]\sim\left[\begin{array}{cccccc|c}\boxed1&2&1&2&-1&0&0\\0&\boxed{-4}&-2&-2&1&1&0\\0&0&0&\boxed{-1}&2&1&0\end{array}\right].$$
$x,y,u$ bundna; $z,v,w$ fria: $z=t_1$, $v=t_2$, $w=t_3$.
$$u=2t_2+t_3,$$
$$4y=-2t_1-2(2t_2+t_3)+t_2+t_3=-2t_1-3t_2-t_3\ \Rightarrow\ y=-\tfrac12t_1-\tfrac34t_2-\tfrac14t_3,$$
$$x=-2y-z-2u+v=t_1+\tfrac32t_2+\tfrac12t_3-t_1-4t_2-2t_3+t_2=-\tfrac32t_2-\tfrac32t_3.$$
Alltså
$$\begin{bmatrix}x\\y\\z\\u\\v\\w\end{bmatrix}=t_1\underbrace{\begin{bmatrix}0\\-1/2\\1\\0\\0\\0\end{bmatrix}}_{\mathbf b_1}+t_2\underbrace{\begin{bmatrix}-3/2\\-3/4\\0\\2\\1\\0\end{bmatrix}}_{\mathbf b_2}+t_3\underbrace{\begin{bmatrix}-3/2\\-1/4\\0\\1\\0\\1\end{bmatrix}}_{\mathbf b_3}.$$
Dessa tre utgör en bas ty de spänner upp och är uppenbart linjärt oberoende (en etta på var sin fri-variabelplats). Välj $\{2\mathbf b_1,4\mathbf b_2,4\mathbf b_3\}$.

**Svar:** En bas är
$$\left\{\begin{bmatrix}0\\-1\\2\\0\\0\\0\end{bmatrix},\begin{bmatrix}-6\\-3\\0\\8\\4\\0\end{bmatrix},\begin{bmatrix}-6\\-1\\0\\4\\0\\4\end{bmatrix}\right\}.$$

## [diag2] Uppgift 7 | 4p | VG | Spegling i plan, normal, geometri

**Uppgift:**
Låt $S$ vara den linjära avbildning som speglar i planet $\Pi$ och avbildar $(1,-2,2)$ på $(0,3,0)$. Bestäm planet $\Pi$. Vad speglas $(2,1,-2)$ på?
Ledning: Vad gäller för $S(\mathbf x)-\mathbf x$? Speglingsmatrisen behöver inte bestämmas.

**Lösning:**
$S(\mathbf x)-\mathbf x$ är en normal till planet (se figur).

[Figur: planet, $\mathbf x$, $S(\mathbf x)$ och vektorn $\mathbf x-S(\mathbf x)$ vinkelrät mot planet.]

[Koll: $S(S(\mathbf x)-\mathbf x)=S^2(\mathbf x)-S(\mathbf x)=\mathbf x-S(\mathbf x)=-(S(\mathbf x)-\mathbf x)$, eftersom $S^2=I$ för en spegling. Alltså speglas vektorn på sin negation, dvs den är vinkelrät mot planet.]

Låt
$$\mathbf n=S(1,-2,2)-(1,-2,2)=(0,3,0)-(1,-2,2)=(-1,5,-2).$$
Planet måste dessutom passera origo, annars är avbildningen inte linjär. Så $-x+5y-2z=0$, eller
$$x-5y+2z=0.$$
Vad speglas $(2,1,-2)=\mathbf x$ på? Spegelbilden ligger på normallinjen $\mathbf n(t)=(2,1,-2)+t(-1,5,-2)$ och har samma längd som $\mathbf x$, $\|\mathbf x\|=\sqrt{4+1+4}=3$.

[Figur: $\mathbf x$, planet, normallinjen genom $\mathbf x$ och spegelbilden; lika långa vektorer.]

Bestäm $t$ så att $\|\mathbf n(t)\|=3$:
$$(2-t)^2+(1+5t)^2+(-2-2t)^2=9\iff4-4t+t^2+1+10t+25t^2+4+8t+4t^2=9\iff30t^2+14t=0\iff2t(15t+7)=0.$$
$t=0$ ger $(2,1,-2)$ själv; $t=-\frac7{15}$ ger
$$(2,1,-2)-\tfrac7{15}(-1,5,-2)=\tfrac1{15}(37,-20,-16).$$
**Svar:** $\Pi: x-5y+2z=0$; $(2,1,-2)$ speglas på $\frac1{15}(37,-20,-16)$.

## [diag2] Uppgift 8 | 4p | VG | Rang, nollrum, dimensionssatsen

**Uppgift:**
Finns det någon $5\times5$ matris $A$ med $\operatorname{rank}(A)=3$ så att $A^2=0$ (nollmatrisen)? Ge ett exempel eller bevisa att sådan saknas.

**Lösning:**
Nej. Om $A^2=0$ så ligger alla $A$:s kolonner i nollrummet för $A$, dvs $\dim\operatorname{null}(A)\ge\operatorname{rank}(A)$. Samtidigt gäller dimensionssatsen:
$$\underbrace{\operatorname{rank}(A)}_{=3}+\underbrace{\dim\operatorname{null}(A)}_{\ge3}=\underbrace{n}_{=5},$$
vilket är omöjligt.

**Svar:** Nej, en sådan matris saknas.

## [diag2] Uppgift 9 | 4p | VG | Underrum, spår, bas, matrisrum

**Uppgift:**
Låt $M_{2\times2}$ beteckna vektorrummet av samtliga $2\times2$ matriser och $B=\begin{bmatrix}1&2\\-1&-1\end{bmatrix}$. Visa att
$$H=\{A\in M_{2\times2}:\operatorname{tr}(AB)=0\}$$
är ett underrum till $M_{2\times2}$. Bestäm också en bas för $H$.

**Lösning:**
- $0\in H$: klart, ty $\operatorname{tr}(0B)=\operatorname{tr}(0)=0$.
- Antag $C,D\in H$: $\operatorname{tr}((C+D)B)=\operatorname{tr}(CB+DB)=\operatorname{tr}(CB)+\operatorname{tr}(DB)=0+0=0$ (enkel tr-lag; $C,D\in H$).
- Antag $C\in H$, $c\in\mathbb R$: $\operatorname{tr}((cC)B)=\operatorname{tr}(c(CB))=c\operatorname{tr}(CB)=0$ (enkel tr-lag; $C\in H$).

Bas: låt $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$ och $\operatorname{tr}(AB)=0$:
$$\operatorname{tr}\left(\begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}1&2\\-1&-1\end{bmatrix}\right)=\operatorname{tr}\begin{bmatrix}a-b&\cdots\\\cdots&2c-d\end{bmatrix}=a-b+2c-d=0.$$
$b=s$, $c=t$, $d=u$ fria och $a=s-2t+u$. Alltså
$$A\in H\iff A=\begin{bmatrix}s-2t+u&s\\t&u\end{bmatrix}=s\begin{bmatrix}1&1\\0&0\end{bmatrix}+t\begin{bmatrix}-2&0\\1&0\end{bmatrix}+u\begin{bmatrix}1&0\\0&1\end{bmatrix}.$$
En bas är
$$\left\{\begin{bmatrix}1&1\\0&0\end{bmatrix},\begin{bmatrix}-2&0\\1&0\end{bmatrix},\begin{bmatrix}1&0\\0&1\end{bmatrix}\right\}$$
(spänner upp enligt räkningen och uppenbart linjärt oberoende: matris 1 är ensam om en etta i position (1,2), matris 2 i (2,1), matris 3 i (2,2)).

Märk (kontroll): $\begin{bmatrix}1&1\\0&0\end{bmatrix}B=\begin{bmatrix}0&1\\0&0\end{bmatrix}$, $\begin{bmatrix}-2&0\\1&0\end{bmatrix}B=\begin{bmatrix}-2&-4\\1&2\end{bmatrix}$, $IB=B$; alla tre har spår noll.

# diag1 | Diagnostiskt test 1 | 2024-12-24 | Lösningsskiss (handskriven)

## [diag1] Uppgift 1 | 4p | G | Linjära ekvationssystem, Gausselimination

**Uppgift:**
Lös följande ekvationssystem
$$\begin{cases}x+y-z+v=2\\x-z+u-2v=-3\\2x+y-z+u+3v=7\\-x-y+z=0\\2x+y-2z+u+2v=5.\end{cases}$$

**Lösning:**
Motsvarande utökade koefficientmatris (variabelordning $x,y,z,u,v$) elimineras enligt:
$$\left[\begin{array}{ccccc|c}1&1&-1&0&1&2\\1&0&-1&1&-2&-3\\2&1&-1&1&3&7\\-1&-1&1&0&0&0\\2&1&-2&1&2&5\end{array}\right]\sim\left[\begin{array}{ccccc|c}1&1&-1&0&1&2\\0&-1&0&1&-3&-5\\0&-1&1&1&1&3\\0&0&0&0&1&2\\0&-1&0&1&0&1\end{array}\right]\sim\left[\begin{array}{ccccc|c}1&1&-1&0&1&2\\0&-1&0&1&-3&-5\\0&0&1&0&4&8\\0&0&0&0&1&2\\0&0&0&0&3&6\end{array}\right]$$
$$\sim\left[\begin{array}{ccccc|c}\boxed1&1&-1&0&1&2\\0&\boxed{-1}&0&1&-3&-5\\0&0&\boxed1&0&4&8\\0&0&0&0&\boxed1&2\\0&0&0&0&0&0\end{array}\right].$$
$x,y,z,v$ bundna, $u=t$ fri. Bakåtsubstitution:
$$v=2,\quad z=8-4v=0,\quad y=5+t-3\cdot2=t-1,\quad x=2-y+z-v=2-(t-1)+0-2=1-t.$$
**Svar:**
$$\mathbf x=\begin{bmatrix}x\\y\\z\\u\\v\end{bmatrix}=\begin{bmatrix}1-t\\-1+t\\0\\t\\2\end{bmatrix}=\begin{bmatrix}1\\-1\\0\\0\\2\end{bmatrix}+t\begin{bmatrix}-1\\1\\0\\1\\0\end{bmatrix}.$$

## [diag1] Uppgift 2 | 4p | G | Matrisekvationer, invers

**Uppgift:**
Låt
$$A=\begin{bmatrix}-3&-2&2\\-2&0&0\\1&1&0\end{bmatrix}\ \text{och}\ B=\begin{bmatrix}1&0&1\\-1&0&0\\0&1&1\end{bmatrix}.$$
Bestäm matrisen $X$ så att $X=AX+B$.

**Lösning:**
$$X=AX+B\iff X-AX=B\iff(I-A)X=B\iff X=(I-A)^{-1}B$$
(sista steget om $I-A$ är inverterbar). Vi får
$$I-A=\begin{bmatrix}4&2&-2\\2&1&0\\-1&-1&1\end{bmatrix}.$$
Bestäm inversen:
$$\left[\begin{array}{ccc|ccc}4&2&-2&1&0&0\\2&1&0&0&1&0\\-1&-1&1&0&0&1\end{array}\right]\sim\left[\begin{array}{ccc|ccc}-1&-1&1&0&0&1\\2&1&0&0&1&0\\4&2&-2&1&0&0\end{array}\right]\sim\left[\begin{array}{ccc|ccc}-1&-1&1&0&0&1\\0&-1&2&0&1&2\\0&-2&2&1&0&4\end{array}\right]$$
$$\sim\left[\begin{array}{ccc|ccc}-1&-1&1&0&0&1\\0&-1&2&0&1&2\\0&0&-2&1&-2&0\end{array}\right]\sim\left[\begin{array}{ccc|ccc}1&1&-1&0&0&-1\\0&1&-2&0&-1&-2\\0&0&1&-\frac12&1&0\end{array}\right]\sim\left[\begin{array}{ccc|ccc}1&1&0&-\frac12&1&-1\\0&1&0&-1&1&-2\\0&0&1&-\frac12&1&0\end{array}\right]$$
$$\sim\left[\begin{array}{ccc|ccc}1&0&0&\frac12&0&1\\0&1&0&-1&1&-2\\0&0&1&-\frac12&1&0\end{array}\right].$$
OBS: $I-A$ är inverterbar, och
$$(I-A)^{-1}=\begin{bmatrix}\frac12&0&1\\-1&1&-2\\-\frac12&1&0\end{bmatrix}.$$
Så
$$X=\begin{bmatrix}\frac12&0&1\\-1&1&-2\\-\frac12&1&0\end{bmatrix}\begin{bmatrix}1&0&1\\-1&0&0\\0&1&1\end{bmatrix}=\begin{bmatrix}\frac12&1&\frac32\\-2&-2&-3\\-\frac32&0&-\frac12\end{bmatrix}.$$
**Svar:** $X=\begin{bmatrix}\frac12&1&\frac32\\-2&-2&-3\\-\frac32&0&-\frac12\end{bmatrix}$.

## [diag1] Uppgift 3 | 4p | G | Linjära ekvationssystem, lösbarhet

**Uppgift:**
Låt
$$A=\begin{bmatrix}1&0&1&1\\0&1&1&2\\-1&1&0&1\\0&1&1&2\end{bmatrix}$$
och bestäm samtliga $\mathbf b$ så att $A\mathbf x=\mathbf b$ har lösning.

**Lösning:**
Låt $\mathbf b=(b_1,b_2,b_3,b_4)^T$. Den utökade koefficientmatrisen elimineras enligt:
$$\left[\begin{array}{cccc|c}1&0&1&1&b_1\\0&1&1&2&b_2\\-1&1&0&1&b_3\\0&1&1&2&b_4\end{array}\right]\sim\left[\begin{array}{cccc|c}1&0&1&1&b_1\\0&1&1&2&b_2\\0&1&1&2&b_1+b_3\\0&1&1&2&b_4\end{array}\right]\sim\left[\begin{array}{cccc|c}\boxed1&0&1&1&b_1\\0&\boxed1&1&2&b_2\\0&0&0&0&b_1-b_2+b_3\\0&0&0&0&b_4-b_2\end{array}\right].$$
**Svar:** Lösning finns precis i de fall då $b_1-b_2+b_3=0$ och $b_4-b_2=0$.

## [diag1] Uppgift 4 | 4p | G | Inverterbarhet, determinant, lösbarhet

**Uppgift:**
Låt $a$ vara en reell parameter och
$$A=\begin{bmatrix}a&1&0\\0&-1&a\\1&2&-1\end{bmatrix}.$$
För vilka värden på $a$ är $A$ inverterbar? Ge ett exempel på ett $a$ och $\mathbf b$ så att $A\mathbf x=\mathbf b$ saknar lösning.

**Lösning:**
En matris är inverterbar om och endast om determinanten inte är noll.
$$\begin{vmatrix}a&1&0\\0&-1&a\\1&2&-1\end{vmatrix}=a\begin{vmatrix}-1&a\\2&-1\end{vmatrix}-1\begin{vmatrix}0&a\\1&-1\end{vmatrix}=a(1-2a)-(0-a)=2a-2a^2=2a(1-a).$$
Matrisen är därför inverterbar om och endast om $a\neq0$ och $a\neq1$.

Om man ska finna ett inkonsistent system måste alltså $a=0$ eller $a=1$. Välj $a=0$. Finn $\mathbf b$ så att
$$\begin{bmatrix}0&1&0\\0&-1&0\\1&2&-1\end{bmatrix}\mathbf x=\begin{bmatrix}b_1\\b_2\\b_3\end{bmatrix}$$
saknar lösning:
$$\left[\begin{array}{ccc|c}0&1&0&b_1\\0&-1&0&b_2\\1&2&-1&b_3\end{array}\right]\sim\left[\begin{array}{ccc|c}1&2&-1&b_3\\0&-1&0&b_2\\0&1&0&b_1\end{array}\right]\sim\left[\begin{array}{ccc|c}1&2&-1&b_3\\0&-1&0&b_2\\0&0&0&b_1+b_2\end{array}\right].$$
Det saknas lösningar om $b_1+b_2\neq0$, t.ex. $\mathbf b=(1,0,0)^T$.

**Svar:** Inverterbar omm $a\neq0$ och $a\neq1$. Exempel: $a=0$, $\mathbf b=(1,0,0)^T$.

## [diag1] Uppgift 5 | 4p | G | Linjära avbildningar, standardmatris

**Uppgift:**
Bestäm matrisen för den linjära avbildning som avbildar $(1,1)$ på $(1,0,1)$ och $(-1,2)$ på $(1,2,-1)$. Vad avbildas $(8,7)$ på?

**Lösning:**
$(1,1)\mapsto(1,0,1)$, $(-1,2)\mapsto(1,2,-1)$. Matrisen $A=[T(\mathbf e_1)\ T(\mathbf e_2)]$ om vi kallar avbildningen $T$.

Skriv $\mathbf e_1=(1,0)=c_1(1,1)+c_2(-1,2)$:
$$\begin{cases}1=c_1-c_2\\0=c_1+2c_2\end{cases}\iff 3c_2=-1\iff c_2=-\tfrac13,\ c_1=\tfrac23.$$
Det följer
$$T(\mathbf e_1)=T\!\left(\tfrac23(1,1)-\tfrac13(-1,2)\right)=\tfrac23(1,0,1)-\tfrac13(1,2,-1)=\left(\tfrac13,-\tfrac23,1\right).$$
Nu $\mathbf e_2=(0,1)=c_1(1,1)+c_2(-1,2)$:
$$\begin{cases}0=c_1-c_2\\1=c_1+2c_2\end{cases}\iff 3c_2=1\iff c_2=\tfrac13,\ c_1=\tfrac13.$$
$$T(\mathbf e_2)=\tfrac13(1,0,1)+\tfrac13(1,2,-1)=\left(\tfrac23,\tfrac23,0\right).$$
Alltså
$$A=\begin{bmatrix}1/3&2/3\\-2/3&2/3\\1&0\end{bmatrix}=\frac13\begin{bmatrix}1&2\\-2&2\\3&0\end{bmatrix}.$$
$$A\begin{bmatrix}8\\7\end{bmatrix}=\frac13\begin{bmatrix}1&2\\-2&2\\3&0\end{bmatrix}\begin{bmatrix}8\\7\end{bmatrix}=\frac13\begin{bmatrix}22\\-2\\24\end{bmatrix}.$$
**Svar:** $A=\frac13\begin{bmatrix}1&2\\-2&2\\3&0\end{bmatrix}$; $(8,7)\mapsto\left(\frac{22}{3},-\frac23,8\right)$.

## [diag1] Uppgift 6 | 4p | G | Linjära avbildningar, rotation, spegling, invers

**Uppgift:**
Bestäm matrisen för den linjära avbildningen $T$ som är inversen till avbildningen som först roterar $\pi/4$ moturs och sedan speglar i $x$-axeln. Bestäm $T(1,2)$.

**Lösning:**
Rotation $\pi/4$ moturs:
$$R=\begin{bmatrix}\cos\frac\pi4&-\sin\frac\pi4\\\sin\frac\pi4&\cos\frac\pi4\end{bmatrix}=\frac1{\sqrt2}\begin{bmatrix}1&-1\\1&1\end{bmatrix}.$$
Spegling i $x$-axeln ($\mathbf e_1\mapsto\mathbf e_1$, $\mathbf e_2\mapsto-\mathbf e_2$): $S=\begin{bmatrix}1&0\\0&-1\end{bmatrix}$.

Först roterar, sedan speglar: $SR$. Inversen är $(SR)^{-1}=R^{-1}S^{-1}$, där $R^{-1}$ roterar $\pi/4$ medurs och $S^{-1}=S$ (speglar tillbaka):
$$R^{-1}=\begin{bmatrix}\cos(-\frac\pi4)&-\sin(-\frac\pi4)\\\sin(-\frac\pi4)&\cos(-\frac\pi4)\end{bmatrix}=\frac1{\sqrt2}\begin{bmatrix}1&1\\-1&1\end{bmatrix},$$
$$(SR)^{-1}=\frac1{\sqrt2}\begin{bmatrix}1&1\\-1&1\end{bmatrix}\begin{bmatrix}1&0\\0&-1\end{bmatrix}=\frac1{\sqrt2}\begin{bmatrix}1&-1\\-1&-1\end{bmatrix}.$$
$$T(1,2)=\frac1{\sqrt2}\begin{bmatrix}1&-1\\-1&-1\end{bmatrix}\begin{bmatrix}1\\2\end{bmatrix}=\frac1{\sqrt2}\begin{bmatrix}-1\\-3\end{bmatrix}.$$
[Figur: $(1,2)$, dess spegling i $x$-axeln och sedan rotationen medurs.]

**Svar:** $T$ har matrisen $\frac1{\sqrt2}\begin{bmatrix}1&-1\\-1&-1\end{bmatrix}$; $T(1,2)=\frac1{\sqrt2}(-1,-3)$.

## [diag1] Uppgift 7 | 4p | VG | Determinanter, radoperationer, inverterbarhet

**Uppgift:**
Avgör om
$$\begin{bmatrix}927&929&930&932\\928&930&931&933\\930&932&933&934\\931&933&934&935\end{bmatrix}$$
är inverterbar.

**Lösning:**
Matriser är inverterbara precis då determinanten är skild från 0. Bestäm determinanten. Dra bort rad 1 från övriga rader, sedan $3\times$ rad 2 från rad 3 och $4\times$ rad 2 från rad 4:
$$\begin{vmatrix}927&929&930&932\\928&930&931&933\\930&932&933&934\\931&933&934&935\end{vmatrix}=\begin{vmatrix}927&929&930&932\\1&1&1&1\\3&3&3&2\\4&4&4&3\end{vmatrix}=\begin{vmatrix}927&929&930&932\\1&1&1&1\\0&0&0&-1\\0&0&0&-1\end{vmatrix}=0.$$
De två sista raderna är lika, så determinanten är noll.

**Svar:** Matrisen är inte inverterbar.

Anm.: Opererar man i stället på kolonner (dra kolonn 1 från övriga) går det ännu snabbare: andra och tredje kolonnen blir $(2,2,2,2)^T$ och $(3,3,3,3)^T$, som är multipler av varandra, så determinanten är noll.

## [diag1] Uppgift 8 | 4p | VG | Determinanter, skevsymmetri, bevis

**Uppgift:**
En matris som uppfyller $A^T=-A$ kallas skevsymmetrisk. Vad kan sägas om determinanten för skevsymmetriska matriser med ett udda antal rader?

**Lösning:**
Antag $A$ är $n\times n$, $n$ udda och $A^T=-A$. Man får
$$\det(A)\overset{\text{determinantlag}}{=}\det(A^T)\overset{A\text{ skevsym.}}{=}\det(-A)\overset{\text{bryt ut }-1\text{ ur varje rad}}{=}(-1)^n\det A\overset{n\text{ udda}}{=}-\det A$$
$$\iff2\det A=0\iff\det A=0.$$
**Svar:** Determinanten är $0$.

## [diag1] Uppgift 9 | 4p | VG | Spår, bevis, similära matriser

**Uppgift:**
Spåret för en kvadratisk matris är summan av diagonalelementen. Låt $A$, $B$ vara $n\times n$ matriser. Visa att spåret för $AB$ är samma som spåret för $BA$. Utnyttja detta för att visa om $A=PBP^{-1}$ är spåret för $A$ och $B$ lika.

**Lösning:**
$A=(a_{ij})$, $B=(b_{ij})$, $\operatorname{tr}A=\sum_{i=1}^na_{ii}$ (spåret, *trace* på engelska). Man får
$$\operatorname{tr}(AB)=\sum_{i=1}^n(AB)_{ii}=\sum_{i=1}^n\sum_{j=1}^na_{ij}b_{ji}=\sum_{i,j=1}^na_{ij}b_{ji},$$
men
$$\operatorname{tr}(BA)=\sum_{i=1}^n(BA)_{ii}=\sum_{i=1}^n\sum_{j=1}^nb_{ij}a_{ji}=\sum_{i,j=1}^nb_{ij}a_{ji},$$
vilket är samma summa (byt namn på $i$ och $j$).

Andra delen:
$$\operatorname{tr}A=\operatorname{tr}(PBP^{-1})=\operatorname{tr}\big(P(BP^{-1})\big)\overset{\text{ovan}}{=}\operatorname{tr}\big((BP^{-1})P\big)=\operatorname{tr}(BP^{-1}P)=\operatorname{tr}(BI)=\operatorname{tr}B.$$
