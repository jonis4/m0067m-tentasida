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
