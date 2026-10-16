---
noteId: 1792117376313
---

¿Cómo evitamos la captura de variables? Defina término $t$ **libre** para $x_{i}$ en una fórmula $\phi$.

---

Cuidando a nuestras variables y diciendoles que no hablen con extraños.
Digo.
Para no alterar el significado en $\phi [t/x_{i}]$, debemos asegurarnos de que $t$ **libre** para $x_{i}$ en $\phi$.
Un término $t$ está libre para una variable $x_{i}$ en una fórmula $\phi$ sii
- $\phi$ es atómica
- $\phi \equiv \phi_{1} \square \phi_{2}$ y $t$ está libre para $x_{i}$ en $\phi_{1}$ y $\phi_{2}$
- $\phi \equiv \neg \phi_{1}$ y $t$ está libre para $x_{i}$ en $\phi_{1}$ 
- $\phi \equiv \forall y\phi_{1}$ o $\phi \equiv \exists y\phi_{1}$ y además si $x \in FV(\phi)$, se cumple
    - t está libre para $x$ en $\phi_{1}$
    - $y \not\in FV(t)$