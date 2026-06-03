Sea $G$ un [[Grafo|grafos]] con $\left| V(G)= n\right| \geq 1$, los siguiente enunciados son equivalnetes.
1. $G$ es [[Conexo Disconexo|conexo]] y [[Definición acíclico, bosque, árbol y hoja|acíclico]]
2. $G$ es conexo y $\left| E(G) \right| = n-1$
3. $G$ es acíclico y $\left| E(G) \right|= n-1$
4. $G$ no tiene bucles y, para cada par de vértices $u,v \in V(G)$, existe un único $u,v$-[[Camino Simple|camino simple]].

*Demostración*.

(...)

$(4) \implies (1) \text{ y } (2)$ Observemos que como para todo par de vértices $u,v \in V(G)$ existe un único camino simple, luego no hay aristas paralelas porque entonces, sean $u,v$  dos vértices tal que existen dos aristas distintas $e_{1},e_{2}$ ambas incidentes en $u$ y $v$, luego existen dos $u,v$-caminos simples $P_{1}=u,e_{1},v$ y $P_{2}=u,e_{2}v$ distintos, contradiciendo la hipótesis. Luego como además $G$ no tiene ciclos, $G$ es _simple._

Supongamos que $G$