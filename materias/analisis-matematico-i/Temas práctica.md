#AMI
Analisis de los tipos de ejercicio más tomados. Texto generado por Gemini 2.5 Pro dados los apuntes de clase y todos los finales prácticos que tengo.

---
¡Excelente! Analizar los exámenes prácticos es un paso clave para entender qué se espera que puedas resolver. Después de revisar en detalle todos los exámenes que me proporcionaste (ignorando los ejercicios para alumnos libres), he identificado un patrón muy claro.

Efectivamente, como sospechabas, el **Cálculo Integral** (cálculo de primitivas, integrales definidas y cálculo de áreas) es un tema que aparece en algunos exámenes, pero **no está en los apuntes teóricos** que me facilitaste. Esto confirma que es un contenido que ya no pertenece al programa de Análisis Matemático I y ha sido movido a Análisis Matemático II. Por lo tanto, lo excluyo del siguiente análisis.

Aquí tienes un listado de los tipos de ejercicios que **se toman siempre** en los finales prácticos, con un resumen de cómo se resuelven.

---

### **Tipos de Ejercicios Siempre Presentes en los Finales Prácticos**

#### **Tipo 1: Análisis de Funciones a Trozos (para Continuidad y Derivabilidad)**

Este es, por lejos, el ejercicio más recurrente. Aparece en prácticamente todos los exámenes.

*   **El Problema Típico:** Te dan una función definida por partes, donde las expresiones algebraicas contienen constantes desconocidas (como `a`, `b`, `c`, `h`, `m`). Se te pide hallar los valores de esas constantes para que la función sea **continua** y/o **derivable** en todo su dominio, especialmente en el punto donde cambia la definición.
*   **Resumen de Cómo Resolverlo:**
    1.  **Condición de Continuidad:** Para que la función sea continua en el punto de "unión" `x = c`, el límite debe existir y ser igual al valor de la función. Esto se traduce en:
        *   Calcular el límite por la izquierda: `lím (x→c⁻) f(x)`.
        *   Calcular el límite por la derecha: `lím (x→c⁺) f(x)`.
        *   Evaluar la función en el punto: `f(c)`.
        *   Igualar los tres resultados. Esto te dará una o más ecuaciones con las constantes.
    2.  **Condición de Derivabilidad:** Para que la función sea derivable en `x = c`, primero debe ser continua. Luego, las derivadas laterales deben existir y ser iguales.
        *   Calcula la función derivada `f'(x)` para cada uno de los trozos.
        *   Calcula la derivada por la izquierda: `lím (x→c⁻) f'(x)`.
        *   Calcula la derivada por la derecha: `lím (x→c⁺) f'(x)`.
        *   Iguala ambos resultados. Esto te proporcionará otra ecuación.
    3.  **Resolver el Sistema:** Con las ecuaciones obtenidas de los pasos 1 y 2, armas un sistema de ecuaciones y lo resuelves para encontrar los valores de las constantes `a`, `b`, etc.

#### **Tipo 2: Problemas de Aplicación de Derivadas (Razón de Cambio u Optimización)**

Siempre hay un problema de "aplicación a la vida real" que se resuelve con derivadas.

*   **El Problema Típico:**
    *   **Razón de Cambio:** Un globo que se infla, un objeto que se acerca a un edificio, una lámina que se contrae. Te dan la velocidad de cambio de una variable (ej: el radio, la distancia) y te piden la velocidad de cambio de otra (ej: el volumen, el ángulo, el área).
    *   **Optimización:** Un campesino cercando un terreno, las dimensiones de una página para minimizar el área total. Te piden encontrar las dimensiones o el valor que hace que una cantidad sea **máxima** o **mínima**.
