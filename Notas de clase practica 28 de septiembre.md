
# Práctica 3 

## Ejercicio 8
Sea $T: R^{3} \to R^{3}$ tal que $T(v) = (x + y, x + z, \alpha(v))^{t}$, donde $v = (x, y, z)^{t}$  y $\alpha : \mathbb{R}^{3} \to \mathbb{R}$. Determinar, si es posible, $\alpha$ de modo que T resulte lineal


Qeueremos que T verifique>

$\forall \vec{v}_{1} = (x_{1}, y_{1},z_{1})^{t}; \vec{v}_{2} = (x_{2}, y_{2},z_{2})^{t} \in \mathbb{R}^{3}$

1. $T(v_{1} + \vec{v}_{2}) = T(v_{1}) +Tv_{2}$ 
2. $T(\alpha \vec{v}) = \alpha T(\vec{v})$

Luego:

$$
\begin{align}
T(v_{1} + \vec{v}_{2}) &= T((x_{1}, y_{1},z_{1})^{t} + (x_{2}, y_{2},z_{2})^{t}) \\
&= T(x_{1}+x_{2},y_{1}+y_{2},z_{1}+z_{2})^{t}  \\
 & = ((x_{1}+x_{2}) + (y_{1}+y_{2}), (x_{1}+x_{2}) +(z_{1}+z_{2}), \alpha((x_{1}+x_{2},y_{1}+y_{2},z_{1}+z_{2}))^{t}  \\
\tag{(1)}
\end{align}
$$
$$
\begin{align}
T(\vec{v}_{1}) + T(\vec{v}_{2})  & = T((x_{1}, y_{1},z_{1})^{t}) + T((x_{2}, y_{2},z_{2})^{t}) \\
 & = \dots \\
 & = ((x_{1}+y_{1}) + (x_{2}+y_{2}), (x_{1}+z_{1}) +(x_{2}+z_{2}), \alpha((x_{1},y_{1},z_{1})^{t}) + \alpha((x_{2},y_{2},z_{2})^{t}))  
\end{align}
$$



