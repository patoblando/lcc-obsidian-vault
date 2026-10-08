El teorema de soundess es una demostración extremadamente larga pero no muy compleja por inducción. Enunciá el caso base y mencioná la estructura que siguen todos los pasos inductivos.

---

 Dado el secuente válido $\Gamma \vdash \phi$, defino la propiedad:
$$
P(\Gamma,\phi): \Gamma \models \phi.
$$
Y lo demuestro para el conjunto de todos los secuentes válidos.

**Caso base**: Sea $\Gamma \subseteq Prop$ y $\phi$, el secuente trivial $\Gamma \cup \left\{ \phi \right\}\vdash \phi$ es válido. Luego, sea $v$ valuación tal que
$$
\left[ \! \left[ \Gamma \cup \left\{ \phi \right\}  \right] \! \right]_{v} = True
$$
Entonces por def de valuación de conjuntos
$$
\left[ \! \left[ \Gamma \right] \! \right]_{v}  = \left[ \! \left[ \phi \right] \! \right]_{v} = True.
$$
Y luego, por definición de $\models$
$$
\Gamma \models \phi.
$$

La estructura que vamos a seguir para los pasos inductivos es:
"Sea $\Gamma\vdash\phi$ secuente válido y sea $v$ valuación tal que 
$$
\left[ \! \left[ \Gamma\right] \! \right]_{v}= True
$$
Entonces por *...* 
$$
\left[ \! \left[ \phi \right] \! \right]_{v}= True.
$$