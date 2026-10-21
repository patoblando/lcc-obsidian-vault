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
Luego la la integral superior es una cota superior de todas las $L(f,P)$. Como la integral inferior es la mínima de las cotas superiores, tenemos simplemente que
$$
\underline{\int}_{a}^{b} f \, \leq \overline{\int}_{a}^{b} f \, .
$$
$$
\tag*{$\square$}
$$