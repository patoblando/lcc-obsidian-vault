Defina *signatura* y el conjunto $\mathrm{Form}$.

---

Una signatura es una tupla $(\mathcal{F},\mathcal{P})$. Donde $\mathcal{F}$ es un conjunto de *fórmulas* y $\mathcal{P}$ es un conjunto de *símbolos de predicado*.

Sea $(\mathcal{F},\mathcal{P})$ una signatura. El conjunto de fórmulas $\mathrm{Form}_{(\mathcal{F},\mathcal{P})}$ se define inductivamente como el mínimo conjunto tal que:
1. $\perp \in \mathrm{Form}_{(\mathcal{F},\mathcal{P})}$.
2. Si $\phi \in \mathrm{Form}_{(\mathcal{F},\mathcal{P})}$, entonces $(\neg \phi)\in \mathrm{Form}_{(\mathcal{F},\mathcal{P})}$
3. Si $\phi,\psi \in \mathrm{Form}_{(\mathcal{F},\mathcal{P})}$, entonces $(\phi \_ \psi)\in \mathrm{Form}_{(\mathcal{F},\mathcal{P})}$. $\_ = \land,\lor,\to$.
4. Si $ar(P_{i})=0$, entonces $P_{i}\in \mathrm{Form}_{(\mathcal{F},\mathcal{P})}$
5. Si $ar(P_{i})=n>0$, y 