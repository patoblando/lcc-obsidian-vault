# Machete P6: los dos moldes de examen

Todo está pensado para **resolver rápido**, no para entender. Notación: $r=\sqrt{x^2+y^2}$ y $v_0=\dfrac{v}{\|v\|}$.

---

## 0. Definiciones mínimas

**Norma y distancia.** $\|(x,y)\|=\sqrt{x^2+y^2}$. Cerca del origen, $r\to0$ es lo mismo que $(x,y)\to(0,0)$.

**Límite.** $\displaystyle\lim_{x\to a}f(x)=\ell$ si $f(x)$ se acerca a $\ell$ cuando $x\to a$ por **cualquier** camino.
- Dos caminos con límites distintos $\Rightarrow$ el límite **no existe**.
- Muchos caminos con el mismo límite **no** prueban que exista.

**Continuidad en $a$.** $\displaystyle\lim_{x\to a}f(x)=f(a)$.

**Derivada parcial en el origen (siempre por definición cuando la fórmula cambia ahí):**

$$f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-f(0,0)}{h},\qquad f_y(0,0)=\lim_{h\to0}\frac{f(0,h)-f(0,0)}{h}.$$

**Derivada direccional** en dirección $v=(a,b)$ con $\|v\|=1$:

$$D_vf(0,0)=\lim_{t\to0}\frac{f(ta,tb)-f(0,0)}{t}.$$

**Gradiente:** $\nabla f(a)=(f_x(a),f_y(a))$.

**Diferenciabilidad en $a$.** $f$ es diferenciable en $a$ si existen las parciales y

$$\lim_{(h,k)\to(0,0)}\frac{f(a_1+h,a_2+k)-f(a)-f_x(a)\,h-f_y(a)\,k}{\sqrt{h^2+k^2}}=0.$$

**Relaciones (las que se usan en VoF y en ejercicios):**

- Diferenciable $\Rightarrow$ continua.
- Diferenciable $\Rightarrow$ existen todas las direccionales y $D_vf(a)=\nabla f(a)\cdot v_0$.
- Parciales continuas en un entorno $\Rightarrow$ diferenciable ($C^1\Rightarrow$ diferenciable).
- **Los recíprocos son falsos.** Existen todas las direccionales (incluso las parciales) y $f$ puede no ser continua.
- $D_vf=\nabla f\cdot v_0$ vale **solo si $f$ es diferenciable**.

**Usos del gradiente:**

- Máxima derivada direccional: $\|\nabla f(a)\|$, en la dirección de $\nabla f(a)$.
- Mínima: $-\|\nabla f(a)\|$, en la dirección de $-\nabla f(a)$.
- Derivada nula: direcciones $v\perp\nabla f(a)$. En $\mathbb{R}^2$, si $\nabla f=(p,q)$ entonces $v=\dfrac{(q,-p)}{\|(q,-p)\|}$ (o su opuesto).

**"En dirección al punto $Q$ desde $P$"** significa $v=Q-P$, y después se **normaliza**: $v_0=\dfrac{Q-P}{\|Q-P\|}$.

---

## 1. Cotas y atajos útiles para límites

Con $r=\sqrt{x^2+y^2}$:

- $|x|\le r$ y $|y|\le r$.
- $|xy|\le\dfrac{r^2}{2}$.
- $|x|^3+|y|^3\le 2r^3$.
- $|\operatorname{sen}u|\le1$ y $|\cos u|\le1$.
- $\dfrac{e^u-1}{u}\to1$ y $\dfrac{\operatorname{sen}u}{u}\to1$ cuando $u\to0$.

**Polares:** $x=\rho\cos\theta,\ y=\rho\operatorname{sen}\theta$. Si queda $\rho^k\,g(\theta)$ con $g$ **acotada** y $k>0$, el límite es $0$. Si el resultado depende de $\theta$ y no se anula, el límite no existe o no es 0.

**Caminos para refutar un límite:** $y=mx$, $x=y^2$, $y=x^2$, $x=y^3$. Elegí el que haga que numerador y denominador tengan el mismo orden.

---

## 2. Molde A: función partida en el origen

$$f(x,y)=\begin{cases}\text{fórmula} & (x,y)\ne(0,0)\\ f(0,0)=c & (x,y)=(0,0)\end{cases}$$

### Paso 1. ¿Continua en $(0,0)$?

1. Calculá $\displaystyle\lim_{(x,y)\to(0,0)}f$.
2. Si sospechás que **no** existe: probá $y=0$, $x=0$, $y=mx$, $y=x^2$, $x=y^2$. Si dos caminos difieren, **no es continua**.
3. Si sospechás que **sí** existe: acotá $|f|\le(\text{algo})\cdot r^k\to0$, o pasá a polares.
4. Compará el límite con $f(0,0)$.

### Paso 2. Parciales en el origen

Por definición:

$$f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-f(0,0)}{h},\qquad f_y(0,0)=\lim_{h\to0}\frac{f(0,h)-f(0,0)}{h}.$$

Fuera del origen, derivás con las reglas de siempre (cociente, cadena). Para el cociente:

$$\left(\frac{u}{w}\right)_x=\frac{u_x\,w-u\,w_x}{w^2}.$$

### Paso 3. Direccional en el origen

Con $v=(a,b)$ unitario, sustituís $(ta,tb)$ en la fórmula y sacás las potencias de $t$:

$$D_vf(0,0)=\lim_{t\to0}\frac{f(ta,tb)-f(0,0)}{t}.$$

Casi siempre queda una expresión en $a$ y $b$. **Ojo con los casos donde el denominador se anula** (por ejemplo $b=0$): hay que tratarlos aparte.

