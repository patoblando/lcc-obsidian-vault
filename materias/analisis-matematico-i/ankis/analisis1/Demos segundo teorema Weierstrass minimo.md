---
noteId: 1786043624662
---

Defina la función auxiliar que se utiliza en la demostración del teorema de Weierstrass para demostrar que $f$ alcanza su ***mínimo absoluto*** en $[a,b]$.

---

Sea $m$ el ínfimo de $Rec(f)$. Supongamos que $m$ no pertenece a $\mathrm{Re}c(f)$. Luego, vale que $\forall x \in [a,b] : m < f(x) \implies m - f(x) < 0$. Luego está bien definida la función $g$ en el intervalo $[a,b]$ tal que,
$$
g(x) = \frac{1}{m - f(x)}
$$
Está función es continua en $[a,b]$ por ser la recíproca de una función continua que no se anula en $[a,b]$. Luego por el primer teorema de Weierstrass está acotada en $[a,b]$. Sea $m'$ el valor tal que $m' < g(x), \forall x \in [a,b]$. Se tiene
$$
\begin{align}
 & m' < g(x) < 0\\
 & \implies m' < \frac{1}{m - f(x)} < 0 \\
 & \implies m - f(x) < \frac{1}{m'} < 0\\ 
 & \implies m < \frac{1}{m'} + f(x) < f(x) \\
 & \implies m -\frac{1}{m'} < f(x)\\
\end{align}
$$
Luego, como $m' < 0$, $m < m - \frac{1}{m'}$ (pues $-\frac{1}{m'}$ es un valor positivo), entonces nos queda
$$
m < m - \frac{1}{m'}  < f(x)
$$
Esto quiere decir que $Rec(f)$ admite una cota inferior estrictamente mayor que el número $m$, asumido como ínfimo del conjunto. Absurdo, por lo tanto $m$ debe pertenecer a $Rec(f)$.