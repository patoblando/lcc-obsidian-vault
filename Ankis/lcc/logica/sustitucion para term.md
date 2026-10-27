---
noteId: 1793123583503
---

Sean $s, t \in \mathrm{Var}$ y $x_{i} \in \mathrm{Var}$. Definimos la sustitución de $x_{i}$ por $t$ en $s$ por recursión en s:

---

$$
\begin{array}{llcl}
(\text{vars}) &  x_{j}[t/x_{i}]  & = &   \begin{cases}
        x_{j}  & \text{ si } i \neq j \\
        t  & \text{ si } i = j
    \end{cases}\\
(\text{ctes}) & c[t/x_{i}] & =  & c \\
(\text{func}) & f(t_{1},\dots,t_{n}) & = & f(t_{1}[t/x_{i}],\dots,t_{n}[t/x_{i}])
\end{array}
$$
