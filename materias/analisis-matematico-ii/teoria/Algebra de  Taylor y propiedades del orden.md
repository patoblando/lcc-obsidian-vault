Si $f$ y $g$  son dos funciones derivables hasta el orden $n$ en el punto $a$ entonces son 
válidas las siguientes propiedades para el operador de Taylor, $T_{n}$:
1. Si $\alpha$ y $\beta$ son constantes reales, entonces $$T_{n}(\alpha f + \beta g, a)(x) = \alpha T_{n}(f,a)(x) + \beta T_{n}(g,a)(x).$$
2. Si $c \in \mathbb{R}$ y $g(x) = f(cx)$ entonces si $ca \in Dom(f)$, vale $$
T_{n}(g,a)(x)=T_{n}(f,ca)(cx).
$$
3. La derivada del polinomio de Taylor de $f$ es el polinomio de Taylor de $f'$, es decir $$
T_{n}(f,a)'(x) = T_{n-1}(f',a)(x).
$$
4. Una integral definida del polinomio  de Taylor de $f$ es el polinomio de Taylor de una integral indefinida de $f$, es decir si $g( x )= \int_{a}^{x}f(t)dt$ vale $$
T_{n + 1} (g,a)(x) = \int_{a}^{x}T_{n}(f,a)(t)dt.
$$