*   **Resumen de Cómo Resolverlo:**
    *   **Para Razón de Cambio:**
        1.  **Identificar Variables:** Dibuja un esquema y nombra todas las cantidades que varían con el tiempo (ej: `V(t)`, `r(t)`, `θ(t)`).
        2.  **Ecuación de Vínculo:** Escribe una fórmula matemática que relacione esas variables (ej: la fórmula del volumen de la esfera `V = (4/3)πr³`).
        3.  **Derivar Implícitamente:** Deriva ambos lados de la ecuación **con respecto al tiempo (t)**. Recuerda aplicar la Regla de la Cadena (ej: la derivada de `V` es `dV/dt`, la de `r³` es `3r² * dr/dt`).
        4.  **Sustituir y Resolver:** Reemplaza los valores que te da el problema (valores instantáneos de las variables y sus razones de cambio conocidas) y despeja la incógnita que te piden.
    *   **Para Optimización:**
        1.  **Función a Optimizar:** Escribe la fórmula de la cantidad que quieres maximizar o minimizar (ej: Área `A = x*y`). Esta es tu "función objetivo".
        2.  **Ecuación de Restricción:** Escribe la ecuación que representa la condición o limitación del problema (ej: Perímetro `P = 2x + 2y = 100`).
        3.  **Despejar y Sustituir:** Despeja una variable de la ecuación de restricción (ej: `y = 50 - x`) y sustitúyela en la función objetivo para que quede en función de una sola variable (ej: `A(x) = x(50-x)`).
        4.  **Calcular Derivada y Puntos Críticos:** Deriva la función objetivo (`A'(x)`), iguálala a cero y resuelve para encontrar los puntos críticos.
        5.  **Verificar Máximo/Mínimo:** Usa el criterio de la segunda derivada o el de la primera derivada para confirmar si el punto crítico corresponde a un máximo o a un mínimo.

#### **Tipo 3: Uso de Teoremas Fundamentales (Bolzano, Rolle, Lagrange)**

Estos ejercicios evalúan tu comprensión teórica y tu habilidad para aplicarla a problemas concretos.

*   **El Problema Típico:** "Muestre que la ecuación `f(x) = 0` tiene una **única solución** en un intervalo `[a, b]`" o "Pruebe que existe un punto `c` tal que...".
*   **Resumen de Cómo Resolverlo:**
    *   **Para demostrar existencia de solución (Teorema de Bolzano):**
        1.  Verifica que la función `f(x)` es continua en el intervalo cerrado `[a, b]`.
        2.  Evalúa la función en los extremos del intervalo, `f(a)` y `f(b)`.
        3.  Comprueba que tienen signos opuestos, es decir, `f(a) * f(b) < 0`.
        4.  Si se cumplen las condiciones, puedes afirmar por el Teorema de Bolzano que existe al menos un `c` en `(a, b)` tal que `f(c) = 0`.
    *   **Para demostrar unicidad de la solución (Teorema de Rolle):**
        1.  Una vez probada la existencia, supone por el absurdo que existen **dos** soluciones distintas, `c₁` y `c₂`, en el intervalo.
        2.  Esto significa que `f(c₁) = f(c₂) = 0`.
        3.  Verifica que `f(x)` es derivable en `(c₁, c₂)`.
        4.  Por el Teorema de Rolle, debería existir un punto `d` entre `c₁` y `c₂` tal que `f'(d) = 0`.
        5.  Calcula la derivada `f'(x)` y muestra que **nunca es cero** en el intervalo, o que es siempre positiva o siempre negativa. Esto genera una contradicción, probando así que la solución es única.

#### **Tipo 4: Cálculo de Límites y Análisis de Asíntotas**

Siempre hay ejercicios dedicados exclusivamente al cálculo de límites que no son inmediatos.

*   **El Problema Típico:** Calcular límites que presentan indeterminaciones (`0/0`, `∞/∞`, `0*∞`, etc.). A veces, esto se enmarca dentro de un ejercicio más grande de análisis de asíntotas.
*   **Resumen de Cómo Resolverlo:**
    1.  **Sustitución Directa:** Siempre intenta evaluar el límite sustituyendo el valor. Si da un número, ese es el resultado.
    2.  **Identificar Indeterminación:** Si obtienes una forma indeterminada, necesitas seguir trabajando.
    3.  **Aplicar Técnicas:**
        *   **Factorización y Simplificación:** Para funciones racionales o con raíces.
        *   **Regla de L'Hôpital:** Si la indeterminación es `0/0` o `∞/∞`, deriva el numerador y el denominador por separado y vuelve a calcular el límite. Es la herramienta más poderosa y frecuente.
        *   **Límites Notables:** Como `lím (x→0) sen(x)/x = 1`.
    4.  **Para Asíntotas:**
        *   **Verticales:** Busca valores de `x` que anulan el denominador pero no el numerador. Confirma calculando los límites laterales en ese punto; deben dar `±∞`.
        *   **Horizontales:** Calcula los límites cuando `x → +∞` y `x → -∞`. Si el resultado es un número `L`, entonces `y = L` es una asíntota horizontal.
        *   **Oblicuas:** Si no hay asíntotas horizontales, busca una recta `y = mx + b`. Calcula `m = lím (x→∞) f(x)/x` y luego `b = lím (x→∞) [f(x) - mx]`. Si ambos límites son finitos (y `m ≠ 0`), la asíntota existe.