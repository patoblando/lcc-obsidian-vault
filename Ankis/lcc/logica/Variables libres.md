Defina intuitivamente variables libres. De las dos lineas más significativas de la definición.

---

Una *variable libre* es un elemento $x \in Var$ tal que dicho elemento no está siendo utilizado con un $\forall$ o $\exists$. Estos símbolso, que durante esta unidad no nos dicen nada, nos indican que variables están **ligadas**. Por eso, en una fórmula cualquiera $\phi$, las variables libres son todas menos las que estén precedidas por uno de aquellos símbolos. En la definición recursiva quedan las dos líneas
$$
\begin{array}{lcl}
FV(\forall x_{i}\phi) & = & FV(\phi)-\left\{ x_{i} \right\} \\
FV(\exists x_{i}\phi) & = & FV(\phi)-\left\{ x_{i} \right\}.
\end{array}
$$
$\mathcal{P}(Var)$