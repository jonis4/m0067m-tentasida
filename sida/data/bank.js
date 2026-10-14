// Genererad av build.py. Redigera inte för hand.
window.BANK = {
 "tentor": [
  {
   "id": "t260827",
   "namn": "Tenta 27 aug 2026",
   "typ": "tenta",
   "datum": "2026-08-27",
   "pdf": [
    "../toloM0067M_260827 (1).pdf"
   ],
   "harLosning": true,
   "uppgifter": [
    "t260827-1",
    "t260827-2",
    "t260827-3",
    "t260827-4",
    "t260827-5",
    "t260827-6",
    "t260827-7",
    "t260827-8",
    "t260827-9"
   ]
  },
  {
   "id": "t260526",
   "namn": "Tenta 26 maj 2026",
   "typ": "tenta",
   "datum": "2026-05-26",
   "pdf": [
    "../tolos_M0067M_260526 (1).pdf"
   ],
   "harLosning": true,
   "uppgifter": [
    "t260526-1",
    "t260526-2",
    "t260526-3",
    "t260526-4",
    "t260526-5",
    "t260526-6",
    "t260526-7",
    "t260526-8",
    "t260526-9"
   ]
  },
  {
   "id": "t260319",
   "namn": "Tenta 19 mars 2026",
   "typ": "tenta",
   "datum": "2026-03-19",
   "pdf": [
    "../tolos_260319 (1).pdf"
   ],
   "harLosning": true,
   "uppgifter": [
    "t260319-1",
    "t260319-2",
    "t260319-3",
    "t260319-4",
    "t260319-5",
    "t260319-6",
    "t260319-7",
    "t260319-8",
    "t260319-9"
   ]
  },
  {
   "id": "xT1",
   "namn": "Övningstenta 1",
   "typ": "ovningstenta",
   "datum": null,
   "pdf": [
    "../xT1.pdf",
    "../losSkiss_xT1.pdf"
   ],
   "harLosning": true,
   "uppgifter": [
    "xT1-1",
    "xT1-2",
    "xT1-3",
    "xT1-4",
    "xT1-5",
    "xT1-6",
    "xT1-7",
    "xT1-8",
    "xT1-9"
   ]
  },
  {
   "id": "xT2",
   "namn": "Övningstenta 2",
   "typ": "ovningstenta",
   "datum": null,
   "pdf": [
    "../xT2.pdf",
    "../losSkiss_xT2.pdf"
   ],
   "harLosning": true,
   "uppgifter": [
    "xT2-1",
    "xT2-2",
    "xT2-3",
    "xT2-4",
    "xT2-5",
    "xT2-6",
    "xT2-7",
    "xT2-8",
    "xT2-9"
   ]
  },
  {
   "id": "xT3",
   "namn": "Övningstenta 3",
   "typ": "ovningstenta",
   "datum": null,
   "pdf": [
    "../xT3.pdf",
    "../losSkiss_xT3.pdf"
   ],
   "harLosning": true,
   "uppgifter": [
    "xT3-1",
    "xT3-2",
    "xT3-3",
    "xT3-4",
    "xT3-5",
    "xT3-6",
    "xT3-7",
    "xT3-8",
    "xT3-9"
   ]
  },
  {
   "id": "diag1",
   "namn": "Diagnostiskt test 1",
   "typ": "diagnos",
   "datum": null,
   "pdf": [
    "../diag1.pdf",
    "../Diag1Los.pdf"
   ],
   "harLosning": true,
   "uppgifter": [
    "diag1-1",
    "diag1-2",
    "diag1-3",
    "diag1-4",
    "diag1-5",
    "diag1-6",
    "diag1-7",
    "diag1-8",
    "diag1-9"
   ]
  },
  {
   "id": "diag2",
   "namn": "Diagnostiskt test 2",
   "typ": "diagnos",
   "datum": null,
   "pdf": [
    "../diag2.pdf",
    "../Diag2Los.pdf"
   ],
   "harLosning": true,
   "uppgifter": [
    "diag2-1",
    "diag2-2",
    "diag2-3",
    "diag2-4",
    "diag2-5",
    "diag2-6",
    "diag2-7",
    "diag2-8",
    "diag2-9"
   ]
  },
  {
   "id": "diag3",
   "namn": "Diagnostiskt test 3",
   "typ": "diagnos",
   "datum": null,
   "pdf": [
    "../diag3.pdf"
   ],
   "harLosning": false,
   "uppgifter": [
    "diag3-1",
    "diag3-2",
    "diag3-3",
    "diag3-4",
    "diag3-5",
    "diag3-6",
    "diag3-7",
    "diag3-8",
    "diag3-9"
   ]
  }
 ],
 "uppgifter": {
  "t260827-1": {
   "id": "t260827-1",
   "tenta": "t260827",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Matrisekvationer",
    "invers"
   ],
   "typ": "matrisekvation",
   "avsnitt": [
    "1.3",
    "1.4",
    "1.5"
   ],
   "uppgift": "Låt $A=\\begin{bmatrix}1&2\\\\-1&0\\end{bmatrix}$, $B=\\begin{bmatrix}1&2\\\\-3&4\\end{bmatrix}$. Bestäm $X$ så att\n$$AX+(X^TB)^T=A-2X.$$",
   "losning": "Lös $X$ ur:\n$$AX+(X^TB)^T=A-2X\\iff AX+B^TX=A-2X\\iff AX+B^TX+2X=A\\iff(A+B^T+2I)X=A\\iff X=(A+B^T+2I)^{-1}A.$$\nInvers:\n$$A+B^T+2I=\\begin{bmatrix}1&2\\\\-1&0\\end{bmatrix}+\\begin{bmatrix}1&-3\\\\2&4\\end{bmatrix}+\\begin{bmatrix}2&0\\\\0&2\\end{bmatrix}=\\begin{bmatrix}4&-1\\\\1&6\\end{bmatrix}.$$\nDetta ger\n$$(A+B^T+2I)^{-1}=\\frac1{25}\\begin{bmatrix}6&1\\\\-1&4\\end{bmatrix}.$$\n$$X=\\frac1{25}\\begin{bmatrix}6&1\\\\-1&4\\end{bmatrix}\\begin{bmatrix}1&2\\\\-1&0\\end{bmatrix}=\\frac1{25}\\begin{bmatrix}5&12\\\\-5&-2\\end{bmatrix}.$$\n**Svar:** $X=\\frac1{25}\\begin{bmatrix}5&12\\\\-5&-2\\end{bmatrix}$."
  },
  "t260827-2": {
   "id": "t260827-2",
   "tenta": "t260827",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Ekvationssystem med parameter",
    "determinant"
   ],
   "typ": "parametersystem",
   "avsnitt": [
    "1.2",
    "1.6",
    "2.1",
    "2.2"
   ],
   "uppgift": "Låt $a$ vara en reell parameter och betrakta\n$$\\begin{bmatrix}0&a-1&1\\\\-1&a&-1\\\\-2&2&a\\end{bmatrix}\\mathbf x=\\begin{bmatrix}2\\\\0\\\\a\\end{bmatrix}.$$\nFör vilka värden på $a$ har ekvationen precis en lösning? Ingen lösning? Oändligt många lösningar? Bestäm också lösningarna i de eventuella fall då oändligt många lösningar finns.",
   "losning": "Ekvationen $A\\mathbf x=\\mathbf b$; eftersom $A$ är kvadratisk, använd determinant. Utveckla efter första kolonnen:\n$$\\det(A)=\\begin{vmatrix}0&a-1&1\\\\-1&a&-1\\\\-2&2&a\\end{vmatrix}=0\\cdot|\\cdots|-(-1)\\begin{vmatrix}a-1&1\\\\2&a\\end{vmatrix}+(-2)\\begin{vmatrix}a-1&1\\\\a&-1\\end{vmatrix}$$\n$$=a^2-a-2+(-2)(-a+1-a)=a^2+3a-4.$$\n$$\\det A=0\\iff a=-\\tfrac32\\pm\\sqrt{\\tfrac94+\\tfrac{16}4}=-\\tfrac32\\pm\\tfrac52,\\ \\text{dvs }a=-4\\text{ eller }1.$$\nPrecis en lösning $\\iff a\\neq-4$ och $a\\neq1$.\n\nDe återstående fallen behandlas separat.\n\n$a=-4$: den utökade koefficientmatrisen:\n$$\\left[\\begin{array}{ccc|c}0&-5&1&2\\\\-1&-4&-1&0\\\\-2&2&-4&-4\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&4&1&0\\\\0&-5&1&2\\\\-2&2&-4&-4\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&4&1&0\\\\0&-5&1&2\\\\0&10&-2&-4\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}\\boxed1&4&1&0\\\\0&\\boxed{-5}&1&2\\\\0&0&0&0\\end{array}\\right].$$\n$x_1,x_2$ bundna, $x_3=t$ fri. $x_2=(2-t)/(-5)=-\\frac25+\\frac15t$, $x_1=\\frac85-\\frac45t-t=\\frac85-\\frac95t$.\n$$\\mathbf x=\\left(\\tfrac85,-\\tfrac25,0\\right)+t\\left(-\\tfrac95,\\tfrac15,1\\right),\\ t\\in\\mathbb R.$$\n$a=1$: den utökade koefficientmatrisen:\n$$\\left[\\begin{array}{ccc|c}0&0&1&2\\\\-1&1&-1&0\\\\-2&2&1&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&-1&1&0\\\\0&0&1&2\\\\-2&2&1&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&-1&1&0\\\\0&0&1&2\\\\0&0&3&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&-1&1&0\\\\0&0&1&2\\\\0&0&0&-5\\end{array}\\right]\\leftarrow$$\nlösning saknas ($0x_1+0x_2+0x_3=-5$ ???).\n\n**Svar:**\n- $a=1$: lösning saknas.\n- $a=-4$: oändligt många lösningar, $\\mathbf x=\\left(\\frac85,-\\frac25,0\\right)+t\\left(-\\frac95,\\frac15,1\\right)$, $t\\in\\mathbb R$ (kanske snyggare med $t(-9,1,5)$).\n- Annars precis en lösning."
  },
  "t260827-3": {
   "id": "t260827-3",
   "tenta": "t260827",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Spegling i linje",
    "projektion",
    "standardmatris"
   ],
   "typ": "spegling-projektion",
   "avsnitt": [
    "1.8",
    "3.3"
   ],
   "uppgift": "Bestäm matrisen för den avbildning som speglar i linjen $x+3y=0$. Vad speglas $(2,1)$ på?",
   "losning": "$x+3y=0\\iff y=-\\frac13x$. Riktning för linjen: $(3,-1)$.\n\nBestäm på vad $(1,0)$ resp. $(0,1)$ speglas på.\n\n[Figur: linjen, $(1,0)$, dess projektion $\\mathbf p$ på linjen och spegelbilden $S(1,0)$; vektorn $\\mathbf p-(1,0)$.]\n\nVi utläser\n$$S(1,0)=(1,0)+2(\\mathbf p-(1,0))=2\\mathbf p-(1,0),$$\ndär\n$$\\mathbf p=\\operatorname{proj}_{(3,-1)}(1,0)=\\frac{(1,0)\\bullet(3,-1)}{(3,-1)\\bullet(3,-1)}(3,-1)=\\frac3{10}(3,-1).$$\nAlltså\n$$S(1,0)=\\tfrac35(3,-1)-(1,0)=\\tfrac15\\big((9,-3)-(5,0)\\big)=\\tfrac15(4,-3).$$\nAnalogt för $(0,1)$: $\\mathbf p=\\frac{(0,1)\\bullet(3,-1)}{10}(3,-1)=-\\frac1{10}(3,-1)$ och\n$$S(0,1)=(0,1)+2(\\mathbf p-(0,1))=-(0,1)-\\tfrac15(3,-1)=-\\tfrac15\\big((0,5)+(3,-1)\\big)=-\\tfrac15(3,4)=\\tfrac15(-3,-4).$$\n$$A=[S]=[S(\\mathbf e_1)\\ S(\\mathbf e_2)]=\\frac15\\begin{bmatrix}4&-3\\\\-3&-4\\end{bmatrix}\\quad(\\text{kontrollera }A^2=I).$$\n$$S(2,1)=A\\begin{bmatrix}2\\\\1\\end{bmatrix}=\\frac15\\begin{bmatrix}4&-3\\\\-3&-4\\end{bmatrix}\\begin{bmatrix}2\\\\1\\end{bmatrix}=\\frac15\\begin{bmatrix}5\\\\-10\\end{bmatrix}=\\begin{bmatrix}1\\\\-2\\end{bmatrix}.$$\n[Figur: en L-formad figur och dess spegelbild i linjen $x+3y=0$.]\n\n*Transkriberarens not: originalet skriver \"kontrollera $A^2=A$\"; för en spegling ska det vara $A^2=I$.*\n\n**Svar:** $A=\\frac15\\begin{bmatrix}4&-3\\\\-3&-4\\end{bmatrix}$; $(2,1)\\mapsto(1,-2)$."
  },
  "t260827-4": {
   "id": "t260827-4",
   "tenta": "t260827",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Kolonnrum",
    "nollrum",
    "bas",
    "koordinater"
   ],
   "typ": "nollrum-kolonnrum",
   "avsnitt": [
    "4.5",
    "4.8"
   ],
   "uppgift": "Låt\n$$A=\\begin{bmatrix}1&1&-1&-1&2&0\\\\1&1&0&1&3&1\\\\-2&-2&2&2&-4&1\\\\1&1&1&3&4&6\\end{bmatrix}\\ \\text{och}\\ \\mathbf b=\\begin{bmatrix}-3\\\\1\\\\1\\\\-1\\\\1\\\\0\\end{bmatrix}.$$\nBestäm en bas för $\\operatorname{col}(A)$ och en bas för $\\operatorname{null}(A)$. Bestäm koordinaterna för $\\mathbf b$ relativt basen för nollrummet du just bestämt.",
   "losning": "Vi börjar med att gausseliminera:\n$$A\\sim\\begin{bmatrix}1&1&-1&-1&2&0\\\\0&0&1&2&1&1\\\\0&0&0&0&0&1\\\\0&0&2&4&2&6\\end{bmatrix}\\sim\\begin{bmatrix}1&1&-1&-1&2&0\\\\0&0&1&2&1&1\\\\0&0&0&0&0&1\\\\0&0&0&0&0&4\\end{bmatrix}\\sim\\begin{bmatrix}\\boxed1&1&-1&-1&2&0\\\\0&0&\\boxed1&2&1&1\\\\0&0&0&0&0&\\boxed1\\\\0&0&0&0&0&0\\end{bmatrix}.$$\nKolumnerna 1, 3, 6 är pivotkolumner. Motsvarande kolumner i $A$ utgör därför en bas för kolumnrummet:\n$$\\text{En bas för }\\operatorname{col}(A)\\text{ är }\\left\\{\\begin{bmatrix}1\\\\1\\\\-2\\\\1\\end{bmatrix},\\begin{bmatrix}-1\\\\0\\\\2\\\\1\\end{bmatrix},\\begin{bmatrix}0\\\\1\\\\1\\\\6\\end{bmatrix}\\right\\}.$$\nFör nollrummet: lös $A\\mathbf x=\\mathbf 0$; $x_1,x_3,x_6$ bundna; $x_2=s$, $x_4=t$, $x_5=u$ fria.\n$x_6=0$, $x_3=-2t-u$, $x_1=-s+(-2t-u)+t-2u=-s-t-3u$.\n$$\\mathbf x=\\begin{bmatrix}-s-t-3u\\\\s\\\\-2t-u\\\\t\\\\u\\\\0\\end{bmatrix}=s\\begin{bmatrix}-1\\\\1\\\\0\\\\0\\\\0\\\\0\\end{bmatrix}+t\\begin{bmatrix}-1\\\\0\\\\-2\\\\1\\\\0\\\\0\\end{bmatrix}+u\\begin{bmatrix}-3\\\\0\\\\-1\\\\0\\\\1\\\\0\\end{bmatrix}.$$\nEn bas för $\\operatorname{null}(A)$ är\n$$\\mathcal B=\\left\\{\\begin{bmatrix}-1\\\\1\\\\0\\\\0\\\\0\\\\0\\end{bmatrix},\\begin{bmatrix}-1\\\\0\\\\-2\\\\1\\\\0\\\\0\\end{bmatrix},\\begin{bmatrix}-3\\\\0\\\\-1\\\\0\\\\1\\\\0\\end{bmatrix}\\right\\}.$$\nKoordinaterna för $\\mathbf b$:\n$$\\begin{bmatrix}-3\\\\1\\\\1\\\\-1\\\\1\\\\0\\end{bmatrix}=\\alpha\\begin{bmatrix}-1\\\\1\\\\0\\\\0\\\\0\\\\0\\end{bmatrix}+\\beta\\begin{bmatrix}-1\\\\0\\\\-2\\\\1\\\\0\\\\0\\end{bmatrix}+\\gamma\\begin{bmatrix}-3\\\\0\\\\-1\\\\0\\\\1\\\\0\\end{bmatrix}.$$\nBetrakta position 2, 4, 5 och vi finner $\\alpha=1$, $\\beta=-1$, $\\gamma=1$.\n\n**Svar:** Bas för $\\operatorname{col}(A)$ se ovan; bas $\\mathcal B$ för $\\operatorname{null}(A)$ se ovan; $[\\mathbf b]_{\\mathcal B}=\\begin{bmatrix}1\\\\-1\\\\1\\end{bmatrix}$."
  },
  "t260827-5": {
   "id": "t260827-5",
   "tenta": "t260827",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Egenvärden",
    "diagonalisering"
   ],
   "typ": "diagonalisering",
   "avsnitt": [
    "5.1",
    "5.2"
   ],
   "uppgift": "Diagonalisera följande matris,\n$$A=\\begin{bmatrix}-2&-3&3\\\\-3&-2&3\\\\-3&-3&4\\end{bmatrix},$$\ndet vill säga finn matriser $P$ och $D$, $D$ diagonal, så att $A=PDP^{-1}$.",
   "losning": "Bestäm egenvärden och egenvektorer.\n\n**Egenvärden:** kar.ekv. $\\det(\\lambda I-A)=0$:\n$$\\begin{vmatrix}\\lambda+2&3&-3\\\\3&\\lambda+2&-3\\\\3&3&\\lambda-4\\end{vmatrix}=0\\iff\\begin{vmatrix}\\lambda+2&3&-3\\\\3&\\lambda+2&-3\\\\0&-\\lambda+1&\\lambda-1\\end{vmatrix}=0\\iff(\\lambda-1)\\begin{vmatrix}\\lambda+2&3&-3\\\\3&\\lambda+2&-3\\\\0&-1&1\\end{vmatrix}=0$$\n(rad 2 drogs från rad 3; sedan bröts $\\lambda-1$ ut ur sista raden). Utveckla efter sista raden:\n$$(\\lambda-1)\\left(-(-1)\\underbrace{\\begin{vmatrix}\\lambda+2&-3\\\\3&-3\\end{vmatrix}}_{=-3\\lambda+3}+1\\underbrace{\\begin{vmatrix}\\lambda+2&3\\\\3&\\lambda+2\\end{vmatrix}}_{=\\lambda^2+4\\lambda-5}\\right)=0\\iff(\\lambda-1)(\\lambda^2+\\lambda-2)=0\\iff(\\lambda-1)^2(\\lambda+2)=0.$$\n[$\\lambda^2+\\lambda-2=0\\iff\\lambda=-\\frac12\\pm\\sqrt{\\frac14+\\frac84}=-\\frac12\\pm\\frac32=-2;1$.]\n\nEgenvärdena: $1$ (mult 2); $-2$. [Koll: $1+1+(-2)=0$, $\\operatorname{tr}A=-2-2+4=0$.]\n\n**Egenvektorer:**\n$\\lambda=1$: $A\\mathbf v=\\mathbf v\\iff(I-A)\\mathbf v=\\mathbf 0$:\n$$\\left[\\begin{array}{ccc|c}3&3&-3&0\\\\3&3&-3&0\\\\3&3&-3&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}\\boxed1&1&-1&0\\\\0&0&0&0\\\\0&0&0&0\\end{array}\\right].$$\n$x_1$ bunden, $x_2=s$, $x_3=t$ fria, $x_1=-s+t$:\n$$\\mathbf v=\\begin{bmatrix}-s+t\\\\s\\\\t\\end{bmatrix}=s\\begin{bmatrix}-1\\\\1\\\\0\\end{bmatrix}+t\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}.\\quad\\text{Välj }\\begin{bmatrix}-1\\\\1\\\\0\\end{bmatrix},\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}.$$\n$\\lambda=-2$: $A\\mathbf v=-2\\mathbf v\\iff(-2I-A)\\mathbf v=\\mathbf 0$:\n$$\\left[\\begin{array}{ccc|c}0&3&-3&0\\\\3&0&-3&0\\\\3&3&-6&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}3&0&-3&0\\\\0&3&-3&0\\\\0&3&-3&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}\\boxed1&0&-1&0\\\\0&\\boxed1&-1&0\\\\0&0&0&0\\end{array}\\right].$$\n$x_1,x_2$ bundna, $x_3=t$ fri, $x_2=t$, $x_1=t$. $\\mathbf v=t\\begin{bmatrix}1\\\\1\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}1\\\\1\\\\1\\end{bmatrix}$.\n\n**Svar:** $A=PDP^{-1}$ med\n$$P=\\begin{bmatrix}-1&1&1\\\\1&0&1\\\\0&1&1\\end{bmatrix},\\quad D=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&-2\\end{bmatrix}.$$"
  },
  "t260827-6": {
   "id": "t260827-6",
   "tenta": "t260827",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Inre produktrum",
    "ortogonalitet",
    "projektion"
   ],
   "typ": "inre-produktrum",
   "avsnitt": [
    "6.1",
    "6.2",
    "6.3"
   ],
   "uppgift": "Betrakta $\\mathbb P_2$, polynomen av gradtal maximalt två, med skalärprodukten\n$$\\langle p,q\\rangle=\\int_0^1p(x)q(x)\\,dx.$$\na) Bestäm $\\alpha$ så att $\\{x^2-\\alpha,x\\}$ är en ortogonal mängd i $\\mathbb P_2$.\nb) Bestäm den ortogonala projektionen av $f(x)=1$ på\n$$W=\\operatorname{span}\\{x^2-\\alpha,x\\}$$\nmed värdet på $\\alpha$ från a)-uppgiften.",
   "losning": "a) Att det är en ortogonalmängd betyder att elementen är parvis ortogonala; här blir det $\\langle x^2-\\alpha,x\\rangle=0$. Vi får:\n$$\\langle x^2-\\alpha,x\\rangle=\\int_0^1(x^2-\\alpha)x\\,dx=\\int_0^1(x^3-\\alpha x)\\,dx=\\frac14-\\frac\\alpha2=0\\iff\\alpha=\\frac12.$$\nb)\n$$\\operatorname{proj}_W1=\\frac{\\langle1,x^2-\\frac12\\rangle}{\\langle x^2-\\frac12,x^2-\\frac12\\rangle}\\left(x^2-\\tfrac12\\right)+\\frac{\\langle1,x\\rangle}{\\langle x,x\\rangle}x.$$\nNågra skalärprodukter (*):\n$$\\langle1,x^2-\\tfrac12\\rangle=\\int_0^1\\left(x^2-\\tfrac12\\right)dx=\\tfrac13-\\tfrac12=-\\tfrac16,$$\n$$\\langle x^2-\\tfrac12,x^2-\\tfrac12\\rangle=\\int_0^1\\left(x^4-x^2+\\tfrac14\\right)dx=\\tfrac15-\\tfrac13+\\tfrac14=\\frac{12-20+15}{60}=\\frac7{60},$$\n$$\\langle1,x\\rangle=\\int_0^1x\\,dx=\\tfrac12,\\qquad\\langle x,x\\rangle=\\int_0^1x^2\\,dx=\\tfrac13.$$\n$$\\operatorname{proj}_W1\\overset{(*)}{=}\\frac{-1/6}{7/60}\\left(x^2-\\tfrac12\\right)+\\frac{1/2}{1/3}x=-\\frac{10}7\\left(x^2-\\tfrac12\\right)+\\frac32x=-\\frac{10}7x^2+\\frac32x+\\frac57.$$\n**Svar:** a) $\\alpha=\\frac12$; b) $\\operatorname{proj}_W1=-\\frac{10}{7}x^2+\\frac32x+\\frac57$."
  },
  "t260827-7": {
   "id": "t260827-7",
   "tenta": "t260827",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Linjär avbildning",
    "parallellprojektion på plan",
    "tillämpning"
   ],
   "typ": "linjar-avbildning",
   "avsnitt": [
    "1.8",
    "3.4"
   ],
   "uppgift": "I en brant backe står en vägskylt. Vi lägger ut ett koordinatsystem med stolpen längs $z$-axeln och origo där stolpen möter marken. I närheten av vägskylten beskrivs marken av $x-2y+6z=0$. Koordinaterna för triangelns hörn är $(0,0,2)$, $(-1/5,0,12/5)$ respektive $(1/5,0,12/5)$ (enheten är meter). Samtidigt skiner solen och den befinner sig i punkten $a(2,2,3)$ med $a\\approx3{,}6\\cdot10^{10}$. Solen är så långt bort att dess strålar kan antas komma in parallellt. Var faller skuggan?\nLedning: Bestäm matrisen för avbildningen som tar en punkt i rummet till den punkten där skuggan fallet. Bestäm sedan var triangelns hörn avbildas.\n\n[Figur: lutande markplan, vägskylt (triangel på stolpe) och parallella solstrålar.]",
   "losning": "Skuggan av $(x,y,z)$ är där linjen $(x,y,z)+t(2,2,3)$ skär planet. Sätt in i planets ekvation:\n$$x+2t-2(y+2t)+6(z+3t)=0.$$\nDetta ger: $t=(-x+2y-6z)/16$. Så skuggan faller i\n$$(x,y,z)+\\frac{-x+2y-6z}{16}(2,2,3)=\\frac1{16}(14x+4y-12z,\\ -2x+20y-12z,\\ -3x+6y-2z)=\\underbrace{\\frac1{16}\\begin{bmatrix}14&4&-12\\\\-2&20&-12\\\\-3&6&-2\\end{bmatrix}}_{\\text{matrisen för avbildningen}}\\begin{bmatrix}x\\\\y\\\\z\\end{bmatrix}.$$\nVar hamnar hörnen?\n$$\\frac1{16}\\begin{bmatrix}14&4&-12\\\\-2&20&-12\\\\-3&6&-2\\end{bmatrix}\\begin{bmatrix}0\\\\0\\\\2\\end{bmatrix}=\\frac1{16}\\begin{bmatrix}-24\\\\-24\\\\-4\\end{bmatrix},$$\n$$\\frac1{16}\\begin{bmatrix}14&4&-12\\\\-2&20&-12\\\\-3&6&-2\\end{bmatrix}\\begin{bmatrix}-1/5\\\\0\\\\12/5\\end{bmatrix}=\\frac1{80}\\begin{bmatrix}-158\\\\-142\\\\-21\\end{bmatrix},\\qquad\\frac1{16}\\begin{bmatrix}14&4&-12\\\\-2&20&-12\\\\-3&6&-2\\end{bmatrix}\\begin{bmatrix}1/5\\\\0\\\\12/5\\end{bmatrix}=\\frac1{80}\\begin{bmatrix}-130\\\\-146\\\\-27\\end{bmatrix}.$$\n**Svar:** Hörnen hamnar i $\\left(-\\frac32,-\\frac32,-\\frac14\\right)$, $\\frac1{80}(-158,-142,-21)$ respektive $\\frac1{80}(-130,-146,-27)$."
  },
  "t260827-8": {
   "id": "t260827-8",
   "tenta": "t260827",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Diagonalisering",
    "matrisrötter",
    "bevis"
   ],
   "typ": "bevis",
   "avsnitt": [
    "5.2"
   ],
   "uppgift": "Låt $A$ vara en diagonaliserbar $3\\times3$ matris med samtliga egenvärden större än noll. Visa att det finns åtminstone åtta olika $X$ så att $X^2=A$.",
   "losning": "$$A=PDP^{-1}=P\\begin{bmatrix}\\lambda_1&&0\\\\&\\lambda_2&\\\\0&&\\lambda_3\\end{bmatrix}P^{-1}.$$\nBilda\n$$X=P\\begin{bmatrix}\\pm\\sqrt{\\lambda_1}&&0\\\\&\\pm\\sqrt{\\lambda_2}&\\\\0&&\\pm\\sqrt{\\lambda_3}\\end{bmatrix}P^{-1}=P\\tilde DP^{-1}$$\n(detta ger 8 matriser, $\\pm$ på tre positioner, $2^3=8$). Man får:\n$$X^2=P\\tilde DP^{-1}P\\tilde DP^{-1}=P\\tilde D^2P^{-1}=PDP^{-1}=A.$$\nMen är alla olika? Ja, ty\n$$PGP^{-1}=PHP^{-1}\\iff P^{-1}PGP^{-1}=P^{-1}PHP^{-1}\\iff GP^{-1}=HP^{-1}\\iff GP^{-1}P=HP^{-1}P\\iff G=H.$$\nÅtminstone? Hm, $\\begin{bmatrix}\\cos\\theta&\\sin\\theta&0\\\\\\sin\\theta&-\\cos\\theta&0\\\\0&0&1\\end{bmatrix}$ kvadrerar till $I$ för alla $\\theta$, så oändligt många om $A=I$."
  },
  "t260827-9": {
   "id": "t260827-9",
   "tenta": "t260827",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Inre produktrum",
    "ortogonal mängd",
    "linjärt oberoende",
    "koordinater"
   ],
   "typ": "bevis",
   "avsnitt": [
    "6.2",
    "6.3"
   ],
   "uppgift": "Låt $V$ vara ett skalärproduktsrum. Visa att en ortogonal mängd av nollskilda element är linjärt oberoende. Härled också en formel för koordinaterna relativt en ortogonal bas.",
   "losning": "$\\{\\mathbf u_1,\\dots,\\mathbf u_n\\}$ ortogonal mängd, $\\mathbf u_j\\neq\\mathbf 0$.\n\n**L.O.:** Antag $c_1\\mathbf u_1+\\dots+c_j\\mathbf u_j+\\dots+c_n\\mathbf u_n=\\mathbf 0$. Tag skalärprodukten med $\\mathbf u_j$:\n$$\\langle c_1\\mathbf u_1+\\dots+c_j\\mathbf u_j+\\dots+c_n\\mathbf u_n,\\mathbf u_j\\rangle=\\langle\\mathbf 0,\\mathbf u_j\\rangle\\iff c_1\\underbrace{\\langle\\mathbf u_1,\\mathbf u_j\\rangle}_{=0}+\\dots+c_j\\underbrace{\\langle\\mathbf u_j,\\mathbf u_j\\rangle}_{=\\|\\mathbf u_j\\|^2}+\\dots+c_n\\underbrace{\\langle\\mathbf u_n,\\mathbf u_j\\rangle}_{=0}=0$$\n$$\\iff c_j\\|\\mathbf u_j\\|^2=0.$$\nMen $\\|\\mathbf u_j\\|\\neq0$ ty $\\mathbf u_j\\neq\\mathbf 0$, så $c_j=0$. Detta gjordes oavsett $j$, så $c_1=c_2=\\dots=c_n=0$; alltså L.O.\n\n**Formel för koordinater:** $\\{\\mathbf u_1,\\dots,\\mathbf u_n\\}$ ortogonal bas. Antag $c_1\\mathbf u_1+\\dots+c_n\\mathbf u_n=\\mathbf y$. Tag $\\langle\\cdot,\\cdot\\rangle$ med $\\mathbf u_j$; som ovan fås $c_j\\|\\mathbf u_j\\|^2=\\langle\\mathbf y,\\mathbf u_j\\rangle$, dvs\n$$c_j=\\frac{\\langle\\mathbf y,\\mathbf u_j\\rangle}{\\|\\mathbf u_j\\|^2},\\quad j=1,\\dots,n.$$"
  },
  "t260526-1": {
   "id": "t260526-1",
   "tenta": "t260526",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära ekvationssystem",
    "Gausselimination"
   ],
   "typ": "gausselimination",
   "avsnitt": [
    "1.1",
    "1.2"
   ],
   "uppgift": "Bestäm samtliga lösningar till\n$$\\begin{cases}x-y+2z+3v=0\\\\-2x+2y-2z-u-4v=-2\\\\x-y+2z+2v=1\\\\-x+y-4z+u-2v=-1.\\end{cases}$$",
   "losning": "Ställ upp motsvarande utökade koefficientmatris (variabelordning $x,y,z,u,v$) och gausseliminera:\n$$\\left[\\begin{array}{ccccc|c}1&-1&2&0&3&0\\\\-2&2&-2&-1&-4&-2\\\\1&-1&2&0&2&1\\\\-1&1&-4&1&-2&-1\\end{array}\\right]\\sim\\left[\\begin{array}{ccccc|c}1&-1&2&0&3&0\\\\0&0&2&-1&2&-2\\\\0&0&0&0&-1&1\\\\0&0&-2&1&1&-1\\end{array}\\right]$$\n$$\\sim\\left[\\begin{array}{ccccc|c}1&-1&2&0&3&0\\\\0&0&2&-1&2&-2\\\\0&0&0&0&-1&1\\\\0&0&0&0&3&-3\\end{array}\\right]\\sim\\left[\\begin{array}{ccccc|c}\\boxed1&-1&2&0&3&0\\\\0&0&\\boxed2&-1&2&-2\\\\0&0&0&0&\\boxed{-1}&1\\\\0&0&0&0&0&0\\end{array}\\right].$$\n$x,z,v$ bundna; de övriga $y,u$ fria. Sätt $y=s$, $u=t$.\n- Tredje ekv. ger: $v=-1$.\n- Andra ekv. ger: $2z-u+2v=-2\\iff2z=-2+t+2\\iff z=\\frac12t$.\n- Första ekv. ger: $x-y+2z+3v=0\\iff x=s-t+3$.\n\nSå lösningarna ges av\n$$(x,y,z,u,v)=\\left(s-t+3,\\ s,\\ \\tfrac12t,\\ t,\\ -1\\right)=(3,0,0,0,-1)+s(1,1,0,0,0)+t\\left(-1,0,\\tfrac12,1,0\\right),\\quad s,t\\in\\mathbb R.$$\n**Svar:** $(3,0,0,0,-1)+s(1,1,0,0,0)+t(-2,0,1,2,0)$, $s,t\\in\\mathbb R$ (eller med $t(-1,0,\\frac12,1,0)$)."
  },
  "t260526-2": {
   "id": "t260526-2",
   "tenta": "t260526",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära avbildningar",
    "linjärkombination",
    "standardmatris"
   ],
   "typ": "linjar-avbildning",
   "avsnitt": [
    "1.8"
   ],
   "uppgift": "Den linjära avbildningen $T:\\mathbb R^2\\to\\mathbb R^3$ avbildar $(1,2)$ på $(1,3,-1)$ och $(3,-1)$ på $(1,2,3)$. Vad avbildas $(2,2)$ på? Finns det något $\\mathbf x$ som avbildas på $(1,1,1)$? Om det finns ett sådant, bestäm ett eller visa att det inte finns.",
   "losning": "$T:\\mathbb R^2\\to\\mathbb R^3$ linjär; $(1,2)\\mapsto(1,3,-1)$, $(3,-1)\\mapsto(1,2,3)$.\n\nVad avbildas $(2,2)$ på? Skriv $(2,2)$ som en linjärkombination av $(1,2)$ och $(3,-1)$ och utnyttja linjäriteten:\n$$\\alpha(1,2)+\\beta(3,-1)=(2,2):\\quad\\left[\\begin{array}{cc|c}1&3&2\\\\2&-1&2\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}1&3&2\\\\0&-7&-2\\end{array}\\right],$$\nså $\\beta=2/7$, $\\alpha=8/7$. Alltså (linjär)\n$$T(2,2)=T\\!\\left(\\tfrac87(1,2)+\\tfrac27(3,-1)\\right)=\\tfrac87T(1,2)+\\tfrac27T(3,-1)=\\tfrac87(1,3,-1)+\\tfrac27(1,2,3)=\\tfrac17(10,28,-2).$$\nVad avbildas på $(1,1,1)$ (om något)?\n$$\\alpha(1,3,-1)+\\beta(1,2,3)=(1,1,1):\\quad\\left[\\begin{array}{cc|c}1&1&1\\\\3&2&1\\\\-1&3&1\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}1&1&1\\\\0&-1&-2\\\\0&4&2\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}1&1&1\\\\0&-1&-2\\\\0&0&-6\\end{array}\\right].$$\nSaknar lösning, alltså avbildas inget på $(1,1,1)$.\n\nAlternativ lösning: bestäm matrisen för $T$, $T=T_A$, $A=[T(\\mathbf e_1)\\ T(\\mathbf e_2)]$.\n$T(\\mathbf e_1)$: $(1,0)=\\alpha(1,2)+\\beta(3,-1)$, $\\left[\\begin{array}{cc|c}1&3&1\\\\2&-1&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}1&3&1\\\\0&-7&-2\\end{array}\\right]$, $\\beta=2/7$, $\\alpha=1/7$:\n$$T(\\mathbf e_1)=\\tfrac17(1,3,-1)+\\tfrac27(1,2,3)=\\tfrac17(3,7,5).$$\n$T(\\mathbf e_2)$: $(0,1)=\\alpha(1,2)+\\beta(3,-1)$, $\\beta=-1/7$, $\\alpha=3/7$:\n$$T(\\mathbf e_2)=\\tfrac37(1,3,-1)-\\tfrac17(1,2,3)=\\tfrac17(2,7,-6).$$\n$$A=\\frac17\\begin{bmatrix}3&2\\\\7&7\\\\5&-6\\end{bmatrix},\\qquad T(2,2)=\\frac17\\begin{bmatrix}3&2\\\\7&7\\\\5&-6\\end{bmatrix}\\begin{bmatrix}2\\\\2\\end{bmatrix}=\\frac17\\begin{bmatrix}10\\\\28\\\\-2\\end{bmatrix}.$$\n$A\\mathbf x=(1,1,1)^T$ lösning? $[A\\mid(1,1,1)^T]\\sim\\dots$ Nej.\n\n*Transkriberarens not: i originalets alternativa lösning står första komponenten som 8, men $3\\cdot2+2\\cdot2=10$, i överensstämmelse med huvudlösningen.*\n\n**Svar:** $T(2,2)=\\frac17(10,28,-2)$; inget $\\mathbf x$ avbildas på $(1,1,1)$."
  },
  "t260526-3": {
   "id": "t260526-3",
   "tenta": "t260526",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Plan genom tre punkter",
    "avstånd punkt–plan"
   ],
   "typ": "plan-avstand",
   "avsnitt": [
    "3.3",
    "3.5"
   ],
   "uppgift": "Låt $A$, $B$, $C$ och $D$ vara punkterna $(1,-1,1)$, $(-2,0,-1)$, $(-2,1,2)$ respektive $(4,-2,0)$. Bestäm en ekvation för planet som innehåller punkterna $A$, $B$ och $C$. Bestäm också avståndet mellan planet och punkten $D$.",
   "losning": "[Figur: $A=(1,-1,1)$ med $\\overrightarrow{AB}$ och $\\overrightarrow{AC}$.]\n\nPlan: punkt $(1,-1,1)$ och normal $\\overrightarrow{AB}\\times\\overrightarrow{AC}$:\n$$\\mathbf n=\\overrightarrow{AB}\\times\\overrightarrow{AC}=(-3,1,-2)\\times(-3,2,1)=(5,9,-3).$$\nPlanets ekvation:\n$$5(x-1)+9(y-(-1))-3(z-1)=0\\iff5x+9y-3z=-7\\iff-5x-9y+3z=7.$$\nNu avståndet mellan $D=(4,-2,0)$ och planet.\n\n[Figur: planet, $A$, $D$, normalen $\\mathbf n$ och $\\operatorname{proj}_{\\mathbf n}\\overrightarrow{AD}$.]\n\n$\\overrightarrow{AD}=(3,-1,-1)$, $\\mathbf n=(5,9,-3)$:\n$$\\operatorname{proj}_{\\mathbf n}\\overrightarrow{AD}=\\frac{(3,-1,-1)\\bullet(5,9,-3)}{(5,9,-3)\\bullet(5,9,-3)}(5,9,-3)=\\frac9{115}(5,9,-3).$$\n$$\\text{Avståndet}=\\|\\operatorname{proj}_{\\mathbf n}\\overrightarrow{AD}\\|=\\frac9{115}\\sqrt{115}=\\frac9{\\sqrt{115}}.$$\n**Svar:** $-5x-9y+3z=7$ (eller $5x+9y-3z=-7$); avståndet är $\\frac9{\\sqrt{115}}$."
  },
  "t260526-4": {
   "id": "t260526-4",
   "tenta": "t260526",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjärt oberoende",
    "determinant",
    "bas",
    "koordinater"
   ],
   "typ": "bas-dimension",
   "avsnitt": [
    "2.1",
    "2.2",
    "4.4",
    "4.5"
   ],
   "uppgift": "För vilka värden på $a$ är $\\mathcal B_a=\\{1+ax+x^2,\\ 1-2x^2,\\ a+x-x^2\\}$ linjärt oberoende. Välj nu ett sådant $a$. Förklara varför $\\mathcal B_a$ nu är en bas för $\\mathbb P_2$. Vilket element har koordinaterna $(1,-1,2)$ relativt denna basen?",
   "losning": "Linjärt oberoende?\n$$c_1(1+ax+x^2)+c_2(1-2x^2)+c_3(a+x-x^2)=0\\quad\\text{alla }x$$\n$$\\iff\\ x^0:\\ c_1+c_2+ac_3=0,\\quad x^1:\\ c_1a+c_3=0,\\quad x^2:\\ c_1-2c_2-c_3=0.$$\nPå matrisform:\n$$\\begin{bmatrix}1&1&a\\\\a&0&1\\\\1&-2&-1\\end{bmatrix}\\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix}=\\begin{bmatrix}0\\\\0\\\\0\\end{bmatrix}.$$\nL.O. $\\iff$ endast nollösning $\\iff\\det\\begin{bmatrix}1&1&a\\\\a&0&1\\\\1&-2&-1\\end{bmatrix}\\neq0$. Utveckla efter andra kolonnen:\n$$\\begin{vmatrix}1&1&a\\\\a&0&1\\\\1&-2&-1\\end{vmatrix}=-1\\cdot1\\begin{vmatrix}a&1\\\\1&-1\\end{vmatrix}-1\\cdot(-2)\\begin{vmatrix}1&a\\\\a&1\\end{vmatrix}=-(-a-1)+2(1-a^2)=-2a^2+a+3.$$\nSå L.B. $\\iff-2a^2+a+3=0\\iff a^2-\\frac12a-\\frac32=0\\iff a=\\frac14\\pm\\sqrt{\\frac1{16}+\\frac{24}{16}}=\\frac14\\pm\\frac54$, dvs $a=\\frac32$ eller $a=-1$.\n\nAlltså L.O. $\\iff a\\neq\\frac32$ och $a\\neq-1$.\n\nVälj $a=0$. $\\mathcal B_0$ innehåller tre element och de är linjärt oberoende. Enligt bassatsen är det därför en bas för $\\mathbb P_2$ ty $\\dim(\\mathbb P_2)=3$ ($\\{1,x,x^2\\}$ bas).\n\nVilket element har koordinaterna $(1,-1,2)$? Jo,\n$$1(1+x^2)-1(1-2x^2)+2(x-x^2)=2x+x^2.$$\n**Svar:** L.O. omm $a\\neq\\frac32$ och $a\\neq-1$; med $a=0$ är elementet $2x+x^2$."
  },
  "t260526-5": {
   "id": "t260526-5",
   "tenta": "t260526",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Differentialekvationssystem",
    "diagonalisering"
   ],
   "typ": "diffekv-system",
   "avsnitt": [
    "5.2",
    "5.4"
   ],
   "uppgift": "Använd diagonalisering för att bestämma lösningen till $y'=-10y+12z$, $z'=-9y+11z$ med $y(0)=0$ och $z(0)=-1$.",
   "losning": "På matrisform med $\\mathbf y=\\begin{bmatrix}y\\\\z\\end{bmatrix}$ blir det\n$$\\mathbf y'=\\underbrace{\\begin{bmatrix}-10&12\\\\-9&11\\end{bmatrix}}_{=A}\\mathbf y,\\qquad\\mathbf y(0)=\\begin{bmatrix}0\\\\-1\\end{bmatrix}.$$\nVariabelbyte $\\mathbf y=P\\mathbf u$ ger $P\\mathbf u'=AP\\mathbf u\\iff\\mathbf u'=P^{-1}AP\\mathbf u=D\\mathbf u$ om $A=PDP^{-1}$. Så diagonalisera $A$.\n\n**Egenvärden:** kar.ekv. $\\det(\\lambda I-A)=0$:\n$$\\begin{vmatrix}\\lambda+10&-12\\\\9&\\lambda-11\\end{vmatrix}=0\\iff(\\lambda+10)(\\lambda-11)+108=0\\iff\\lambda^2-\\lambda-2=0\\iff\\lambda=\\tfrac12\\pm\\sqrt{\\tfrac14+\\tfrac84}=\\tfrac12\\pm\\tfrac32,$$\ndvs $\\lambda=-1$ eller $2$. [Koll: $-1+2=1=\\operatorname{tr}A=-10+11$; $-1\\cdot2=-2=\\det A=-110+108$, ok.]\n\n**Egenvektorer:**\n$\\lambda=-1$: $A\\mathbf v=-\\mathbf v\\iff(I+A)\\mathbf v=\\mathbf 0$:\n$$\\left[\\begin{array}{cc|c}-9&12&0\\\\-9&12&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}\\boxed{-3}&4&0\\\\0&0&0\\end{array}\\right],$$\n$x_1$ bunden, $x_2=t$ fri, $x_1=\\frac43t$. $\\mathbf v=t\\begin{bmatrix}4/3\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}4\\\\3\\end{bmatrix}$.\n\n$\\lambda=2$: $(2I-A)\\mathbf v=\\mathbf 0$:\n$$\\left[\\begin{array}{cc|c}12&-12&0\\\\9&-9&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}\\boxed1&-1&0\\\\0&0&0\\end{array}\\right],$$\n$x_1=t$. $\\mathbf v=t\\begin{bmatrix}1\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}1\\\\1\\end{bmatrix}$.\n\nSå $A=PDP^{-1}$ med $P=\\begin{bmatrix}4&1\\\\3&1\\end{bmatrix}$, $D=\\begin{bmatrix}-1&0\\\\0&2\\end{bmatrix}$.\n\nTillbaka till diffsen: $\\mathbf u'=D\\mathbf u$. Om $\\mathbf u=\\begin{bmatrix}u\\\\v\\end{bmatrix}$ så $u'=-u$, $v'=2v$, vilket ger $u=\\alpha e^{-x}$, $v=\\beta e^{2x}$. Så\n$$\\mathbf y=P\\mathbf u=\\begin{bmatrix}4&1\\\\3&1\\end{bmatrix}\\begin{bmatrix}\\alpha e^{-x}\\\\\\beta e^{2x}\\end{bmatrix}=\\begin{bmatrix}4\\alpha e^{-x}+\\beta e^{2x}\\\\3\\alpha e^{-x}+\\beta e^{2x}\\end{bmatrix}.$$\nMen $\\mathbf y(0)=\\begin{bmatrix}0\\\\-1\\end{bmatrix}$ ger $4\\alpha+\\beta=0$, $3\\alpha+\\beta=-1$; $\\alpha=1$, $\\beta=-4$.\n\n**Svar:** $y=4e^{-x}-4e^{2x}$, $z=3e^{-x}-4e^{2x}$."
  },
  "t260526-6": {
   "id": "t260526-6",
   "tenta": "t260526",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Minsta kvadratmetoden"
   ],
   "typ": "minsta-kvadrat",
   "avsnitt": [
    "6.4",
    "6.5"
   ],
   "uppgift": "Betrakta följande data\n\n| $x$ | $-1$ | $0$ | $1$ | $2$ |\n|---|---|---|---|---|\n| $y$ | $1$ | $-1$ | $-1$ | $3$ |\n\nBestäm den funktion på formen $y=\\alpha x^2+\\beta x$ som bäst anpassar sig till datapunkterna i minstakvadratmetodens mening.",
   "losning": "Sätt in datapunkterna i modellfunktionen:\n$$\\begin{cases}1=\\alpha-\\beta\\\\-1=0\\quad\\leftarrow\\text{saknar lösning}\\\\-1=\\alpha+\\beta\\\\3=4\\alpha+2\\beta\\end{cases}$$\nPå matrisform:\n$$\\begin{bmatrix}1&-1\\\\0&0\\\\1&1\\\\4&2\\end{bmatrix}\\begin{bmatrix}\\alpha\\\\\\beta\\end{bmatrix}=\\begin{bmatrix}1\\\\-1\\\\-1\\\\3\\end{bmatrix}.$$\nMotsvarande normalekvation:\n$$\\begin{bmatrix}1&0&1&4\\\\-1&0&1&2\\end{bmatrix}\\begin{bmatrix}1&-1\\\\0&0\\\\1&1\\\\4&2\\end{bmatrix}\\begin{bmatrix}\\alpha\\\\\\beta\\end{bmatrix}=\\begin{bmatrix}1&0&1&4\\\\-1&0&1&2\\end{bmatrix}\\begin{bmatrix}1\\\\-1\\\\-1\\\\3\\end{bmatrix}\\iff\\begin{bmatrix}18&8\\\\8&6\\end{bmatrix}\\begin{bmatrix}\\alpha\\\\\\beta\\end{bmatrix}=\\begin{bmatrix}12\\\\4\\end{bmatrix}.$$\nMotsvarande utökade koefficientmatris:\n$$\\left[\\begin{array}{cc|c}18&8&12\\\\8&6&4\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}9&4&6\\\\4&3&2\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}36&16&24\\\\36&27&18\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}36&16&24\\\\0&11&-6\\end{array}\\right],$$\nså $\\beta=-6/11$, $\\alpha=\\frac14\\left(2+\\frac{18}{11}\\right)=\\frac{10}{11}$ (ur $4\\alpha+3\\beta=2$).\n\nAha, den bästa modellen (i minstakvadratmetodens mening) på denna form är\n\n[Figur: datapunkterna och parabeln $y=\\frac{10}{11}x^2-\\frac6{11}x$.]\n\n**Svar:** $y=\\frac{10}{11}x^2-\\frac{6}{11}x$."
  },
  "t260526-7": {
   "id": "t260526-7",
   "tenta": "t260526",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Determinanter",
    "linjäritet i kolonner"
   ],
   "typ": "determinantlagar",
   "avsnitt": [
    "2.2",
    "2.3"
   ],
   "uppgift": "Låt $\\mathbf a_1$ och $\\mathbf a_2$ vara två vektorer i $\\mathbb R^2$ skrivna som $2\\times1$ matriser. Låt $A=[\\mathbf a_1\\ \\mathbf a_2]$ och antag $\\det A=-2$. Bestäm $\\det([\\mathbf b_1\\ \\mathbf b_2])$ då $\\mathbf b_1=-\\mathbf a_1+2\\mathbf a_2$ och $\\mathbf b_2=-\\mathbf a_1+3\\mathbf a_2$. Lös också $A\\mathbf x=\\mathbf b_1-\\mathbf b_2$.",
   "losning": "Determinanten är linjär i varje kolumn var för sig:\n$$\\det[-\\mathbf a_1+2\\mathbf a_2,\\ -\\mathbf a_1+3\\mathbf a_2]=\\underbrace{\\det[-\\mathbf a_1,-\\mathbf a_1]}_{=0\\text{ (L.B.)}}+\\det[-\\mathbf a_1,3\\mathbf a_2]+\\det[2\\mathbf a_2,-\\mathbf a_1]+\\underbrace{\\det[2\\mathbf a_2,3\\mathbf a_2]}_{=0\\text{ (linjärt beroende kolonner)}}$$\ndär $\\det[2\\mathbf a_2,-\\mathbf a_1]=-2\\det[\\mathbf a_2,\\mathbf a_1]=2\\det[\\mathbf a_1,\\mathbf a_2]$. Alltså\n$$=-3\\det(A)+2\\det(A)=-\\det(A)=2.$$\n$A\\mathbf x=\\mathbf b_1-\\mathbf b_2$ med $\\mathbf x=\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}$:\n$$x_1\\mathbf a_1+x_2\\mathbf a_2=-\\mathbf a_1+2\\mathbf a_2-(-\\mathbf a_1+3\\mathbf a_2)=-\\mathbf a_2,$$\nså $x_1=0$, $x_2=-1$.\n\n**Svar:** $\\det([\\mathbf b_1\\ \\mathbf b_2])=2$; $\\mathbf x=\\begin{bmatrix}0\\\\-1\\end{bmatrix}$."
  },
  "t260526-8": {
   "id": "t260526-8",
   "tenta": "t260526",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Inre produktrum",
    "Gram–Schmidt",
    "ortogonal projektion"
   ],
   "typ": "inre-produktrum",
   "avsnitt": [
    "6.1",
    "6.3"
   ],
   "uppgift": "Betrakta $\\mathbb P_2$ med skalärprodukt $\\langle p,q\\rangle=\\int_0^1p(x)q(x)\\,dx$. Låt\n$$W=\\operatorname{span}\\{1-x,x^2\\}.$$\nBestäm den ortogonala projektionen av $f(x)=1$ på $W$, det vill säga bestäm $\\operatorname{proj}_W1$.",
   "losning": "En bas för $W$ är $\\{1-x,x^2\\}$. Ortogonalisera denna:\n1. $q_1(x)=1-x$, $W_1=\\operatorname{span}\\{q_1\\}$.\n2. [Figur: $x^2$, $\\operatorname{proj}_{W_1}x^2$ och $q_2$ vinkelrät.]\n$$q_2(x)=x^2-\\operatorname{proj}_{W_1}x^2=x^2-\\frac{\\langle x^2,1-x\\rangle}{\\langle1-x,1-x\\rangle}(1-x)=x^2-\\frac{1/12}{1/3}(1-x)=x^2-\\frac14(1-x).$$\n2'. Välj $\\hat q_2(x)=4q_2(x)=4x^2+x-1$.\n\nEn ortogonal bas är $\\{1-x,\\ 4x^2+x-1\\}$.\n\nNågra skalärprodukter:\n$$\\langle x^2,1-x\\rangle=\\int_0^1(x^2-x^3)\\,dx=\\tfrac13-\\tfrac14=\\tfrac1{12},\\qquad\\langle1-x,1-x\\rangle=\\int_0^1(1-2x+x^2)\\,dx=1-1+\\tfrac13=\\tfrac13,$$\n$$\\langle1,1-x\\rangle=\\int_0^1(1-x)\\,dx=1-\\tfrac12=\\tfrac12,\\qquad\\langle1,4x^2+x-1\\rangle=\\int_0^1(4x^2+x-1)\\,dx=\\tfrac43+\\tfrac12-1=\\tfrac56,$$\n$$\\langle4x^2+x-1,4x^2+x-1\\rangle=\\int_0^1(16x^4+x^2+1+8x^3-8x^2-2x)\\,dx=\\tfrac{16}5+\\tfrac13+1+2-\\tfrac83-1=\\tfrac{43}{15}.$$\nMan får nu\n$$\\operatorname{proj}_W1=\\frac{\\langle1,1-x\\rangle}{\\langle1-x,1-x\\rangle}(1-x)+\\frac{\\langle1,4x^2+x-1\\rangle}{\\langle4x^2+x-1,4x^2+x-1\\rangle}(4x^2+x-1)=\\frac{1/2}{1/3}(1-x)+\\frac{5/6}{43/15}(4x^2+x-1)$$\n$$=\\frac32(1-x)+\\frac{25}{86}(4x^2+x-1)=\\frac32(1-x)+\\frac{50}{43}x^2+\\frac{25}{86}(x-1)=\\frac{50}{43}x^2-\\frac{52}{43}x+\\frac{52}{43}.$$\n[Figur: konstanten 1 och $\\operatorname{proj}_W1$ på $[0,1]$.]\n\n**Svar:** $\\operatorname{proj}_W1=\\frac{50}{43}x^2-\\frac{52}{43}x+\\frac{52}{43}$."
  },
  "t260526-9": {
   "id": "t260526-9",
   "tenta": "t260526",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Egenvärden",
    "karakteristiskt polynom",
    "determinant",
    "bevis"
   ],
   "typ": "bevis",
   "avsnitt": [
    "2.1",
    "2.2",
    "5.1"
   ],
   "uppgift": "Låt $A$ vara en $n\\times n$ matris. Definiera begreppen egenvärden och egenvektorer. Bevisa att $\\lambda$ är ett egenvärde om och endast om $\\det(\\lambda I-A)=0$. Visa slutligen att produkten av egenvärdena är $\\det(A)$ genom att utnyttja att det karakteristiska polynomet för $A$ är ett $n$:te gradspolynom med ledande koefficient ett.",
   "losning": "En vektor $\\mathbf v\\neq\\mathbf 0$ är en egenvektor för $A$ med tillhörande egenvärde $\\lambda$ om\n$$A\\mathbf v=\\lambda\\mathbf v.$$\nMen $A\\mathbf v=\\lambda\\mathbf v\\iff\\lambda\\mathbf v-A\\mathbf v=\\mathbf 0\\iff(\\lambda I-A)\\mathbf v=\\mathbf 0$. $\\lambda$ är egenvärde till $A$ om och endast om $(\\lambda I-A)\\mathbf v=\\mathbf 0$ har nollskilda lösningar, vilket precis betyder $\\det(\\lambda I-A)=0$.\n\nEftersom $\\det(\\lambda I-A)$ är ett $n$:te gradspolynom med ledande koefficient 1 är\n$$\\det(\\lambda I-A)=(\\lambda-\\lambda_1)(\\lambda-\\lambda_2)\\cdots(\\lambda-\\lambda_n).$$\nSätt in $\\lambda=0$:\n$$\\det(-A)=(-\\lambda_1)(-\\lambda_2)\\cdots(-\\lambda_n),$$\noch $\\det(-A)=(-1)^n\\det(A)$, så\n$$\\det(A)=\\lambda_1\\lambda_2\\cdots\\lambda_n.$$"
  },
  "t260319-1": {
   "id": "t260319-1",
   "tenta": "t260319",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära ekvationssystem",
    "lösbarhet"
   ],
   "typ": "gausselimination",
   "avsnitt": [
    "1.1",
    "1.2",
    "1.6"
   ],
   "uppgift": "Bestäm alla $a$, $b$ och $c$ så att systemet\n$$\\begin{cases}x+2y-z=a\\\\3x+4y-2z=b\\\\-2x+2y-z=c\\end{cases}$$\nhar lösning, det vill säga så att systemet är konsistent.",
   "losning": "Den utökade koefficientmatrisen elimineras enligt\n$$\\left[\\begin{array}{ccc|c}1&2&-1&a\\\\3&4&-2&b\\\\-2&2&-1&c\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&2&-1&a\\\\0&-2&1&b-3a\\\\0&6&-3&c+2a\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&2&-1&a\\\\0&-2&1&b-3a\\\\0&0&0&c+2a+3(b-3a)\\end{array}\\right].$$\nNu utläses att systemet har lösning om och endast om $c+2a+3(b-3a)=0$, dvs omm\n\n**Svar:** $-7a+3b+c=0$."
  },
  "t260319-2": {
   "id": "t260319-2",
   "tenta": "t260319",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära avbildningar",
    "rotation",
    "spegling",
    "sammansättning"
   ],
   "typ": "linjar-avbildning",
   "avsnitt": [
    "1.8",
    "1.9"
   ],
   "uppgift": "Bestäm matrisen för den linjära avbildning $T_A:\\mathbb R^2\\to\\mathbb R^2$ som först roterar $\\pi/3$ radianer moturs och därefter speglar i $y$-axeln. Vad avbildas $(1,1)$ på?",
   "losning": "$T_A=S\\circ R$ ($S$ spegling, $R$ rotation). $\\begin{bmatrix}\\cos\\alpha&-\\sin\\alpha\\\\\\sin\\alpha&\\cos\\alpha\\end{bmatrix}$ ger rotation $\\alpha$ radianer moturs, så matrisen för $R$:\n$$\\begin{bmatrix}\\cos\\frac\\pi3&-\\sin\\frac\\pi3\\\\\\sin\\frac\\pi3&\\cos\\frac\\pi3\\end{bmatrix}=\\begin{bmatrix}1/2&-\\sqrt3/2\\\\\\sqrt3/2&1/2\\end{bmatrix}.$$\nMatrisen för $S$: $[S(\\mathbf e_1)\\ S(\\mathbf e_2)]=\\begin{bmatrix}-1&0\\\\0&1\\end{bmatrix}$ (figur: $S(\\mathbf e_1)=-\\mathbf e_1$, $S(\\mathbf e_2)=\\mathbf e_2$).\n\nDetta ger att matrisen för $T_A$ är\n$$A=\\begin{bmatrix}-1&0\\\\0&1\\end{bmatrix}\\begin{bmatrix}1/2&-\\sqrt3/2\\\\\\sqrt3/2&1/2\\end{bmatrix}=\\begin{bmatrix}-1/2&\\sqrt3/2\\\\\\sqrt3/2&1/2\\end{bmatrix}.$$\n$(1,1)$ avbildas på\n$$A\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\begin{bmatrix}-1/2&\\sqrt3/2\\\\\\sqrt3/2&1/2\\end{bmatrix}\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\begin{bmatrix}(\\sqrt3-1)/2\\\\(\\sqrt3+1)/2\\end{bmatrix}.$$\nKontroll steg för steg (först rotation, sedan spegling):\n$$R(1,1)=\\begin{bmatrix}1/2&-\\sqrt3/2\\\\\\sqrt3/2&1/2\\end{bmatrix}\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\begin{bmatrix}(1-\\sqrt3)/2\\\\(1+\\sqrt3)/2\\end{bmatrix},\\quad S\\!\\left(\\tfrac{1-\\sqrt3}2,\\tfrac{1+\\sqrt3}2\\right)=\\begin{bmatrix}(\\sqrt3-1)/2\\\\(\\sqrt3+1)/2\\end{bmatrix}.$$\n[Figur: $(1,1)$, $R(1,1)$ och $S\\circ R(1,1)$; samt en L-formad figur: original, roterad och roterad-sedan-speglad.]\n\n**Svar:** $A=\\begin{bmatrix}-1/2&\\sqrt3/2\\\\\\sqrt3/2&1/2\\end{bmatrix}$; $(1,1)\\mapsto\\left(\\frac{\\sqrt3-1}2,\\frac{\\sqrt3+1}2\\right)$."
  },
  "t260319-3": {
   "id": "t260319-3",
   "tenta": "t260319",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linje och plan",
    "parallellitet",
    "avstånd"
   ],
   "typ": "plan-avstand",
   "avsnitt": [
    "3.3",
    "3.4"
   ],
   "uppgift": "Låt $L$ vara den räta linje som går genom $(1,-2,1)$ och $(0,1,-3)$ och låt $\\Pi$ vara planet med ekvation $x-y-z=4$. Om linjen är parallell med planet bestäm avståndet mellan $L$ och $\\Pi$, bestäm annars skärningspunkten.",
   "losning": "Linjens riktning: $\\mathbf v=(0,1,-3)-(1,-2,1)=(-1,3,-4)$.\n$$L:\\ \\mathbf x=(1,-2,1)+t(-1,3,-4),\\ t\\in\\mathbb R;\\qquad\\Pi:\\ x-y-z=4,\\ \\text{normal }\\mathbf n=(1,-1,-1).$$\n$$\\mathbf v\\bullet\\mathbf n=(-1,3,-4)\\bullet(1,-1,-1)=-1-3+4=0,$$\nså de är ortogonala mot varandra, alltså är linjen parallell med planet.\n\nBestäm avståndet. En punkt på planet: $(4,0,0)$; en punkt på linjen: $(1,-2,1)$. Vektorn mellan dem: $\\mathbf u=(1,-2,1)-(4,0,0)=(-3,-2,1)$. Projicera denna på $\\mathbf n$:\n\n[Figur: linjen $L$ ovanför planet $\\Pi$, $\\mathbf u$ från $(4,0,0)$ till $(1,-2,1)$ och $\\operatorname{proj}_{\\mathbf n}\\mathbf u$.]\n\n$$\\operatorname{proj}_{\\mathbf n}\\mathbf u=\\frac{\\mathbf u\\bullet\\mathbf n}{\\mathbf n\\bullet\\mathbf n}\\mathbf n=\\frac{(-3,-2,1)\\bullet(1,-1,-1)}{(1,-1,-1)\\bullet(1,-1,-1)}(1,-1,-1)=-\\frac23(1,-1,-1).$$\nAvståndet är\n$$\\|\\operatorname{proj}_{\\mathbf n}\\mathbf u\\|=\\tfrac23\\sqrt{1^2+(-1)^2+(-1)^2}=\\tfrac23\\sqrt3=\\tfrac2{\\sqrt3}.$$\n**Svar:** $L$ är parallell med $\\Pi$; avståndet är $\\frac2{\\sqrt3}$."
  },
  "t260319-4": {
   "id": "t260319-4",
   "tenta": "t260319",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjärt oberoende",
    "linjärt hölje",
    "matrisrum"
   ],
   "typ": "bas-dimension",
   "avsnitt": [
    "4.1",
    "4.3",
    "4.4"
   ],
   "uppgift": "Visa att\n$$\\mathcal M=\\left\\{\\begin{bmatrix}1&1\\\\0&-1\\end{bmatrix},\\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix},\\begin{bmatrix}-2&1\\\\-1&2\\end{bmatrix}\\right\\}$$\när linjärt oberoende. Avgör sedan, utan räkningar men med motiveringar, vilka av följande matriser som ligger i $\\operatorname{span}(\\mathcal M)$,\n$$\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix},\\ \\begin{bmatrix}\\sqrt2-1&\\pi-1\\\\\\sqrt7&1-\\sqrt2\\end{bmatrix},\\ \\begin{bmatrix}1&0&1\\\\0&-2&0\\\\1&0&1\\end{bmatrix},\\ \\begin{bmatrix}-1&2\\\\-3&1\\end{bmatrix}.$$",
   "losning": "Visa linjärt oberoende. Antag\n$$c_1\\begin{bmatrix}1&1\\\\0&-1\\end{bmatrix}+c_2\\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix}+c_3\\begin{bmatrix}-2&1\\\\-1&2\\end{bmatrix}=\\begin{bmatrix}0&0\\\\0&0\\end{bmatrix}$$\noch visa $c_1=c_2=c_3=0$. Position för position:\n$$(1,1):\\ c_1-2c_3=0,\\quad(1,2):\\ c_1+c_2+c_3=0,\\quad(2,1):\\ -c_2-c_3=0,\\quad(2,2):\\ -c_1+2c_3=0.$$\nDen motsvarande utökade matrisen:\n$$\\left[\\begin{array}{ccc|c}1&0&-2&0\\\\1&1&1&0\\\\0&-1&-1&0\\\\-1&0&2&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&0&-2&0\\\\0&1&3&0\\\\0&-1&-1&0\\\\0&0&0&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}\\boxed1&0&-2&0\\\\0&\\boxed1&3&0\\\\0&0&\\boxed2&0\\\\0&0&0&0\\end{array}\\right].$$\nPivot i alla kolumner, så endast nollösning, dvs linjärt oberoende.\n\nMatriserna i $\\mathcal M$ är på formen $\\begin{bmatrix}a&b\\\\c&-a\\end{bmatrix}$, och då även alla i $\\operatorname{span}(\\mathcal M)$. Ger $\\operatorname{span}(\\mathcal M)$ alla sådana? Ja, ty de utgör ett underrum till $M_{2\\times2}$ med dimension max 3 (inte hela rummet), men då precis 3 eftersom $\\mathcal M$ innehåller 3 linjärt oberoende element.\n\n**Svar:** $\\mathcal M$ är linjärt oberoende. De som ligger i höljet är $\\begin{bmatrix}\\sqrt2-1&\\pi-1\\\\\\sqrt7&1-\\sqrt2\\end{bmatrix}$ och $\\begin{bmatrix}-1&2\\\\-3&1\\end{bmatrix}$ (spår noll). $\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$ har inte den formen, och $3\\times3$-matrisen ligger inte ens i $M_{2\\times2}$."
  },
  "t260319-5": {
   "id": "t260319-5",
   "tenta": "t260319",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Egenvärden",
    "diagonalisering",
    "matrispotens"
   ],
   "typ": "diagonalisering",
   "avsnitt": [
    "5.1",
    "5.2"
   ],
   "uppgift": "Diagonalisera $A=\\begin{bmatrix}-1&2\\\\4&1\\end{bmatrix}$, det vill säga finn matriser $P$ och $D$, $D$ diagonal, så att $A=PDP^{-1}$. Bestäm $A^5$ med hjälp av diagonaliseringen.",
   "losning": "Bestäm egenvärden/egenvektorer.\n\n**Egenvärden:** karakteristiska ekvationen $\\det(\\lambda I-A)=0$:\n$$\\begin{vmatrix}\\lambda+1&-2\\\\-4&\\lambda-1\\end{vmatrix}=0\\iff(\\lambda+1)(\\lambda-1)-8=0\\iff\\lambda^2=9\\iff\\lambda=\\pm3.$$\n[Koll: $3+(-3)=0=\\operatorname{tr}A=-1+1$; $3(-3)=-9=\\det A=-1-8$, ok.]\n\n**Egenvektorer:**\n$\\lambda=3$: $A\\mathbf v=3\\mathbf v\\iff(3I-A)\\mathbf v=\\mathbf 0$:\n$$\\left[\\begin{array}{cc|c}4&-2&0\\\\-4&2&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}\\boxed2&-1&0\\\\0&0&0\\end{array}\\right].$$\n$x_1$ bunden, $x_2=t$ fri, $x_1=t/2$, så $\\mathbf v=t\\begin{bmatrix}1/2\\\\1\\end{bmatrix}$. Välj $\\begin{bmatrix}1\\\\2\\end{bmatrix}$.\n\n$\\lambda=-3$: $(-3I-A)\\mathbf v=\\mathbf 0$:\n$$\\left[\\begin{array}{cc|c}-2&-2&0\\\\-4&-4&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}\\boxed1&1&0\\\\0&0&0\\end{array}\\right].$$\n$x_1=-t$, så $\\mathbf v=t\\begin{bmatrix}-1\\\\1\\end{bmatrix}$. Välj $\\begin{bmatrix}-1\\\\1\\end{bmatrix}$.\n\nAlltså $A=PDP^{-1}$ med\n$$P=\\begin{bmatrix}1&-1\\\\2&1\\end{bmatrix},\\quad D=\\begin{bmatrix}3&0\\\\0&-3\\end{bmatrix}.$$\nBestäm $A^5$: $A^5=(PDP^{-1})^5=PD^5P^{-1}$, med $P^{-1}=\\frac13\\begin{bmatrix}1&1\\\\-2&1\\end{bmatrix}$:\n$$A^5=\\begin{bmatrix}1&-1\\\\2&1\\end{bmatrix}\\begin{bmatrix}3^5&0\\\\0&-3^5\\end{bmatrix}\\frac13\\begin{bmatrix}1&1\\\\-2&1\\end{bmatrix}=\\frac13\\begin{bmatrix}1&-1\\\\2&1\\end{bmatrix}\\begin{bmatrix}3^5&3^5\\\\2\\cdot3^5&-3^5\\end{bmatrix}=\\frac13\\begin{bmatrix}-3^5&2\\cdot3^5\\\\4\\cdot3^5&3^5\\end{bmatrix}=3^4\\begin{bmatrix}-1&2\\\\4&1\\end{bmatrix}$$\n(använd $(-3)^5=-3^5$).\n\n**Svar:** $P=\\begin{bmatrix}1&-1\\\\2&1\\end{bmatrix}$, $D=\\begin{bmatrix}3&0\\\\0&-3\\end{bmatrix}$, $A^5=\\begin{bmatrix}-81&162\\\\324&81\\end{bmatrix}$."
  },
  "t260319-6": {
   "id": "t260319-6",
   "tenta": "t260319",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Gram–Schmidt",
    "ortogonal bas"
   ],
   "typ": "gram-schmidt",
   "avsnitt": [
    "6.3"
   ],
   "uppgift": "Bestäm en ortogonal bas för\n$$\\operatorname{span}\\{(1,-1,0,1),(1,0,1,1),(2,0,0,1)\\}.$$",
   "losning": "$\\mathbf u_1=(1,-1,0,1)$, $\\mathbf u_2=(1,0,1,1)$, $\\mathbf u_3=(2,0,0,1)$. Bestäm en ortogonal bas för $\\operatorname{span}\\{\\mathbf u_1,\\mathbf u_2,\\mathbf u_3\\}$ med Gram–Schmidt.\n\nAnm.: Om de inte är linjärt oberoende kommer det visa sig genom att en vektor blir $\\mathbf 0$.\n\n1. $\\mathbf v_1=\\mathbf u_1$; $W_1=\\operatorname{span}\\{\\mathbf v_1\\}$.\n2. [Figur: $\\mathbf u_2$, $\\operatorname{proj}_{W_1}\\mathbf u_2$ längs $W_1$ och $\\mathbf v_2$ vinkelrät.]\n$$\\mathbf v_2=\\mathbf u_2-\\operatorname{proj}_{W_1}\\mathbf u_2=(1,0,1,1)-\\frac{(1,0,1,1)\\bullet(1,-1,0,1)}{(1,-1,0,1)\\bullet(1,-1,0,1)}(1,-1,0,1)=(1,0,1,1)-\\tfrac23(1,-1,0,1)=\\left(\\tfrac13,\\tfrac23,1,\\tfrac13\\right).$$\nVälj $\\mathbf v_2'=3\\mathbf v_2=(1,2,3,1)$ och $W_2=\\operatorname{span}\\{\\mathbf v_1,\\mathbf v_2'\\}$.\n3. \n$$\\mathbf v_3=\\mathbf u_3-\\operatorname{proj}_{W_2}\\mathbf u_3=(2,0,0,1)-\\left(\\frac{(2,0,0,1)\\bullet(1,-1,0,1)}{(1,-1,0,1)\\bullet(1,-1,0,1)}(1,-1,0,1)+\\frac{(2,0,0,1)\\bullet(1,2,3,1)}{(1,2,3,1)\\bullet(1,2,3,1)}(1,2,3,1)\\right)$$\n$$=(2,0,0,1)-\\tfrac33(1,-1,0,1)-\\tfrac3{15}(1,2,3,1)=\\tfrac15\\big((10,0,0,5)-(5,-5,0,5)-(1,2,3,1)\\big)=\\tfrac15(4,3,-3,-1).$$\nVälj $(4,3,-3,-1)$.\n\nEn kontroll (ortogonaliteten):\n$$(1,-1,0,1)\\bullet(1,2,3,1)=1-2+0+1=0,\\ (1,-1,0,1)\\bullet(4,3,-3,-1)=4-3+0-1=0,\\ (1,2,3,1)\\bullet(4,3,-3,-1)=4+6-9-1=0.$$\n**Svar:** En ortogonal bas för höljet är $\\{(1,-1,0,1),(1,2,3,1),(4,3,-3,-1)\\}$."
  },
  "t260319-7": {
   "id": "t260319-7",
   "tenta": "t260319",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Determinanter",
    "invers",
    "räknelagar",
    "rang"
   ],
   "typ": "determinantlagar",
   "avsnitt": [
    "1.4",
    "1.5",
    "2.2",
    "2.3",
    "4.9"
   ],
   "uppgift": "Determinant och invers.\n\na) Låt $A$ och $B$ vara kvadratiska matriser. Använd determinanten för att bevisa att om $AB$ är inverterbar så måste $A$ och $B$ vara inverterbara.\n\nb) Låt $A$ vara en $4\\times4$ matris med $\\det(A)=2$ och bilda $B$ genom att ersätta rad fyra med summan av rad ett och två. Avgör om $B$ är inverterbar.\n\nc) Låt $A$ vara en $5\\times5$ matris med $\\det(A)=-3$ och bilda $B$ genom att först lägga till rad ett och rad två till rad tre och därefter byta plats på kolumn fyra och kolumn fem. Bestäm $\\det(-2B)$.\n\nd) Finns det $a$, $b$ och $c$ så att matrisen $\\begin{bmatrix}a&b&c\\end{bmatrix}^T\\begin{bmatrix}a&b&c\\end{bmatrix}$ är inverterbar? Förklara.",
   "losning": "a) En matris är inverterbar omm determinanten är skild från noll. För determinanten gäller $\\det(AB)=\\det A\\det B$. Om $\\det(AB)\\neq0$ måste $\\det A\\neq0\\neq\\det B$. Alltså är $A$, $B$ inverterbara.\n\nb) Rad 1, 2, 4 blir linjärt beroende (rad 4 = rad 1 + rad 2), så $\\det B=0$. Alltså ej inverterbar.\n\nc) Första operationen ändrar ej determinanten. Kolumnbytet ger teckenbyte. Så $\\det(B)=-\\det(A)=3$. Sedan (elementär determinantregel, en faktor $-2$ för varje rad):\n$$\\det(-2B)=(-2)^5\\det(B)=-32\\cdot3=-96.$$\nd) $\\begin{bmatrix}a\\\\b\\\\c\\end{bmatrix}\\begin{bmatrix}a&b&c\\end{bmatrix}$ har rang 1 (kolumnerna alla en multipel av $(a,b,c)^T$; om $a=b=c=0$ är rangen 0), så ej inverterbar.\n\n**Svar:** a) se ovan; b) $B$ är inte inverterbar; c) $\\det(-2B)=-96$; d) Nej, inte inverterbar oavsett $a,b,c$."
  },
  "t260319-8": {
   "id": "t260319-8",
   "tenta": "t260319",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Inre produktrum",
    "underrum",
    "ortogonal bas",
    "projektion"
   ],
   "typ": "inre-produktrum",
   "avsnitt": [
    "4.2",
    "6.1",
    "6.3"
   ],
   "uppgift": "Betrakta $\\mathbb P_3$, polynomen av gradtal maximalt tre, med skalärprodukten\n$$\\langle p,q\\rangle=\\int_{-1}^1p(x)q(x)\\,dx.$$\nLåt också\n$$W=\\{p\\in\\mathbb P_3:p(0)=0\\}\\quad\\text{och}\\quad\\mathcal P=\\{x,x^2,5x^3-3x\\}.$$\na) Visa att $W$ är ett underrum till $\\mathbb P_3$.\nb) Visa att $\\mathcal P$ är en ortogonal bas för $W$.\nc) Utvidga $\\mathcal P$ till en ortogonal bas för $\\mathbb P_3$.",
   "losning": "a) $\\mathbf 0\\in W$, ok, ty $p(x)=0$ för alla $x$ så $p(0)=0$.\n$p,q\\in W$: visa $p+q\\in W$: $(p+q)(0)=p(0)+q(0)=0+0=0$, ok.\n$p\\in W$: visa $cp\\in W$: $(cp)(0)=cp(0)=c\\cdot0=0$, ok.\n$W$ är ett underrum.\n\nb)\n$$\\langle x,x^2\\rangle=\\int_{-1}^1x\\cdot x^2\\,dx=0\\quad(\\text{integranden udda}),$$\n$$\\langle x,5x^3-3x\\rangle=\\int_{-1}^1(5x^4-3x^2)\\,dx=\\big[x^5-x^3\\big]_{-1}^1=1-1-(-1+1)=0,$$\n$$\\langle x^2,5x^3-3x\\rangle=\\int_{-1}^1x^2(5x^3-3x)\\,dx=0\\quad(\\text{udda}).$$\n$\\mathcal P$ är en ortogonal mängd, så linjärt oberoende ($\\mathbf0\\notin\\mathcal P$). $W$ kan max ha dimensionen 3 (konstanten 1 ligger inte i $W$) och nu har vi tre linjärt oberoende, alltså en ortogonal bas.\n\nc) Om $1$ läggs till fås en bas, men den måste ortogonaliseras, så lägg till\n$$1-\\operatorname{proj}_W1=1-\\frac{\\langle1,x\\rangle}{\\langle x,x\\rangle}x-\\frac{\\langle1,x^2\\rangle}{\\langle x^2,x^2\\rangle}x^2-\\frac{\\langle1,5x^3-3x\\rangle}{\\langle5x^3-3x,5x^3-3x\\rangle}(5x^3-3x).$$\nTvå av tre skalärprodukter är noll (udda integrand). Kvar:\n$$\\frac{\\langle1,x^2\\rangle}{\\langle x^2,x^2\\rangle}x^2=\\frac{2/3}{2/5}x^2=\\frac53x^2,\\quad\\text{där }\\int_{-1}^11\\cdot x^2\\,dx=\\tfrac23,\\ \\int_{-1}^1x^2\\cdot x^2\\,dx=\\tfrac25.$$\nSå $1-\\operatorname{proj}_W1=1-\\frac53x^2$. Välj hellre $3-5x^2$.\n\nAlternativt (inte lika stiligt): ansätt $p(x)=1+ax+bx^2+cx^3$:\n$$\\langle p,x\\rangle=\\tfrac23a+\\tfrac25c=0,\\quad\\langle p,x^2\\rangle=\\tfrac25b+\\tfrac23=0,\\quad\\langle p,5x^3-3x\\rangle=\\tfrac8{35}c=0,$$\nvilket ger $c=0$, $b=-\\frac53$, $a=0$, dvs $p(x)=1-\\frac53x^2$.\n\n**Svar:** c) En ortogonal bas för $\\mathbb P_3$ är $\\{x,\\ x^2,\\ 5x^3-3x,\\ 3-5x^2\\}$."
  },
  "t260319-9": {
   "id": "t260319-9",
   "tenta": "t260319",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Egenvektorer",
    "linjärt oberoende",
    "bevis"
   ],
   "typ": "bevis",
   "avsnitt": [
    "4.4",
    "5.1"
   ],
   "uppgift": "En matris har egenvärden $\\lambda_1\\neq\\lambda_2$ (kanske andra också) med tillhörande egenvektorer $\\mathbf u$ och $\\mathbf v$. Visa att $\\{\\mathbf u,\\mathbf v\\}$ är linjärt oberoende.",
   "losning": "Antag\n$$c_1\\mathbf u+c_2\\mathbf v=\\mathbf 0\\tag{1}$$\noch visa $c_1=c_2=0$. Kalla matrisen $A$. Multiplicera (1) med $A$:\n$$A(c_1\\mathbf u+c_2\\mathbf v)=A\\mathbf 0\\iff c_1A\\mathbf u+c_2A\\mathbf v=\\mathbf 0\\iff c_1\\lambda_1\\mathbf u+c_2\\lambda_2\\mathbf v=\\mathbf 0.\\tag{2}$$\nBilda nu $\\lambda_1\\cdot(1)-(2)$:\n$$c_2(\\lambda_1-\\lambda_2)\\mathbf v=\\mathbf 0.$$\nMen $\\mathbf v\\neq\\mathbf 0$ (egenvektor) och $\\lambda_1-\\lambda_2\\neq0$ (olika), så $c_2=0$. Från (1) följer det nu att $c_1=0$ ($\\mathbf u$ egenvektor, så $\\mathbf u\\neq\\mathbf 0$).\n\nSå $c_1=c_2=0$, dvs $\\{\\mathbf u,\\mathbf v\\}$ är linjärt oberoende."
  },
  "xT3-1": {
   "id": "xT3-1",
   "tenta": "xT3",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Matrisinvers"
   ],
   "typ": "matrisekvation",
   "avsnitt": [
    "1.4",
    "1.5"
   ],
   "uppgift": "Bestäm inversen till $\\begin{bmatrix}-4&-1&2\\\\6&2&-2\\\\-2&-1&1\\end{bmatrix}$.",
   "losning": "Kalla matrisen $A$, ställ upp $[A\\mid I]$ och gausseliminera tills det står $I$ till vänster; då har vi $[I\\mid A^{-1}]$.\n$$\\left[\\begin{array}{ccc|ccc}-4&-1&2&1&0&0\\\\6&2&-2&0&1&0\\\\-2&-1&1&0&0&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|ccc}-2&-1&1&0&0&1\\\\6&2&-2&0&1&0\\\\-4&-1&2&1&0&0\\end{array}\\right]$$\n$$\\sim\\left[\\begin{array}{ccc|ccc}-2&-1&1&0&0&1\\\\0&-1&1&0&1&3\\\\0&1&0&1&0&-2\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|ccc}-2&-1&1&0&0&1\\\\0&-1&1&0&1&3\\\\0&0&1&1&1&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|ccc}\\underline1&1/2&-1/2&0&0&-1/2\\\\0&\\underline1&-1&0&-1&-3\\\\0&0&\\underline1&1&1&1\\end{array}\\right].$$\nFramåt-eliminationen visar att alla kolumner är pivotkolumner (annars hade det inte gått att invertera och uppgiften hade varit felaktig). Nu uppåt, fixa nollor ovanför pivoterna:\n$$\\sim\\left[\\begin{array}{ccc|ccc}1&1/2&0&1/2&1/2&0\\\\0&1&0&1&0&-2\\\\0&0&1&1&1&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|ccc}1&0&0&0&1/2&1\\\\0&1&0&1&0&-2\\\\0&0&1&1&1&1\\end{array}\\right].$$\n**Svar:** $A^{-1}=\\begin{bmatrix}0&1/2&1\\\\1&0&-2\\\\1&1&1\\end{bmatrix}$."
  },
  "xT3-2": {
   "id": "xT3-2",
   "tenta": "xT3",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Ekvationssystem med parameter",
    "determinant"
   ],
   "typ": "parametersystem",
   "avsnitt": [
    "1.2",
    "1.6",
    "2.1",
    "2.2"
   ],
   "uppgift": "Låt $a$ vara en reell parameter och betrakta\n$$\\begin{bmatrix}-2&a&1\\\\1&1&0\\\\1&1&a\\end{bmatrix}\\mathbf x=\\begin{bmatrix}2\\\\a\\\\2\\end{bmatrix}.$$\nFör vilka värden på $a$ har ekvationen precis en lösning? Ingen lösning? Oändligt många lösningar? Bestäm också lösningarna i de eventuella fall då oändligt många lösningar finns.",
   "losning": "Systemet är kvadratiskt, så det är smidigt att använda determinanten. Kalla matrisen $A$:\n$$\\det A=-1\\begin{vmatrix}a&1\\\\1&a\\end{vmatrix}+1\\begin{vmatrix}-2&1\\\\1&a\\end{vmatrix}=-(a^2-1)-2a-1=-a(a+2).$$\nPrecis en lösning då $a\\neq0$ och $a\\neq-2$. För $a=0$ eller $a=-2$ finns antingen oändligt många eller inga lösningar.\n\n$a=0$:\n$$\\left[\\begin{array}{ccc|c}-2&0&1&2\\\\1&1&0&0\\\\1&1&0&2\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&1&0&0\\\\-2&0&1&2\\\\1&1&0&2\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&1&0&0\\\\0&2&1&2\\\\0&0&0&2\\end{array}\\right],$$\nnedersta raden visar att lösning saknas.\n\n$a=-2$:\n$$\\left[\\begin{array}{ccc|c}-2&-2&1&2\\\\1&1&0&-2\\\\1&1&-2&2\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&1&0&-2\\\\-2&-2&1&2\\\\1&1&-2&2\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&1&0&-2\\\\0&0&1&-2\\\\0&0&-2&4\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&1&0&-2\\\\0&0&1&-2\\\\0&0&0&0\\end{array}\\right].$$\n$x_1$ och $x_3$ bundna, $x_2$ fri. Låt $x_2=t$: $x_3=-2$, $x_1=-2-t$.\n\n**Svar:** Precis en lösning för $a\\neq0,-2$; ingen lösning för $a=0$; oändligt många för $a=-2$: $\\mathbf x=(-2,0,-2)+t(-1,1,0)$."
  },
  "xT3-3": {
   "id": "xT3-3",
   "tenta": "xT3",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära avbildningar",
    "spegling",
    "projektion"
   ],
   "typ": "spegling-projektion",
   "avsnitt": [
    "1.8",
    "3.3"
   ],
   "uppgift": "Bestäm matrisen för den avbildning som speglar i linjen $x+2y=0$. Vad avbildas $(1,1)$ på? Illustrera med figur.",
   "losning": "Kalla avbildningen $S$ och matrisen $A$. Enligt teorin är $A=[S(\\mathbf e_1)\\ S(\\mathbf e_2)]$. Linjen har riktningen $(2,-1)$. Projicera $(1,0)$ på $(2,-1)$ och dra bort det från $(1,0)$; då fås vektorn $\\mathbf z$ (vinkelrät mot linjen). Speglingen blir\n$$S(\\mathbf e_1)=(1,0)-2\\mathbf z=-(1,0)+2\\frac{(1,0)\\bullet(2,-1)}{(2,-1)\\bullet(2,-1)}(2,-1)=-(1,0)+\\frac45(2,-1)=(3/5,-4/5).$$\n[Figur: $(1,0)$, $\\mathbf z=(1,0)-\\operatorname{proj}_{(2,-1)}(1,0)$ och $S(1,0)=(1,0)-2\\mathbf z$ ritade mot linjen.]\n\nAnalogt för $\\mathbf e_2$:\n$$S(\\mathbf e_2)=-(0,1)+2\\frac{(0,1)\\bullet(2,-1)}{(2,-1)\\bullet(2,-1)}(2,-1)=(-4/5,-3/5).$$\nMatrisen (de framräknade vektorerna som kolonner):\n$$A=\\frac15\\begin{bmatrix}3&-4\\\\-4&-3\\end{bmatrix}.$$\nKontroll: $A^2=\\frac1{25}\\begin{bmatrix}3&-4\\\\-4&-3\\end{bmatrix}\\begin{bmatrix}3&-4\\\\-4&-3\\end{bmatrix}=I$ (samma spegling två gånger ger tillbaka utgångsläget).\n$$A\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\frac15\\begin{bmatrix}3&-4\\\\-4&-3\\end{bmatrix}\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\begin{bmatrix}-1/5\\\\-7/5\\end{bmatrix}.$$\n[Figur: $(1,1)$, dess projektion på linjen och $S(1,1)$ på andra sidan linjen.]\n\n**Svar:** $A=\\frac15\\begin{bmatrix}3&-4\\\\-4&-3\\end{bmatrix}$; $(1,1)\\mapsto(-1/5,-7/5)$."
  },
  "xT3-4": {
   "id": "xT3-4",
   "tenta": "xT3",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Nollrum",
    "bas"
   ],
   "typ": "nollrum-kolonnrum",
   "avsnitt": [
    "4.5",
    "4.8"
   ],
   "uppgift": "Bestäm en bas för $\\operatorname{null}(A)$ då\n$$A=\\begin{bmatrix}1&2&-2&3&4\\\\2&4&-3&6&11\\\\1&2&-2&5&8\\\\1&2&-1&3&7\\end{bmatrix}.$$\nBestäm också $a$ så att $(0,2,a,2,-1)^T$ ligger i $\\operatorname{null}(A)$.",
   "losning": "Lös $A\\mathbf x=\\mathbf 0$:\n$$\\begin{bmatrix}1&2&-2&3&4\\\\2&4&-3&6&11\\\\1&2&-2&5&8\\\\1&2&-1&3&7\\end{bmatrix}\\sim\\begin{bmatrix}1&2&-2&3&4\\\\0&0&1&0&3\\\\0&0&0&2&4\\\\0&0&1&0&3\\end{bmatrix}\\sim\\begin{bmatrix}1&2&-2&3&4\\\\0&0&1&0&3\\\\0&0&0&2&4\\\\0&0&0&0&0\\end{bmatrix}.$$\n$x_2=s$ och $x_5=t$ fria; $x_4=-2t$, $x_3=-3t$, $x_1=-2s+2(-3t)-3(-2t)-4t=-2s-4t$:\n$$\\mathbf x=\\begin{bmatrix}-2s-4t\\\\s\\\\-3t\\\\-2t\\\\t\\end{bmatrix}=s\\begin{bmatrix}-2\\\\1\\\\0\\\\0\\\\0\\end{bmatrix}+t\\begin{bmatrix}-4\\\\0\\\\-3\\\\-2\\\\1\\end{bmatrix}.$$\nFör att kolla om en vektor ligger i nollrummet: multiplicera med matrisen och se om det blir nollvektorn.\n$$A\\begin{bmatrix}0\\\\2\\\\a\\\\2\\\\-1\\end{bmatrix}=\\begin{bmatrix}6-2a\\\\9-3a\\\\6-2a\\\\3-a\\end{bmatrix},$$\nsom är nollvektorn omm $a=3$.\n\n**Svar:** Bas för $\\operatorname{null}(A)$: $\\{(-2,1,0,0,0)^T,\\ (-4,0,-3,-2,1)^T\\}$; $a=3$."
  },
  "xT3-5": {
   "id": "xT3-5",
   "tenta": "xT3",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Egenvärden",
    "diagonalisering"
   ],
   "typ": "diagonalisering",
   "avsnitt": [
    "5.1",
    "5.2"
   ],
   "uppgift": "Diagonalisera följande matris (om det går),\n$$\\begin{bmatrix}4&6&3\\\\-12&-14&-6\\\\18&18&7\\end{bmatrix}.$$",
   "losning": "Kalla matrisen $A$ och lös $\\det(\\lambda I-A)=0$:\n$$\\det(\\lambda I-A)=\\begin{vmatrix}\\lambda-4&-6&-3\\\\12&\\lambda+14&6\\\\-18&-18&\\lambda-7\\end{vmatrix}=\\begin{vmatrix}\\lambda-4&-\\lambda-2&-3\\\\12&\\lambda+2&6\\\\-18&0&\\lambda-7\\end{vmatrix}=(\\lambda+2)\\begin{vmatrix}\\lambda-4&-1&-3\\\\12&1&6\\\\-18&0&\\lambda-7\\end{vmatrix}$$\n$$=(\\lambda+2)\\left(-(-1)\\begin{vmatrix}12&6\\\\-18&\\lambda-7\\end{vmatrix}+1\\begin{vmatrix}\\lambda-4&-3\\\\-18&\\lambda-7\\end{vmatrix}+0\\right)=(\\lambda+2)(\\lambda^2+\\lambda-2).$$\n(Första kolonnen drogs bort från den andra, vilket inte påverkar determinanten; sedan bröts $\\lambda+2$ ut och man utvecklade efter andra kolonnen.) Rötterna till andragradspolynomet är $-2$ och $1$, så egenvärdena är $-2$ (multiplicitet 2) och $1$. [Koll: $-2-2+1=-3=\\operatorname{tr}A=4-14+7$; $(-2)(-2)1=4=\\det A$, ok.]\n\n$\\lambda=-2$: $(2I+A)\\mathbf v=\\mathbf 0$:\n$$\\left[\\begin{array}{ccc|c}-6&-6&-3&0\\\\12&12&6&0\\\\-18&-18&-9&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}2&2&1&0\\\\0&0&0&0\\\\0&0&0&0\\end{array}\\right].$$\nTvå fria variabler, så det går att diagonalisera. $\\mathbf v=s\\begin{bmatrix}-1\\\\1\\\\0\\end{bmatrix}+t\\begin{bmatrix}-1/2\\\\0\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}-1\\\\1\\\\0\\end{bmatrix}$ och $\\begin{bmatrix}-1\\\\0\\\\2\\end{bmatrix}$.\n\n$\\lambda=1$: $(I-A)\\mathbf v=\\mathbf 0$:\n$$\\left[\\begin{array}{ccc|c}-3&-6&-3&0\\\\12&15&6&0\\\\-18&-18&-6&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&2&1&0\\\\0&-3&-2&0\\\\0&3&2&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&2&1&0\\\\0&3&2&0\\\\0&0&0&0\\end{array}\\right].$$\n$\\mathbf v=t\\begin{bmatrix}1/3\\\\-2/3\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}1\\\\-2\\\\3\\end{bmatrix}$.\n\n**Svar:** $A=PDP^{-1}$ med $P=\\begin{bmatrix}-1&-1&1\\\\1&0&-2\\\\0&2&3\\end{bmatrix}$, $D=\\begin{bmatrix}-2&0&0\\\\0&-2&0\\\\0&0&1\\end{bmatrix}$."
  },
  "xT3-6": {
   "id": "xT3-6",
   "tenta": "xT3",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Inre produkt",
    "Gram–Schmidt"
   ],
   "typ": "gram-schmidt",
   "avsnitt": [
    "6.1",
    "6.3"
   ],
   "uppgift": "Definiera $\\langle\\mathbf x,\\mathbf y\\rangle=A\\mathbf x\\bullet A\\mathbf y$ på $\\mathbb R^3$ med\n$$A=\\begin{bmatrix}1&1&0\\\\0&1&0\\\\0&0&2\\end{bmatrix}.$$\nBestäm en ortogonal bas för $\\mathbb R^3$ genom att använda Gram–Schmidt.",
   "losning": "Skalärprodukten betyder\n$$\\left\\langle\\begin{bmatrix}x_1\\\\x_2\\\\x_3\\end{bmatrix},\\begin{bmatrix}y_1\\\\y_2\\\\y_3\\end{bmatrix}\\right\\rangle=(x_1+x_2)(y_1+y_2)+x_2y_2+4x_3y_3=x_1y_1+2x_2y_2+4x_3y_3+x_1y_2+x_2y_1.$$\nBörja med en bas, t.ex. standardbasen, och ortogonalisera. $\\mathbf v_1=(1,0,0)^T$,\n$$\\mathbf v_2=\\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix}-\\frac{\\langle\\mathbf e_2,\\mathbf e_1\\rangle}{\\langle\\mathbf e_1,\\mathbf e_1\\rangle}\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}=\\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix}-\\frac11\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}=\\begin{bmatrix}-1\\\\1\\\\0\\end{bmatrix},$$\n$$\\mathbf v_3=\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}-\\frac{\\langle\\mathbf e_3,\\mathbf v_1\\rangle}{\\langle\\mathbf v_1,\\mathbf v_1\\rangle}\\mathbf v_1-\\frac{\\langle\\mathbf e_3,\\mathbf v_2\\rangle}{\\langle\\mathbf v_2,\\mathbf v_2\\rangle}\\mathbf v_2=\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}.$$\n**Svar:** En ortogonal bas är $\\left\\{(1,0,0)^T,\\ (-1,1,0)^T,\\ (0,0,1)^T\\right\\}$."
  },
  "xT3-7": {
   "id": "xT3-7",
   "tenta": "xT3",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Bevis",
    "rang",
    "kolonnrum"
   ],
   "typ": "bevis",
   "avsnitt": [
    "4.8",
    "4.9"
   ],
   "uppgift": "Bevisa $\\operatorname{rank}(AB)\\le\\min(\\operatorname{rank}(A),\\operatorname{rank}(B))$.\nLedning: Visa först $\\operatorname{rank}(AB)\\le\\operatorname{rank}(A)$ genom att bevisa att $\\operatorname{col}(AB)$ är ett underrum till $\\operatorname{col}(A)$. Därefter visas $\\operatorname{rank}(AB)\\le\\operatorname{rank}(B)$ genom …",
   "losning": "Rangen är per definition dimensionen av kolonnrummet, $\\operatorname{col}(A)=\\{\\mathbf y:\\mathbf y=A\\mathbf x\\text{ något }\\mathbf x\\}$. Då är $\\operatorname{col}(AB)$ ett underrum till $\\operatorname{col}(A)$, ty $\\operatorname{col}(AB)\\ni\\mathbf y=(AB)\\mathbf x=A(B\\mathbf x)\\in\\operatorname{col}(A)$. Alltså $\\operatorname{rank}(AB)\\le\\operatorname{rank}(A)$, eftersom ett underrums dimension aldrig är större än rummets. Enligt teorin har kolonnrum och radrum samma dimension, så $\\operatorname{rank}A=\\operatorname{rank}A^T$. Det följer\n$$\\operatorname{rank}(AB)=\\operatorname{rank}((AB)^T)=\\operatorname{rank}(B^TA^T)\\le\\operatorname{rank}(B^T)=\\operatorname{rank}(B).$$\nDen andra likheten är en transponatlag och olikheten följer av resonemanget ovan. Slutsatsen följer."
  },
  "xT3-8": {
   "id": "xT3-8",
   "tenta": "xT3",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Egenvärden",
    "definitioner",
    "bevis"
   ],
   "typ": "bevis",
   "avsnitt": [
    "5.1"
   ],
   "uppgift": "Låt $A$ vara en kvadratisk matris. Definiera begreppen egenvärden och egenvektorer för $A$. Givet att $\\lambda$, $\\mathbf v$ är ett egenvärde/egenvektors-par för $A$, vad kan sägas om egenvärden och egenvektorer för $A^2-I$? Märk att påståenden måste visas.",
   "losning": "En vektor $\\mathbf v$ är en egenvektor för $A$ med tillhörande egenvärde $\\lambda$ om $\\mathbf v\\neq\\mathbf 0$ och $A\\mathbf v=\\lambda\\mathbf v$. Multiplicera $A\\mathbf v=\\lambda\\mathbf v$ med $A$:\n$$A^2\\mathbf v=A(\\lambda\\mathbf v)=\\lambda A\\mathbf v=\\lambda^2\\mathbf v,$$\nså $\\lambda^2$ är ett egenvärde för $A^2$ med egenvektorn $\\mathbf v$. Och\n$$(A^2-I)\\mathbf v=A^2\\mathbf v-I\\mathbf v=(\\lambda^2-1)\\mathbf v.$$\n**Svar:** $\\mathbf v$ är en egenvektor för $A^2-I$ med egenvärde $\\lambda^2-1$. (Generaliseras till godtyckliga polynom.)"
  },
  "xT3-9": {
   "id": "xT3-9",
   "tenta": "xT3",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Inre produktrum",
    "bästa approximation",
    "Gram–Schmidt"
   ],
   "typ": "inre-produktrum",
   "avsnitt": [
    "6.1",
    "6.3",
    "6.4",
    "6.6"
   ],
   "uppgift": "Utrusta $\\mathbb P_3$ med skalärprodukten $\\langle p(x),q(x)\\rangle=\\int_0^1p(x)q(x)\\,dx$. Bestäm den bästa, i normen denna skalärprodukt ger, approximationen för $x^3$ med polynom av gradtal maximalt ett.",
   "losning": "Uppgiften är att bestämma $\\operatorname{proj}_{\\mathbb P_1}x^3$. För projektionsformeln behövs en ortogonal bas för $\\mathbb P_1$. En bas är $\\{1,x\\}$; ortogonalisera med Gram–Schmidt. $q_1(x)=1$, $W_1=\\operatorname{span}\\{q_1\\}$,\n$$q_2(x)=x-\\operatorname{proj}_{W_1}(x)=x-\\frac{\\langle x,1\\rangle}{\\langle1,1\\rangle}1=x-\\frac{1/2}{1}=x-\\frac12.$$\nVälj $\\tilde q=2q_2=2x-1$ (för att slippa bråktal). Ortogonal bas: $\\{1,2x-1\\}$.\n$$\\operatorname{proj}_{\\mathbb P_1}x^3=\\frac{\\langle x^3,1\\rangle}{\\langle1,1\\rangle}1+\\frac{\\langle x^3,2x-1\\rangle}{\\langle2x-1,2x-1\\rangle}(2x-1)=\\frac{1/4}{1}+\\frac{3/20}{1/3}(2x-1)=\\frac14+\\frac9{20}(2x-1)=\\frac{9}{10}x-\\frac15.$$\n[Figur: $x^3$ och linjen $\\frac9{10}x-\\frac15$ på $[0,1]$.]\n\n*Transkriberarens not: originalskissen skriver $\\frac{3}{10}x-\\frac15$ på sista raden, men räkningen ($\\frac{9}{20}\\cdot2=\\frac9{10}$) och figuren ger $\\frac9{10}x-\\frac15$.*\n\n**Svar:** $\\frac{9}{10}x-\\frac15$."
  },
  "xT2-1": {
   "id": "xT2-1",
   "tenta": "xT2",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära ekvationssystem",
    "lösbarhet"
   ],
   "typ": "gausselimination",
   "avsnitt": [
    "1.1",
    "1.2",
    "1.6"
   ],
   "uppgift": "Låt $A=\\begin{bmatrix}2&-1&3\\\\-2&2&-2\\\\3&-1&5\\end{bmatrix}$. Bestäm samtliga $\\mathbf b$ sådana att $A\\mathbf x=\\mathbf b$ har lösningar.",
   "losning": "Låt $\\mathbf b=\\begin{bmatrix}b_1\\\\b_2\\\\b_3\\end{bmatrix}$ och gausseliminera:\n$$\\left[\\begin{array}{ccc|c}2&-1&3&b_1\\\\-2&2&-2&b_2\\\\3&-1&5&b_3\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}6&-3&9&3b_1\\\\-6&6&-6&3b_2\\\\6&-2&10&2b_3\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}6&-3&9&3b_1\\\\0&3&3&3b_2+3b_1\\\\0&1&1&2b_3-3b_1\\end{array}\\right]$$\n$$\\sim\\left[\\begin{array}{ccc|c}6&-3&9&3b_1\\\\0&1&1&2b_3-3b_1\\\\0&0&0&3b_2+3b_1-3(2b_3-3b_1)\\end{array}\\right].$$\nLösningar finns om och endast om elementet längst ner till höger är noll.\n\n**Svar:** $A\\mathbf x=\\mathbf b$ är lösbart omm $4b_1+b_2-2b_3=0$."
  },
  "xT2-2": {
   "id": "xT2-2",
   "tenta": "xT2",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära avbildningar",
    "spegling och rotation"
   ],
   "typ": "linjar-avbildning",
   "avsnitt": [
    "1.8",
    "1.9"
   ],
   "uppgift": "Bestäm matrisen för den linjära avbildning $T_A:\\mathbb R^2\\to\\mathbb R^2$ som först speglar i linjen $x+y=0$ och därefter roterar $\\pi/6$ radianer moturs. Vad avbildas $(1,1)$ på?",
   "losning": "Speglingsmatrisen $S$ först. Ritar man en figur ser man att $\\mathbf e_1$ avbildas på $-\\mathbf e_2$ och $\\mathbf e_2$ på $-\\mathbf e_1$, så $S=\\begin{bmatrix}0&-1\\\\-1&0\\end{bmatrix}$. Rotationsmatrisen med vinkeln $\\pi/6$: $R=\\begin{bmatrix}\\sqrt3/2&-1/2\\\\1/2&\\sqrt3/2\\end{bmatrix}$. Det följer att\n$$A=RS=\\begin{bmatrix}\\sqrt3/2&-1/2\\\\1/2&\\sqrt3/2\\end{bmatrix}\\begin{bmatrix}0&-1\\\\-1&0\\end{bmatrix}=\\begin{bmatrix}1/2&-\\sqrt3/2\\\\-\\sqrt3/2&-1/2\\end{bmatrix}$$\noch\n$$T_A(1,1)=A\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\begin{bmatrix}\\frac{1-\\sqrt3}{2}\\\\\\frac{-1-\\sqrt3}{2}\\end{bmatrix}.$$\n**Svar:** $A=\\begin{bmatrix}1/2&-\\sqrt3/2\\\\-\\sqrt3/2&-1/2\\end{bmatrix}$; $(1,1)$ avbildas på $\\left(\\frac{1-\\sqrt3}{2},\\frac{-1-\\sqrt3}{2}\\right)$."
  },
  "xT2-3": {
   "id": "xT2-3",
   "tenta": "xT2",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linje–plan-skärning",
    "area",
    "kryssprodukt"
   ],
   "typ": "plan-avstand",
   "avsnitt": [
    "3.4",
    "3.5"
   ],
   "uppgift": "I vilken punkt skär linjen $\\mathbf x=(5,-2,3)+t(4,-1,4)$ planet $3x+y-2z=4$? Bestäm arean av triangeln med hörn i skärningspunkten, $(1,1,1)$ och $(-1,2,1)$.",
   "losning": "Sätt in linjen i planets ekvation:\n$$3(5+4t)+(-2-t)-2(3+4t)=4,$$\ndvs $7+3t=4$, $t=-1$. Skärningspunkten är $(1,-1,-1)$. Kalla punkterna $S$, $A$, $B$: $\\mathbf u=\\overrightarrow{SA}=(0,2,2)$, $\\mathbf v=\\overrightarrow{SB}=(-2,3,2)$.\n$$\\text{Area}=\\tfrac12\\|\\mathbf u\\times\\mathbf v\\|=\\tfrac12\\|(-2,-4,4)\\|=\\tfrac12\\sqrt{4+16+16}=3.$$\n**Svar:** Skärningspunkten $(1,-1,-1)$; arean är $3$."
  },
  "xT2-4": {
   "id": "xT2-4",
   "tenta": "xT2",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Bas",
    "kolonnrum",
    "linjärt hölje"
   ],
   "typ": "nollrum-kolonnrum",
   "avsnitt": [
    "4.3",
    "4.5",
    "4.8"
   ],
   "uppgift": "Bestäm en bas för\n$$\\operatorname{span}\\{(1,0,-1,1),(1,-2,3,-4),(-1,-2,5,-6),(1,-4,7,-9)\\}.$$",
   "losning": "Skriv vektorerna som kolonner i en matris $A$; uppgiften är att finna en bas för kolonnrummet.\n$$A=\\begin{bmatrix}1&1&-1&1\\\\0&-2&-2&-4\\\\-1&3&5&7\\\\1&-4&-6&-9\\end{bmatrix}\\sim\\begin{bmatrix}1&1&-1&1\\\\0&-2&-2&-4\\\\0&4&4&8\\\\0&-5&-5&-10\\end{bmatrix}\\sim\\begin{bmatrix}1&1&-1&1\\\\0&1&1&2\\\\0&1&1&2\\\\0&1&1&2\\end{bmatrix}\\sim\\begin{bmatrix}1&1&-1&1\\\\0&1&1&2\\\\0&0&0&0\\\\0&0&0&0\\end{bmatrix}.$$\nFörsta och andra kolonnen är pivotkolonner.\n\n**Svar:** $\\{(1,0,-1,1),(1,-2,3,-4)\\}$ är en bas för det linjära höljet."
  },
  "xT2-5": {
   "id": "xT2-5",
   "tenta": "xT2",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Differentialekvationssystem",
    "diagonalisering"
   ],
   "typ": "diffekv-system",
   "avsnitt": [
    "5.2",
    "5.4"
   ],
   "uppgift": "Bestäm lösningen till $y'=y-2z$, $z'=-y$ med $y(0)=1$ och $z(0)=-1$.",
   "losning": "På matrisform\n$$\\begin{bmatrix}y'\\\\z'\\end{bmatrix}=\\begin{bmatrix}1&-2\\\\-1&0\\end{bmatrix}\\begin{bmatrix}y\\\\z\\end{bmatrix},\\quad\\begin{bmatrix}y(0)\\\\z(0)\\end{bmatrix}=\\begin{bmatrix}1\\\\-1\\end{bmatrix}.$$\nKalla matrisen $A$; den diagonaliseras för att få variabelbytet. Karakteristiska ekvationen:\n$$0=\\det(\\lambda I-A)=\\begin{vmatrix}\\lambda-1&2\\\\1&\\lambda\\end{vmatrix}=\\lambda^2-\\lambda-2.$$\nRötterna är $2$ och $-1$. [Koll: $2+(-1)=1=\\operatorname{tr}A$; $2(-1)=-2=\\det A$, ok.]\n\n$\\lambda=2$: $(2I-A)\\mathbf v=\\mathbf 0$: $\\left[\\begin{array}{cc|c}1&2&0\\\\1&2&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}1&2&0\\\\0&0&0\\end{array}\\right]$, så $\\mathbf v=t\\begin{bmatrix}-2\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}-2\\\\1\\end{bmatrix}$.\n\n$\\lambda=-1$: $(-I-A)\\mathbf v=\\mathbf 0$: $\\left[\\begin{array}{cc|c}-2&2&0\\\\1&-1&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}-1&1&0\\\\0&0&0\\end{array}\\right]$, så $\\mathbf v=t\\begin{bmatrix}1\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}1\\\\1\\end{bmatrix}$.\n\nDetta ger $A=PDP^{-1}$ med $P=\\begin{bmatrix}-2&1\\\\1&1\\end{bmatrix}$, $D=\\begin{bmatrix}2&0\\\\0&-1\\end{bmatrix}$, dvs $D=P^{-1}AP$. Låt $\\mathbf u=\\begin{bmatrix}y\\\\z\\end{bmatrix}=P\\mathbf v$. Då är $\\mathbf u'=P\\mathbf v'$ och därför $P\\mathbf v'=AP\\mathbf v$. Multiplicera från vänster med $P^{-1}$: $\\mathbf v'=D\\mathbf v$, på komponentform med $\\mathbf v=\\begin{bmatrix}v_1\\\\v_2\\end{bmatrix}$:\n$$v_1'=2v_1,\\qquad v_2'=-v_2.$$\nLösningarna är $v_1=Ae^{2x}$, $v_2=Be^{-x}$, och\n$$\\begin{bmatrix}y\\\\z\\end{bmatrix}=P\\mathbf v=\\begin{bmatrix}-2&1\\\\1&1\\end{bmatrix}\\begin{bmatrix}Ae^{2x}\\\\Be^{-x}\\end{bmatrix}=\\begin{bmatrix}-2Ae^{2x}+Be^{-x}\\\\Ae^{2x}+Be^{-x}\\end{bmatrix}.$$\nBegynnelsevillkoren ger $-2A+B=1$, $A+B=-1$, så $A=-2/3$, $B=-1/3$.\n\n**Svar:** $y=\\frac43e^{2x}-\\frac13e^{-x}$, $z=-\\frac23e^{2x}-\\frac13e^{-x}$."
  },
  "xT2-6": {
   "id": "xT2-6",
   "tenta": "xT2",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Inre produktrum",
    "avstånd",
    "Gram–Schmidt"
   ],
   "typ": "inre-produktrum",
   "avsnitt": [
    "6.1",
    "6.3"
   ],
   "uppgift": "Låt $\\mathbb P_2$ vara vektorrummet av polynom med gradtal maximalt två och utrusta det med skalärprodukten\n$$\\langle p,q\\rangle=\\int_0^1p(x)q(x)\\,dx.$$\nBestäm avståndet mellan $1+x$ och $1+x^2$, $d(1+x,1+x^2)$. Bestäm också en ortogonal bas för $\\operatorname{span}\\{x,1+x^2\\}$.",
   "losning": "Skriv upp kvadraten av avståndet för att slippa rottecknet:\n$$d(1+x,1+x^2)^2=\\|x-x^2\\|^2=\\langle x-x^2,x-x^2\\rangle=\\int_0^1(x^2-2x^3+x^4)\\,dx=\\frac13-\\frac24+\\frac15=\\frac1{30}.$$\nAvståndet är alltså $1/\\sqrt{30}$.\n\nOrtogonal bas: en bas är $\\{x,1+x^2\\}$ (spänner upp per definition, linjärt oberoende är klart). Gram–Schmidt: $q_1(x)=x$, $W_1=\\operatorname{span}\\{q_1\\}$,\n$$q_2(x)=1+x^2-\\frac{\\langle x,1+x^2\\rangle}{\\langle x,x\\rangle}x.$$\nMed $\\langle x,1+x^2\\rangle=3/4$ och $\\langle x,x\\rangle=1/3$:\n$$q_2(x)=1+x^2-\\frac{3/4}{1/3}x=1+x^2-\\frac94x.$$\nMultiplicera med 4 för snyggare siffror: $\\tilde q_2=4-9x+4x^2$.\n\n**Svar:** $d=1/\\sqrt{30}$; en ortogonal bas är $\\{x,\\ 4-9x+4x^2\\}$."
  },
  "xT2-7": {
   "id": "xT2-7",
   "tenta": "xT2",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Determinanter",
    "räknelagar"
   ],
   "typ": "determinantlagar",
   "avsnitt": [
    "2.2",
    "2.3"
   ],
   "uppgift": "Låt $\\mathbf a_1$ och $\\mathbf a_2$ vara två vektorer i $\\mathbb R^2$ skrivna som $2\\times1$ matriser. Låt $A=[\\mathbf a_1\\ \\mathbf a_2]$ och antag att $\\det A=-3$. Bestäm $\\det([\\mathbf b_1\\ \\mathbf b_2])$ då $\\mathbf b_1=-\\mathbf a_1+3\\mathbf a_2$ och $\\mathbf b_2=2\\mathbf a_1+\\mathbf a_2$. Lös också $A\\mathbf x=\\mathbf b_1-\\mathbf b_2$.",
   "losning": "Med räknelagarna för determinanten:\n$$\\begin{aligned}\\det([\\mathbf b_1\\ \\mathbf b_2])&=\\det([-\\mathbf a_1+3\\mathbf a_2,\\ 2\\mathbf a_1+\\mathbf a_2])\\\\&=-\\det([\\mathbf a_1,\\ 2\\mathbf a_1+\\mathbf a_2])+3\\det([\\mathbf a_2,\\ 2\\mathbf a_1+\\mathbf a_2])\\\\&=-\\det([\\mathbf a_1,\\mathbf a_2])+3\\cdot2\\det([\\mathbf a_2,\\mathbf a_1])\\\\&=-\\det([\\mathbf a_1,\\mathbf a_2])-3\\cdot2\\det([\\mathbf a_1,\\mathbf a_2])=21.\\end{aligned}$$\n$A\\mathbf x=\\mathbf b_1-\\mathbf b_2$ med $\\mathbf x=\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}$ betyder\n$$x_1\\mathbf a_1+x_2\\mathbf a_2=\\mathbf b_1-\\mathbf b_2=-\\mathbf a_1+3\\mathbf a_2-(2\\mathbf a_1+\\mathbf a_2)=-3\\mathbf a_1+2\\mathbf a_2.$$\nSå $x_1=-3$, $x_2=2$. Att detta är den enda lösningen följer av att $\\det A\\neq0$.\n\n**Svar:** $\\det([\\mathbf b_1\\ \\mathbf b_2])=21$; $\\mathbf x=\\begin{bmatrix}-3\\\\2\\end{bmatrix}$."
  },
  "xT2-8": {
   "id": "xT2-8",
   "tenta": "xT2",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Egenvärden",
    "ortogonal projektion",
    "geometrisk tolkning"
   ],
   "typ": "diagonalisering",
   "avsnitt": [
    "3.3",
    "5.1"
   ],
   "uppgift": "Låt $A$ vara matrisen för den linjära avbildningen som ortogonalt projicerar vektorer i ett plan $\\Pi$. För $A$ är både\n$$\\begin{bmatrix}1\\\\1\\\\-1\\end{bmatrix}\\ \\text{och}\\ \\begin{bmatrix}2\\\\-1\\\\0\\end{bmatrix}$$\negenvektorer med tillhörande egenvärde $\\lambda=1$. Bestäm planet $\\Pi$. Bestäm övriga egenvärden och egenvektorer.\nLedning: Matrisen $A$ behöver inte bestämmas.",
   "losning": "Planet måste gå genom origo, annars är det inte en linjär avbildning. Att $\\mathbf v$ är en egenvektor med egenvärde 1 betyder $A\\mathbf v=\\mathbf v$, så en sådan vektor måste ligga i planet (den projiceras på sig själv). Så $(1,1,-1)$ och $(2,-1,0)$ ligger båda i planet, och en normal fås med kryssprodukten (de är inte parallella):\n$$(1,1,-1)\\times(2,-1,0)=(-1,-2,-3).$$\nPlanet: $x+2y+3z=0$.\n\nTredje egenvärdet: eftersom det är en projektion är det $0$; vektorer i normalens riktning avbildas på nollan. Tredje paret: $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$, $\\lambda=0$.\n\n(Ej krävt:) Matrisen fås via diagonaliseringen:\n$$A=\\begin{bmatrix}1&2&1\\\\1&-1&2\\\\-1&0&3\\end{bmatrix}\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{bmatrix}\\begin{bmatrix}1&2&1\\\\1&-1&2\\\\-1&0&3\\end{bmatrix}^{-1}=\\frac1{14}\\begin{bmatrix}13&-2&-3\\\\-2&10&-6\\\\-3&-6&5\\end{bmatrix}.$$\n**Svar:** $\\Pi: x+2y+3z=0$; övrigt egenvärde $\\lambda=0$ med egenvektorer $t(1,2,3)$, $t\\neq0$."
  },
  "xT2-9": {
   "id": "xT2-9",
   "tenta": "xT2",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Underrum",
    "bas",
    "matrisrum"
   ],
   "typ": "underrum",
   "avsnitt": [
    "4.1",
    "4.2",
    "4.5"
   ],
   "uppgift": "Låt $M_{2\\times2}$ vara vektorrummet av samtliga $2\\times2$ matriser. Visa att\n$$H=\\{A\\in M_{2\\times2}: AB=BA\\},\\quad\\text{där } B=\\begin{bmatrix}1&2\\\\-1&1\\end{bmatrix},$$\när ett underrum till $M_{2\\times2}$. Bestäm också en bas för $H$.",
   "losning": "Allt kommuterar med nollmatrisen, så den ligger i $H$. Antag att $C$ och $D$ ligger i $H$, dvs $CB=BC$ och $DB=BD$. Då\n$$(C+D)B=CB+DB=BC+BD=B(C+D),$$\nså $C+D\\in H$. Även $\\alpha C\\in H$ om $C\\in H$, ty\n$$(\\alpha C)B=\\alpha(CB)=\\alpha(BC)=B(\\alpha C).$$\nBas: låt $A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\in H$:\n$$AB=BA\\iff\\begin{bmatrix}a-b&2a+b\\\\c-d&2c+d\\end{bmatrix}=\\begin{bmatrix}a+2c&b+2d\\\\-a+c&-b+d\\end{bmatrix}.$$\nEkvationssystemet\n$$\\begin{cases}a-b=a+2c\\\\2a+b=b+2d\\\\c-d=-a+c\\\\2c+d=-b+d\\end{cases}$$\npå matrisform:\n$$\\left[\\begin{array}{cccc|c}0&-1&-2&0&0\\\\2&0&0&-2&0\\\\1&0&0&-1&0\\\\0&1&2&0&0\\end{array}\\right]\\sim\\left[\\begin{array}{cccc|c}1&0&0&-1&0\\\\0&1&2&0&0\\\\0&0&0&0&0\\\\0&0&0&0&0\\end{array}\\right].$$\nTvå pivoter, två fria. Sätt $c=s$, $d=t$; då $b=-2s$, $a=t$:\n$$\\begin{bmatrix}t&-2s\\\\s&t\\end{bmatrix}=s\\begin{bmatrix}0&-2\\\\1&0\\end{bmatrix}+t\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}.$$\n**Svar:** En bas för $H$ är $\\left\\{\\begin{bmatrix}0&-2\\\\1&0\\end{bmatrix},\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\right\\}$."
  },
  "xT1-1": {
   "id": "xT1-1",
   "tenta": "xT1",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Matrisekvationer",
    "invers"
   ],
   "typ": "matrisekvation",
   "avsnitt": [
    "1.3",
    "1.4",
    "1.5"
   ],
   "uppgift": "Låt $A=\\begin{bmatrix}1&2&-1\\\\1&-2&0\\end{bmatrix}$, $B=\\begin{bmatrix}1&-1\\\\-1&1\\end{bmatrix}$. Bestäm matrisen $X$ så att\n$$XB = XAA^T + B^TB.$$",
   "losning": "Lös ut $X$ och man får\n$$XB = XAA^T + B^TB \\iff X(B-AA^T) = B^TB \\iff X = B^TB(B-AA^T)^{-1}.$$\nBeräkna faktorerna:\n$$(B-AA^T)^{-1} = \\left(\\begin{bmatrix}1&-1\\\\-1&1\\end{bmatrix} - \\begin{bmatrix}1&2&-1\\\\1&-2&0\\end{bmatrix}\\begin{bmatrix}1&1\\\\2&-2\\\\-1&0\\end{bmatrix}\\right)^{-1} = \\left(\\begin{bmatrix}1&-1\\\\-1&1\\end{bmatrix}-\\begin{bmatrix}6&-3\\\\-3&5\\end{bmatrix}\\right)^{-1} = \\begin{bmatrix}-5&2\\\\2&-4\\end{bmatrix}^{-1} = \\frac{1}{16}\\begin{bmatrix}-4&-2\\\\-2&-5\\end{bmatrix}.$$\nDetta ger\n$$X = \\begin{bmatrix}1&-1\\\\-1&1\\end{bmatrix}^T\\begin{bmatrix}1&-1\\\\-1&1\\end{bmatrix}\\frac{1}{16}\\begin{bmatrix}-4&-2\\\\-2&-5\\end{bmatrix} = \\frac{1}{16}\\begin{bmatrix}2&-2\\\\-2&2\\end{bmatrix}\\begin{bmatrix}-4&-2\\\\-2&-5\\end{bmatrix} = \\frac18\\begin{bmatrix}-2&3\\\\2&-3\\end{bmatrix}.$$\n**Svar:** $X=\\frac18\\begin{bmatrix}-2&3\\\\2&-3\\end{bmatrix}$."
  },
  "xT1-2": {
   "id": "xT1-2",
   "tenta": "xT1",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära avbildningar"
   ],
   "typ": "linjar-avbildning",
   "avsnitt": [
    "1.8"
   ],
   "uppgift": "Den linjära avbildningen $T:\\mathbb{R}^3\\to\\mathbb{R}^3$ avbildar $(1,0,1)$ på $(2,3,-1)$, $(0,1,2)$ på $(4,0,-1)$ och $(-1,2,-1)$ på $(1,2,3)$. Vad avbildas $(2,2,1)$ på? Vad avbildas på $(7,-1,2)$?",
   "losning": "Första frågan: skriv $(2,2,1)$ som en linjärkombination av $(1,0,1)$, $(0,1,2)$ och $(-1,2,-1)$, dvs bestäm $c_j$ så att\n$$c_1(1,0,1)+c_2(0,1,2)+c_3(-1,2,-1)=(2,2,1).$$\nGausseliminera den utökade koefficientmatrisen:\n$$\\left[\\begin{array}{ccc|c}1&0&-1&2\\\\0&1&2&2\\\\1&2&-1&1\\end{array}\\right]\\sim\\dots\\sim\\left[\\begin{array}{ccc|c}1&0&-1&2\\\\0&1&2&2\\\\0&0&-4&-5\\end{array}\\right]$$\nmed lösningen $c_3=5/4$, $c_2=-1/2$, $c_1=13/4$. Det följer att\n$$T(2,2,1) = \\tfrac{13}{4}(2,3,-1) - \\tfrac12(4,0,-1) + \\tfrac54(1,2,3) = (23/4,\\,49/4,\\,1).$$\nAndra frågan: skriv $(7,-1,2)$ som linjärkombination av bilderna $(2,3,-1)$, $(4,0,-1)$, $(1,2,3)$:\n$$\\left[\\begin{array}{ccc|c}2&4&1&7\\\\3&0&2&-1\\\\-1&-1&3&2\\end{array}\\right]\\sim\\dots\\sim\\left[\\begin{array}{ccc|c}-1&-1&3&2\\\\0&-6&22&10\\\\0&0&1&1\\end{array}\\right]$$\nger $c_3=1$, $c_2=2$, $c_1=-1$. Vektorn som avbildas på $(7,-1,2)$ är alltså\n$$-1(1,0,1)+2(0,1,2)+1(-1,2,-1)=(-2,4,2).$$\nAlternativt: med $X=\\begin{bmatrix}1&0&-1\\\\0&1&2\\\\1&2&-1\\end{bmatrix}$, $Y=\\begin{bmatrix}2&4&1\\\\3&0&2\\\\-1&-1&3\\end{bmatrix}$ är standardmatrisen för $T$ lika med $YX^{-1}$, och $YX^{-1}(2,2,1)^T=(23/4,49/4,1)^T$, $(YX^{-1})^{-1}(7,-1,2)^T = XY^{-1}(7,-1,2)^T=(-2,4,2)^T$.\n\n**Svar:** $T(2,2,1)=(23/4,\\,49/4,\\,1)$; $(-2,4,2)$ avbildas på $(7,-1,2)$."
  },
  "xT1-3": {
   "id": "xT1-3",
   "tenta": "xT1",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Plan och avstånd"
   ],
   "typ": "plan-avstand",
   "avsnitt": [
    "3.3",
    "3.4"
   ],
   "uppgift": "Låt $A$, $B$, $C$ och $D$ vara punkterna $(1,0,1)$, $(2,1,0)$, $(0,-2,1)$ respektive $(-3,1,1)$. Bestäm en ekvation för planet som innehåller punkterna $A$, $B$ och $C$. Bestäm också avståndet mellan planet och punkten $D$.",
   "losning": "Låt $\\mathbf u=\\overrightarrow{AB}$ och $\\mathbf v=\\overrightarrow{AC}$; de ligger i planet, så $\\mathbf u\\times\\mathbf v$ är en normal:\n$$\\mathbf n=\\mathbf u\\times\\mathbf v=(1,1,-1)\\times(-1,-2,0)=(-2,1,-1).$$\nPlan med denna normal genom $A$: $-2(x-1)+1(y-0)-1(z-1)=0$, dvs\n$$2x-y+z=3.$$\n[Koll: $A$: $2-0+1=3$; $B$: $4-1-0=3$; $C$: $0+2+1=3$, ok.]\n\nAvståndet: låt $\\mathbf w=\\overrightarrow{AD}=(-4,1,0)$. Längden av projektionen på normalen är avståndet:\n$$\\mathbf p=\\operatorname{proj}_{\\mathbf n}\\mathbf w=\\frac{(-4,1,0)\\bullet(-2,1,-1)}{(-2,1,-1)\\bullet(-2,1,-1)}(-2,1,-1)=\\frac96(-2,1,-1),$$\n$$\\text{Avstånd}=\\|\\mathbf p\\|=\\tfrac32\\sqrt{4+1+1}=\\tfrac32\\sqrt6.$$\nAlternativ metod: linjen genom $D$ i normalens riktning, $(-3,1,1)+t(-2,1,-1)$, insatt i planets ekvation ger $2(-3-2t)-(1+t)+(1-t)=3$, så $t=-3/2$. Skärningspunkten blir $(0,-1/2,5/2)$ och avståndet till $(-3,1,1)$ är längden av $(3,-3/2,3/2)$, dvs $3\\sqrt6/2$.\n\n[Figur: planet med punkten $A=(1,0,1)$, vektorn $\\mathbf w$ från $A$ till $D$ och dess projektion $\\mathbf p=\\operatorname{proj}_{\\mathbf n}\\mathbf w$ längs normalen $\\mathbf n$.]\n\n**Svar:** $2x-y+z=3$; avståndet är $\\frac{3\\sqrt6}{2}$."
  },
  "xT1-4": {
   "id": "xT1-4",
   "tenta": "xT1",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjärt oberoende",
    "baser",
    "koordinater"
   ],
   "typ": "bas-dimension",
   "avsnitt": [
    "4.4",
    "4.5"
   ],
   "uppgift": "För vilka värden på $a$ är $\\mathcal B_a=\\{1+x+x^2,\\ 1-2x^2,\\ 2+ax+x^2\\}$ linjärt oberoende. Välj nu ett sådant $a$. Förklara varför $\\mathcal B_a$ nu är en bas för $\\mathbb P_2$. Vilket element har koordinaterna $(1,-1,2)$?",
   "losning": "Linjärt oberoende betyder att\n$$c_1(1+x+x^2)+c_2(1-2x^2)+c_3(2+ax+x^2)=0\\ \\text{för alla }x$$\nmedför $c_1=c_2=c_3=0$. Identifiera $x$-potenserna:\n$$x^0:\\ c_1+c_2+2c_3=0,\\qquad x^1:\\ c_1+ac_3=0,\\qquad x^2:\\ c_1-2c_2+c_3=0.$$\nDetta har endast nollösningen om och endast om determinanten är nollskild:\n$$\\det\\begin{bmatrix}1&1&2\\\\1&0&a\\\\1&-2&1\\end{bmatrix}=-1\\begin{vmatrix}1&2\\\\-2&1\\end{vmatrix}-a\\begin{vmatrix}1&1\\\\1&-2\\end{vmatrix}=-5+3a.$$\nSå $\\mathcal B_a$ är linjärt oberoende omm $a\\neq5/3$, och då är det en bas eftersom $\\dim\\mathbb P_2=3$ (bassatsen: tre linjärt oberoende element i ett tredimensionellt rum är en bas). Välj $a=0$; elementet med koordinaterna $(1,-1,2)$ är\n$$1(1+x+x^2)+(-1)(1-2x^2)+2(2+x^2)=4+x+5x^2.$$\n**Svar:** $a\\neq 5/3$; med $a=0$ är elementet $4+x+5x^2$."
  },
  "xT1-5": {
   "id": "xT1-5",
   "tenta": "xT1",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Egenvärden",
    "diagonalisering"
   ],
   "typ": "diagonalisering",
   "avsnitt": [
    "5.1",
    "5.2"
   ],
   "uppgift": "Diagonalisera $A=\\begin{bmatrix}4&-15\\\\2&-7\\end{bmatrix}$, det vill säga finn matriser $P$ och $D$, $D$ diagonal, så att $A=PDP^{-1}$. Bestäm $A^5$.",
   "losning": "Egenvärden ur karakteristiska ekvationen:\n$$0=\\det(\\lambda I-A)=\\begin{vmatrix}\\lambda-4&15\\\\-2&\\lambda+7\\end{vmatrix}=(\\lambda-4)(\\lambda+7)+30=\\lambda^2+3\\lambda+2.$$\nRötterna är $-1$ och $-2$. [Koll: $-1-2=-3=\\operatorname{tr}A=4-7$; $(-1)(-2)=2=\\det A=-28+30$, ok.]\n\n$\\lambda=-1$: $(I+A)\\mathbf v=\\mathbf 0$,\n$$\\left[\\begin{array}{cc|c}5&-15&0\\\\2&-6&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}1&-3&0\\\\0&0&0\\end{array}\\right],$$\nså $\\mathbf v=t\\begin{bmatrix}3\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}3\\\\1\\end{bmatrix}$.\n\n$\\lambda=-2$: $(2I+A)\\mathbf v=\\mathbf 0$,\n$$\\left[\\begin{array}{cc|c}6&-15&0\\\\2&-5&0\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}2&-5&0\\\\0&0&0\\end{array}\\right],$$\nså $\\mathbf v=t\\begin{bmatrix}5/2\\\\1\\end{bmatrix}$; välj $\\begin{bmatrix}5\\\\2\\end{bmatrix}$.\n\nDetta ger $A=PDP^{-1}$ med $P=\\begin{bmatrix}3&5\\\\1&2\\end{bmatrix}$, $D=\\begin{bmatrix}-1&0\\\\0&-2\\end{bmatrix}$. Då är $A^5=PD^5P^{-1}$ med $P^{-1}=\\begin{bmatrix}2&-5\\\\-1&3\\end{bmatrix}$ (formeln för $2\\times2$-invers):\n$$A^5=\\begin{bmatrix}3&5\\\\1&2\\end{bmatrix}\\begin{bmatrix}-1&0\\\\0&-32\\end{bmatrix}\\begin{bmatrix}2&-5\\\\-1&3\\end{bmatrix}=\\begin{bmatrix}3&5\\\\1&2\\end{bmatrix}\\begin{bmatrix}-2&5\\\\32&-96\\end{bmatrix}=\\begin{bmatrix}154&-465\\\\62&-187\\end{bmatrix}.$$\n**Svar:** $P=\\begin{bmatrix}3&5\\\\1&2\\end{bmatrix}$, $D=\\begin{bmatrix}-1&0\\\\0&-2\\end{bmatrix}$, $A^5=\\begin{bmatrix}154&-465\\\\62&-187\\end{bmatrix}$."
  },
  "xT1-6": {
   "id": "xT1-6",
   "tenta": "xT1",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Minsta kvadratmetoden"
   ],
   "typ": "minsta-kvadrat",
   "avsnitt": [
    "6.4",
    "6.5"
   ],
   "uppgift": "Betrakta följande data\n\n| $x$ | $-1$ | $0$ | $1$ | $2$ |\n|---|---|---|---|---|\n| $y$ | $1$ | $-1$ | $-1$ | $3$ |\n\nBestäm den funktion på formen $y=Ax^2+B$ som bäst anpassar sig till datapunkterna i minstakvadratmetodens mening.",
   "losning": "Sätt in datapunkterna i modellfunktionen $y=\\alpha x^2+\\beta$:\n$$\\begin{cases}\\alpha+\\beta=1\\\\ \\beta=-1\\\\ \\alpha+\\beta=-1\\\\ 4\\alpha+\\beta=3\\end{cases}$$\nSystemet är uppenbart inkonsistent. På matrisform $A\\begin{bmatrix}\\alpha\\\\\\beta\\end{bmatrix}=\\mathbf b$ med\n$$A=\\begin{bmatrix}1&1\\\\0&1\\\\1&1\\\\4&1\\end{bmatrix},\\quad \\mathbf b=\\begin{bmatrix}1\\\\-1\\\\-1\\\\3\\end{bmatrix}.$$\nLös istället normalekvationen $A^TA\\begin{bmatrix}\\alpha\\\\\\beta\\end{bmatrix}=A^T\\mathbf b$:\n$$\\begin{bmatrix}18&6\\\\6&4\\end{bmatrix}\\begin{bmatrix}\\alpha\\\\\\beta\\end{bmatrix}=\\begin{bmatrix}12\\\\2\\end{bmatrix}.$$\nLösningen är $\\alpha=1$, $\\beta=-1$.\n\n[Figur: datapunkterna och parabeln $y=x^2-1$.]\n\n**Svar:** $y=x^2-1$."
  },
  "xT1-7": {
   "id": "xT1-7",
   "tenta": "xT1",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Linjer i rymden",
    "avstånd"
   ],
   "typ": "plan-avstand",
   "avsnitt": [
    "3.3",
    "3.4"
   ],
   "uppgift": "Betrakta linjerna\n$$L_1:\\ \\mathbf x=(1,1,-2)+t(1,-1,1)\\quad\\text{och}\\quad L_2:\\ \\mathbf x=(0,1,2)+t(-1,1,2).$$\nBevisa att linjerna inte skär varandra och bestäm avståndet mellan dem.",
   "losning": "För en skärningspunkt måste\n$$(1,1,-2)+s(1,-1,1)=(0,1,2)+t(-1,1,2)$$\nha en lösning. (Parametern för ena linjen är bytt till $s$; en eventuell skärningspunkt behöver inte ha samma parametervärde.) Detta ger\n$$\\begin{cases}s+t=-1\\\\-s-t=0\\\\s-2t=4\\end{cases}$$\n$$\\left[\\begin{array}{cc|c}1&1&-1\\\\-1&-1&0\\\\1&-2&4\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}1&1&-1\\\\0&0&-1\\\\0&-3&5\\end{array}\\right]\\sim\\left[\\begin{array}{cc|c}1&1&-1\\\\0&-3&5\\\\0&0&-1\\end{array}\\right].$$\nNedersta raden visar att lösning saknas, så linjerna skär inte varandra. (Onödigt att gausseliminera här, inkonsistensen syns direkt.)\n\nAvståndet: bestäm ett plan som innehåller $L_1$ men inte skär $L_2$, och bestäm avståndet från en punkt på $L_2$ till planet. En normal:\n$$\\mathbf n=(1,-1,1)\\times(-1,1,2)=(-3,-3,0)\\parallel \\mathbf n'=(1,1,0).$$\nPlanet: $x-1+y-1=0$, dvs $x+y=2$. Punkt i planet $(1,1,-2)$, punkt på $L_2$: $(0,1,2)$, $\\mathbf w=(-1,0,4)$.\n$$\\operatorname{proj}_{\\mathbf n'}(\\mathbf w)=\\frac{(-1,0,4)\\bullet(1,1,0)}{(1,1,0)\\bullet(1,1,0)}(1,1,0)=\\frac{-1}{2}(1,1,0).$$\n**Svar:** Avståndet är $1/\\sqrt2$."
  },
  "xT1-8": {
   "id": "xT1-8",
   "tenta": "xT1",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Inre produktrum",
    "ortogonal projektion",
    "Gram–Schmidt"
   ],
   "typ": "inre-produktrum",
   "avsnitt": [
    "6.1",
    "6.3"
   ],
   "uppgift": "Bestäm talen $a$ och $b$ så att\n$$\\int_0^1\\left(ax^2+x+b\\right)^2dx$$\nblir så liten som möjligt.",
   "losning": "Det som ska minimeras är ett avstånd i kvadrat,\n$$d(-x,\\,ax^2+b)^2=\\|x+ax^2+b\\|^2=\\int_0^1(ax^2+x+b)^2\\,dx,$$\ni $\\mathbb P_2$ med $\\langle p,q\\rangle=\\int_0^1p(x)q(x)\\,dx$. Enligt teorin minimeras avståndet av projektionen $\\operatorname{proj}_W(-x)$ där $W=\\operatorname{span}\\{1,x^2\\}$. Ortogonalisera basen med Gram–Schmidt: $q_1(x)=1$, $W_1=\\operatorname{span}\\{q_1\\}$,\n$$q_2(x)=x^2-\\operatorname{proj}_{W_1}(x^2)=x^2-\\frac{\\langle x^2,1\\rangle}{\\langle1,1\\rangle}1=x^2-\\frac{1/3}{1}=x^2-\\frac13,$$\ndär $\\langle x^2,1\\rangle=\\int_0^1x^2\\,dx=1/3$, $\\langle1,1\\rangle=1$. Välj $3q_2=3x^2-1$ för att slippa tredjedelarna; ortogonal bas $\\{1,3x^2-1\\}$.\n$$\\operatorname{proj}_W(-x)=\\frac{\\langle -x,1\\rangle}{\\langle1,1\\rangle}1+\\frac{\\langle -x,3x^2-1\\rangle}{\\langle3x^2-1,3x^2-1\\rangle}(3x^2-1).$$\nMed $\\langle -x,1\\rangle=-1/2$, $\\langle -x,3x^2-1\\rangle=-1/4$ och\n$$\\langle3x^2-1,3x^2-1\\rangle=\\int_0^1(9x^4-6x^2+1)\\,dx=4/5$$\nfås\n$$\\operatorname{proj}_W(-x)=-\\frac{15}{16}x^2-\\frac{3}{16}.$$\n**Svar:** $a=-15/16$, $b=-3/16$; minimala värdet blir $1/192$."
  },
  "xT1-9": {
   "id": "xT1-9",
   "tenta": "xT1",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Bevis",
    "linjärt oberoende",
    "kolonnrum"
   ],
   "typ": "bevis",
   "avsnitt": [
    "4.4",
    "4.8"
   ],
   "uppgift": "Låt $A$ vara en $n\\times n$ matris.\n\na) Antag att $\\{\\mathbf x_1,\\mathbf x_2,\\dots,\\mathbf x_n\\}$ är linjärt oberoende i $\\mathbb R^n$. Bevisa att om $A$ är inverterbar så är $\\{A\\mathbf x_1,A\\mathbf x_2,\\dots,A\\mathbf x_n\\}$ också linjärt oberoende.\n\nb) Visa att $\\{A\\mathbf x,A^2\\mathbf x,\\dots,A^n\\mathbf x\\}$ är linjärt beroende i $\\mathbb R^n$ för varje $\\mathbf x$ om $A$ är singulär.",
   "losning": "a) Antag\n$$c_1A\\mathbf x_1+c_2A\\mathbf x_2+\\dots+c_nA\\mathbf x_n=\\mathbf 0$$\noch visa $c_1=\\dots=c_n=0$. Ekvationen är densamma som $A(c_1\\mathbf x_1+\\dots+c_n\\mathbf x_n)=\\mathbf 0$, och eftersom $A$ är inverterbar följer\n$$c_1\\mathbf x_1+\\dots+c_n\\mathbf x_n=\\mathbf 0,$$\nvilket ger $c_j=0$ eftersom $\\{\\mathbf x_1,\\dots,\\mathbf x_n\\}$ är linjärt oberoende.\n\nb) $A^k\\mathbf x=A(A^{k-1}\\mathbf x)$, dvs alla elementen ligger i kolonnrummet för $A$. Men $A$ är singulär, så $\\dim\\operatorname{col}(A)<n$, och $n$ element i ett rum med dimension strikt mindre än $n$ är alltid linjärt beroende."
  },
  "diag3-1": {
   "id": "diag3-1",
   "tenta": "diag3",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Egenvärden",
    "diagonalisering",
    "matrispotens"
   ],
   "typ": "diagonalisering",
   "avsnitt": [
    "5.1",
    "5.2"
   ],
   "uppgift": "Diagonalisera $A=\\begin{bmatrix}-20&36\\\\-12&22\\end{bmatrix}$, det vill säga finn matriser $P$ och $D$, $D$ diagonal, så att $A=PDP^{-1}$. Bestäm $A^5$.",
   "losning": null
  },
  "diag3-2": {
   "id": "diag3-2",
   "tenta": "diag3",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Egenvärden",
    "diagonalisering"
   ],
   "typ": "diagonalisering",
   "avsnitt": [
    "5.1",
    "5.2"
   ],
   "uppgift": "Diagonalisera följande matris om det går,\n$$\\begin{bmatrix}3&1&-1&1\\\\-1&1&-1&1\\\\0&0&0&0\\\\0&0&0&0\\end{bmatrix}.$$",
   "losning": null
  },
  "diag3-3": {
   "id": "diag3-3",
   "tenta": "diag3",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Differentialekvationssystem",
    "diagonalisering"
   ],
   "typ": "diffekv-system",
   "avsnitt": [
    "5.2",
    "5.4"
   ],
   "uppgift": "Bestäm lösningen till $y'=5y-3z$, $z'=6y-4z$ med $y(0)=1$ och $z(0)=-1$.",
   "losning": null
  },
  "diag3-4": {
   "id": "diag3-4",
   "tenta": "diag3",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Gram–Schmidt",
    "ortogonal bas"
   ],
   "typ": "gram-schmidt",
   "avsnitt": [
    "6.3"
   ],
   "uppgift": "Bestäm en ortogonal bas för\n$$\\operatorname{span}\\{(1,0,0,1),(0,1,1,0),(1,0,1,0)\\}.$$",
   "losning": null
  },
  "diag3-5": {
   "id": "diag3-5",
   "tenta": "diag3",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Minsta kvadratmetoden"
   ],
   "typ": "minsta-kvadrat",
   "avsnitt": [
    "6.4",
    "6.5"
   ],
   "uppgift": "Betrakta följande data\n\n| $x$ | $-1$ | $0$ | $1$ | $2$ |\n|---|---|---|---|---|\n| $y$ | $-3$ | $0$ | $1$ | $2$ |\n\nBestäm den funktion på formen $y=\\alpha x+\\beta x^2$ som bäst anpassar sig till datapunkterna i minstakvadratmetodens mening.",
   "losning": null
  },
  "diag3-6": {
   "id": "diag3-6",
   "tenta": "diag3",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Inre produktrum",
    "ortogonal bas",
    "projektion"
   ],
   "typ": "inre-produktrum",
   "avsnitt": [
    "6.1",
    "6.3"
   ],
   "uppgift": "Betrakta $\\mathbb P_4$ utrustat med skalärprodukten\n$$\\langle p,q\\rangle=\\int_0^1p(x)q(x)\\,dx,$$\noch låt $W=\\operatorname{span}\\{x^2,x^4\\}$. Visa att $\\{x^2,7x^4-5x^2\\}$ är en ortogonal bas för $W$ och bestäm $\\operatorname{proj}_W1$.",
   "losning": null
  },
  "diag3-7": {
   "id": "diag3-7",
   "tenta": "diag3",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Gram–Schmidt",
    "kolonnrum",
    "projektion",
    "normalekvationen"
   ],
   "typ": "gram-schmidt",
   "avsnitt": [
    "4.8",
    "6.3",
    "6.4"
   ],
   "uppgift": "Låt\n$$A=\\begin{bmatrix}1&2&1\\\\1&-1&-5\\\\-2&2&10\\end{bmatrix}.$$\nBestäm en ortogonal bas för kolonnrummet och utnyttja den för att bestämma $\\operatorname{proj}_{\\operatorname{col}(A)}(1,2,3)$. Jämför sedan med en uträkning med hjälp av normalekvationen.",
   "losning": null
  },
  "diag3-8": {
   "id": "diag3-8",
   "tenta": "diag3",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Inre produktrum",
    "bästa approximation"
   ],
   "typ": "inre-produktrum",
   "avsnitt": [
    "6.1",
    "6.4",
    "6.6"
   ],
   "uppgift": "Bestäm talen $a$ och $b$ så\n$$\\int_0^4(a+bx+x^2)^2\\,dx$$\nblir så liten som möjligt.",
   "losning": null
  },
  "diag3-9": {
   "id": "diag3-9",
   "tenta": "diag3",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Egenvärden",
    "positivt definit",
    "rang",
    "bevis"
   ],
   "typ": "bevis",
   "avsnitt": [
    "4.9",
    "5.1"
   ],
   "uppgift": "Låt $A$ vara en $n\\times n$ matris sådan att $\\mathbf u\\bullet A\\mathbf u>0$ för alla $\\mathbf u\\neq\\mathbf 0$ ($A$ kallas positivt definit). Visa att samtliga egenvärde för $A$ är positiva och att rangen för $A$ är $n$.",
   "losning": null
  },
  "diag2-1": {
   "id": "diag2-1",
   "tenta": "diag2",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjer och plan",
    "avstånd",
    "projektion"
   ],
   "typ": "plan-avstand",
   "avsnitt": [
    "3.3",
    "3.4"
   ],
   "uppgift": "Bestäm avståndet mellan skärningslinjen för planen $2x-z=2$ och $x-2y+z=3$ och linjen $\\mathbf x=(1,2,1)+t(2,3,4)$.",
   "losning": "Skärningslinjen mellan $2x-z=2$ och $x-2y+z=3$:\n$$\\left[\\begin{array}{ccc|c}2&0&-1&2\\\\1&-2&1&3\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&-2&1&3\\\\2&0&-1&2\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}\\boxed1&-2&1&3\\\\0&\\boxed4&-3&-4\\end{array}\\right].$$\n$x,y$ bundna, $z=t$ fri: $y=-1+\\frac34t$, $x=3-2+\\frac32t-t=1+\\frac12t$.\n\nSkärningslinje: $(1,-1,0)+t\\left(\\frac12,\\frac34,1\\right)$, eller kortare $(1,-1,0)+t(2,3,4)$.\n\nLinjerna är parallella. Nu avstånd. Låt $\\mathbf v=(1,2,1)-(1,-1,0)=(0,3,1)$.\n\n[Figur: de två parallella linjerna, $\\mathbf v$ från $(1,-1,0)$ till $(1,2,1)$, $\\operatorname{proj}_{(2,3,4)}(0,3,1)$ längs linjen och avståndet $a$ vinkelrätt.]\n\nProjicera $\\mathbf v$ på $(2,3,4)$:\n$$\\operatorname{proj}_{(2,3,4)}(0,3,1)=\\frac{(0,3,1)\\bullet(2,3,4)}{(2,3,4)\\bullet(2,3,4)}(2,3,4)=\\frac{13}{29}(2,3,4).$$\nAvståndet via Pythagoras:\n$$a^2=\\|\\mathbf v\\|^2-\\|\\operatorname{proj}_{(2,3,4)}(0,3,1)\\|^2=10-\\frac{13^2}{29}=\\frac{290-169}{29}=\\frac{121}{29}.$$\n**Svar:** $a=\\dfrac{11}{\\sqrt{29}}$."
  },
  "diag2-2": {
   "id": "diag2-2",
   "tenta": "diag2",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linje–plan-skärning",
    "plan genom tre punkter"
   ],
   "typ": "plan-avstand",
   "avsnitt": [
    "3.3",
    "3.4",
    "3.5"
   ],
   "uppgift": "Bestäm den punkt där linjen $\\mathbf x=(0,1,2)+t(-3,2,-1)$ skär planet som innehåller $(1,2,-1)$, $(2,1,0)$ och $(-2,1,1)$.",
   "losning": "$A=(1,2,-1)$, $B=(2,1,0)$, $C=(-2,1,1)$. En normal till planet är\n$$\\overrightarrow{AB}\\times\\overrightarrow{AC}=(1,-1,1)\\times(-3,-1,2)=(-1,-5,-4).$$\nEn ekvation för planet:\n$$-1(x-1)-5(y-2)-4(z+1)=0\\iff x+5y+4z=7.$$\n[Koll: $A$: $1+10-4=7$; $B$: $2+5+0=7$; $C$: $-2+5+4=7$, ok.]\n\nLinjen $(x,y,z)=(0,1,2)+t(-3,2,-1)$: sätt in $x=-3t$, $y=1+2t$, $z=2-t$ i planet:\n$$-3t+5+10t+8-4t=7\\iff3t=-6\\iff t=-2.$$\nPunkten blir $(0,1,2)-2(-3,2,-1)=(6,-3,4)$.\n\n**Svar:** $(6,-3,4)$."
  },
  "diag2-3": {
   "id": "diag2-3",
   "tenta": "diag2",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Ortogonal projektion på plan",
    "standardmatris"
   ],
   "typ": "spegling-projektion",
   "avsnitt": [
    "1.8",
    "3.3"
   ],
   "uppgift": "Bestäm matrisen för den avbildning som ortogonalt projicerar i planet $2x-3y+z=0$. Vad avbildas $(1,0,1)$ på?",
   "losning": "$\\Pi: 2x-3y+z=0$, $\\mathbf n=(2,-3,1)$. Bestäm projektionen av $\\mathbf x=(x,y,z)$ på $\\Pi$.\n\n[Figur: planet, normalen $\\mathbf n$, $\\mathbf x$ och dess projektion i planet.]\n\nProjektionen ges av\n$$\\mathbf x-\\operatorname{proj}_{\\mathbf n}\\mathbf x=(x,y,z)-\\frac{(x,y,z)\\bullet(2,-3,1)}{(2,-3,1)\\bullet(2,-3,1)}(2,-3,1)=(x,y,z)-\\frac1{14}(2x-3y+z)(2,-3,1)$$\n$$=\\frac1{14}\\Big((14x,14y,14z)-(4x-6y+2z,\\,-6x+9y-3z,\\,2x-3y+z)\\Big)$$\n$$=\\frac1{14}(10x+6y-2z,\\ 6x+5y+3z,\\ -2x+3y+13z)=\\frac1{14}\\begin{bmatrix}10&6&-2\\\\6&5&3\\\\-2&3&13\\end{bmatrix}\\begin{bmatrix}x\\\\y\\\\z\\end{bmatrix}.$$\n$(1,0,1)$ avbildas på\n$$\\frac1{14}\\begin{bmatrix}10&6&-2\\\\6&5&3\\\\-2&3&13\\end{bmatrix}\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}=\\frac1{14}\\begin{bmatrix}8\\\\9\\\\11\\end{bmatrix}.$$\n**Svar:** Matrisen är $\\frac1{14}\\begin{bmatrix}10&6&-2\\\\6&5&3\\\\-2&3&13\\end{bmatrix}$; $(1,0,1)\\mapsto\\frac1{14}(8,9,11)$."
  },
  "diag2-4": {
   "id": "diag2-4",
   "tenta": "diag2",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Bas",
    "kolonnrum",
    "utvidga till bas"
   ],
   "typ": "nollrum-kolonnrum",
   "avsnitt": [
    "4.5",
    "4.6",
    "4.8"
   ],
   "uppgift": "Dimensionen för\n$$W=\\operatorname{span}\\{(1,0,1,1),(2,-1,1,3),(1,2,1,3),(0,1,0,1)\\}$$\när tre. Bestäm en bas för $W$. Lägg sedan till ett element till den basen så det blir en bas för $\\mathbb R^4$.",
   "losning": "Sätt vektorerna som kolonner i en matris $A$ och bestäm en bas för dess kolonnrum.\n$$A=\\begin{bmatrix}1&2&1&0\\\\0&-1&2&1\\\\1&1&1&0\\\\1&3&3&1\\end{bmatrix}\\sim\\begin{bmatrix}1&2&1&0\\\\0&-1&2&1\\\\0&-1&0&0\\\\0&1&2&1\\end{bmatrix}\\sim\\begin{bmatrix}1&2&1&0\\\\0&-1&2&1\\\\0&0&-2&-1\\\\0&0&4&2\\end{bmatrix}\\sim\\begin{bmatrix}\\boxed1&2&1&0\\\\0&\\boxed{-1}&2&1\\\\0&0&\\boxed{-2}&-1\\\\0&0&0&0\\end{bmatrix}.$$\nPivotkolonner 1, 2, 3. En bas för det linjära höljet är\n$$\\{(1,0,1,1),(2,-1,1,3),(1,2,1,3)\\}.$$\nFör att utöka till en bas för $\\mathbb R^4$ måste vi lägga till ett element som inte ligger i $W$; det blir då automatiskt en bas. Bestäm $\\mathbf b$ så att $A\\mathbf x=\\mathbf b$ saknar lösning (utan det löjliga elementet):\n$$\\left[\\begin{array}{ccc|c}1&2&1&b_1\\\\0&-1&2&b_2\\\\1&1&1&b_3\\\\1&3&3&b_4\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&2&1&b_1\\\\0&-1&2&b_2\\\\0&-1&0&b_3-b_1\\\\0&1&2&b_4-b_1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&2&1&b_1\\\\0&-1&2&b_2\\\\0&0&-2&b_3-b_1-b_2\\\\0&0&4&b_4-b_1+b_2\\end{array}\\right]$$\n$$\\sim\\left[\\begin{array}{ccc|c}1&2&1&b_1\\\\0&-1&2&b_2\\\\0&0&-2&b_3-b_1-b_2\\\\0&0&0&b_4-b_1+b_2+2(b_3-b_1-b_2)\\end{array}\\right].$$\nVälj t.ex. $\\mathbf b=(0,0,0,1)^T$ (sista raden blir då $[0\\ 0\\ 0\\mid1]$).\n\n**Svar:** Bas för $W$: $\\{(1,0,1,1),(2,-1,1,3),(1,2,1,3)\\}$; bas för $\\mathbb R^4$: $\\{(1,0,1,1),(2,-1,1,3),(1,2,1,3),(0,0,0,1)\\}$."
  },
  "diag2-5": {
   "id": "diag2-5",
   "tenta": "diag2",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Bas",
    "linjärt oberoende",
    "koordinater"
   ],
   "typ": "bas-dimension",
   "avsnitt": [
    "4.4",
    "4.5"
   ],
   "uppgift": "Visa att $\\{1+x,1-x^2,x-x^2\\}$ är en bas för $\\mathbb P_2$. Bestäm koordinaterna för $2+x+x^2$ relativt denna bas.",
   "losning": "$\\dim\\mathbb P_2=3$ ty en bas är $\\{1,x,x^2\\}$. Enligt teorin är därför en linjärt oberoende mängd med tre element en bas (bassatsen). Visa linjärt oberoende:\n$$c_1(1+x)+c_2(1-x^2)+c_3(x-x^2)=0\\quad\\text{för alla }x.$$\nIdentifiera:\n$$x^0:\\ c_1+c_2=0,\\qquad x^1:\\ c_1+c_3=0,\\qquad x^2:\\ -c_2-c_3=0.$$\n$$\\left[\\begin{array}{ccc|c}1&1&0&0\\\\1&0&1&0\\\\0&-1&-1&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&1&0&0\\\\0&-1&1&0\\\\0&-1&-1&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}\\boxed1&1&0&0\\\\0&\\boxed{-1}&1&0\\\\0&0&\\boxed{-2}&0\\end{array}\\right].$$\nEnda lösningen $c_1=c_2=c_3=0$, alltså linjärt oberoende och därmed en bas.\n\nKoordinater för $2+x+x^2$: $c_1(1+x)+c_2(1-x^2)+c_3(x-x^2)=2+x+x^2$. Identifiera:\n$$x^0:\\ c_1+c_2=2,\\qquad x^1:\\ c_1+c_3=1,\\qquad x^2:\\ -c_2-c_3=1.$$\n$$\\left[\\begin{array}{ccc|c}1&1&0&2\\\\1&0&1&1\\\\0&-1&-1&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&1&0&2\\\\0&-1&1&-1\\\\0&-1&-1&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&1&0&2\\\\0&-1&1&-1\\\\0&0&-2&2\\end{array}\\right],$$\nså $c_3=-1$, $c_2=0$, $c_1=2$.\n\n[Koll: $2(1+x)+0(1-x^2)-1(x-x^2)=2+x+x^2$, ok.]\n\n**Svar:** $(2+x+x^2)_{\\mathcal B}=(2,0,-1)$ där $\\mathcal B=\\{1+x,1-x^2,x-x^2\\}$."
  },
  "diag2-6": {
   "id": "diag2-6",
   "tenta": "diag2",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Nollrum",
    "bas för lösningsrum"
   ],
   "typ": "nollrum-kolonnrum",
   "avsnitt": [
    "4.8"
   ],
   "uppgift": "Bestäm en bas för vektorrummet av lösningar till\n$$\\begin{cases}x+2y+z+2u-v=0\\\\x+2y+z+u+v+w=0\\\\2x+u-v+w=0.\\end{cases}$$",
   "losning": "På matrisform:\n$$\\begin{bmatrix}1&2&1&2&-1&0\\\\1&2&1&1&1&1\\\\2&0&0&2&-1&1\\end{bmatrix}\\begin{bmatrix}x\\\\y\\\\z\\\\u\\\\v\\\\w\\end{bmatrix}=\\begin{bmatrix}0\\\\0\\\\0\\end{bmatrix}.$$\nDet efterfrågas en bas för nollrummet.\n$$\\left[\\begin{array}{cccccc|c}1&2&1&2&-1&0&0\\\\1&2&1&1&1&1&0\\\\2&0&0&2&-1&1&0\\end{array}\\right]\\sim\\left[\\begin{array}{cccccc|c}1&2&1&2&-1&0&0\\\\0&0&0&-1&2&1&0\\\\0&-4&-2&-2&1&1&0\\end{array}\\right]\\sim\\left[\\begin{array}{cccccc|c}\\boxed1&2&1&2&-1&0&0\\\\0&\\boxed{-4}&-2&-2&1&1&0\\\\0&0&0&\\boxed{-1}&2&1&0\\end{array}\\right].$$\n$x,y,u$ bundna; $z,v,w$ fria: $z=t_1$, $v=t_2$, $w=t_3$.\n$$u=2t_2+t_3,$$\n$$4y=-2t_1-2(2t_2+t_3)+t_2+t_3=-2t_1-3t_2-t_3\\ \\Rightarrow\\ y=-\\tfrac12t_1-\\tfrac34t_2-\\tfrac14t_3,$$\n$$x=-2y-z-2u+v=t_1+\\tfrac32t_2+\\tfrac12t_3-t_1-4t_2-2t_3+t_2=-\\tfrac32t_2-\\tfrac32t_3.$$\nAlltså\n$$\\begin{bmatrix}x\\\\y\\\\z\\\\u\\\\v\\\\w\\end{bmatrix}=t_1\\underbrace{\\begin{bmatrix}0\\\\-1/2\\\\1\\\\0\\\\0\\\\0\\end{bmatrix}}_{\\mathbf b_1}+t_2\\underbrace{\\begin{bmatrix}-3/2\\\\-3/4\\\\0\\\\2\\\\1\\\\0\\end{bmatrix}}_{\\mathbf b_2}+t_3\\underbrace{\\begin{bmatrix}-3/2\\\\-1/4\\\\0\\\\1\\\\0\\\\1\\end{bmatrix}}_{\\mathbf b_3}.$$\nDessa tre utgör en bas ty de spänner upp och är uppenbart linjärt oberoende (en etta på var sin fri-variabelplats). Välj $\\{2\\mathbf b_1,4\\mathbf b_2,4\\mathbf b_3\\}$.\n\n**Svar:** En bas är\n$$\\left\\{\\begin{bmatrix}0\\\\-1\\\\2\\\\0\\\\0\\\\0\\end{bmatrix},\\begin{bmatrix}-6\\\\-3\\\\0\\\\8\\\\4\\\\0\\end{bmatrix},\\begin{bmatrix}-6\\\\-1\\\\0\\\\4\\\\0\\\\4\\end{bmatrix}\\right\\}.$$"
  },
  "diag2-7": {
   "id": "diag2-7",
   "tenta": "diag2",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Spegling i plan",
    "normal",
    "geometri"
   ],
   "typ": "spegling-projektion",
   "avsnitt": [
    "3.3"
   ],
   "uppgift": "Låt $S$ vara den linjära avbildning som speglar i planet $\\Pi$ och avbildar $(1,-2,2)$ på $(0,3,0)$. Bestäm planet $\\Pi$. Vad speglas $(2,1,-2)$ på?\nLedning: Vad gäller för $S(\\mathbf x)-\\mathbf x$? Speglingsmatrisen behöver inte bestämmas.",
   "losning": "$S(\\mathbf x)-\\mathbf x$ är en normal till planet (se figur).\n\n[Figur: planet, $\\mathbf x$, $S(\\mathbf x)$ och vektorn $\\mathbf x-S(\\mathbf x)$ vinkelrät mot planet.]\n\n[Koll: $S(S(\\mathbf x)-\\mathbf x)=S^2(\\mathbf x)-S(\\mathbf x)=\\mathbf x-S(\\mathbf x)=-(S(\\mathbf x)-\\mathbf x)$, eftersom $S^2=I$ för en spegling. Alltså speglas vektorn på sin negation, dvs den är vinkelrät mot planet.]\n\nLåt\n$$\\mathbf n=S(1,-2,2)-(1,-2,2)=(0,3,0)-(1,-2,2)=(-1,5,-2).$$\nPlanet måste dessutom passera origo, annars är avbildningen inte linjär. Så $-x+5y-2z=0$, eller\n$$x-5y+2z=0.$$\nVad speglas $(2,1,-2)=\\mathbf x$ på? Spegelbilden ligger på normallinjen $\\mathbf n(t)=(2,1,-2)+t(-1,5,-2)$ och har samma längd som $\\mathbf x$, $\\|\\mathbf x\\|=\\sqrt{4+1+4}=3$.\n\n[Figur: $\\mathbf x$, planet, normallinjen genom $\\mathbf x$ och spegelbilden; lika långa vektorer.]\n\nBestäm $t$ så att $\\|\\mathbf n(t)\\|=3$:\n$$(2-t)^2+(1+5t)^2+(-2-2t)^2=9\\iff4-4t+t^2+1+10t+25t^2+4+8t+4t^2=9\\iff30t^2+14t=0\\iff2t(15t+7)=0.$$\n$t=0$ ger $(2,1,-2)$ själv; $t=-\\frac7{15}$ ger\n$$(2,1,-2)-\\tfrac7{15}(-1,5,-2)=\\tfrac1{15}(37,-20,-16).$$\n**Svar:** $\\Pi: x-5y+2z=0$; $(2,1,-2)$ speglas på $\\frac1{15}(37,-20,-16)$."
  },
  "diag2-8": {
   "id": "diag2-8",
   "tenta": "diag2",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Rang",
    "nollrum",
    "dimensionssatsen"
   ],
   "typ": "bevis",
   "avsnitt": [
    "4.8",
    "4.9"
   ],
   "uppgift": "Finns det någon $5\\times5$ matris $A$ med $\\operatorname{rank}(A)=3$ så att $A^2=0$ (nollmatrisen)? Ge ett exempel eller bevisa att sådan saknas.",
   "losning": "Nej. Om $A^2=0$ så ligger alla $A$:s kolonner i nollrummet för $A$, dvs $\\dim\\operatorname{null}(A)\\ge\\operatorname{rank}(A)$. Samtidigt gäller dimensionssatsen:\n$$\\underbrace{\\operatorname{rank}(A)}_{=3}+\\underbrace{\\dim\\operatorname{null}(A)}_{\\ge3}=\\underbrace{n}_{=5},$$\nvilket är omöjligt.\n\n**Svar:** Nej, en sådan matris saknas."
  },
  "diag2-9": {
   "id": "diag2-9",
   "tenta": "diag2",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Underrum",
    "spår",
    "bas",
    "matrisrum"
   ],
   "typ": "underrum",
   "avsnitt": [
    "1.3",
    "4.1",
    "4.2",
    "4.5"
   ],
   "uppgift": "Låt $M_{2\\times2}$ beteckna vektorrummet av samtliga $2\\times2$ matriser och $B=\\begin{bmatrix}1&2\\\\-1&-1\\end{bmatrix}$. Visa att\n$$H=\\{A\\in M_{2\\times2}:\\operatorname{tr}(AB)=0\\}$$\när ett underrum till $M_{2\\times2}$. Bestäm också en bas för $H$.",
   "losning": "- $0\\in H$: klart, ty $\\operatorname{tr}(0B)=\\operatorname{tr}(0)=0$.\n- Antag $C,D\\in H$: $\\operatorname{tr}((C+D)B)=\\operatorname{tr}(CB+DB)=\\operatorname{tr}(CB)+\\operatorname{tr}(DB)=0+0=0$ (enkel tr-lag; $C,D\\in H$).\n- Antag $C\\in H$, $c\\in\\mathbb R$: $\\operatorname{tr}((cC)B)=\\operatorname{tr}(c(CB))=c\\operatorname{tr}(CB)=0$ (enkel tr-lag; $C\\in H$).\n\nBas: låt $A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$ och $\\operatorname{tr}(AB)=0$:\n$$\\operatorname{tr}\\left(\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\begin{bmatrix}1&2\\\\-1&-1\\end{bmatrix}\\right)=\\operatorname{tr}\\begin{bmatrix}a-b&\\cdots\\\\\\cdots&2c-d\\end{bmatrix}=a-b+2c-d=0.$$\n$b=s$, $c=t$, $d=u$ fria och $a=s-2t+u$. Alltså\n$$A\\in H\\iff A=\\begin{bmatrix}s-2t+u&s\\\\t&u\\end{bmatrix}=s\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}+t\\begin{bmatrix}-2&0\\\\1&0\\end{bmatrix}+u\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}.$$\nEn bas är\n$$\\left\\{\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix},\\begin{bmatrix}-2&0\\\\1&0\\end{bmatrix},\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\right\\}$$\n(spänner upp enligt räkningen och uppenbart linjärt oberoende: matris 1 är ensam om en etta i position (1,2), matris 2 i (2,1), matris 3 i (2,2)).\n\nMärk (kontroll): $\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}B=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$, $\\begin{bmatrix}-2&0\\\\1&0\\end{bmatrix}B=\\begin{bmatrix}-2&-4\\\\1&2\\end{bmatrix}$, $IB=B$; alla tre har spår noll."
  },
  "diag1-1": {
   "id": "diag1-1",
   "tenta": "diag1",
   "nr": 1,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära ekvationssystem",
    "Gausselimination"
   ],
   "typ": "gausselimination",
   "avsnitt": [
    "1.1",
    "1.2"
   ],
   "uppgift": "Lös följande ekvationssystem\n$$\\begin{cases}x+y-z+v=2\\\\x-z+u-2v=-3\\\\2x+y-z+u+3v=7\\\\-x-y+z=0\\\\2x+y-2z+u+2v=5.\\end{cases}$$",
   "losning": "Motsvarande utökade koefficientmatris (variabelordning $x,y,z,u,v$) elimineras enligt:\n$$\\left[\\begin{array}{ccccc|c}1&1&-1&0&1&2\\\\1&0&-1&1&-2&-3\\\\2&1&-1&1&3&7\\\\-1&-1&1&0&0&0\\\\2&1&-2&1&2&5\\end{array}\\right]\\sim\\left[\\begin{array}{ccccc|c}1&1&-1&0&1&2\\\\0&-1&0&1&-3&-5\\\\0&-1&1&1&1&3\\\\0&0&0&0&1&2\\\\0&-1&0&1&0&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccccc|c}1&1&-1&0&1&2\\\\0&-1&0&1&-3&-5\\\\0&0&1&0&4&8\\\\0&0&0&0&1&2\\\\0&0&0&0&3&6\\end{array}\\right]$$\n$$\\sim\\left[\\begin{array}{ccccc|c}\\boxed1&1&-1&0&1&2\\\\0&\\boxed{-1}&0&1&-3&-5\\\\0&0&\\boxed1&0&4&8\\\\0&0&0&0&\\boxed1&2\\\\0&0&0&0&0&0\\end{array}\\right].$$\n$x,y,z,v$ bundna, $u=t$ fri. Bakåtsubstitution:\n$$v=2,\\quad z=8-4v=0,\\quad y=5+t-3\\cdot2=t-1,\\quad x=2-y+z-v=2-(t-1)+0-2=1-t.$$\n**Svar:**\n$$\\mathbf x=\\begin{bmatrix}x\\\\y\\\\z\\\\u\\\\v\\end{bmatrix}=\\begin{bmatrix}1-t\\\\-1+t\\\\0\\\\t\\\\2\\end{bmatrix}=\\begin{bmatrix}1\\\\-1\\\\0\\\\0\\\\2\\end{bmatrix}+t\\begin{bmatrix}-1\\\\1\\\\0\\\\1\\\\0\\end{bmatrix}.$$"
  },
  "diag1-2": {
   "id": "diag1-2",
   "tenta": "diag1",
   "nr": 2,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Matrisekvationer",
    "invers"
   ],
   "typ": "matrisekvation",
   "avsnitt": [
    "1.3",
    "1.4",
    "1.5"
   ],
   "uppgift": "Låt\n$$A=\\begin{bmatrix}-3&-2&2\\\\-2&0&0\\\\1&1&0\\end{bmatrix}\\ \\text{och}\\ B=\\begin{bmatrix}1&0&1\\\\-1&0&0\\\\0&1&1\\end{bmatrix}.$$\nBestäm matrisen $X$ så att $X=AX+B$.",
   "losning": "$$X=AX+B\\iff X-AX=B\\iff(I-A)X=B\\iff X=(I-A)^{-1}B$$\n(sista steget om $I-A$ är inverterbar). Vi får\n$$I-A=\\begin{bmatrix}4&2&-2\\\\2&1&0\\\\-1&-1&1\\end{bmatrix}.$$\nBestäm inversen:\n$$\\left[\\begin{array}{ccc|ccc}4&2&-2&1&0&0\\\\2&1&0&0&1&0\\\\-1&-1&1&0&0&1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|ccc}-1&-1&1&0&0&1\\\\2&1&0&0&1&0\\\\4&2&-2&1&0&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|ccc}-1&-1&1&0&0&1\\\\0&-1&2&0&1&2\\\\0&-2&2&1&0&4\\end{array}\\right]$$\n$$\\sim\\left[\\begin{array}{ccc|ccc}-1&-1&1&0&0&1\\\\0&-1&2&0&1&2\\\\0&0&-2&1&-2&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|ccc}1&1&-1&0&0&-1\\\\0&1&-2&0&-1&-2\\\\0&0&1&-\\frac12&1&0\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|ccc}1&1&0&-\\frac12&1&-1\\\\0&1&0&-1&1&-2\\\\0&0&1&-\\frac12&1&0\\end{array}\\right]$$\n$$\\sim\\left[\\begin{array}{ccc|ccc}1&0&0&\\frac12&0&1\\\\0&1&0&-1&1&-2\\\\0&0&1&-\\frac12&1&0\\end{array}\\right].$$\nOBS: $I-A$ är inverterbar, och\n$$(I-A)^{-1}=\\begin{bmatrix}\\frac12&0&1\\\\-1&1&-2\\\\-\\frac12&1&0\\end{bmatrix}.$$\nSå\n$$X=\\begin{bmatrix}\\frac12&0&1\\\\-1&1&-2\\\\-\\frac12&1&0\\end{bmatrix}\\begin{bmatrix}1&0&1\\\\-1&0&0\\\\0&1&1\\end{bmatrix}=\\begin{bmatrix}\\frac12&1&\\frac32\\\\-2&-2&-3\\\\-\\frac32&0&-\\frac12\\end{bmatrix}.$$\n**Svar:** $X=\\begin{bmatrix}\\frac12&1&\\frac32\\\\-2&-2&-3\\\\-\\frac32&0&-\\frac12\\end{bmatrix}$."
  },
  "diag1-3": {
   "id": "diag1-3",
   "tenta": "diag1",
   "nr": 3,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära ekvationssystem",
    "lösbarhet"
   ],
   "typ": "gausselimination",
   "avsnitt": [
    "1.1",
    "1.2",
    "1.6"
   ],
   "uppgift": "Låt\n$$A=\\begin{bmatrix}1&0&1&1\\\\0&1&1&2\\\\-1&1&0&1\\\\0&1&1&2\\end{bmatrix}$$\noch bestäm samtliga $\\mathbf b$ så att $A\\mathbf x=\\mathbf b$ har lösning.",
   "losning": "Låt $\\mathbf b=(b_1,b_2,b_3,b_4)^T$. Den utökade koefficientmatrisen elimineras enligt:\n$$\\left[\\begin{array}{cccc|c}1&0&1&1&b_1\\\\0&1&1&2&b_2\\\\-1&1&0&1&b_3\\\\0&1&1&2&b_4\\end{array}\\right]\\sim\\left[\\begin{array}{cccc|c}1&0&1&1&b_1\\\\0&1&1&2&b_2\\\\0&1&1&2&b_1+b_3\\\\0&1&1&2&b_4\\end{array}\\right]\\sim\\left[\\begin{array}{cccc|c}\\boxed1&0&1&1&b_1\\\\0&\\boxed1&1&2&b_2\\\\0&0&0&0&b_1-b_2+b_3\\\\0&0&0&0&b_4-b_2\\end{array}\\right].$$\n**Svar:** Lösning finns precis i de fall då $b_1-b_2+b_3=0$ och $b_4-b_2=0$."
  },
  "diag1-4": {
   "id": "diag1-4",
   "tenta": "diag1",
   "nr": 4,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Inverterbarhet",
    "determinant",
    "lösbarhet"
   ],
   "typ": "parametersystem",
   "avsnitt": [
    "1.6",
    "2.1",
    "2.2",
    "2.3"
   ],
   "uppgift": "Låt $a$ vara en reell parameter och\n$$A=\\begin{bmatrix}a&1&0\\\\0&-1&a\\\\1&2&-1\\end{bmatrix}.$$\nFör vilka värden på $a$ är $A$ inverterbar? Ge ett exempel på ett $a$ och $\\mathbf b$ så att $A\\mathbf x=\\mathbf b$ saknar lösning.",
   "losning": "En matris är inverterbar om och endast om determinanten inte är noll.\n$$\\begin{vmatrix}a&1&0\\\\0&-1&a\\\\1&2&-1\\end{vmatrix}=a\\begin{vmatrix}-1&a\\\\2&-1\\end{vmatrix}-1\\begin{vmatrix}0&a\\\\1&-1\\end{vmatrix}=a(1-2a)-(0-a)=2a-2a^2=2a(1-a).$$\nMatrisen är därför inverterbar om och endast om $a\\neq0$ och $a\\neq1$.\n\nOm man ska finna ett inkonsistent system måste alltså $a=0$ eller $a=1$. Välj $a=0$. Finn $\\mathbf b$ så att\n$$\\begin{bmatrix}0&1&0\\\\0&-1&0\\\\1&2&-1\\end{bmatrix}\\mathbf x=\\begin{bmatrix}b_1\\\\b_2\\\\b_3\\end{bmatrix}$$\nsaknar lösning:\n$$\\left[\\begin{array}{ccc|c}0&1&0&b_1\\\\0&-1&0&b_2\\\\1&2&-1&b_3\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&2&-1&b_3\\\\0&-1&0&b_2\\\\0&1&0&b_1\\end{array}\\right]\\sim\\left[\\begin{array}{ccc|c}1&2&-1&b_3\\\\0&-1&0&b_2\\\\0&0&0&b_1+b_2\\end{array}\\right].$$\nDet saknas lösningar om $b_1+b_2\\neq0$, t.ex. $\\mathbf b=(1,0,0)^T$.\n\n**Svar:** Inverterbar omm $a\\neq0$ och $a\\neq1$. Exempel: $a=0$, $\\mathbf b=(1,0,0)^T$."
  },
  "diag1-5": {
   "id": "diag1-5",
   "tenta": "diag1",
   "nr": 5,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära avbildningar",
    "standardmatris"
   ],
   "typ": "linjar-avbildning",
   "avsnitt": [
    "1.8"
   ],
   "uppgift": "Bestäm matrisen för den linjära avbildning som avbildar $(1,1)$ på $(1,0,1)$ och $(-1,2)$ på $(1,2,-1)$. Vad avbildas $(8,7)$ på?",
   "losning": "$(1,1)\\mapsto(1,0,1)$, $(-1,2)\\mapsto(1,2,-1)$. Matrisen $A=[T(\\mathbf e_1)\\ T(\\mathbf e_2)]$ om vi kallar avbildningen $T$.\n\nSkriv $\\mathbf e_1=(1,0)=c_1(1,1)+c_2(-1,2)$:\n$$\\begin{cases}1=c_1-c_2\\\\0=c_1+2c_2\\end{cases}\\iff 3c_2=-1\\iff c_2=-\\tfrac13,\\ c_1=\\tfrac23.$$\nDet följer\n$$T(\\mathbf e_1)=T\\!\\left(\\tfrac23(1,1)-\\tfrac13(-1,2)\\right)=\\tfrac23(1,0,1)-\\tfrac13(1,2,-1)=\\left(\\tfrac13,-\\tfrac23,1\\right).$$\nNu $\\mathbf e_2=(0,1)=c_1(1,1)+c_2(-1,2)$:\n$$\\begin{cases}0=c_1-c_2\\\\1=c_1+2c_2\\end{cases}\\iff 3c_2=1\\iff c_2=\\tfrac13,\\ c_1=\\tfrac13.$$\n$$T(\\mathbf e_2)=\\tfrac13(1,0,1)+\\tfrac13(1,2,-1)=\\left(\\tfrac23,\\tfrac23,0\\right).$$\nAlltså\n$$A=\\begin{bmatrix}1/3&2/3\\\\-2/3&2/3\\\\1&0\\end{bmatrix}=\\frac13\\begin{bmatrix}1&2\\\\-2&2\\\\3&0\\end{bmatrix}.$$\n$$A\\begin{bmatrix}8\\\\7\\end{bmatrix}=\\frac13\\begin{bmatrix}1&2\\\\-2&2\\\\3&0\\end{bmatrix}\\begin{bmatrix}8\\\\7\\end{bmatrix}=\\frac13\\begin{bmatrix}22\\\\-2\\\\24\\end{bmatrix}.$$\n**Svar:** $A=\\frac13\\begin{bmatrix}1&2\\\\-2&2\\\\3&0\\end{bmatrix}$; $(8,7)\\mapsto\\left(\\frac{22}{3},-\\frac23,8\\right)$."
  },
  "diag1-6": {
   "id": "diag1-6",
   "tenta": "diag1",
   "nr": 6,
   "poang": 4,
   "del": "G",
   "amnen": [
    "Linjära avbildningar",
    "rotation",
    "spegling",
    "invers"
   ],
   "typ": "linjar-avbildning",
   "avsnitt": [
    "1.8",
    "1.9"
   ],
   "uppgift": "Bestäm matrisen för den linjära avbildningen $T$ som är inversen till avbildningen som först roterar $\\pi/4$ moturs och sedan speglar i $x$-axeln. Bestäm $T(1,2)$.",
   "losning": "Rotation $\\pi/4$ moturs:\n$$R=\\begin{bmatrix}\\cos\\frac\\pi4&-\\sin\\frac\\pi4\\\\\\sin\\frac\\pi4&\\cos\\frac\\pi4\\end{bmatrix}=\\frac1{\\sqrt2}\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}.$$\nSpegling i $x$-axeln ($\\mathbf e_1\\mapsto\\mathbf e_1$, $\\mathbf e_2\\mapsto-\\mathbf e_2$): $S=\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$.\n\nFörst roterar, sedan speglar: $SR$. Inversen är $(SR)^{-1}=R^{-1}S^{-1}$, där $R^{-1}$ roterar $\\pi/4$ medurs och $S^{-1}=S$ (speglar tillbaka):\n$$R^{-1}=\\begin{bmatrix}\\cos(-\\frac\\pi4)&-\\sin(-\\frac\\pi4)\\\\\\sin(-\\frac\\pi4)&\\cos(-\\frac\\pi4)\\end{bmatrix}=\\frac1{\\sqrt2}\\begin{bmatrix}1&1\\\\-1&1\\end{bmatrix},$$\n$$(SR)^{-1}=\\frac1{\\sqrt2}\\begin{bmatrix}1&1\\\\-1&1\\end{bmatrix}\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}=\\frac1{\\sqrt2}\\begin{bmatrix}1&-1\\\\-1&-1\\end{bmatrix}.$$\n$$T(1,2)=\\frac1{\\sqrt2}\\begin{bmatrix}1&-1\\\\-1&-1\\end{bmatrix}\\begin{bmatrix}1\\\\2\\end{bmatrix}=\\frac1{\\sqrt2}\\begin{bmatrix}-1\\\\-3\\end{bmatrix}.$$\n[Figur: $(1,2)$, dess spegling i $x$-axeln och sedan rotationen medurs.]\n\n**Svar:** $T$ har matrisen $\\frac1{\\sqrt2}\\begin{bmatrix}1&-1\\\\-1&-1\\end{bmatrix}$; $T(1,2)=\\frac1{\\sqrt2}(-1,-3)$."
  },
  "diag1-7": {
   "id": "diag1-7",
   "tenta": "diag1",
   "nr": 7,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Determinanter",
    "radoperationer",
    "inverterbarhet"
   ],
   "typ": "determinantlagar",
   "avsnitt": [
    "1.6",
    "2.2",
    "2.3"
   ],
   "uppgift": "Avgör om\n$$\\begin{bmatrix}927&929&930&932\\\\928&930&931&933\\\\930&932&933&934\\\\931&933&934&935\\end{bmatrix}$$\när inverterbar.",
   "losning": "Matriser är inverterbara precis då determinanten är skild från 0. Bestäm determinanten. Dra bort rad 1 från övriga rader, sedan $3\\times$ rad 2 från rad 3 och $4\\times$ rad 2 från rad 4:\n$$\\begin{vmatrix}927&929&930&932\\\\928&930&931&933\\\\930&932&933&934\\\\931&933&934&935\\end{vmatrix}=\\begin{vmatrix}927&929&930&932\\\\1&1&1&1\\\\3&3&3&2\\\\4&4&4&3\\end{vmatrix}=\\begin{vmatrix}927&929&930&932\\\\1&1&1&1\\\\0&0&0&-1\\\\0&0&0&-1\\end{vmatrix}=0.$$\nDe två sista raderna är lika, så determinanten är noll.\n\n**Svar:** Matrisen är inte inverterbar.\n\nAnm.: Opererar man i stället på kolonner (dra kolonn 1 från övriga) går det ännu snabbare: andra och tredje kolonnen blir $(2,2,2,2)^T$ och $(3,3,3,3)^T$, som är multipler av varandra, så determinanten är noll."
  },
  "diag1-8": {
   "id": "diag1-8",
   "tenta": "diag1",
   "nr": 8,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Determinanter",
    "skevsymmetri",
    "bevis"
   ],
   "typ": "bevis",
   "avsnitt": [
    "1.7",
    "2.2",
    "2.3"
   ],
   "uppgift": "En matris som uppfyller $A^T=-A$ kallas skevsymmetrisk. Vad kan sägas om determinanten för skevsymmetriska matriser med ett udda antal rader?",
   "losning": "Antag $A$ är $n\\times n$, $n$ udda och $A^T=-A$. Man får\n$$\\det(A)\\overset{\\text{determinantlag}}{=}\\det(A^T)\\overset{A\\text{ skevsym.}}{=}\\det(-A)\\overset{\\text{bryt ut }-1\\text{ ur varje rad}}{=}(-1)^n\\det A\\overset{n\\text{ udda}}{=}-\\det A$$\n$$\\iff2\\det A=0\\iff\\det A=0.$$\n**Svar:** Determinanten är $0$."
  },
  "diag1-9": {
   "id": "diag1-9",
   "tenta": "diag1",
   "nr": 9,
   "poang": 4,
   "del": "VG",
   "amnen": [
    "Spår",
    "bevis",
    "similära matriser"
   ],
   "typ": "bevis",
   "avsnitt": [
    "1.3",
    "5.2"
   ],
   "uppgift": "Spåret för en kvadratisk matris är summan av diagonalelementen. Låt $A$, $B$ vara $n\\times n$ matriser. Visa att spåret för $AB$ är samma som spåret för $BA$. Utnyttja detta för att visa om $A=PBP^{-1}$ är spåret för $A$ och $B$ lika.",
   "losning": "$A=(a_{ij})$, $B=(b_{ij})$, $\\operatorname{tr}A=\\sum_{i=1}^na_{ii}$ (spåret, *trace* på engelska). Man får\n$$\\operatorname{tr}(AB)=\\sum_{i=1}^n(AB)_{ii}=\\sum_{i=1}^n\\sum_{j=1}^na_{ij}b_{ji}=\\sum_{i,j=1}^na_{ij}b_{ji},$$\nmen\n$$\\operatorname{tr}(BA)=\\sum_{i=1}^n(BA)_{ii}=\\sum_{i=1}^n\\sum_{j=1}^nb_{ij}a_{ji}=\\sum_{i,j=1}^nb_{ij}a_{ji},$$\nvilket är samma summa (byt namn på $i$ och $j$).\n\nAndra delen:\n$$\\operatorname{tr}A=\\operatorname{tr}(PBP^{-1})=\\operatorname{tr}\\big(P(BP^{-1})\\big)\\overset{\\text{ovan}}{=}\\operatorname{tr}\\big((BP^{-1})P\\big)=\\operatorname{tr}(BP^{-1}P)=\\operatorname{tr}(BI)=\\operatorname{tr}B.$$"
  }
 },
 "typer": {
  "gausselimination": {
   "namn": "Gausselimination och lösbarhet",
   "mall": "Lösbarhet av $A\\mathbf x=\\mathbf b$"
  },
  "parametersystem": {
   "namn": "System med parameter",
   "mall": "System med parameter $a$ (kvadratisk matris)"
  },
  "matrisekvation": {
   "namn": "Invers och matrisekvation",
   "mall": "Matrisekvation"
  },
  "linjar-avbildning": {
   "namn": "Linjär avbildning",
   "mall": "Standardmatris för $T$"
  },
  "spegling-projektion": {
   "namn": "Spegling och projektion",
   "mall": "Spegling/projektion i linje eller plan"
  },
  "plan-avstand": {
   "namn": "Linjer, plan och avstånd",
   "mall": "Avstånd punkt–plan / linje–plan / linje–linje"
  },
  "bas-dimension": {
   "namn": "Linjärt oberoende, bas, koordinater",
   "mall": "Linjärt oberoende"
  },
  "nollrum-kolonnrum": {
   "namn": "Kolonnrum, nollrum, rang",
   "mall": "Bas för $\\operatorname{col}(A)$ / $\\operatorname{span}$"
  },
  "underrum": {
   "namn": "Underrum",
   "mall": "Underrum (bevis)"
  },
  "determinantlagar": {
   "namn": "Determinantlagar",
   "mall": "Determinantlagar"
  },
  "diagonalisering": {
   "namn": "Egenvärden och diagonalisering",
   "mall": "Diagonalisering"
  },
  "diffekv-system": {
   "namn": "Differentialekvationssystem",
   "mall": "Differentialekvationssystem"
  },
  "inre-produktrum": {
   "namn": "Inre produktrum och projektion",
   "mall": "Projektion/bästa approximation i funktionsrum"
  },
  "gram-schmidt": {
   "namn": "Gram–Schmidt",
   "mall": "Gram–Schmidt"
  },
  "minsta-kvadrat": {
   "namn": "Minsta kvadratmetoden",
   "mall": "Minsta kvadrat"
  },
  "bevis": {
   "namn": "Bevis",
   "mall": "Bevis allmänt"
  }
 },
 "avsnitt": {
  "1.1": "Linjära ekvationssystem",
  "1.2": "Gausselimination",
  "1.3": "Matriser och matrisoperationer",
  "1.4": "Matrisinvers",
  "1.5": "Elementära matriser",
  "1.6": "Mer om linjära system och inverterbara matriser",
  "1.7": "Diagonala, triangulära och symmetriska matriser",
  "1.8": "Linjära avbildningar",
  "1.9": "Sammansättning och inverterbarhet av avbildningar",
  "2.1": "Determinanter via kofaktorutveckling",
  "2.2": "Determinanter via radreduktion",
  "2.3": "Egenskaper hos determinanter, Cramers regel",
  "3.1": "Vektorer i planet, rummet och R^n",
  "3.2": "Norm, skalärprodukt och avstånd",
  "3.3": "Ortogonalitet och projektion",
  "3.4": "Geometrin för linjära system",
  "3.5": "Kryssprodukt",
  "4.1": "Reella vektorrum",
  "4.2": "Underrum",
  "4.3": "Linjärt hölje",
  "4.4": "Linjärt oberoende",
  "4.5": "Bas och koordinater",
  "4.6": "Dimension",
  "4.7": "Basbyte",
  "4.8": "Radrum, kolonnrum och nollrum",
  "4.9": "Rang och nullitet",
  "5.1": "Egenvärden och egenvektorer",
  "5.2": "Diagonalisering",
  "5.4": "Tillämpning: differentialekvationer",
  "6.1": "Skalärproduktsrum",
  "6.2": "Vinkel och ortogonalitet i skalärproduktsrum",
  "6.3": "Gram–Schmidt och QR-faktorisering",
  "6.4": "Bästa approximation, minsta kvadratmetoden",
  "6.5": "Minsta kvadratanpassning av data",
  "6.6": "Funktionsapproximation, Fourierserier"
 }
};
