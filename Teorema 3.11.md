

Sean V, W [[Espacio Vectorial|e.v.]] sobre $\mathbb{K}$ $dimV = n, dimW = m$ para cada par de bases ordenadas B y B' de V y W respectivamente la aplicación que $T \in \mathcal{L}(V,W)$ le asigna $A \in \mathcal{M}_{m\times n}$ su matriz asociada relativa a cada B y B', es un isomorfismo entre los espacios vectoriales $\mathcal{L}(V,W)  \text{ y } \mathcal{M}_{m\times n}$

# Nota

$T\in \mathcal{L}(V)$, $dimV = n$, $B = v_{1}, \dots v_{n}$ base ordenada de V. La matriz asociada a t relativa a B, A denotada $A_{ij}$ definida por
$$
Tv_{j}=\sum_{i =1}^{n}A_{ij}v_{i} \quad , j= 1, \dots n
$$
en lugar de llamar A a esta matriz la denotaremos como $[T]_{B}$
$$
[Tv]_{B} = [T]_{B}[v]_{B}
$$

# Ejemplos

## 1

$V = \mathcal{M}_{n\times_{1}}(\mathbb{K})$
$W = \mathcal{M}_{m\times_{1}}(\mathbb{K})$

Sea $A \in \mathcal{M}_{m\times n}(\mathbb{K})$

$$
\begin{align}
T : &V \to W \\
& X\to TX=AX
\end{align}
$$
Si llamamos $B = e_{1},\dots, e_{n}$ (idem $B' e'$)
$$
\begin{align}
[X]_{B} & = X \\
[TX]_{B'} &= AX
\end{align}
$$

## 2

K cuerpo $T \in \mathcal{L}(\mathbb{K}^{2}), T(x_{1},x_{2}) = (x_{1},0)$

Sea $B = \{ e_{1}, e_{2}\}$

$$
\begin{align}
Te_{1}   = T(1,0)  = (1,0) \\
Te_{2}  =T(0,1) =(0,0)
\end{align}
$$
$$
T_{B} = \begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}
$$

## 3

Armo los vectores columna como las coordenadas del vector de aplicarle el operador lineal a cada una de los componentes de las bases
