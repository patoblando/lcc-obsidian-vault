---
noteId: 1787426862831
---

Defina secuencia de formación.

---

Una secuencia $\phi_{0}, \phi_{1},\dots,\phi_{n}$ es una **secuencia de formación** para $\phi \in Prop$ sii
- $\phi_{n} =\phi$
- $$
\begin{align}
\forall i \leq n,  & \phi_{i} \text{ es atómica o} \\
 & \phi_{i} = (\phi_{k} \square \phi_{j}) \text{ para algún } k,j < i \text{ con } \square \in \{ \land, \lor, \to \} \\
 & \phi_{i}=( \neg \phi_{j})\text{para algún } j < i
\end{align}
$$