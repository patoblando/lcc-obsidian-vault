---
noteId: 1789495072221
---

¿Que afirma el teorema de *correctitud* o *soundness*? ¿Y el de completitud?

---

Sean $\Gamma \in \mathcal{P}(Prop)$ y $\phi \in Prop$:

Correctitud: *"Todo secuente válido es semánticamente correcto"*
$$
\text{Si } \Gamma \vdash \phi \text{ entonces } \Gamma \models \phi
$$

Completitud: *"Todo lo semánticamente correcto se puede demostrar con secuentes"*
$$
\text{Si } \Gamma \models \phi \text{ entonces } \Gamma \vdash \phi
$$

