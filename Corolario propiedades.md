Son válidas las siguientes afirmaciones:
1. Toda arista de un árbol es de corte
2. Agregar exactamente una arista a un árbol (con los mismos vértices) forma exactamente un ciclo en el árbol
3. Todo grafo conexo tiene un árbol recubridor

*Demostración.* 

(1) Sea $G$ un árbol y sean $u,v \in V(G)$ dos vértices adyacentes cualesquiera. Por el [[Teorema caracterizaciones de un árbol]], existe un único $u,v$-camino simple. Como son adyacentes este camino será: $P=u,uv,v$. Luego, como este es el _único_ camino simple, si consideramos $G \textbackslash e$