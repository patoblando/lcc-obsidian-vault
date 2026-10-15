Sean $t \in \mathrm{TERM}$ y $\phi \in \mathrm{Form}$, definimos $\phi[t/x_{i}]$ por recursión en $\phi$:
$$
\begin{array}{lcl}
\perp [t/x_{i}] & = & \perp \\
P_{i}(t_{1},\dots,t_{n})[t/x_{i}] & = & P_{i}(t_{1}[t/x_{i}],\dots,t_{n}[t/x_{i}]) \\
(\neg \phi)[t/x_{i}]  & = & \neg(\phi [t/x_{i}]) \\
(\forall x_{j}[t/x_{i}]) & = & 
    \begin{cases}
    ?? & \text{si } i=j \\
    ?? & \text{si } i\cancel=j
    \end{cases} \\
(\exists x_{j}[t/x_{i}]) & = & 
    \begin{cases}
    ?? & \text{si } i=j \\
    ?? & \text{si } i\cancel=j
    \end{cases}   
\end{array}
$$

---

$$
\begin{array}{lcl}
\perp [t/x_{i}] & = & \perp \\
P_{i}(t_{1},\dots,t_{n})[t/x_{i}] & = & P_{i}(t_{1}[t/x_{i}],\dots,t_{n}[t/x_{i}]) \\
(\neg \phi)[t/x_{i}]  & = & \neg(\phi [t/x_{i}]) \\
(\forall x_{j}[t/x_{i}]) & = & 
    \begin{cases}
    (\forall x_{j}\phi) & \text{si } i=j \\
    (\forall x_{j}\phi)[t/x_{i}] & \text{si } i\cancel=j
    \end{cases} \\
(\exists x_{j}[t/x_{i}]) & = & 
    \begin{cases}
    (\exists x_{j}\phi) & \text{si } i=j \\
    (\exists x_{j}\phi)[t/x_{i}] & \text{si } i\cancel=j
    \end{cases}   
\end{array}
$$
