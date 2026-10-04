---
noteId: 1791124855903
---

De la condición suficiente y necesaria de integrabilidad. Para la ida, ¿Cómo aparece $\varepsilon$? ¿Qué lema uso para elegir una partición?

---

Unna función $f : [a,b] \to \mathbb{R}$ acotada, es integrable si y sólo si, dado $\varepsilon>0$, existe una partición $P$ ligada a $\varepsilon$, de $[a,b]$ para la cual
$$
U(f,P)-L(f,P) < \varepsilon.
$$
Es decir, puedo hacer esa diferencia tan pequeña como me plazca.

$\implies)$ Como $\int_{a}^{b} f$ es el supremo de las sumas inferiores, si le resto cualquier cosa (por ejemplo $\frac{\varepsilon}{2}$) debe existir una suma inferior que sea mayor a la resta (por propiedad del supremo)

O sea que existe $P_{1}$ tal que:

$$
\begin{align}
\int_{a}^{b} f \, -\frac{\varepsilon}{2} < L(f,P_{1}) \\
\int_{a}^{b} f \,  -L(f,P_{1})< \frac{\varepsilon}{2}
\end{align}
$$
De manera parecida, como $\int_{a}^{b} f$ es el ínfimo de las sumas superiores, si le sumo $\frac{\varepsilon}{2}$, debe existir una suma superior más pequeña que la suma. Es decir existe $P_{2}$ tal que:
$$
\begin{align}
U(f,P_{2}) < \int_{a}^{b} f \, + \frac{\varepsilon}{2}  \\
U(f,P_{2}) - \int_{a}^{b} f \,  < \frac{\varepsilon}{2}
\end{align}
$$
(sin terminar)  