### Paso 4. ¿Diferenciable en $(0,0)$?

Orden de chequeos, del más barato al más caro:

1. **¿No es continua?** Entonces **no** es diferenciable. Fin.
2. **¿No existe alguna parcial?** Entonces **no** es diferenciable. Fin.
3. **Atajo con la direccional.** Armá $\nabla f(0,0)\cdot v_0$ y compará con $D_vf(0,0)$ del paso 3. Si **para algún** $v$ no coinciden, **no** es diferenciable. Probá con $v=\left(\tfrac1{\sqrt2},\tfrac1{\sqrt2}\right)$.
4. **Si nada falla**, planteá el límite completo:

$$\lim_{(h,k)\to(0,0)}\frac{f(h,k)-f(0,0)-f_x(0,0)\,h-f_y(0,0)\,k}{\sqrt{h^2+k^2}}\overset{?}{=}0.$$

Si $f_x(0,0)=f_y(0,0)=0$ y $f(0,0)=0$, se reduce a $\displaystyle\lim\frac{f(h,k)}{r}$. Lo resolvés con cota o polares. Si da $0$, es diferenciable. Si da otra cosa, o no existe, no lo es.

### Preguntas típicas y qué hacer

| Piden | Qué hago |
|---|---|
| "Continuidad en $(0,0)$" | Paso 1 |
| "$\nabla f(0,0)$" o "¿existen las parciales?" | Paso 2, por definición |
| "$f_x(x,y)$" para $(x,y)\ne(0,0)$ | Derivo con cociente. No uso la definición |
| "¿En qué direcciones existe $D_vf(0,0)$?" | Paso 3, y miro dónde se rompe la expresión |
| "¿Es diferenciable en $(0,0)$?" | Paso 4, en ese orden |
| "Conjunto de puntos de continuidad" | Fuera del origen: continua (cociente de funciones continuas con denominador $\ne0$). En el origen: Paso 1 |
| "Existen derivadas parciales en todo $\mathbb{R}^2$" | Fuera del origen: derivo. En el origen: definición (Paso 2) |

### Mini-ejemplo resuelto (final 04/07/24): $f=\dfrac{x^3+y^3}{x^2+y^2}$, $f(0,0)=0$

- Continuidad: $|f|\le\dfrac{2r^3}{r^2}=2r\to0$, así que es continua.
- Parciales: $f_x(0,0)=\lim\dfrac{h^3/h^2}{h}=1$ y $f_y(0,0)=1$, entonces $\nabla f(0,0)=(1,1)$.
- Direccional: $D_vf(0,0)=a^3+b^3$. Existe en todas las direcciones.
- Diferenciabilidad: con $v_0=\left(\tfrac1{\sqrt2},\tfrac1{\sqrt2}\right)$, $D_vf=\tfrac1{\sqrt2}$ pero $\nabla f\cdot v_0=\sqrt2$, así que **no es diferenciable**.

---

## 3. Molde B: gradiente a partir de derivadas direccionales

Datos típicos: "$f$ diferenciable; en $P$ las direccionales hacia $Q_1$ y hacia $Q_2$ valen $d_1$ y $d_2$".

1. Calculá $v_1=Q_1-P$ y $v_2=Q_2-P$, y **normalizalos** ($v_{0}=v/\|v\|$).
2. Por diferenciabilidad: $\nabla f(P)\cdot v_{01}=d_1$ y $\nabla f(P)\cdot v_{02}=d_2$.
3. Escribí las dos ecuaciones en $(f_x,f_y)$ y resolvé el sistema de $2\times2$.
4. Para la dirección pedida, calculá $v_0$ y hacé $D=\nabla f(P)\cdot v_0$.

**Truco:** multiplicá por $\|v\|$ en ambos lados para limpiar la raíz. Si $v=(3,4)$, $\|v\|=5$, queda $3f_x+4f_y=5\,d$.

### Mini-ejemplo resuelto (final 27/02/25)

$P=(1,2)$, direcciones hacia $(2,2)$ y hacia $(1,1)$, con valores $2$ y $-2$.

- Hacia $(2,2)$: $v=(1,0)$, entonces $f_x=2$.
- Hacia $(1,1)$: $v=(0,-1)$, entonces $-f_y=-2$ y $f_y=2$.
- $\nabla f(1,2)=(2,2)$.
- Hacia $(4,6)$: $v=(3,4)$, $\|v\|=5$, entonces $D=\dfrac{2\cdot3+2\cdot4}{5}=\dfrac{14}{5}$.

---

## 4. Errores típicos (los que más cuestan puntos)

- **No normalizar $v$** en la direccional.
- Usar $D_vf=\nabla f\cdot v$ **sin** saber que $f$ es diferenciable (en el Molde A hay que verificarlo, en el B es dato).
- Concluir que el límite existe porque "dio $0$ por los ejes". Hay que probar con una cota o polares.
- Calcular las parciales **en el origen** con las fórmulas de derivar. Se hacen por definición.
- Olvidar tratar aparte el caso donde el denominador de $D_vf$ se anula (por ejemplo $b=0$).
- En el paso 4, dividir por $\sqrt{h^2+k^2}$ y no por $h$ o por $k$.

---

## 5. Orden de ataque en el parcial

1. Identificá el molde (partida en el origen, o direccionales + gradiente).
2. Molde A: seguí los pasos 1 a 4 en orden. Cada paso alimenta al siguiente.
3. Molde B: normalizá, planteá el sistema y resolvé.
4. Si te trabás en un paso, dejá el planteo escrito: las definiciones del apartado 0 valen puntos.z