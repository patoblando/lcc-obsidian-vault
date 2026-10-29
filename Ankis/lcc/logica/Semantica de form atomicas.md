Complete la definición de $\left[ \! \left[  \right] \! \right]_{\mathcal{M},s} : \mathrm{Form}\to{\left\{ F,T \right\}}$ y note la diferencia con $\left[ \! \left[  \right] \! \right]_{\mathcal{M},s}: \mathrm{TERM}\to \left| \mathcal{M} \right|$.

---

La definición para términos, los "interpreta". Le asigna valores de mi universo a las variables para después poder asignar valor $T$ o $F$ dependiendo de lo que definimos ahora:

Ahora sí podemos definir $\left[ \! \left[  \right] \! \right]_{\mathcal{M},s}:\mathrm{Form}\to \left\{ F,T \right\}$:

# Formulas atómicas

## Igualdad:
$\left[ \! \left[ t_{1}=t_{2} \right] \! \right]_{\mathcal{M},s}=T$ sii $\left[ \! \left[ t_{1} \right] \! \right]_{\mathcal{M},s}=\left[ \! \left[ t_{2} \right] \! \right]_{\mathcal{M},s}$

## Predicados:
Si $ar(p)=n>0$: $\left[ \! \left[ P(t_{1},\dots,t_{n}) \right] \! \right]_{\mathcal{M},s}=T$ sii $(\left[ \! \left[ t_{1} \right] \! \right]_{\mathcal{M},s},\dots,\left[ \! \left[ t_{n} \right] \! \right]_{\mathcal{M},s})\in P^\mathcal{M}$

## Bottom:
$\left[ \! \left[ \perp \right] \! \right]_{\mathcal{M},s}=F$

# Conectivos
1. (Todos los usuales de prop no cambian)
# Cuantificadores:

## Universal
$\left[ \! \left[ \forall x_{i}\phi \right] \! \right]_{\mathcal{M},s}=min\left\{ {\left[ \! \left[ \phi \right] \! \right]_{\mathcal{M},s[x_{i}\mapsto a]}|a\in \left| \mathcal{M} \right|} \right\}$

## Existencial:
$\left[ \! \left[ \exists x_{i}\phi \right] \! \right]_{\mathcal{M},s}=max\left\{ {\left[ \! \left[ \phi \right] \! \right]_{\mathcal{M},s[x_{i}\mapsto a]}|a\in \left| \mathcal{M} \right|} \right\}$

Donde $s[x_{i}\mapsto a]$ es un nuevo entorno, que coincide con $s$ en todas las variables salvo, (quizás) en $x_{i}$, donde vale $a$.