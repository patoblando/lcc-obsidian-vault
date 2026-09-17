**Corolario:** Si $\Gamma \not\vdash \phi$ entonces existe una valuación $v$ tal que $\left[ \! \left[ \Gamma \right] \! \right]_{v} = True$ y ~~$\left[ \! \left[ \phi \right] \! \right]_{v} = False$.~~
¿Cómo demostramos esto?

---

Si no lo deriva entonces $\Gamma \cup \left\{ \neg \phi \right\}$ es consistente, ahí existe una valuación que hace que los dos sean verdaderos y por def de valuación $\left[ \! \left[ \neg \phi \right] \! \right]_{v}=True \Leftrightarrow \left[ \! \left[ \phi \right] \! \right]_{v}=False$.