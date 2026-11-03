---
noteId: 1793724614104
---

Sean $s,s':Var\to \mathcal{M}$. Si $s$ y $s'$ coinciden en todas las variables libres de $\phi$, entonces
$$
\text{??}
$$
¿Sobre que definición hago inducción para demostrar esto? ¿Cuáles son los *casos base* para esta demostración?

---

Sean $s,s':Var\to \mathcal{M}$. Si $s$ y $s'$ coinciden en todas las variables libres de $\phi$, entonces
$$
\left[ \! \left[ \phi \right] \! \right]_{\mathcal{M},s} = \left[ \! \left[ \phi \right] \! \right]_{\mathcal{M},s'}
$$

Los casos base son:
- $\phi \equiv \perp$
- Si $ar(P_{i}=0)$ entonces $\phi\equiv P_{i}$ es un caso base
- Si $ar(P_{i})=n>0$, y $t_{1},t_{2},\dots,t_{n}\in \mathrm{TERM}_{\mathcal{F}}$ entonces $\phi\equiv P_{i}$ es un caso base[^1]
- $\phi\equiv t_{1}=t_{2}$[^1]

[^1]: Acá necesito un lema que, sean los $s,s'$ de la premisa y $t \in \mathrm{TERM}$, entonces 
    $$
    \left[ \! \left[ t \right] \! \right]_{\mathcal{M},s} = \left[ \! \left[ t \right] \! \right]_{\mathcal{M},s'} 
    $$
