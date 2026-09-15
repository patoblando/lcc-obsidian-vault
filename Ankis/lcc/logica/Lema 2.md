---
noteId: 1789495072428
---

Sea $\Gamma \in Prop$. Si existe una valuación $v$ tal que $\left[ \! \left[ \Gamma \right] \! \right]_{v} = T$, entonces $\Gamma$ es ~~consistente~~. 
¿Qué usamos para demostrar este lema?

---

Asumimos que existe la valuación y que es inconsistente (es decir $\Gamma \vdash \perp$), luego usamos soundness para concluir que para esa valuación $\left[ \! \left[ \perp \right] \! \right]_{v}=T$ lo cual es absurdo por la definición de valuación. 