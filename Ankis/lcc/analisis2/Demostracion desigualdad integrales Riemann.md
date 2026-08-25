---
noteId: 1787426862531
---

Demuestre que, sea $s$ fun acotada en $[a,b]$ entonces
$$
\underline{\int}_{a}^{b} f(x) \, \leq \overline{\int}_{a}^{b} f(x) \, .
$$

---

Para toda partición $P$ y $Q$ de $[a,b]$ vale, por [[lema desigualdad particiones]] que $L(f,P) \leq U(f,Q)$. Entonces, tomando ínfimo sobre $Q$
$$
L(f,P) \leq \inf_{Q} U(f,Q) = \overline{\int}_{a}^{b} f(x) \, , \tag{1}
$$
y considerando el supremo de $P$
$$
\underline{\int}_{a}^{b} f(x) \, = \sup_{P}L(f,P) \leq U(f,P) \tag{2}
$$
Entonces, juntando $f(x) \tag{1}$