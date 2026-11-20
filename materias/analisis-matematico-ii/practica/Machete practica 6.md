# Definiciones de la Unidad 6 (varias variables)

**Cómo usar esta hoja:** cada definición tiene su fórmula y una línea de "en el examen". Las secciones 1 a 4 son las que usás en los dos moldes de los finales. Las secciones 5 a 7 son las otras que pueden aparecer.

Notación: $r=\sqrt{x^2+y^2}$ y $v_0=\dfrac{v}{|v|}$ (el vector $v$ normalizado).

---

## 1. Base

**Punto.** $a$ es un punto de $\mathbb{R}^2$, o sea un par $a=(a_1,a_2)$. Entonces $f(a)=f(a_1,a_2)$, **no** $f(a,a)$. _En el examen:_ $f_x(a)$ y $f_x(a_1,a_2)$ significan lo mismo. En el origen, $a=(0,0)$. _Ejemplo:_ si $f(x,y)=x^2+y$ y $a=(3,1)$, entonces $f(a)=3^2+1=10$.

**Norma.** $|(x,y)|=\sqrt{x^2+y^2}$. _En el examen:_ "$(x,y)\to(0,0)$" es lo mismo que "$r\to0$".

**Dirección unitaria.** $v=(a,b)$ con $a^2+b^2=1$. _En el examen:_ solo normalizás cuando vas a calcular una **derivada direccional**. Si $v$ no es unitario, el resultado queda multiplicado por $|v|$. Para el gradiente, el vector normal de un plano o un simple desplazamiento no hace falta.

**"Dirección al punto $Q$ desde $P$".** $$v=Q-P,\qquad v_0=\frac{Q-P}{|Q-P|}.$$

---

## 2. Límite y continuidad

**Límite (definición formal).** $\displaystyle\lim_{x\to a}f(x)=\ell$ si para todo $\varepsilon>0$ existe $\delta>0$ tal que

$$0<|x-a|<\delta\ \Longrightarrow\ |f(x)-\ell|<\varepsilon.$$

_En palabras:_ podés conseguir que $f(x)$ quede tan cerca de $\ell$ como quieras, con tal de acercarte lo suficiente a $a$, **sin importar por qué camino te acerques**. _En el examen:_ casi nunca se usa $\varepsilon$-$\delta$ para calcular. Se usan los métodos de abajo.

**Cómo se calcula un límite en $(0,0)$:**

1. **Reemplazá directo.** Si el denominador no se anula, listo.
2. Si queda $\frac{0}{0}$, **probá caminos**: $y=0$, $x=0$, $y=mx$, $y=x^2$, $x=y^2$. Si dos dan distinto, **no existe**.
3. Si todos dan el mismo valor $\ell$, **probá que existe** con una de estas:
    - **Cota:** mostrá que $|f(x,y)-\ell|\le(\text{algo})\cdot r^k$ con $k>0$. Entonces el límite es $\ell$.
    - **Polares:** $x=\rho\cos\theta,\ y=\rho\operatorname{sen}\theta$ y $\rho\to0$. Si queda $\rho^k,g(\theta)$ con $g$ acotada y $k>0$, el límite es $0$.
    - **Límites conocidos:** $\dfrac{\operatorname{sen}u}{u}\to1$ y $\dfrac{e^u-1}{u}\to1$ cuando $u\to0$.

**Cotas útiles** (con $r=\sqrt{x^2+y^2}$): $|x|\le r$, $|y|\le r$, $|xy|\le\dfrac{r^2}{2}$, $|x|^3+|y|^3\le2r^3$.

**Ejemplo:** $\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^2}$. Como $|xy^2|\le r^3$, queda $\left|\dfrac{xy^2}{x^2+y^2}\right|\le\dfrac{r^3}{r^2}=r\to0$. El límite es $0$.

**Interpretación de caminos:**

| Situación                         | Conclusión                            |
| --------------------------------- | ------------------------------------- |
| Dos caminos dan límites distintos | El límite **no existe**               |
| Muchos caminos dan el mismo valor | **No alcanza** para probar que existe |
| $                                 | f                                     |

**Continuidad en $a$.** $$\lim_{x\to a}f(x)=f(a).$$ _En el examen:_ en una función partida, calculás el límite y lo comparás con el valor asignado en el punto.

---

## 3. Derivadas

**Derivada parcial.** $$f_x(a,b)=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}{h},\qquad f_y(a,b)=\lim_{h\to0}\frac{f(a,b+h)-f(a,b)}{h}.$$ _En el examen:_ donde la fórmula cambia (el origen), se calcula **por definición**. En los demás puntos se deriva normalmente.

**Derivada direccional** ($v$ unitario). $$D_vf(a)=\lim_{t\to0}\frac{f(a+tv)-f(a)}{t}.$$ _En el examen:_ en el origen, $D_vf(0,0)=\displaystyle\lim_{t\to0}\frac{f(ta,tb)-f(0,0)}{t}$.

**Gradiente.** $$\nabla f(a)=\big(f_x(a),,f_y(a)\big).$$

**Idea intuitiva.** Pensá que $f(x,y)$ es la **altura** de un terreno en el punto $(x,y)$. Parado en $a$, el gradiente es una flecha que:

- apunta hacia **donde el terreno sube más rápido**;
- tiene un largo que indica **qué tan empinado** es ese subir ($|\nabla f(a)|$).

Si estás en un terreno plano, $\nabla f(a)=(0,0)$.

**Por qué importa:**

