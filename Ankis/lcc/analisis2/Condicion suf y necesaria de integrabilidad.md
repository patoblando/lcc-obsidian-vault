---
noteId: 1791124855903
---

De la condición suficiente y necesaria de integrabilidad. Para la ida, ¿Cómo aparece $\varepsilon$ en la ida y que lema uso? ¿Cómo se demuestra la vuelta?

---

Una función $f : [a,b] \to \mathbb{R}$ acotada, es integrable si y sólo si, dado $\varepsilon>0$, existe una partición $P$ ligada a $\varepsilon$, de $[a,b]$ para la cual
$$
U(f,P)-L(f,P) < \varepsilon.
$$
Es decir, puedo hacer esa diferencia tan pequeña como me plazca.


$\implies)$  El $\varepsilon$ aparece por la definición de ínfimo y supremo, si le resto o sumo $\frac{\varepsilon}{2}$ a la integral, debe haber sumas superiores e inferiores entre el valor del area real y esta diferencia. Para unificarlas en una partición tomo la unión, que va a ser una mejor aproximación del area porque tiene más puntos, quedando la desigualdad
$$
U(f,P)-L(f,P) < \varepsilon.
$$
$\impliedby)$  Si para cualquier $\varepsilon$ existe $P$ partición tal que se da la diferencia, entonces, por definición de integral superior e integral inferior y de supremo e ínfimo
$$
0\leq \overline{\int}_{a}^{b} f \, - \underline{\int}_{a}^{b} f \, \leq U(f,P)-L(f,P)< \varepsilon.
$$
Luego de la arbitrariedad de $\varepsilon$ las integrales sup e inf son iguales, resultando $f$ integrable.