# Machete de parcial: Prácticas 4, 5 y 6

---

# PRÁCTICA 4: Aplicaciones de la integral

## 4.0 Valor absoluto en integrales

1. Buscá dónde se anula lo de adentro, dentro del intervalo.
2. Estudiá el signo en cada tramo.
3. Donde es positivo: $|f| = f$. Donde es negativo: $|f| = -f$.
4. Integrá por tramos y sumá.

Ejemplo: $\int_0^{2\pi} |\cos\theta|\,d\theta = 4$ (cuatro arcos de área 1). Si hay simetría, calculás un tramo y multiplicás.

**Ojo:** $\left|\int f\right| \neq \int |f|$.

---

## 4.1 Área en polares (Ej. 2)

$$A = \frac12\int_{\alpha}^{\beta} r(\theta)^2\,d\theta$$

- Área entre dos curvas ($R$ la exterior, $r$ la interior): $A = \frac12\int (R^2 - r^2)\,d\theta$.
- Identidades útiles: $\cos^2\theta = \frac{1+\cos 2\theta}{2}$ y $\text{sen}^2\theta = \frac{1-\cos 2\theta}{2}$.
- Si la curva se repite o es simétrica, integrá un tramo y multiplicá. Cuidado con las curvas que recorren dos veces la misma figura (por ejemplo $r = 4|\text{sen}\,\theta|$).
- Para "interior a una curva y exterior a una circunferencia" (Ej. 2c): buscá los $\theta$ donde se cortan ($2\cos 2\theta = \pm 1$), y calculá $\frac12\int (r^2 - 1)\,d\theta$ solo en los tramos donde $|r| \ge 1$.
- Espiral $r=\theta$ (Ej. 2b): el área entre la 1ª y la 2ª vuelta es $\frac12\int_{2\pi}^{4\pi}\theta^2 d\theta - \frac12\int_0^{2\pi}\theta^2 d\theta$.

**Resultados ya calculados:** cardioide $1+\cos\theta$: $\frac{3\pi}{2}$. $r = 4|\text{sen}\,\theta|$: $8\pi$. $r=\sqrt{|\cos\theta|}$: $2$.

---

## 4.2 Volúmenes de revolución (Ej. 3)

### Los tres métodos

| Método | Fórmula | Cuándo |
|---|---|---|
| **Discos** | $V = \pi\int R^2\,dx$ | La región toca al eje de giro (sin hueco) |
| **Arandelas** | $V = \pi\int (R^2 - r^2)\,dx$ | Hay hueco entre la región y el eje |
| **Cáscaras** | $V = 2\pi\int (\text{radio})(\text{altura})\,dx$ | Cuando conviene integrar en la variable "perpendicular" al eje |

$R$ = radio exterior, $r$ = radio interior. Los dos son **distancias al eje de giro**.

### Discos vs. arandelas

- **Discos y arandelas:** cortás la región con rectángulos **perpendiculares al eje**. Integrás en la variable del eje (giro alrededor de $x$ → $dx$, alrededor de $y$ → $dy$).
- Si el rectángulo va del eje a la curva: **disco**. Si hay un hueco: **arandela**.
- **Giro alrededor de una recta $y = k$ (o $x = k$):** los radios son distancias a esa recta, por ejemplo $R = |f(x) - k|$.

### Cuándo es más práctico cada uno

- **Discos:** lo más simple, si la región apoya sobre el eje de giro.
- **Arandelas:** cuando hay dos curvas y un hueco. Ojo: restás $R^2 - r^2$, **no** $(R-r)^2$.
- **Cáscaras:** conviene cuando para usar discos/arandelas tendrías que despejar la función inversa (difícil) o partir la integral en dos pedazos.

### Ejemplo comparado (Ej. 3e): región entre $y=x^2$ e $y=2x$, giro alrededor del eje $y$

- Cáscaras: $V = 2\pi\int_0^2 x(2x - x^2)\,dx = \frac{8\pi}{3}$.
- Arandelas (en $y$, de 0 a 4): $V = \pi\int_0^4 \left(y - \frac{y^2}{4}\right)dy = \frac{8\pi}{3}$.

Dan lo mismo. Si te sale distinto, algo está mal planteado.

### Trompeta de Gabriel (Ej. 4)

- Volumen: $\pi\int_1^\infty \frac{1}{x^2}\,dx = \pi$ (finito).
- Área: $2\pi\int_1^\infty \frac1x\sqrt{1+\frac1{x^4}}\,dx \ge 2\pi\int_1^\infty \frac1x\,dx = \infty$. Por comparación **diverge**.

---

## 4.3 Longitud de curva

### Receta

1. Identificá cómo viene dada la curva (cartesiana, paramétrica o polar) y elegí la nfórmula.
2. Derivá.
3. Armá lo que va **dentro de la raíz**. Casi siempre se simplifica a un cuadrado perfecto (si no, es una sustitución clásica).
4. Sacá la raíz con valor absoluto (ver sección 4.0) y integrá en el intervalo dado.

### Fórmulas

