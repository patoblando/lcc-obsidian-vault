#AMI #unidad3 #teoremas-valor-medio 

# Explicación conceptual
El teorema de fermat nos dice que  si $f$  es derivable en $x_{o}$ y $f$ tiene un extremo relativo en $x_{0}$ entonces $f'(x_{0}) = 0$.

## Teorema
Sea $f$ definida en un entorno de un punto $x_{0}$ y supongamos que $f$ tiene en $x_{0}$ un extremo relatvo. Entonces, si $f$ es derivable en $x_{0}$, se tiene
$$
f'(x_{0}) = 0
$$
## Demostración
Sea $f$ derivable en un punto $x_{0}$. Supongamos por el absurdo que $f(x_{0})$ es un extremo relativo pero que $f'(x_{0})\neq0$.

Si $f'(x_{0})\neq0$ esto quiere decir que o $f'(x_{0})>0$ o $f'(x_{0})<0$.

Supongamos que $f'(x_{0})>0$.

Por definición de derivada, $f'(x_{0})>0$ implica,
$$
\lim_{ x \to x_{0} }\frac{f(x) - f(x_{0})}{(x-x_{z0})} >0 
$$
Luego por el [[Teorema de Conservacion del Signo]] existe un [[entorno]] al *rededor* de $x_{0}$ donde
$$\frac{f(x)- f(x_{0})}{(x-x_{0})}>0
$$

Ahora, analicemos esta desigualdad para un $x$ a la derecha de $x_{0}$ dentro de dicho entorno, es decir, $x > x_{0}$. En este caso, el denominador $(x-x_{0})$ es positivo. Para que la fracción sea positiva, el numerador también debe serlo: $$ f(x) - f(x₀) > 0 \implies f(x) > f(x₀) $$ Esto significa que existen puntos a la derecha de `x₀` donde la función vale más que en `f(x₀)`. Por lo tanto, `f(x₀)` **no puede ser un máximo relativo**. 

Por otro lado, si analizamos un `x` a la izquierda de `x₀` (`x < x₀`), el denominador `(x - x₀)` es negativo. Para que la fracción sea positiva, el numerador también debe ser negativo: $$ f(x) - f(x₀) < 0 \implies f(x) < f(x₀) $$ Esto significa que existen puntos a la izquierda de `x₀` donde la función vale menos que en `f(x₀)`. Por lo tanto, `f(x₀)` **no puede ser un mínimo relativo**.
Ahora, por $(2)$, $(x_{0})$ no puede ser un *mínimo relativo*.
Pero habíamos supuesto que $x_{0}$ era un exremo relativo, sin embargo llegamos a que no puede serlo. **Absurdo** que proviene de suponer que $f'(x) \neq_{0}$.

La demostración es análoga para  el caso $f'(x)<0$.

Por lo tanto si $x_{0}$ es un extremo relativo entonces  $f'(x_{0}) =0 \tag{\square}$.

$$
\tag*{$\square$}
$$

## Ejemplo

![[diagram_invert_B.svg|Figura 1]]


