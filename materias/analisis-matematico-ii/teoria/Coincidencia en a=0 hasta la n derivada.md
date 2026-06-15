Si $f$ tiene [[derivada|derivadas]] hasta el orden $n$ en el punto $a=0$ y se busca un [[polinomio]] $p$ que coincida con $f$ en 0, en sus primeras $n$ derivadas, se plantean las $n$ ecuaciones:
$$
p(0) = f(0), p'(0) = f'(0),\dots,p^{(n)}(0)=f^{(n)}(0)
$$
Para cualquier caso excepto cuando $f^{(n)}(0)=0$, el grado de $p$ no puede ser menor o igual a $n-1$. Luego, planteamos el sistema de ecuaciones:
$$
\begin{cases}
p(x) & =c_{0} + c_{1}x+c_{2}x^2+\dots +c_{n}x^n & \to p(0) & =0! \cdot c_{0}\\
p'(x) & =1 \cdot c_{1}+2 \cdot c_{2}x+4 \cdot 3 c_{4}x^2+\dots+n(n-1) \cdot c_{n}x^{n-1} & \to p'(0) & =1! \cdot c_{1} \\
p''(x) & = 2 \cdot 1 \cdot c_{2} + 3 \cdot 2 \cdot c_{3}x + 4 \cdot 3 \cdot c_{4}x^2 + \dots + n(n-1) \cdot c_{n}x^{n-2} & \to p''(0)  & =2! \cdot c_{2} \\
p''' (x)  & = 3 \cdot 2 \cdot 1 \cdot c_{3}x + 4 \cdot 3 \cdot 2 \cdot c_{4}x + \dots + n(n-1) \cdot c_{n}x^{n-3} & \to p''(0)  & =3! \cdot c_{3} \\ 
\vdots  &  & \vdots \\
p^{(k)}(x) & = k!c_{k} + \frac{(k+1)!}{1!}c_{k+1} x + \frac{(k+2)!}{2!}c_{k+2}x^2+\dots+\frac{n!}{(n-k)!}c_{n}x^{n-k}  & \to p^{k}(0) & =k!\cdot c_{k} 
\end{cases}
$$
Las condiciones $p^{(k)}(0) = f^{(k)}(0)$, para todo $0 \leq k \leq n$, implicarían entonces los coeficientes
$$
c_{k}=\frac{p^{(k)}(0)}{k!}= \frac{f^{(k)}(0)}{k!}.
$$
De lo cual deducimos una fórmula para los coeficientes en función de los valores de f y sus derivadas. Es decir, existe un único polinomio $p$, cuyo grado será $n$ si $f^{(n)}(0) \neq 0$ y menor si no, que verifica las propiedades deseadas. Luego ya hos demostrado la siguiente proposición:

Si $f$ es una función con derivadas hasta el orden $n$ en el punto $a = 0$, existe un único polinomio $p$ de grado a lo sumo $n$ que satisface las $n+1$ condiciones
$$
p^{(k)}(0) = f^{(k)}(0) \text{, para todo } 0\leq k\leq n \text{, y su ley es } p(x) = \sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k.
$$

