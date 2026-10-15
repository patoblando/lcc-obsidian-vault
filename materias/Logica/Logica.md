Índices:

# Apuntes

0. [[U0-sintaxis-predicados.pdf]]
1. [[U1-semantica-logica-proposicional.pdf]]
2. [[U2-deduccion-natural.pdf]]
3. [[U3-completitud.pdf]]
4. [[U4-sintaxis-predicados.pdf]]
5. [[U5-semantica-predicados.pdf]]

# Prácticas

1. [[P1-semprop.pdf]]
2. [[P2-deducnat.pdf]]
3. [[P3-completitud.pdf]]
4. [[P4-sintaxis-predicados.pdf]]
5. [[P4-sintaxis-predicados.pdf]]


# Extras

Definición de variables libres en $\mathrm{TERM}$:
$$
\begin{array}{lcll}
FV_{T} & : & \mathrm{TERM}\to 2^{Var} \\
f_{i} & \mapsto & \emptyset  \\
x_{i}  & \mapsto &  \left\{ x_{i} \right\} \\
f_{i}(t_{1},t_{2},\dots,t_{n}) & \mapsto & (t_{1})\ \cup \ (t_{2}) \ \cup \ \dots\ \cup\ (t_{n})
\end{array}
$$