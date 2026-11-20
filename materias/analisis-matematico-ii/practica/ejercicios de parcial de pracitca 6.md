Dos de cada molde. Intentalos primero, con un tope de 10 minutos cada uno, y después mirá las respuestas al final.

## Molde A: función partida en el origen

**A1.** Sea  
$$f(x,y)=\begin{cases}\dfrac{xy^2}{x^2+y^2} & (x,y)\ne(0,0)\[2mm] 0 & (x,y)=(0,0)\end{cases}$$

a) ¿Es $f$ continua en $(0,0)$?  
b) Hallar, si existe, $\nabla f(0,0)$.  
c) Hallar $D_vf(0,0)$ para $v=(a,b)$ unitario.  
d) ¿Es $f$ diferenciable en $(0,0)$? Justificar.

**A2.** Sea  
$$f(x,y)=\begin{cases}\dfrac{x^2y}{x^4+y^2} & (x,y)\ne(0,0)\[2mm] 0 & (x,y)=(0,0)\end{cases}$$

a) ¿Es $f$ continua en $(0,0)$?  
b) ¿Existen $f_x(0,0)$ y $f_y(0,0)$? Calcularlas.  
c) ¿En qué direcciones $v$ unitarias existe $D_vf(0,0)$? Calcularla.  
d) ¿Es $f$ diferenciable en $(0,0)$? Justificar.

## Molde B: gradiente desde derivadas direccionales

**B1.** Sea $f:\mathbb{R}^2\to\mathbb{R}$ diferenciable. En el punto $(2,1)$, las derivadas direccionales de $f$ en dirección al punto $(5,5)$ y al punto $(2,-1)$ valen, respectivamente, $-1$ y $2$.

a) Hallar $\nabla f(2,1)$.  
b) Hallar la derivada direccional en $(2,1)$ en dirección al punto $(-2,-3)$.  
c) ¿Cuál es la máxima derivada direccional posible en $(2,1)$?

**B2.** Sea $f:\mathbb{R}^2\to\mathbb{R}$ diferenciable. En el punto $(1,-1)$, las derivadas direccionales de $f$ en dirección al punto $(3,0)$ y al punto $(0,1)$ valen, respectivamente, $\dfrac{7}{\sqrt5}$ y $-\dfrac{1}{\sqrt5}$.

a) Hallar $\nabla f(1,-1)$.  
b) Hallar la derivada direccional en $(1,-1)$ en dirección al punto $(4,3)$.  
c) Dar una dirección unitaria en la que la derivada direccional en $(1,-1)$ sea nula.

---

## Respuestas para chequear

**A1**

- a) Sí es continua. $|xy^2|\le r^3$, entonces $|f|\le r\to0$.
- b) $f_x(0,0)=\lim\dfrac{f(h,0)}{h}=0$ y $f_y(0,0)=0$. Entonces $\nabla f(0,0)=(0,0)$.
- c) $f(ta,tb)=t,ab^2$, así que $D_vf(0,0)=ab^2$.
- d) **No es diferenciable.** Si lo fuera, tendría que ser $D_vf=\nabla f\cdot v=0$ para todo $v$, pero con $v=\left(\tfrac1{\sqrt2},\tfrac1{\sqrt2}\right)$ da $ab^2=\tfrac{1}{2\sqrt2}\ne0$.

**A2**

- a) **No es continua.** Por $y=0$ el límite es $0$. Por $y=x^2$: $\dfrac{x^4}{2x^4}=\dfrac12$. Los límites son distintos.
- b) $f(h,0)=0$ y $f(0,h)=0$, así que $f_x(0,0)=0$ y $f_y(0,0)=0$. Existen, aunque $f$ no sea continua.
- c) $f(ta,tb)=\dfrac{t,a^2b}{t^2a^4+b^2}$, así que  
    $$D_vf(0,0)=\begin{cases}\dfrac{a^2}{b} & b\neq0\[1mm] 0 & b=0.\end{cases}$$  
    Existe en **todas** las direcciones.
- d) **No es diferenciable**, porque no es continua. También se ve por el atajo: con $v=\left(\tfrac1{\sqrt2},\tfrac1{\sqrt2}\right)$ da $D_vf=\tfrac1{\sqrt2}\ne\nabla f\cdot v=0$.

**B1**

- Hacia $(5,5)$: $v=(3,4)$, $v_0=\tfrac15(3,4)$, entonces $\dfrac{3f_x+4f_y}{5}=-1$.
- Hacia $(2,-1)$: $v=(0,-2)$, $v_0=(0,-1)$, entonces $-f_y=2$ y $f_y=-2$. Reemplazando, $f_x=1$.
- a) $\nabla f(2,1)=(1,-2)$.
- b) $v=(-4,-4)$, $v_0=\tfrac1{\sqrt2}(-1,-1)$, entonces $D=\dfrac{-1+2}{\sqrt2}=\dfrac{\sqrt2}{2}$.
- c) $|\nabla f|=\sqrt5$.

**B2**

- Hacia $(3,0)$: $v=(2,1)$, $v_0=\tfrac1{\sqrt5}(2,1)$, entonces $2f_x+f_y=7$.
- Hacia $(0,1)$: $v=(-1,2)$, $v_0=\tfrac1{\sqrt5}(-1,2)$, entonces $-f_x+2f_y=-1$.
- a) Resolviendo, $f_x=3$ y $f_y=1$. Entonces $\nabla f(1,-1)=(3,1)$.
- b) $v=(3,4)$, $v_0=\tfrac15(3,4)$, entonces $D=\dfrac{9+4}{5}=\dfrac{13}{5}$.
- c) Hay que elegir $v$ perpendicular a $\nabla f$: $v=\dfrac{1}{\sqrt{10}}(1,-3)$ o su opuesto.

Si alguno no te sale, pasame cómo lo planteaste y te digo en qué paso se desvía. Como práctica extra del paso 4 de diferenciabilidad con el límite completo, rehacé el 1b del final del 25/07/24.