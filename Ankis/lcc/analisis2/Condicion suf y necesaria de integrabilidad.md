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


$\implies)$ Sea $f$ integrable.  El $\varepsilon$ aparece por la [[caracterización de supremo]]. Tenemos que, para todo $\frac{\varepsilon}{2} > 0$, sea $\underline{\int}_{a}^{b} f \, = \int_{a}^{b} f \,$ el supremo de todas las sumas inferiores vale
$$
\int_{a}^{b} f \,  -\frac{\varepsilon}{2}<L(f,P_{1})
$$
por lo que
$$
\int_{a}^{b} f \,  -L(f,P_{1})< \frac{\varepsilon}{2}\tag{1}
$$
De manera similar, por [[caracterización de ínfimo]] 
$$
U(f,P_{2}) < \int_{a}^{b} f \, + \frac{\varepsilon}{2}
$$
luego
$$
U(f,P_{2}) - \int_{a}^{b} f \,<\frac{\varepsilon}{2} \tag{2} 
$$
Ahora, sea $P = P_{1} \cup P_{2}$, se tiene que 
$$
U(f,P)\leq U(f,P_{2}) \text{ y } L(f,P_{1})\leq L(f,P). \tag{3}
$$
Entonces, reemplazando donde corresponde usando $(3)$, y sumando $(1)$ y $(2)$ llegamos a:
$$
U(f,P)-L(f,P)<\varepsilon .
$$
$\impliedby)$  Si para cualquier $\varepsilon$ existe $P$ partición tal que se da la diferencia, entonces, por definición de integral superior e integral inferior y de supremo e ínfimo
$$
0\leq \overline{\int}_{a}^{b} f \, - \underline{\int}_{a}^{b} f \, \leq U(f,P)-L(f,P)< \varepsilon.
$$
Luego de la arbitrariedad de $\varepsilon$ las integrales sup e inf son iguales, resultando $f$ integrable.