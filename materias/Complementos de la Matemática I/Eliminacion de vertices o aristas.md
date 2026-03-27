#complementos1 
# Eliminación de aristas
Sea $G$ un grafo, $E' \subseteq E(G)$ y $V'\subseteq V(G)$.
El grafo $G \backslash E'$ es el grafo obtenido de $G$ borrando las aristas en $E'$. Formalmente $V(G\backslash E') = V(G)$ y $E(G\backslash E') = E(G) - E'$. 

# Eliminación de vértices
El grafo $G-V'$ es el grafo obtenido de $G$ borrando los  vértices en $V'$  y todas las aristas de $G$ con al menos un extremo en $V'$. Formalmente, $v(G-V')=V(G)-V'$ y $E(G - V')=E(G)-\{ uv : u\in V' \lor v\in V' \}$.

