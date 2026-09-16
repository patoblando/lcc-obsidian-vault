**Lema 5:** Sea $\Gamma$ un conjunto maximalmente consistente y $\phi \in Prop$. Si $\Gamma \vdash \phi$, entonces ~~$\phi \in \Gamma$~~.  Es decir, $\Gamma$ es ~~cerrado bajo derivación.~~

¿Como se demuestra esta tesis?

---

Supongo que $\Gamma\vdash \phi (*)$ pero que $\phi \not\in \Gamma$, entonces como $\Gamma$ es consistente maximal, $\Gamma \cup \left\{ \phi \right\}$ es inconsistente. Luego, por el lema anterior $\Gamma \vdash \neg \phi (**)$. Luego por $(*)$ y $(**)$ y el *lema 1*, $\Gamma$ es inconsistente. Absurdo. 