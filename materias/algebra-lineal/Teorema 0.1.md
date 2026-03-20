#algebra-lineal #teorema #unidad0

# Teorema 1
Sea $V$ un [[Espacio Vectorial|espacio vectorial]] generado por un conjunto finito de vectores $v_1,v_2,\dots,v_n$. Entonces cualquier conjunto [[Independencia lineal|linealmente independiente]] de vectores en $V$ es finito y no contiene más de $n$ elementos.

#### **Demostración:** 
Veamos que todo conjunto $S\subseteq V$ que contiene más de $n$ elementos es L.D.
Supongamos que $S$ contiene $m$ elementos tq $m>n$
$$w_1,\dots,w_m \subseteq S$$
Como $V= \langle v_1,\dots,v_n\rangle$ existen escalares $a_{ij}\in \mathbb{K}$ tales que
$$w_j=\sum_{i=1}^na_{ij}v_i : j=1,\dots,m$$
Consideramos para un ??? $x,\dots,x_m$ la combinación
$$x_1w_1 + x_2w_2 + \dots + x_mw_m = \sum_{j=1}^m x_j w_j = \sum_{j=1}^m x_j \sum_{i=1}^na_{ij}v_i = \sum_{j=1}^m\sum_{i=1}^na_{ij} x_j v_i = \sum_{j=1}^m(\sum_{i=1}^na_{ij} x_j) v_i$$
$$m>n, Ax=0 A=(a_{ij}), x = \begin{bmatrix}x_1 \\ \dots \\ x_m\end{bmatrix}$$
$Ax=0$ Tiene infinitas soluciones es decir que existen valores de $x_1,\dots,x_n$ no todos nulos tales que Ax=0
$0 = x_1w_1 + \dots +x_m w_m$ con no todos los $x_j$ iguales a 0 por lo tanto ${w_1,\dots,w_m}$ es L.D para todo $m>n$.
