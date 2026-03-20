Vimos:
- [[Teorema 3.6]]
- [[Lema 3.1]]
- [[Teorema 3.7]]
- [[Teorema 3.8]]
- [[Teorema 3.9]]

# Repasar

Toda unidad 3.

# Ejemplo

Sea V ev sobre k $b=\{v_{1},\dots,v_{n}\}$ base ordenada de $V$

Sabemos que $\{ E^{qp} \}_{1 \leq p,q \leq n}$ es una base de $V$ (el pizarrón decía $\mathcal{L}(V)$). Estas son $n^2$operaciones lineales $E^{qp}(v_{j}) = S_{jp}v_{q}$ ¿A qué es igual la composición de $E^{s,r}$ con $E^{qp}$ aplicada ???$v_{j}$?
$$
\text{¿}E^{sr} = E^{qp} = E^{sp} \text{?}
$$
(si)

# "Demostración"

$$
\begin{align}
E^{sr} E^{qp}(v_{j}) &= E^{sr} (E^{qp}(v_{j})) \\
&= E^{sr} (\delta_{jp} v_{j}) = \delta_{jp} E^{sr}(v_{j}) \\
&= \delta_{jp} \delta_{rq}v_{s}  \\
&= 
\begin{cases} 
\delta_{jp}v_{s}  & r=q\\ \\
 0  & r \neq q      
\end{cases} \\
 \\

E^{sr}E^{jp}(v_{j}) &= \begin{cases}
\delta _{jp}v_{s } & r = q \\
0  & r \neq q
\end{cases} \\
&= \begin{cases}
E^{sp} v_{j} &r =q \\
0  & r\neq q
\end{cases} \\ \quad \\

&\text{borraron el pizarron :( }
\end{align}

$$
# Conclusión

Componer [[Transformaciones Linales|transformaciones lineales]] es equivalente a multiplicar matrices

# Inversas

Recordemos que $T: V \to W$ es inversible si y solo si $\exists S: W\to V$ tal que
$$
ST =I_{v} \quad \text{y} \quad TS=I_{w}
$$
Si T es inversibl ela función S es única y se nota $T^{-1}$

Además vale T inversible si y solo si T es biyectiva


*"$R^{n}$ es Disneylandia"*