1. Resume en un solo vector cuánto cambia $f$ en cada eje ($f_x$ y $f_y$).
2. Si $f$ es diferenciable, la derivada en **cualquier** dirección sale con una cuenta: $D_vf(a)=\nabla f(a)\cdot v_0$. Por eso en el Molde B, con dos direcciones, se arma el gradiente entero y después se contesta cualquier otra.
3. Responde directo "¿hacia dónde crece más rápido?" y "¿cuánto?".
4. Es perpendicular a las curvas de nivel (las líneas de igual altura del mapa).

---

## 4. Diferenciabilidad

**Definición.** $f$ es diferenciable en $a$ si existen las parciales y $$\lim_{(h,k)\to(0,0)}\frac{f(a_1+h,,a_2+k)-f(a)-f_x(a),h-f_y(a),k}{\sqrt{h^2+k^2}}=0.$$

**Consecuencias de ser diferenciable en $a$:**

- $f$ es continua en $a$.
- Existen todas las direccionales y vale $$D_vf(a)=\nabla f(a)\cdot v_0.$$

**Condición suficiente ($C^1$).** Si $f_x$ y $f_y$ existen y son continuas en un entorno de $a$, entonces $f$ es diferenciable en $a$.

_En el examen:_ esa fórmula con el producto escalar solo vale si $f$ es diferenciable. En el Molde B es dato del enunciado. En el Molde A hay que verificarlo.

---

## 5. Qué implica qué

$$f\ \text{es}\ C^1\ \Longrightarrow\ f\ \text{diferenciable}\ \Longrightarrow\ \begin{cases}f\ \text{continua}\ \text{existen todas las direccionales}\ \text{existen las parciales}\end{cases}$$

**Los recíprocos son falsos:**

|Si vale...|...no se deduce|
|---|---|
|Existen las parciales|Continua ni diferenciable|
|Existen todas las direccionales|Continua ni diferenciable|
|Continua|Diferenciable|
|Diferenciable|$C^1$|

**Atajos para probar que NO es diferenciable** (de más rápido a más lento):

1. No es continua.
2. Falta una parcial.
3. Algún $v$ cumple $D_vf(a)\ne\nabla f(a)\cdot v_0$.

---

## 6. Usos del gradiente

Para $f$ diferenciable en $a$ y $\nabla f(a)\ne0$:

|Pregunta|Respuesta|
|---|---|
|Dirección de máximo crecimiento|$\nabla f(a)$|
|Valor máximo de $D_vf(a)$|$\|\nabla f(a)\|$|
|Dirección de máximo decrecimiento|$-\nabla f(a)$|
|Valor mínimo de $D_vf(a)$|$-\|\nabla f(a)\|$|
|Direcciones con derivada nula|$v\perp\nabla f(a)$|
|Relación con la curva de nivel|$\nabla f(a)$ es perpendicular a la curva de nivel que pasa por $a$|

En $\mathbb{R}^2$, si $\nabla f=(p,q)$, una dirección con derivada nula es $v=\dfrac{(q,-p)}{|(q,-p)|}$.

---

## 7. Otras definiciones que pueden aparecer

**Curva de nivel $\alpha$.** $$C_\alpha={(x,y):f(x,y)=\alpha}.$$

**Plano tangente** a $z=f(x,y)$ en $(a,b)$. $$z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b).$$ Si la superficie es $F(x,y,z)=0$, el vector normal en $p$ es $\nabla F(p)$.

**Regla de la cadena.** Si $u(x,y)=f\big(s(x,y),,t(x,y)\big)$: $$u_x=D_1f\cdot s_x+D_2f\cdot t_x,\qquad u_y=D_1f\cdot s_y+D_2f\cdot t_y.$$

**Teorema de Schwarz.** Si $f_{xy}$ y $f_{yx}$ son continuas en $a$, entonces $f_{xy}(a)=f_{yx}(a)$. _En el examen:_ sirve para decidir si existe una $f$ con ciertas parciales dadas.

**Matriz Jacobiana.** Para $f=(f_1,\dots,f_m)$, la fila $k$ de $J_f(a)$ es $\nabla f_k(a)$. Cadena de funciones vectoriales: $$J_{g\circ f}(a)=J_g\big(f(a)\big)\cdot J_f(a).$$

**Topología** (para $A\subset\mathbb{R}^n$):

|Concepto|Definición|
|---|---|
|Bola|$B(a,\rho)={x:\|x-a\|<\rho}$|
|Interior|Existe una bola centrada en el punto contenida en $A$|
|Exterior|Existe una bola contenida en el complemento $A^c$|
|Frontera|Toda bola centrada en el punto corta a $A$ y a $A^c$|
|Abierto|$A$ no contiene ningún punto de su frontera ($A=\operatorname{int}A$)|
|Cerrado|$A$ contiene toda su frontera|

_Regla práctica:_ desigualdades estrictas dan un conjunto abierto, y no estrictas dan uno cerrado.

---

## 8. Frases para el VoF

- Diferenciable $\Rightarrow$ continua. **El recíproco es falso.**
- Parciales continuas $\Rightarrow$ diferenciable. **El recíproco es falso.**
- Existen las parciales $\not\Rightarrow$ continua.
- Existen todas las direccionales $\not\Rightarrow$ continua.
- $D_vf=\nabla f\cdot v_0$ **solo si $f$ es diferenciable**, con $v_0$ unitario.
- Dos caminos con límites distintos $\Rightarrow$ el límite no existe.
- Todos los caminos con el mismo límite $\not\Rightarrow$ el límite existe.
- Schwarz necesita que las derivadas cruzadas sean continuas.
- $\varnothing$ y $\mathbb{R}^n$ son abiertos y cerrados a la vez. Hay conjuntos que no son ni abiertos ni cerrados.