| Tipo | Fórmula |
|---|---|
| Cartesiana $y=f(x)$, $x\in[a,b]$ | $L = \displaystyle\int_a^b \sqrt{1 + f'(x)^2}\,dx$ |
| Paramétrica $(x(t),y(t))$, $t\in[a,b]$ | $L = \displaystyle\int_a^b \sqrt{x'(t)^2 + y'(t)^2}\,dt$ |
| **Polar** $r = f(\theta)$, $\theta\in[\alpha,\beta]$ | $L = \displaystyle\int_\alpha^\beta \sqrt{r^2 + (r')^2}\,d\theta$ |

### Longitud de curva en polares: cómo se plantea

La polar es una paramétrica con $x = r\cos\theta$, $y = r\,\text{sen}\,\theta$ y parámetro $\theta$. Al calcular $x'^2 + y'^2$ se simplifica a $r^2 + (r')^2$.

1. Derivá $r'(\theta)$.
2. Calculá $r^2 + (r')^2$ y simplificá con identidades trigonométricas.
3. Integrá la raíz en el intervalo de $\theta$ que recorre la curva **una sola vez**.

**Ejemplo (cardioide $r = 2+2\cos\theta$):**

$$r^2 + r'^2 = (2+2\cos\theta)^2 + 4\,\text{sen}^2\theta = 8 + 8\cos\theta = 16\cos^2\tfrac{\theta}{2}$$

$$L = \int_0^{2\pi} 4\left|\cos\tfrac\theta2\right|d\theta = 8\int_0^{\pi}\cos\tfrac{\theta}{2}\,d\theta = 16$$

Identidad clave: $1+\cos\theta = 2\cos^2\frac\theta2$.

### Otros ejemplos de la guía

- **Circunferencia** (paramétrica): $L = \int_0^{2\pi} r\,dt = 2\pi r$.
- **Ej. 5a** $f = x^2/4$: $f' = x/2$, queda $\int\sqrt{1+x^2/4}\,dx$. Se resuelve con una sustitución del tipo $u=\sqrt{1+a^2x^2}+ax$ o $x=\frac1a\sec\theta$ (ver ejemplo de la guía).
- **Ej. 5c** $f(x)=\int_1^x\sqrt{\cos 2t}\,dt$: por el TFC, $f' = \sqrt{\cos 2x}$, entonces $1 + f'^2 = 1+\cos 2x = 2\cos^2 x$.

---

# PRÁCTICA 5: Taylor

## 5.1 Armar el polinomio de Taylor

$$T_n(f,a)(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k$$

Receta:

1. Calculá $f(a), f'(a), f''(a),\dots,f^{(n)}(a)$.
2. Dividí cada una por $k!$.
3. Multiplicá por $(x-a)^k$ y sumá.

Atajos (usalos antes de derivar a lo bruto):

- **Sustitución:** si conocés el desarrollo de $e^u$, para $e^{-t^2}$ ponés $u=-t^2$.
- **Integrar o derivar** un desarrollo conocido (por ejemplo, $\arctan$ sale de integrar $\frac{1}{1+x^2}$).
- **Pares/impares:** si $f$ es par, solo hay potencias pares. Si es impar, solo impares.
- **Producto:** para $x\,\text{sen}\,x$, multiplicá $x$ por el desarrollo de $\text{sen}\,x$ (cuidá el grado).
- **Centro $a\neq 0$:** cambiá variable $h = x-a$ o derivá directamente.

## 5.2 Desarrollos en $a=0$ para memorizar

| Función | Desarrollo |
|---|---|
| $e^x$ | $\displaystyle\sum \frac{x^k}{k!}$ |
| $\text{sen}\,x$ | $\displaystyle\sum (-1)^k\frac{x^{2k+1}}{(2k+1)!}$ |
| $\cos x$ | $\displaystyle\sum (-1)^k\frac{x^{2k}}{(2k)!}$ |
| $\text{senh}\,x$ | $\displaystyle\sum \frac{x^{2k+1}}{(2k+1)!}$ |
| $\cosh x$ | $\displaystyle\sum \frac{x^{2k}}{(2k)!}$ |
| $\dfrac{1}{1-x}$ | $\displaystyle\sum x^k$ |
| $\ln(1+x)$ | $\displaystyle\sum (-1)^{k+1}\frac{x^k}{k}$ |
| $\arctan x$ | $\displaystyle\sum (-1)^k\frac{x^{2k+1}}{2k+1}$ |
| $(1+x)^\alpha$ | $\displaystyle\sum \binom{\alpha}{k}x^k$ |
| $a^x$ | $\displaystyle\sum \frac{(\ln a)^k}{k!}x^k$ |

## 5.3 Acotar el error

**Resto de Lagrange:**

$$R_n(x) = f(x)-T_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1},\quad c \text{ entre } a \text{ y } x$$

**Cota:**

$$|R_n(x)| \le \frac{M\,|x-a|^{n+1}}{(n+1)!},\qquad M \ge |f^{(n+1)}(t)| \text{ para todo } t \text{ entre } a \text{ y } x$$

### Receta para "hallar el grado $n$ para error menor a $\varepsilon$"

1. Escribí la cota con $M$ y $|x-a|$.
2. Buscá $M$: una cota de la derivada $(n+1)$-ésima en el intervalo.
   - $\text{sen}$, $\cos$: $M=1$.
   - $e^x$: $M=e^{x_{\max}}$ (si $x\le0$, $M=1$).
3. Imponé que la cota sea menor que $\varepsilon$ y probá $n=1,2,3,\dots$ hasta que se cumpla.

### Aproximar valores (Ej. 6 y 8)

- $\pi = 4\arctan(1)$ (Ej. 6a): la serie converge muy lento, por eso el grado resulta enorme.
- $\ln 1{,}5$: usás $\ln(1+x)$ con $x=0{,}5$, o la serie de $\ln\frac{1+x}{1-x}$ con $x = \frac15$, que converge más rápido.
- Series alternadas: el error es menor que el primer término que se descarta.

### Ej. 7: $\text{sen}\,\theta \approx \theta$

$|R| \le \frac{|\theta|^3}{3!} < \frac{0{,}3^3}{6} = 0{,}0045 < 0{,}005$ ✓.

## 5.4 Aproximar integrales (Ej. 9)

1. **Justificá la integrabilidad:** el integrando es continuo en el intervalo, por lo tanto integrable.
2. Escribí el desarrollo de Taylor con resto, reemplazando $x$ por la expresión (ejemplo: $x\to -t^2$).
3. Integrá **término a término**.
4. Acotá la integral del resto: $\left|\int R_n\right| \le \int |R_n|$.
5. Elegí $n$ para que la cota sea menor que $10^{-5}$.

Para $d)\ \int_0^1\frac{e^x-1}{x}dx$: desarrollá $e^x$, restá 1 y dividí por $x$ antes de integrar.

## 5.5 Clasificación de puntos críticos (Prop. 5.7)

Si $f'(a)=\dots=f^{(n-1)}(a)=0$ y $f^{(n)}(a)\neq0$:

- $n$ **par**: mínimo local si $f^{(n)}(a)>0$, máximo local si $f^{(n)}(a)<0$.
- $n$ **impar**: no hay extremo.

---

# PRÁCTICA 6: Varias variables

## 6.1 Topología: interior, exterior, frontera (Ej. 1)

| Concepto | Qué es |
|---|---|
| **Frontera** | Puntos donde toda bola corta a $A$ y a su complemento (típicamente la curva donde la desigualdad pasa a igualdad) |
| **Interior** | Puntos de $A$ con una bola completa adentro de $A$ |
| **Exterior** | Puntos con una bola completa afuera de $A$ |

Receta:

1. Dibujá el conjunto. Las igualdades de la definición son la **frontera**.
2. **Abierto** si $A=\text{int}(A)$, es decir, no incluye su frontera. **Cerrado** si contiene toda su frontera.
3. Regla práctica: desigualdades **estrictas** ($<$, $>$) dan un conjunto abierto. Desigualdades **no estrictas** ($\le$, $\ge$) dan uno cerrado. Si mezcla, no es ni abierto ni cerrado.

## 6.2 Curvas de nivel (Ej. 3, 4)

La curva de nivel $\alpha$ es el conjunto $\{f(x,y)=\alpha\}$.

1. Igualá $f(x,y)=\alpha$ para cada valor pedido.
2. Reconocé la figura. Si no, despejá $y$ o pasá a polares.

Figuras que aparecen seguido:

- Función lineal ($6-3x-2y$): rectas paralelas.
- $|x|+|y|=\alpha$: rombos (vacío si $\alpha<0$, un punto si $\alpha=0$).
- $x^2+y^2=\alpha$: circunferencias (vacío si $\alpha<0$).
- $x+y^2=\alpha$: parábolas horizontales.

Atención con el rango: si $f$ es una raíz, $\alpha$ de signo imposible da conjunto vacío.

## 6.3 Límites de campos escalares (Ej. 5)

Ejercicio estrella. Receta:

1. **Evaluá directo.** Si no es indeterminado, listo.
2. **Probá caminos** hasta el punto: ejes, rectas $y=mx$, parábolas $y=x^2$ o $x=y^2$. Si dos caminos dan límites distintos, **el límite no existe**.
3. Si todos los caminos dan lo mismo, **probá que existe**:
   - **Polares:** $x=r\cos\theta,\ y=r\,\text{sen}\,\theta$. Si la expresión se acota por algo que $\to0$ cuando $r\to0$ **sin depender de $\theta$**, el límite es 0.
   - **Acotación / sandwich:** $|\text{acotada}|\cdot(\to 0)\to0$. Usá $|x|\le\sqrt{x^2+y^2}$, $|\text{sen}|\le1$, $|\cos|\le1$.
   - **Límites notables:** $\frac{\text{sen}\,u}{u}\to1$ cuando $u\to0$.

Ejemplo (Ej. 5b) $\displaystyle\lim_{(x,y)\to 0}\frac{xy^2}{x^2+y^4}$:

- Por el eje $x$ ($y=0$): $0$.
- Por $x=y^2$: $\frac{y^4}{2y^4}=\frac12$.

Dan distinto, entonces **no existe**.

## 6.4 Continuidad

$f$ es continua en $a$ si $\lim_{x\to a}f(x)=f(a)$. Si la fórmula cambia en el punto (ejemplo: "vale 0 si $x=0$"), tenés que calcular el límite de la otra rama y compararlo con el valor asignado.

## 6.5 Derivadas parciales

- $f_x$: derivás respecto de $x$ y tratás a $y$ (y $z$) como constantes.
- En un punto donde la fórmula cambia (ejemplo: el origen), usá la **definición**:

$$f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-f(0,0)}{h},\qquad f_y(0,0)=\lim_{h\to0}\frac{f(0,h)-f(0,0)}{h}$$

- **Schwarz (Prop. 6.9):** si $f_{xy}$ y $f_{yx}$ son continuas, entonces $f_{xy}=f_{yx}$.
- **¿Existe $f$ con estas parciales? (Ej. 7a):** chequeá $f_{xy}=f_{yx}$. Con $f_x=x+4y$ y $f_y=3x-y$: $f_{xy}=4\neq 3=f_{yx}$, entonces **no existe**.
- **Laplace:** $f_{xx}+f_{yy}=0$. **Ondas:** $f_{xx}-f_{yy}=0$. Calculá las segundas y reemplazá.

## 6.6 Diferenciabilidad (Ej. 8, 9)

**Definición:** $f$ es diferenciable en $a$ si

$$\lim_{h\to0}\frac{f(a+h)-f(a)-\nabla f(a)\cdot h}{\|h\|}=0$$

**Jerarquía:**

$$\text{derivadas parciales continuas } (C^1)\ \Rightarrow\ \text{diferenciable}\ \Rightarrow\ \text{continua y existen todas las direccionales}$$

Los recíprocos son **falsos** (de eso tratan los Ej. 6b y 6c).

Receta para decidir dónde es diferenciable:

1. **Puntos "normales"** (donde la fórmula es suave): chequeá que las parciales sean continuas, y listo.
2. **Puntos problemáticos** (origen, o donde hay $|\cdot|$ o cambio de fórmula):
   3. Verificá que sea continua.
   4. Calculá las parciales por definición.
   5. Planteá el límite de la definición y resolvelo (polares o caminos).

Ejemplo: $|x|+|y|$ no es diferenciable en los puntos de los ejes (donde $x=0$ o $y=0$).

## 6.7 Gradiente y derivada direccional (Ej. 10, 11)

$$\nabla f=(f_x,f_y,\dots),\qquad D_vf(a)=\nabla f(a)\cdot\frac{v}{\|v\|}$$

- **Normalizá siempre $v$** (error típico: olvidarlo).
- Si no es diferenciable, calculá por definición: $D_vf(a)=\lim_{t\to0}\frac{f(a+tv)-f(a)}{t}$.
- **Mayor crecimiento:** dirección $\nabla f(a)$, valor máximo $\|\nabla f(a)\|$.
- **Mayor decrecimiento:** dirección $-\nabla f(a)$, valor $-\|\nabla f(a)\|$.
- **Derivada nula:** direcciones perpendiculares a $\nabla f$ (tangentes a la curva de nivel).
- Ej. 11b: "máximo igual a 64 en dirección paralela a $z$" significa $\nabla f(a)=(0,0,\pm64)$. Imponés las componentes en $x$ e $y$ nulas y la de $z$ de módulo 64. Te quedan ecuaciones para $a,b,c$.

## 6.8 Plano tangente (Ej. 12)

- Superficie $z=f(x,y)$ en $(a,b)$:

$$z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$$

- Superficie implícita $F(x,y,z)=0$: el **normal** es $\nabla F(p)$, y el plano es $\nabla F(p)\cdot(X-p)=0$.
- **Planos tangentes paralelos a uno dado** (Ej. 12b): pedís que $\nabla F=\lambda\,(1,2,3)$ y que el punto esté en la superficie. Resolvés para el punto y armás los planos.
- Para verificar que el plano pasa por el origen: reemplazá $(0,0,0)$ y chequeá.

## 6.9 Regla de la cadena (Ej. 13, 15)

**Receta:** nombrá las variables intermedias, derivá cada una y sumá los caminos.

Si $u(x,y)=f(s,t)$ con $s=s(x,y)$, $t=t(x,y)$:

$$u_x=D_1f\cdot s_x+D_2f\cdot t_x,\qquad u_y=D_1f\cdot s_y+D_2f\cdot t_y$$

**Ejemplo de la guía:** $u=f(x^2-y,\ xy)$, con $s=x^2-y$, $t=xy$:

$$u_x=D_1f\cdot2x+D_2f\cdot y,\qquad u_y=-D_1f+D_2f\cdot x$$

**Ejemplo (Ej. 13b):** $f(x,y)=g\!\left(\frac{x^2+y^2}{2},\,xy\right)$ en $(-1,2)$, con $s=\frac52$, $t=-2$ y $D_1g=2$, $D_2g=1$:

- $f_x=D_1g\cdot x+D_2g\cdot y=2(-1)+1(2)=0$
- $f_y=D_1g\cdot y+D_2g\cdot x=2(2)+1(-1)=3$
- $\nabla f(-1,2)=(0,3)$. Dirección $v=(1,-1)/\sqrt2$, entonces $D_vf=-\frac{3}{\sqrt2}$.

**Derivadas de orden superior** (Ej. 13a): para $F(t)=f(x+ht,\,y+kt)$,

$$F'=h f_x+k f_y,\qquad F''=h^2f_{xx}+2hk f_{xy}+k^2f_{yy}$$

$$F'''=h^3f_{xxx}+3h^2k f_{xxy}+3hk^2f_{xyy}+k^3f_{yyy}$$

(Con $f_{xy}=f_{yx}$.) Cuando hay segundas derivadas con la regla de la cadena, derivá de nuevo **sin olvidar** que $D_1f$ y $D_2f$ también dependen de $(s,t)$.

## 6.10 Matriz Jacobiana (Ej. 14, 15)

Para $f=(f_1,\dots,f_m)$, cada **fila** de $J_f$ es el gradiente de una componente:

$$J_f=\begin{pmatrix}D_1f_1&\cdots&D_nf_1\\ \vdots&&\vdots\\ D_1f_m&\cdots&D_nf_m\end{pmatrix}$$

**Cadena:** $J_{g\circ f}(a)=J_g(f(a))\cdot J_f(a)$. Ojo con el orden del producto y con evaluar $J_g$ en $f(a)$.

---

# Orden de ataque sugerido

1. **P6:** límites, derivadas parciales, gradiente y direccional, plano tangente, regla de la cadena.
2. **P5:** armar polinomios con desarrollos conocidos, y acotar el error.
3. **P4:** área y longitud en polares, volúmenes por arandelas y cáscaras.
4. **Para repasar:** diferenciabilidad en el origen, curvas de nivel.i# Machete de parcial: Prácticas 4, 5 y 6

---

# PRÁCTICA 4: Aplicaciones de la integral

## 4.0 Valor absoluto en integrales

1. Buscá dónde se anula lo de adentro, dentro del intervalo.
2. Estudiá el signo en cada tramo.
3. Donde es positivo: $|f| = f$. Donde es negativo: $|f| = -f$.
4. Integrá por tramos y sumá.

Ejemplo: $\int_0^{2\pi} |\cos\theta|\,d\theta = 4$ (cuatro arcos de área 1). Si hay simetría, calculás un tramo y multiplicás.

**Ojo:** $\left|\int f\right| \neq \int |f|$.

---

## 4.1 Área en polares (Ej. 2)

$$A = \frac12\int_{\alpha}^{\beta} r(\theta)^2\,d\theta$$

- Área entre dos curvas ($R$ la exterior, $r$ la interior): $A = \frac12\int (R^2 - r^2)\,d\theta$.
- Identidades útiles: $\cos^2\theta = \frac{1+\cos 2\theta}{2}$ y $\text{sen}^2\theta = \frac{1-\cos 2\theta}{2}$.
- Si la curva se repite o es simétrica, integrá un tramo y multiplicá. Cuidado con las curvas que recorren dos veces la misma figura (por ejemplo $r = 4|\text{sen}\,\theta|$).
- Para "interior a una curva y exterior a una circunferencia" (Ej. 2c): buscá los $\theta$ donde se cortan ($2\cos 2\theta = \pm 1$), y calculá $\frac12\int (r^2 - 1)\,d\theta$ solo en los tramos donde $|r| \ge 1$.
- Espiral $r=\theta$ (Ej. 2b): el área entre la 1ª y la 2ª vuelta es $\frac12\int_{2\pi}^{4\pi}\theta^2 d\theta - \frac12\int_0^{2\pi}\theta^2 d\theta$.

**Resultados ya calculados:** cardioide $1+\cos\theta$: $\frac{3\pi}{2}$. $r = 4|\text{sen}\,\theta|$: $8\pi$. $r=\sqrt{|\cos\theta|}$: $2$.

---

## 4.2 Volúmenes de revolución (Ej. 3)

### Los tres métodos

| Método | Fórmula | Cuándo |
|---|---|---|
| **Discos** | $V = \pi\int R^2\,dx$ | La región toca al eje de giro (sin hueco) |
| **Arandelas** | $V = \pi\int (R^2 - r^2)\,dx$ | Hay hueco entre la región y el eje |
| **Cáscaras** | $V = 2\pi\int (\text{radio})(\text{altura})\,dx$ | Cuando conviene integrar en la variable "perpendicular" al eje |

$R$ = radio exterior, $r$ = radio interior. Los dos son **distancias al eje de giro**.

### Discos vs. arandelas

- **Discos y arandelas:** cortás la región con rectángulos **perpendiculares al eje**. Integrás en la variable del eje (giro alrededor de $x$ → $dx$, alrededor de $y$ → $dy$).
- Si el rectángulo va del eje a la curva: **disco**. Si hay un hueco: **arandela**.
- **Giro alrededor de una recta $y = k$ (o $x = k$):** los radios son distancias a esa recta, por ejemplo $R = |f(x) - k|$.

### Cuándo es más práctico cada uno

- **Discos:** lo más simple, si la región apoya sobre el eje de giro.
- **Arandelas:** cuando hay dos curvas y un hueco. Ojo: restás $R^2 - r^2$, **no** $(R-r)^2$.
- **Cáscaras:** conviene cuando para usar discos/arandelas tendrías que despejar la función inversa (difícil) o partir la integral en dos pedazos.

### Ejemplo comparado (Ej. 3e): región entre $y=x^2$ e $y=2x$, giro alrededor del eje $y$

- Cáscaras: $V = 2\pi\int_0^2 x(2x - x^2)\,dx = \frac{8\pi}{3}$.
- Arandelas (en $y$, de 0 a 4): $V = \pi\int_0^4 \left(y - \frac{y^2}{4}\right)dy = \frac{8\pi}{3}$.

Dan lo mismo. Si te sale distinto, algo está mal planteado.

### Trompeta de Gabriel (Ej. 4)

- Volumen: $\pi\int_1^\infty \frac{1}{x^2}\,dx = \pi$ (finito).
- Área: $2\pi\int_1^\infty \frac1x\sqrt{1+\frac1{x^4}}\,dx \ge 2\pi\int_1^\infty \frac1x\,dx = \infty$. Por comparación **diverge**.

---

## 4.3 Longitud de curva

### Receta

1. Identificá cómo viene dada la curva (cartesiana, paramétrica o polar) y elegí la fórmula.
2. Derivá.
3. Armá lo que va **dentro de la raíz**. Casi siempre se simplifica a un cuadrado perfecto (si no, es una sustitución clásica).
4. Sacá la raíz con valor absoluto (ver sección 4.0) y integrá en el intervalo dado.

### Fórmulas

| Tipo | Fórmula |
|---|---|
| Cartesiana $y=f(x)$, $x\in[a,b]$ | $L = \displaystyle\int_a^b \sqrt{1 + f'(x)^2}\,dx$ |
| Paramétrica $(x(t),y(t))$, $t\in[a,b]$ | $L = \displaystyle\int_a^b \sqrt{x'(t)^2 + y'(t)^2}\,dt$ |
| **Polar** $r = f(\theta)$, $\theta\in[\alpha,\beta]$ | $L = \displaystyle\int_\alpha^\beta \sqrt{r^2 + (r')^2}\,d\theta$ |

### Longitud de curva en polares: cómo se plantea

La polar es una paramétrica con $x = r\cos\theta$, $y = r\,\text{sen}\,\theta$ y parámetro $\theta$. Al calcular $x'^2 + y'^2$ se simplifica a $r^2 + (r')^2$.

1. Derivá $r'(\theta)$.
2. Calculá $r^2 + (r')^2$ y simplificá con identidades trigonométricas.
3. Integrá la raíz en el intervalo de $\theta$ que recorre la curva **una sola vez**.

**Ejemplo (cardioide $r = 2+2\cos\theta$):**

$$r^2 + r'^2 = (2+2\cos\theta)^2 + 4\,\text{sen}^2\theta = 8 + 8\cos\theta = 16\cos^2\tfrac{\theta}{2}$$

$$L = \int_0^{2\pi} 4\left|\cos\tfrac\theta2\right|d\theta = 8\int_0^{\pi}\cos\tfrac{\theta}{2}\,d\theta = 16$$

Identidad clave: $1+\cos\theta = 2\cos^2\frac\theta2$.

### Otros ejemplos de la guía

- **Circunferencia** (paramétrica): $L = \int_0^{2\pi} r\,dt = 2\pi r$.
- **Ej. 5a** $f = x^2/4$: $f' = x/2$, queda $\int\sqrt{1+x^2/4}\,dx$. Se resuelve con una sustitución del tipo $u=\sqrt{1+a^2x^2}+ax$ o $x=\frac1a\sec\theta$ (ver ejemplo de la guía).
- **Ej. 5c** $f(x)=\int_1^x\sqrt{\cos 2t}\,dt$: por el TFC, $f' = \sqrt{\cos 2x}$, entonces $1 + f'^2 = 1+\cos 2x = 2\cos^2 x$.

---

# PRÁCTICA 5: Taylor

## 5.1 Armar el polinomio de Taylor

$$T_n(f,a)(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k$$

Receta:

1. Calculá $f(a), f'(a), f''(a),\dots,f^{(n)}(a)$.
2. Dividí cada una por $k!$.
3. Multiplicá por $(x-a)^k$ y sumá.

Atajos (usalos antes de derivar a lo bruto):

- **Sustitución:** si conocés el desarrollo de $e^u$, para $e^{-t^2}$ ponés $u=-t^2$.
- **Integrar o derivar** un desarrollo conocido (por ejemplo, $\arctan$ sale de integrar $\frac{1}{1+x^2}$).
- **Pares/impares:** si $f$ es par, solo hay potencias pares. Si es impar, solo impares.
- **Producto:** para $x\,\text{sen}\,x$, multiplicá $x$ por el desarrollo de $\text{sen}\,x$ (cuidá el grado).
- **Centro $a\neq 0$:** cambiá variable $h = x-a$ o derivá directamente.

## 5.2 Desarrollos en $a=0$ para memorizar

| Función | Desarrollo |
|---|---|
| $e^x$ | $\displaystyle\sum \frac{x^k}{k!}$ |
| $\text{sen}\,x$ | $\displaystyle\sum (-1)^k\frac{x^{2k+1}}{(2k+1)!}$ |
| $\cos x$ | $\displaystyle\sum (-1)^k\frac{x^{2k}}{(2k)!}$ |
| $\text{senh}\,x$ | $\displaystyle\sum \frac{x^{2k+1}}{(2k+1)!}$ |
| $\cosh x$ | $\displaystyle\sum \frac{x^{2k}}{(2k)!}$ |
| $\dfrac{1}{1-x}$ | $\displaystyle\sum x^k$ |
| $\ln(1+x)$ | $\displaystyle\sum (-1)^{k+1}\frac{x^k}{k}$ |
| $\arctan x$ | $\displaystyle\sum (-1)^k\frac{x^{2k+1}}{2k+1}$ |
| $(1+x)^\alpha$ | $\displaystyle\sum \binom{\alpha}{k}x^k$ |
| $a^x$ | $\displaystyle\sum \frac{(\ln a)^k}{k!}x^k$ |

## 5.3 Acotar el error

**Resto de Lagrange:**

$$R_n(x) = f(x)-T_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1},\quad c \text{ entre } a \text{ y } x$$

**Cota:**

$$|R_n(x)| \le \frac{M\,|x-a|^{n+1}}{(n+1)!},\qquad M \ge |f^{(n+1)}(t)| \text{ para todo } t \text{ entre } a \text{ y } x$$

### Receta para "hallar el grado $n$ para error menor a $\varepsilon$"

1. Escribí la cota con $M$ y $|x-a|$.
2. Buscá $M$: una cota de la derivada $(n+1)$-ésima en el intervalo.
   - $\text{sen}$, $\cos$: $M=1$.
   - $e^x$: $M=e^{x_{\max}}$ (si $x\le0$, $M=1$).
3. Imponé que la cota sea menor que $\varepsilon$ y probá $n=1,2,3,\dots$ hasta que se cumpla.

### Aproximar valores (Ej. 6 y 8)

- $\pi = 4\arctan(1)$ (Ej. 6a): la serie converge muy lento, por eso el grado resulta enorme.
- $\ln 1{,}5$: usás $\ln(1+x)$ con $x=0{,}5$, o la serie de $\ln\frac{1+x}{1-x}$ con $x = \frac15$, que converge más rápido.
- Series alternadas: el error es menor que el primer término que se descarta.

### Ej. 7: $\text{sen}\,\theta \approx \theta$

$|R| \le \frac{|\theta|^3}{3!} < \frac{0{,}3^3}{6} = 0{,}0045 < 0{,}005$ ✓.

## 5.4 Aproximar integrales (Ej. 9)

1. **Justificá la integrabilidad:** el integrando es continuo en el intervalo, por lo tanto integrable.
2. Escribí el desarrollo de Taylor con resto, reemplazando $x$ por la expresión (ejemplo: $x\to -t^2$).
3. Integrá **término a término**.
4. Acotá la integral del resto: $\left|\int R_n\right| \le \int |R_n|$.
5. Elegí $n$ para que la cota sea menor que $10^{-5}$.

Para $d)\ \int_0^1\frac{e^x-1}{x}dx$: desarrollá $e^x$, restá 1 y dividí por $x$ antes de integrar.

## 5.5 Clasificación de puntos críticos (Prop. 5.7)

Si $f'(a)=\dots=f^{(n-1)}(a)=0$ y $f^{(n)}(a)\neq0$:

- $n$ **par**: mínimo local si $f^{(n)}(a)>0$, máximo local si $f^{(n)}(a)<0$.
- $n$ **impar**: no hay extremo.

---

# PRÁCTICA 6: Varias variables

## 6.1 Topología: interior, exterior, frontera (Ej. 1)

| Concepto | Qué es |
|---|---|
| **Frontera** | Puntos donde toda bola corta a $A$ y a su complemento (típicamente la curva donde la desigualdad pasa a igualdad) |
| **Interior** | Puntos de $A$ con una bola completa adentro de $A$ |
| **Exterior** | Puntos con una bola completa afuera de $A$ |

Receta:

1. Dibujá el conjunto. Las igualdades de la definición son la **frontera**.
2. **Abierto** si $A=\text{int}(A)$, es decir, no incluye su frontera. **Cerrado** si contiene toda su frontera.
3. Regla práctica: desigualdades **estrictas** ($<$, $>$) dan un conjunto abierto. Desigualdades **no estrictas** ($\le$, $\ge$) dan uno cerrado. Si mezcla, no es ni abierto ni cerrado.

## 6.2 Curvas de nivel (Ej. 3, 4)

La curva de nivel $\alpha$ es el conjunto $\{f(x,y)=\alpha\}$.

1. Igualá $f(x,y)=\alpha$ para cada valor pedido.
2. Reconocé la figura. Si no, despejá $y$ o pasá a polares.

Figuras que aparecen seguido:

- Función lineal ($6-3x-2y$): rectas paralelas.
- $|x|+|y|=\alpha$: rombos (vacío si $\alpha<0$, un punto si $\alpha=0$).
- $x^2+y^2=\alpha$: circunferencias (vacío si $\alpha<0$).
- $x+y^2=\alpha$: parábolas horizontales.

Atención con el rango: si $f$ es una raíz, $\alpha$ de signo imposible da conjunto vacío.

## 6.3 Límites de campos escalares (Ej. 5)

Ejercicio estrella. Receta:

1. **Evaluá directo.** Si no es indeterminado, listo.
2. **Probá caminos** hasta el punto: ejes, rectas $y=mx$, parábolas $y=x^2$ o $x=y^2$. Si dos caminos dan límites distintos, **el límite no existe**.
3. Si todos los caminos dan lo mismo, **probá que existe**:
   - **Polares:** $x=r\cos\theta,\ y=r\,\text{sen}\,\theta$. Si la expresión se acota por algo que $\to0$ cuando $r\to0$ **sin depender de $\theta$**, el límite es 0.
   - **Acotación / sandwich:** $|\text{acotada}|\cdot(\to 0)\to0$. Usá $|x|\le\sqrt{x^2+y^2}$, $|\text{sen}|\le1$, $|\cos|\le1$.
   - **Límites notables:** $\frac{\text{sen}\,u}{u}\to1$ cuando $u\to0$.

Ejemplo (Ej. 5b) $\displaystyle\lim_{(x,y)\to 0}\frac{xy^2}{x^2+y^4}$:

- Por el eje $x$ ($y=0$): $0$.
- Por $x=y^2$: $\frac{y^4}{2y^4}=\frac12$.

Dan distinto, entonces **no existe**.

## 6.4 Continuidad

$f$ es continua en $a$ si $\lim_{x\to a}f(x)=f(a)$. Si la fórmula cambia en el punto (ejemplo: "vale 0 si $x=0$"), tenés que calcular el límite de la otra rama y compararlo con el valor asignado.

## 6.5 Derivadas parciales

- $f_x$: derivás respecto de $x$ y tratás a $y$ (y $z$) como constantes.
- En un punto donde la fórmula cambia (ejemplo: el origen), usá la **definición**:

$$f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-f(0,0)}{h},\qquad f_y(0,0)=\lim_{h\to0}\frac{f(0,h)-f(0,0)}{h}$$

- **Schwarz (Prop. 6.9):** si $f_{xy}$ y $f_{yx}$ son continuas, entonces $f_{xy}=f_{yx}$.
- **¿Existe $f$ con estas parciales? (Ej. 7a):** chequeá $f_{xy}=f_{yx}$. Con $f_x=x+4y$ y $f_y=3x-y$: $f_{xy}=4\neq 3=f_{yx}$, entonces **no existe**.
- **Laplace:** $f_{xx}+f_{yy}=0$. **Ondas:** $f_{xx}-f_{yy}=0$. Calculá las segundas y reemplazá.

## 6.6 Diferenciabilidad (Ej. 8, 9)

**Definición:** $f$ es diferenciable en $a$ si

$$\lim_{h\to0}\frac{f(a+h)-f(a)-\nabla f(a)\cdot h}{\|h\|}=0$$

**Jerarquía:**

$$\text{derivadas parciales continuas } (C^1)\ \Rightarrow\ \text{diferenciable}\ \Rightarrow\ \text{continua y existen todas las direccionales}$$

Los recíprocos son **falsos** (de eso tratan los Ej. 6b y 6c).

Receta para decidir dónde es diferenciable:

1. **Puntos "normales"** (donde la fórmula es suave): chequeá que las parciales sean continuas, y listo.
2. **Puntos problemáticos** (origen, o donde hay $|\cdot|$ o cambio de fórmula):
   3. Verificá que sea continua.
   4. Calculá las parciales por definición.
   5. Planteá el límite de la definición y resolvelo (polares o caminos).

Ejemplo: $|x|+|y|$ no es diferenciable en los puntos de los ejes (donde $x=0$ o $y=0$).

## 6.7 Gradiente y derivada direccional (Ej. 10, 11)

$$\nabla f=(f_x,f_y,\dots),\qquad D_vf(a)=\nabla f(a)\cdot\frac{v}{\|v\|}$$

- **Normalizá siempre $v$** (error típico: olvidarlo).
- Si no es diferenciable, calculá por definición: $D_vf(a)=\lim_{t\to0}\frac{f(a+tv)-f(a)}{t}$.
- **Mayor crecimiento:** dirección $\nabla f(a)$, valor máximo $\|\nabla f(a)\|$.
- **Mayor decrecimiento:** dirección $-\nabla f(a)$, valor $-\|\nabla f(a)\|$.
- **Derivada nula:** direcciones perpendiculares a $\nabla f$ (tangentes a la curva de nivel).
- Ej. 11b: "máximo igual a 64 en dirección paralela a $z$" significa $\nabla f(a)=(0,0,\pm64)$. Imponés las componentes en $x$ e $y$ nulas y la de $z$ de módulo 64. Te quedan ecuaciones para $a,b,c$.

## 6.8 Plano tangente (Ej. 12)

- Superficie $z=f(x,y)$ en $(a,b)$:

$$z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$$

- Superficie implícita $F(x,y,z)=0$: el **normal** es $\nabla F(p)$, y el plano es $\nabla F(p)\cdot(X-p)=0$.
- **Planos tangentes paralelos a uno dado** (Ej. 12b): pedís que $\nabla F=\lambda\,(1,2,3)$ y que el punto esté en la superficie. Resolvés para el punto y armás los planos.
- Para verificar que el plano pasa por el origen: reemplazá $(0,0,0)$ y chequeá.

## 6.9 Regla de la cadena (Ej. 13, 15)

**Receta:** nombrá las variables intermedias, derivá cada una y sumá los caminos.

Si $u(x,y)=f(s,t)$ con $s=s(x,y)$, $t=t(x,y)$:

$$u_x=D_1f\cdot s_x+D_2f\cdot t_x,\qquad u_y=D_1f\cdot s_y+D_2f\cdot t_y$$

**Ejemplo de la guía:** $u=f(x^2-y,\ xy)$, con $s=x^2-y$, $t=xy$:

$$u_x=D_1f\cdot2x+D_2f\cdot y,\qquad u_y=-D_1f+D_2f\cdot x$$

**Ejemplo (Ej. 13b):** $f(x,y)=g\!\left(\frac{x^2+y^2}{2},\,xy\right)$ en $(-1,2)$, con $s=\frac52$, $t=-2$ y $D_1g=2$, $D_2g=1$:

- $f_x=D_1g\cdot x+D_2g\cdot y=2(-1)+1(2)=0$
- $f_y=D_1g\cdot y+D_2g\cdot x=2(2)+1(-1)=3$
- $\nabla f(-1,2)=(0,3)$. Dirección $v=(1,-1)/\sqrt2$, entonces $D_vf=-\frac{3}{\sqrt2}$.

**Derivadas de orden superior** (Ej. 13a): para $F(t)=f(x+ht,\,y+kt)$,

$$F'=h f_x+k f_y,\qquad F''=h^2f_{xx}+2hk f_{xy}+k^2f_{yy}$$

$$F'''=h^3f_{xxx}+3h^2k f_{xxy}+3hk^2f_{xyy}+k^3f_{yyy}$$

(Con $f_{xy}=f_{yx}$.) Cuando hay segundas derivadas con la regla de la cadena, derivá de nuevo **sin olvidar** que $D_1f$ y $D_2f$ también dependen de $(s,t)$.

## 6.10 Matriz Jacobiana (Ej. 14, 15)

Para $f=(f_1,\dots,f_m)$, cada **fila** de $J_f$ es el gradiente de una componente:

$$J_f=\begin{pmatrix}D_1f_1&\cdots&D_nf_1\\ \vdots&&\vdots\\ D_1f_m&\cdots&D_nf_m\end{pmatrix}$$

**Cadena:** $J_{g\circ f}(a)=J_g(f(a))\cdot J_f(a)$. Ojo con el orden del producto y con evaluar $J_g$ en $f(a)$.

---

# Orden de ataque sugerido

1. **P6:** límites, derivadas parciales, gradiente y direccional, plano tangente, regla de la cadena.
2. **P5:** armar polinomios con desarrollos conocidos, y acotar el error.
3. **P4:** área y longitud en polares, volúmenes por arandelas y cáscaras.
4. **Para repasar:** diferenciabilidad en el origen, curvas de nivel.