Probar que $\left[ \! \left[ \phi\leftrightarrow \psi \right] \! \right]_{v} = T$ sii $\left[ \! \left[ \phi \right] \! \right]_{v}=\left[ \! \left[ \psi  \right] \! \right]_{v}$.

---

Por definición, tenemos
$$
(\phi\leftrightarrow \psi) \equiv (\phi\to \psi)\land (\psi\to \phi)
$$
Luego, sea $v$ una valuación cualquiera para la cual $\left[ \! \left[ \phi\leftrightarrow \psi \right] \! \right]_{v}$ es satisfactible
$$
\left[ \! \left[ (\phi\to \psi) \land (\psi\to \phi) \right] \! \right]_{v}   = mín(\left[ \! \left[ \phi\to \psi \right] \! \right]_{v} ,\left[ \! \left[ \psi\to \phi \right] \! \right]_{v} ) \tag{1}
$$
donde
$$
\begin{align}
\left[ \! \left[ \phi\to \psi \right] \! \right]_{v}  & = T \text{ sii }\left[ \! \left[ \phi \right] \! \right]_{v} \leq \left[ \! \left[ \psi \right] \! \right]_{v}  \\
\left[ \! \left[ \psi\to \phi \right] \! \right]_{v}  & =T \text{ sii } \left[ \! \left[ \psi \right] \! \right]_{v} \leq \left[ \! \left[ \phi \right] \! \right]_{v} 
\tag{2}
\end{align}
$$
de $(1)$, y por hipótesis, concluimos que
$$
\left[ \! \left[ \phi\to \psi \right] \! \right]_{v}   = T = 
\left[ \! \left[ \psi\to \phi \right] \! \right]_{v}
$$
Y luego, por $(2)$
$$
\begin{align}
\left[ \! \left[ \phi \right] \! \right]_{v}  & \leq \left[ \! \left[ \psi \right] \! \right]_{v} \\
\left[ \! \left[ \psi \right] \! \right]_{v}  & \leq \left[ \! \left[ \phi \right] \! \right]_{v} 
\end{align}
$$
Es decir, por el orden de $\{ F,T \}$,
$$
\left[ \! \left[ \phi \right] \! \right]_{v}=\left[ \! \left[ \psi \right] \! \right]_{v}
$$
Ahora supongamos que sea $v$ valuación tal que 
$$
\left[ \! \left[ \phi \right] \! \right]_{v}=\left[ \! \left[ \psi \right] \! \right]_{v}\tag{3}
$$
Luego, está claro que 
$$
\left[ \! \left[ \phi\to \psi \right] \! \right]_{v} =\left[ \! \left[ \psi\to \phi \right] \! \right]_{v} =T
$$
Y, entonces
$$
mín(\left[ \! \left[ \phi\to \psi \right] \! \right]_{v} ,\left[ \! \left[ \psi\to \phi \right] \! \right]_{v} ) = \left[ \! \left[ (\phi\to \psi) \land \psi\to \phi \right] \! \right]_{v} = \left[ \! \left[ \phi \leftrightarrow \psi \right] \! \right]_{v} =  mín(T,T) = T
$$
Completando la demostración.
$$
\tag*{$\square$}
$$