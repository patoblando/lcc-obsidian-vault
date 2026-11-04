---
noteId: 1793724614104
---

Sean $s,s':Var\to \mathcal{M}$. Si $s$ y $s'$ coinciden en todas las variables libres de $\phi$, entonces
$$
\text{??}
$$
¿Sobre que definición hago inducción para demostrar esto? ¿Cuáles son los *casos base* para esta demostración? ¿Te acordás los pasos más importantes de la demostración?

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
  
Sí, los pasos *inductivos* más importantes son los de $\phi\equiv \forall x\psi$ y $\phi\equiv \exists x\psi$. Para demostrarlos, mi hipótesis inductiva es: $s$ y $s'$ coinciden en todas las variables libres de $\psi \implies \left[ \! \left[ \psi \right] \! \right]_{\mathcal{M},s}=\left[ \! \left[ ]\psi \right] \! \right]_{\mathcal{M},s'}$.   

[^1]: Acá necesito un lema que, sean los $s,s'$ de la premisa y $t \in \mathrm{TERM}$, entonces 
    $$
    \left[ \! \left[ t \right] \! \right]_{\mathcal{M},s} = \left[ \! \left[ t \right] \! \right]_{\mathcal{M},s'} 
    $$
