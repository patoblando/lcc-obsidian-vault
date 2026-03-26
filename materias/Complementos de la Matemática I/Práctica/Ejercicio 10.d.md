#complementos1 #ejercicio

10. Para $n\geq 1$ el n-cubo \quad Q_{n} es el grafo cuyo conjunto de vértices es el conjunto de todas las n-uplas $(a_{1},\dots, a_{n})$ con $a_{i} \in \{ 0,1 \}$ para cada $i$, donde dos n-uplas son adyacentes si difieren en exactamente una coordenada.  

    d. Pruebe que $Q_{n}$ es [[Grafo bipartito|bipartito]] para cada $n\geq 1$.


# Solución

Lo resolveremos utilizando inducción sobre $n$. 

> Nota: Para simplificar la notación, voy a notar las aristas y los vértices de la siguiente forma: 
$$
u_{Q_{4}} = (1,0,1,1) := 1011, \quad w_{Q_{1}}=\{ (0),(1) \} := 01
 $$
> donde se sabe por contexto de que longitud son las uplas.
 
## Caso base
Sea $Q_{1}$ el n-cubo de 1-uplas. Luego, claramente
$$
V(Q_{q}) = \{ (1), (0) \} \quad \text{y} \quad E(Q_{1}) = \{ 10 \}.
$$
Además, por definición de producto escalar, se cumple que $E(Q_{1})\subseteq \{ 1 \} \times \{ 0 \}$. Así, por definición, $Q_{1}$ es [[Grafo bipartito|bipartito]].

## Paso inductivo
Supongamos por hipótesis inductiva que $Q_{n}$ es bipartito para algún $n \in \mathbb{N}$. Sea ahora el n-cubo $Q_{n+1}$. 

Como $Q_{n}$ es bipartito, esto quiere decir que, sea 