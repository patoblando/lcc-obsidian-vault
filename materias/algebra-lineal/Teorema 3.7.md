#algebra-lineal #teorema #unidad3 
# Teorema

Sean $V,W$ ev, sobre $KK$ y $T \in \mathcal{L}(V,W)$ entonces si T es inversible resulta que su inversa $T^{-1}$ es una [[Transformaciones Linales|transformación lineal]] de W en V

# Demostración

Sabemos que T es una tl de V a W inversible
Luego $\exists T^{-1}: W \to V$ tq $T^{-1}T = I_{v}$ y $TT^{-1} = I_{w}$

Sean $w_{1}, w_{2} \in W, \delta \in \mathbb{K}, v_{1} =T^{-1}(w_{1}), v_{2}=T^{-1}(w_{2})$ es decir $v_{1},v_{2}$ son los únicos elementos en V tal que
$$
Tv_{1}=w_{1} \quad\text{ y} \quad Tv_{2}=w_{2}
$$
Como T es lineal
$$
T(\delta v_{1} + v_{2}) = \delta T(v_{1})+Tv_{2} = \delta w_{1}+w_{2}
$$
Luego $\delta v_{1}+v_{2}$ es el único vector que T aplica con $\delta w_{1}+w_{2}$

Luego,
$$
T^{-1} (\delta w_{1}+w_{2}) = \delta v_{1} + v_{2}  = \delta T^{-1}(w_{1}) + T(w_{2})
$$
$$
T^{-1} \quad \text{es lineal}
$$
$$
\tag*{$\square$}
$$
$$

$$