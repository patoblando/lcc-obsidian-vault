---
aliases:
  - tranformacion lineal
  - transformaciones lineales
  - transformación lineal
  - lineal
  - lineales
---
#algebra-lineal #definición #unidad3 

(Según *Shelndon Axler*, en *Linear Álgebra Done Right, fourth edition*)

# Definicion

Sea $\mathbb{F}$ un cuerpo y $U, V \text{ y } W$ espacios vectoriales sobre $\mathbb{F}$, se llama **transformación lineal de $V$ a $W$** a una toda función  $T: V \to W$ que cumpla las siguientes propiedades:

## Aditividad
$$
T(u + v) = Tu + Tv \text{ para todo } u, v \in V.
$$
## Homogeneidad (confirmar el término de mi cátedra)

$$
T(\lambda v) = \lambda(Tv) \text{ para todo } \lambda \in \mathbb{F}, v \in V
$$

> Nota: Cuando no es ambigüo, podemos usar $Tv$ en lugar de $T(v)$

# Conjunto

- El conjunto de todas las **transformaciones lineales** de $V$ a $W$ se denota $\mathcal{L}(V,W)$
- El conjunto de toas las **transformaciones lineales** de $V$ a $V$ se denota $\mathcal{L}(V)$. O sea que, $\mathcal{L}(V) = \mathcal{L}(V,V)$.


# ¡Ejemplos!

## Cero
Podemos definir la **transformación lineal** '$0$'  que transforma todo elemento de un espacio vectorial, al elemento neturo de la suma de otro espacio vectorial (o de si mismo). Sea $0 \in \mathcal{L}(V,W)$, $v \in V, 0 \in W$
$$
0v = 0.
$$
> Nota: Creo que en la cátedra no usan esta notación, por obvios motivos.

## Identidad
El *operador identidad*, denotado por $I$, es la transformación lineal en algún espacio vectorial que vincula cualquier elemento con sí mismo (me pregunto que matriz representará a esta transformación...) Sea $I \in \mathcal{L}(V)$ se define,
$$
Iv = v
$$
## Derivada
Sea  $D \in \mathcal{L}(\mathcal{P}(\mathbb{R}))$, $p \in \mathcal{L}(\mathbb{R})$ tal que,
$$
Dp = p'
$$
## Integral
Sea $T \in \mathcal{L}(\mathcal{P}(\mathbb{R}),\mathbb{R})$ tal que,
$$
Tp = \int_{0}^{1} p .
$$
##

La definición de las integrales y las derivadas como **transformaciones lineales** permite atribuirles algunas propiedades que previamente tuvimos que demostrar para ambos por separado.
