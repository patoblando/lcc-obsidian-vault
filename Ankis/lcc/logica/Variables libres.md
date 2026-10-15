Defina intuitivamente variables libres. De las dos l
$$
\begin{array}{lcll}
FV_{T} & : & \mathrm{TERM}\to 2^{Var} \\
FV_{T}(x_{i})  &
 = &  \left\{ x_{i} \right\} \\
FV_{T}(f_{i}) & = & \emptyset  \\
FV_{T}(f_{i}(t_{1},t_{2},\dots,t_{n})) & = & FV_{T}(t_{1})\ \cup \ FV_{T}(t_{2}) \ \cup \ \dots\ \cup\ FV_{T}(t_{n})
\end{array}
$$
