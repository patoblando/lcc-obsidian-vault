¿Cómo se define semántica para el cuantificador universal y el existencial? De un ejemplo y uselo para dar una idea conceptual de que hace $s[x_{i}\mapsto a]$ y como se usa en las definiciones.

---

# Cuantificadores:

## Universal
$\left[ \! \left[ \forall x_{i}\phi \right] \! \right]_{\mathcal{M},s}=min\left\{ {\left[ \! \left[ \phi \right] \! \right]_{\mathcal{M},s[x_{i}\mapsto a]}|a\in \left| \mathcal{M} \right|} \right\}$

## Existencial:
$\left[ \! \left[ \exists x_{i}\phi \right] \! \right]_{\mathcal{M},s}=max\left\{ {\left[ \! \left[ \phi \right] \! \right]_{\mathcal{M},s[x_{i}\mapsto a]}|a\in \left| \mathcal{M} \right|} \right\}$

Donde $s[x_{i}\mapsto a]$ es un nuevo entorno, que coincide con $s$ en todas las variables salvo, (quizás) en $x_{i}$, donde vale $a$.

Lo vemos con un ejemplo sencillo, dada la fórmula $\forall x(P(x))$. Suponete que mi universo es $\left| \mathcal{M} \right| =\left\{ 2,4,6 \right\}$. Entonces, nos quedaría:
$$
\begin{align}
\left[ \! \left[ \forall x(P(x)) \right] \! \right]_{\mathcal{M},s}  & = min\left\{ \left[ \! \left[ \phi \right] \! \right]_{\mathcal{M},s[x\mapsto a]}\ | \ a\in \left| \mathcal{M} \right|  \right\} \\
 & =\left\{ \left[ \! \left[ 2 \right] \! \right]_{\mathcal{M},s} ,\left[ \! \left[ 4 \right] \! \right]_{\mathcal{M},s} ,\left[ \! \left[ 6 \right] \! \right]_{\mathcal{M},s}  \right\}
\end{align}
$$
Esto es porque el $s$ normal para lo que sirve es para *definir* variables. Similar a en `c` cuando hago `int i = 2`. Sin embargo el operador $s[x_{1}\mapsto a]$ te dice "agarra todas las variables de $\phi$ y dejalas igual, menos $x_{i}$ porque en esq quiero meter $a$, que está recorriendo todo el universo".