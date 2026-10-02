---
noteId: 1790979517016
---

Si $f:[a,b]\to \mathbb{R}$ es integrable, la función integral $F$ de $f$ es ~~continua~~  en $[a,b]$.  ¿Que propiedad consecuencia de que $f$ sea integrable, desigualdad de un ejercicio y definición básica se usan para demostrar esto?

---
La propiedad que usamos es que como $f$ es integrable, está acotada.

La desigualdad del ejercicio es
$$
\int_{x_{0}}^{x} f \leq M\left| x-x_{0} \right|
$$

Y la definición es la de continuidad para un punto de la función integral $F(x)$: 

$x_{0} \in [a,b]$ para todo $\varepsilon>0$ existe un $\delta >0$ tal que
$$
\left| x-x_{0} \right|<\delta \implies \left| F(x)-F(x_{0}) \right| < \varepsilon
$$
o sea, que
$$
\left| x-x_{0} \right| < \delta\implies \left| \int_{a}^{x} f - \int_{a}^{x_{0}} f \right| < \varepsilon
$$
Recordando la propiedad de la Unidad 1:
$$
\int_{a}^{x} f - \int_{a}^{x_{0}} f =
\int_{a}^{x} f + \int_{x_{0}}^{a}f =
\int_{x_{0}}^{x} f
$$