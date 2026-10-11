---
noteId: 1791587474699
---

De la condición suficiente y necesaria de integrabilidad. ¿Cómo aparece $\varepsilon$ en la ida y que lema uso? ¿Cómo se demuestra la vuelta?

---

Una función $f : [a,b] \to \mathbb{R}$ acotada, es integrable si y sólo si, dado $\varepsilon>0$, existe una partición $P$ ligada a $\varepsilon$, de $[a,b]$ para la cual
$$
U(f,P)-L(f,P) < \varepsilon.
$$
Es decir, puedo hacer esa diferencia tan pequeña como me plazca.


$\implies)$ Sea $f$ integrable.  El $\varepsilon$ aparece por la [[caracterización de ínfimo y supremo]]. Tenemos que, para todo $\frac{\varepsilon}{2} > 0$, sea $\underline{\int}_{a}^{b} f \, = \int_{a}^{b} f \,$ el supremo de todas las sumas inferiores vale
$$
\int_{a}^{b} f \,  -\frac{\varepsilon}{2}<L(f,P_{1})
$$





$\impliedby)$  Si para cualquier $\varepsilon$ existe $P$ partición tal que se da la diferencia, entonces, por definición de integral superior e integral inferior y de supremo e ínfimo
$$
0\leq \overline{\int}_{a}^{b} f \, - \underline{\int}_{a}^{b} f \, \leq U(f,P)-L(f,P)< \varepsilon.
$$
Luego de la arbitrariedad de $\varepsilon$ las integrales sup e inf son iguales, resultando $f$ integrable.