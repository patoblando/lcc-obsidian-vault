# Lema 3
Sea$s$ un subconjunto [[Independencia lineal|l.i.]] de un [[Espacio Vectorial]] $V$. Supongamos que $v\in V$ pero pero $v \notin \langle S\rangle$. Entonces el conjunto $S\cup \{v\}$ es L.I.

**Demos:** 
$S \subseteq V$, L.I. $\langle S\rangle \subsetneqq V$, luego existe $v \in V$ tal que $v \notin \langle S\rangle$ 
Entonces $S \cup \{v\}$ es L.I.
Supongamos $w_1,\dots,w_n \in S$ distintos tales que 
$$c_1w_1 + c_2w_2 + \dots + c_n w_n + bv = 0$$
Si $b\neq0$
$$v = -\frac{c_1v_1}{b} - \frac{c_2v_2}{b} - \dots - \frac{c_nv_n}{b}$$
??? (no entiendo letra) $v\notin \langle S\rangle$
Luego $b=0$ y como $\{w_1, \dots, w_n\}$ es LI se tiene que
$$c_1 = c_2 = \dots = c_n = 0$$
Entonces $\{w_1, \dots, w_n\}$ es L.I.

Entonces resulta $S \cup \{v\}$ L.I.