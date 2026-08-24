---
noteId: 1786043624736
---


¿Cómo se demuestra el teorema de intercalación?

---

Tenemos las funciones $f,g,h$ tal que existe un entorno $E'(a,\rho)$ donde,
$$
g(x) \leq f(x) \leq h(x)
$$
Y además existen los límites
$$
\lim_{ x \to a } g(x) = \ell = \lim_{ x \to a } h(x)
$$
Luego, para todo$\varepsilon > 0$, sean $\delta_{1}$ y $\delta_{2}$, para los cuales valen
$$
0 < \left| x-a \right|<\delta_{1} \implies \left| g(x) - \ell \right| < \varepsilon \quad \text{ y } \quad 0 < \left| x -a \right| < \delta_{2} \implies \left| h(x) - \ell \right| < \varepsilon
$$
Entonces, para $\delta \leq \min\{\rho,\delta_{1},\delta_{2}\}$, y $x$ tal que
$$
0 < \left| x - a \right| <\delta \implies \begin{cases}
g(x) \leq f(x) \leq h(x) \\
\ell - \varepsilon < g(x) \\
h(x) < \ell + \varepsilon
\end{cases}
$$
combinando las tres desigualdades, se tiene que
$$
\begin{align}
 & \ell - \varepsilon < g(x) \leq f(x) \leq h(x) \leq \ell + \varepsilon \\
 & \implies \ell - \varepsilon < f(x) < \ell + \varepsilon \\
 & \implies -\varepsilon < f(x) - \ell < \varepsilon \\
 & \implies \left| f(x) - \ell \right| < \varepsilon & 
\end{align}
$$
