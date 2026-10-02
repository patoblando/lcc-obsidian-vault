De la condición suficiente y necesaria de integrabilidad. Para la ida, ¿Cómo aparece $\varepsilon$? ¿Qué lema uso para elegir una partición?

---

Unna función $f : [a,b] \to \mathbb{R}$ acotada, es integrable si y sólo si, dado $\varepsilon>0$, existe una partición $P$ ligada a $\varepsilon$, de $[a,b]$ para la cual
$$
U(f,P)-L(f,P) < \varepsilon.
$$
Es decir, puedo hacer esa diferencia tan pequeña como me plazca.

$\implies)$ Como $\int_{a}^{b} f$ es al mismo tiempo el supremo y el ínfimo, si le resto cualquier cosa (por ejemplo $\frac{\varepsilon}{2}$) deben existir sumas superiores/inferiores entre el ínfimo/supremo del conjunto y la resta. O sea
$$
\int_{a}^{b} f \,  -L(f,P_{1}) < \frac{\varepsilon}{2} \ \text{y}\ 
$$