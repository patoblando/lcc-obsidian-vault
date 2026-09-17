---
noteId: 1789609240192
---

Sea el lema 3:

Sea $\Gamma \subseteq Prop, \phi \in Prop$.

- Si $\Gamma \cup \left\{ \neg \phi \right\}$ inconsistente, entonces ~~$\Gamma \vdash \phi$~~.
- Si $\Gamma \cup \left\{ \phi \right\}$ inconsistente, entonces ~~$\Gamma \vdash \neg\phi$~~.


¿Con que se demuestra esto?

---

Se demuestra usando, para la primera parte, RAA (introducción de la negación seguido de eliminación de la doble negación):
- Si el secuente $\Gamma \cup \left\{ \neg\phi \right\}\vdash \perp$ es válido, también lo es el secuente $\Gamma \vdash \phi$.
Para la segunda parte, es introducción de la negación.
- Si el secuente $\Gamma \cup \left\{ \phi \right\}\vdash \perp$ es válido, también lo es el secuente $\Gamma \vdash \neg\phi$.

