Si $f:[a,b]\to \mathbb{R}$ es integrable, la función integral $F$ de $f$ es ~~continua~~  en $[a,b]$. Más o menos ¿Cómo se demuestra esto?

---

Para demostrar que es continua, tendría que ver que, para cualquier punto $x_{0} \in [a,b]$ para todo $\varepsilon>0$ existe un $\delta >0$ tal que, sea $x$ 
$$
\left| x-x_{0} \right|<\delta \implies \left| F(x)-F(x_{0}) \right| < \varepsilon
$$
o sea, que
$$
\left| x-x_{0} \right| < \delta\implies \left| \int_{a}^{x} f - \int_{a}^{x_{0}} f \right| < \varepsilon
$$
Sea $M$ una cota de $\left| f \right|$, que existe dado que $f$ es integrable, y luego acotada. Luego vemos que
$$
\int_{a}^{x} f - \int_{a}^{x_{0}} f = \int_{x_{0}}^{x} f
$$