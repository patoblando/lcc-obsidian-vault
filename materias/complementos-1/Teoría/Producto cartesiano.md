Dados dos grafos $G$ y $H$, el _grafo producto cartesiano_ de $G$ y $H$ es el grafo denotado $G \square H$, cuyo conjunto de vértices es $V(G) \times V(H)$ y dos vértices $gh$ y $g'h'$ son adyacentes si $[g = g' \text{ y } hh' \in E(H)]$ o el análogo para $E(G)$. Es decir,
$$
\begin{align}
V(G\square H)&= V(G) \times V(H)\\
E(G\square H)  & = \{ ghg'h' : [g=g' \land hh' \in E(H) ]\lor gg' \in E(G) \land h=h'\} \\
\end{align}
$$