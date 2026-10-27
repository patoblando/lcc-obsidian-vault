Sea $(\mathcal{F},\mathcal{P})$ una signatura, defina **modelo** o **interpretación** $\mathcal{M}$ para $(\mathcal{F},\mathcal{P})$

---

Consiste en:

- Un conjunto no vacío $A$ llamado **universo**
- Para cada constante $c \in \mathcal{F}$, un elemento $c^\mathcal{M} \in A$
- Para cada símbolo $f \in \mathcal{F}$ con $ar(f)=n>0$, una función $f^\mathcal{M} : A^n\to A$
- Para cada símbolo de predicados $P \in \mathcal{P}$, un conjunto $P^\mathcal{M} \subseteq A^n$. Es decir, una relación n-aria sobre $A$. Este sería el conjunto de *predicados válidos* (definido así por mí, no por la cátedra).