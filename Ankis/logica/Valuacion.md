
Defina valuación.

---

Se define por inducción la 
$$\left[ \!\left[ \quad\right]\! \right]_{v} : Prop \to \{ T,F \}$$
por inducción en Prop:
$$
\begin{array}{ll}
\left[\!\left[ \perp \right]\!\right]_{v} & = F \\
\left[\!\left[ p_{i} \right]\!\right]_{v} & = v(p_{i}) \\
\left[\!\left[ \phi \land \psi \right]\!\right]_{v} & = \min\!\left(\left[\!\left[ \phi \right]\!\right]_{v}, \left[\!\left[ \psi \right]\!\right]_{v}\right) \\
\left[\!\left[ \phi \lor \psi \right]\!\right]_{v} & = \max\!\left(\left[\!\left[ \phi \right]\!\right]_{v}, \left[\!\left[ \psi \right]\!\right]_{v}\right) \\
\left[ \! \left[ \phi\to \psi \right] \! \right]_{v}  & =T \text{ si y sólo si } \left[ \! \left[ \phi \right] \! \right]_{v} \leq \left[ \! \left[ \psi \right] \! \right]_{v}   \\
\left[ \! \left[ \neg \phi \right] \! \right]_{v}  & = F\text{ si y sólo si } \left[ \! \left[ \phi \right] \! \right]_{v} =T  \\
\end{array}
$$