# Definición
Un _grafo_ $G$ es una 3-upla que consiste en un conjunto $V(G)$ de "vértices", $E(G)$ de aristas y una función de incidencia $\psi_{G}$ asigna a cada arista un par no ordenado de vértices no necesariamente distintos de $G$.

# Observación 
- Notamos los pares de vértices por yuxtaposición: $\psi_{G} = uv$ 
- $v(G) := \left| V(G) \right|=n$ es el "orden" de G.
- $e(G) := \left| E(G) \right|=m$ es el "tamaño" de G.

# Ejemplo
Consideramos el grafo $G = (V,G)$ definido por

$$
V(G)=\{ u, v, w, x \},\quad \space E(G)=\{ a,b,c,d,e,f,g \}
$$

y


$$
\begin{align*}
\psi_{G}(a)=uv, \quad &\psi_{G}(b)=uu, \quad \psi_{G}(c)=vw, \\
\psi_{G}(d)=xv, \quad &\psi_{G}(e)=uv, \quad \psi_{G}(f)=wx, \\ 
&\psi_{G}(g)=ux 
\end{align*}
$$
Podemos representar este grafo mediante el siguiente dibujo:
![[grafo_center_invert_B.svg]]