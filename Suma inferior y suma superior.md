Observamos que sea la función $f$ acotada en el intervalo $[a,b]$, seguirá que ella también estará acotada en cada intervalo $[t_{k-1},t_{k}]$ definido por P, para $k=1,2,\dots n$, y en cada uno de ellos estarán bien definidos los valores
$$m_{k} = \text{inf}\{ f(x): t_{k-1} \leq x \leq t_{k} \} = \inf_{x \in [t_{k-1},t_{k}]}f(x) = \inf_{[t_{k-1},t_{k}]}f$$ $$m_{k} = \text{sup}\{ f(x): t_{k-1} \leq x \leq t_{k} \} = \sup{x \in [t_{k-1},t_{k}]}f(x) = \sup{[t_{k-1},t_{k}]}f$$
Dada $f: [a,b] \to \mathbb{R}$ una función acotada y $P$ partición de $[a,b]$, se define _suma superior_ y _suma inferior_ de $f$ asociada a P como las respectivas cantidades, notando $\Delta t_{k} = t_{k}-t_{k-1}$ ,
$$
L(f,P) = \sum_{k=1}^{n}m_{k}\Delta t_{k}
$$