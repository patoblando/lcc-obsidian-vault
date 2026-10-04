---
noteId: 1791127005427
---

Enuncie el teorema del valor medio del cálculo integral. ¿Qué desigualdad de integrales usamos para demostrar esto? ¿Que dos teoremas de análisis 1 usamos luego?

---

Si $f$ es una función continua en $[a,b]$, entonces exitme $\xi \in [a,b]$ en donde $f$ alcanza su valor medio. Esto es

$$
f(\xi) = \mu =\frac{1}{b-a}\int_{a}^{b} f \,  .
$$

Primero usamos la desigualdad de la unidad 1:
$$
m(b-a) \leq \int_{a}^{b} f \, \leq M(b-a) 
$$
Siendo $m$ y $M$ el mínimo y el máximo absolutos de $f$ en $[a,b]$, que se alcanzan seguro por ser $f$ continua en $[a,b]$. 

Con esta desigualdad nos aseguramos de que $\mu$ está comprendido entre $m$ y $M$, pues si dividimos m. a m. por el valor positivo $b - a$ nos queda
$$
m \leq \frac{1}{b-a}\int_{a}^{b} f \,  \leq M.
$$

Después, $f$ alcanza todos los valores comprendidos entre $m$ y $M$, por el teorema de los valores intermedios de análisis uno, demostrando así la tesis. 
