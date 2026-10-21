---
noteId: 1787426862531
---

Demuestre que, sea $s$ fun acotada en $[a,b]$ entonces
$$
\underline{\int}_{a}^{b} f(x) \, \leq \overline{\int}_{a}^{b} f(x) \, .
$$

---

Para toda partición $P$ y $Q$ de $[a,b]$ vale, por [[lema desigualdad particiones]] que 
$$
L(f,P) \leq U(f,Q) \tag{1}
$$
Entonces, ~~tomando ínfimo sobre Q~~ si fijamos $P$, por $(1)$, $L(f,P)$ es menor que *cualquier* suma superior $Q$. Es decir, $L(f,P)$ es una _cota inferior_, y por defnición de ínfimo (es la *mayor* cota superior):

$$
L(f,P) \leq \inf_{Q} U(f,Q) = \overline{\int}_{a}^{b} f(x) \, , \tag{2}
$$
Similarmente, fijando $Q$, $U(f,P)$ es mayor que *cualquier* suma inferior, por lo que debe ser necesariamente mayor que el supremo (que es la menor cota superior):
$$
\underline{\int}_{a}^{b} f(x) \, = \sup_{P}L(f,P) \leq U(f,P) \tag{3}
$$
Entonces, juntando $(2)$ y $(3)$ tenemos:
$$
\underline{\int}_{a}^{b} f \, 
$$