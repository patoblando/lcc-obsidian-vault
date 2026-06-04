Sea $G$ un [[Grafo|grafos]] con $\left| V(G)= n\right| \geq 1$, los siguiente enunciados son equivalnetes.
1. $G$ es [[Conexo Disconexo|conexo]] y [[Definición acíclico, bosque, árbol y hoja|acíclico]]
2. $G$ es conexo y $\left| E(G) \right| = n-1$
3. $G$ es acíclico y $\left| E(G) \right|= n-1$
4. $G$ no tiene bucles y, para cada par de vértices $u,v \in V(G)$, existe un único $u,v$-[[Camino Simple|camino simple]].

*Demostración*.

(...)

$(4) \implies (1) \text{ y } (2)$ Observemos que como para todo par de vértices $u,v \in V(G)$ existe un único camino simple, luego no hay aristas paralelas porque entonces, sean $u,v$  dos vértices tal que existen dos aristas distintas $e_{1},e_{2}$ ambas incidentes en $u$ y $v$, luego existen dos $u,v$-caminos simples $P_{1}=u,e_{1},v$ y $P_{2}=u,e_{2}v$ distintos, contradiciendo la hipótesis. Luego como además $G$ no tiene ciclos, $G$ es _simple._

Luego, por lo visto en la teoría[^1] si para todo par de vértices existe un camino entre ellos luego $G$ es _conexo_.

Supongamos que existe un ciclo $C = v=v_{0},e_{1},v_{1},\dots,e_{i}u, uv,v$ en $G$. Luego, si le sacamos la última arista a $C$, está claro que  generamos un $u,v$-camino simple, pues  $C$ no repite aristas y solo repite los vértices de los extremos, por definición. Luego, consideremos la arista que borramos de $C$, esta arista incide en $u$ y $v$, por lo tanto $P=u,uv,v$ es otro camino simple distinto entre $u$ y $v$. Eso es un absurdo, pues contradice la hipótesis directamente.

Luego, por lo probado anteriormente, $(1) \implies (2)$, completando así la demostración.
$$
\tag*{$\square$}
$$

[^1]: Es fácil de demostrar, si consideramos por el absurdo que existe un camino entre todo par de vértices pero G es disconexo. Como G disconexo entonces existe una bipartición $X,Y$ tal que para todo $u \in X$ y $v\in Y$, $uv \notin E(G)$, entonces dados $x \in X$ e $y \in Y$, jamás existirá una arista que conecte dos vértices de distintos conjuntos, por lo que no hay ningún camino que me lleve de $x$ a $y$. Absurdo, por lo tanto G es conexo. Para la vuelta, si $G$ es conexo, sup por el absurdo que existen $u,v$ tal que no existe un $u,v$-camino. Luego podemos armar la bipartición $X,Y$ tal que $X = \{ w \in V(G): \text{existe un u,w-camino} \}$  e $Y = V(G)\cap X$. Observemos que ningún conjunto es vacío, ya que $u \in X$ y $v \in Y$. Luego no existe ninguna arista que vaya de $X$ a $Y$, ya que entonces existiría un camino entre $u$ y $v$. Vemos que si, por ejemplo existiera $xy \in E(G)$ tal que $x \in X$ e $y \in Y$ entonces, sea $P = u, \dots, x$ el $u,x$-camino que existe porque $x \in X$ entonces $P' = u, \dots, x,xy,y$ es un $u,y$-camino, por ende $y \in X$, absurdo pues $y$ pertenece a $Y$, la intersección de $V(G)$ con $X$. Luego encontré una bipartición tal que no hay aristas entre las particiones, lo cual es absurdo ya que $G$ es conexo. Queda demostrada la tésis.