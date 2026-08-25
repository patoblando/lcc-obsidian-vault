---
noteId: 1786047955066
---

Enuncie el teorema de la derivada de la función inversa. ¿Cómo queda el limite de el cociente incremental (cuando $h \to 0$) de $f^{-1}$?

---

Sea $f$ una función ***biyectiva***, definida en un intervalo abierto $I$ y que es derivable en un punto $a \in I$, con $f'(a) \neq 0$.
Entonces, su función inversa $f^{-1}$ es derivable en el punto $f(a)$ y vale
$$
(f^{-1})'(f(a))= \frac{1}{f'(a)}
$$
o, de manera alternativa, siendo $x = f(a)$
$$
(f^{-1})'(x)= \frac{1}{f'(f^{-1}(x))}
$$

El límite del cociente incremental queda
$$
\lim_{ h \to 0 } \frac{f^{-1}(f(a) + h) - f^{-1}(f(a))}{h}= \lim_{ h \to 0 } \frac{f^{-1}(f(a) + h) - a}{h}.
$$