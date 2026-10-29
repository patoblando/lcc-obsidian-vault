Defina formalmente *interpretación de términos* para un modelo $\mathcal{M}$ de una signatura $(\mathcal{F},\mathcal{P})$.

---

Sea $\mathcal{M}$ un modelo para $(\mathcal{F},\mathcal{P})$, y $s:\mathrm{Var}\to \left| \mathcal{M} \right|$ (universo). Definimos $\left[ \! \left[ t \right] \! \right]_{\mathcal{M},s}$ por recursión en $t$:
$$
\begin{array}{lcll}
\left[ \! \left[ x_{i} \right] \! \right]_{\mathcal{M},s}  & = & s(x_{i})  &  \\
\left[ \! \left[ c \right] \! \right]_{\mathcal{M},s}  & = & c^\mathcal{M}  & \text{si } ar(c)=0 \\
\left[ \! \left[ f(t_{1},\dots,t_{n}) \right] \! \right]_{\mathcal{M},s}  & = & f^\mathcal{M}(\left[ \! \left[ t_{1} \right] \! \right]_{\mathcal{M},s} ,\dots,\left[ \! \left[ t_{n} \right] \! \right]_{\mathcal{M},s} ) & \text{si }ar(f)=n>0
\end{array}
$$
