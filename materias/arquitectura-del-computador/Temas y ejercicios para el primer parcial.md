#arquitectura-computador

¡Excelente! Ahora, cruzando la información de los apuntes, los parciales anteriores y estas planchas de ejercicios, podemos trazar un mapa de estudio extremadamente preciso. Has hecho la pregunta clave.

Vamos a desglosar todo punto por punto.

### ¿Coincide el temario con los parciales anteriores?

**Sí, al 100%.** Tu cátedra ha sido muy consistente. Los parciales de 2023 y 2025 que me pasaste evalúan **exactamente** los temas cubiertos por la Plancha 2 y la Plancha 2, que a su vez se basan en los conceptos de los apuntes 1 al 4. No hay sorpresas ni temas fuera de lugar. Esto es una gran ventaja para ti, porque significa que puedes confiar plenamente en este material para prepararte.

---

### Ejercicios Cruciales para el Parcial

No todos los ejercicios tienen el mismo peso. Algunos son para practicar una habilidad básica, mientras que otros son "ejercicios tipo parcial" que integran múltiples conceptos. Aquí te marco los que son absolutamente cruciales. Si puedes resolver estos con soltura, estás en una excelente posición para aprobar.

#### **Plancha 1: Representación Computacional de Datos**

*   **Ejercicio 2 (Convertir a Complemento a Dos - Ca2):** **ESENCIAL.** Es la base de todo. Debes poder hacer esto de forma rápida y sin errores. La pregunta "¿Qué tienen en común...?" te obliga a entender que el bit más significativo (MSB) determina el signo.
*   **Ejercicio 4 (Interpretar binario en Ca2):** **ESENCIAL.** Es el proceso inverso al anterior. Te fuerza a reconocer un número negativo (cuando el MSB es 1) y a saber cómo volver a su valor decimal.
*   **Ejercicio 6 (Tabla de conversión de bases):** **FUNDAMENTAL.** La fluidez para pasar entre binario, octal, hexadecimal y decimal es una habilidad transversal que se usa en casi todos los demás ejercicios. Debes dominarla.
*   **Ejercicio 8 (Operaciones en Ca2 y análisis de Banderas):** **EL MÁS IMPORTANTE DE LA PLANCHA.** Este ejercicio es un simulacro de parcial en sí mismo. Integra:
    1.  Representación en Ca2.
    2.  Suma y resta binaria.
    3.  **Análisis de corrección del resultado**, que es lo más importante.
    4.  **Determinar el estado de las banderas `Carry (CF)` y `Overflow (OF)`**. Debes saber de memoria cuándo se activa cada una y qué significa.
*   **Ejercicio 10 (Análisis de código en C con `char` y `unsigned char`):** **MUY IMPORTANTE.** Es una pregunta clásica que evalúa cómo entiendes el desbordamiento (overflow y wraparound) en tipos de datos de tamaño fijo, y cómo se interpretan los mismos bits como `signed` (`%hhd`) o `unsigned` (`%hhu`).
*   **Ejercicio 11 (Suma hexadecimal y análisis de banderas):** Idéntico en espíritu al Ejercicio 8, pero partiendo desde hexadecimal. Muy buen ejercicio tipo parcial.
*   **Ejercicio 15 (Función `is_one` en C):** **CLAVE.** Te obliga a pensar en cómo usar máscaras y desplazamientos de bits (`&` y `>>`) para aislar y verificar un bit específico. Es la aplicación práctica del apunte de "Manejo de Bits".

#### **Plancha 2: Representación Computacional de Números Reales**

*   **Ejercicio 1 (Convertir a IEEE 754 simple precisión):** **ESENCIAL.** Es el procedimiento fundamental que debes dominar. Presta especial atención al `0.1`, que te recordará que las representaciones pueden ser infinitas y periódicas.
*   **Ejercicio 4 (Propiedad asociativa):** **CONCEPTUALMENTE CRUCIAL.** Este ejercicio demuestra que la suma en punto flotante no es asociativa: $(a \oplus b) \oplus c \neq a \oplus (b \oplus c)$. Entender *por qué* ocurre esto (por los redondeos en cada paso) es material de preguntas teóricas.
*   **Ejercicio 7 (Interpretar IEEE 754):** **ESENCIAL.** Es el proceso inverso al Ejercicio 1. Te obliga a identificar el signo, calcular el exponente real (restando el sesgo de 127) y reconstruir el significante (añadiendo el 1 implícito). Te permite identificar si un número es normalizado, denormalizado, cero, etc.
*   **Ejercicio 9 (Suma de `0.1 + 0.2`):** **CONCEPTUALMENTE CRUCIAL.** Este es el ejemplo más famoso de las "sorpresas" de la aritmética de punto flotante. Te obliga a hacer la conversión de números periódicos y a entender por qué el resultado no es exactamente $0.3$.
*   **Ejercicio 12 (Suma en IEEE 754 de números de distinto orden):** **MUY IMPORTANTE.** Este es un ejercicio integrador que te lleva a través de todos los pasos de una suma en punto flotante:
    1.  Convertir ambos números a IEEE 754.
    2.  **Igualar los exponentes** (desplazando la mantisa del número más pequeño).
    3.  Sumar las mantisas.
    4.  **Normalizar el resultado** si es necesario (ajustando la mantisa y el exponente).

---

### Temas que Tienes que Manejar para que te Vaya Bien

Resumiendo todo lo anterior, si te enfocas en dominar estos 5 pilares, estarás más que preparado.

1.  **Fluidez en Conversión de Bases:** Ser capaz de convertir cualquier número (entero o fraccional) entre las bases 2, 8, 10 y 16 sin dudar. Es la herramienta básica.

2.  **Dominio Absoluto de Complemento a Dos (Ca2):**
    *   Saber representar cualquier número positivo o negativo en Ca2 con un número fijo de bits.
    *   Saber interpretar cualquier patrón de bits en Ca2 y decir qué número decimal representa.
    *   Entender el rango de representación: $[-2^{n-1}, 2^{n-1}-1]$.

3.  **Comprensión Profunda de las Banderas de Aritmética Entera:** Este es el punto que separa a los que aprueban de los que no.
    *   **`Carry Flag (CF)`:** Se activa en una suma si hay un acarreo en el último bit (MSB). Indica un error **SOLO para aritmética SIN SIGNO**.
    *   **`Overflow Flag (OF)`:** Se activa si el signo del resultado es incorrecto. Ocurre al sumar dos números del mismo signo y el resultado da de signo contrario. Indica un error **SOLO para aritmética CON SIGNO**. Debes poder explicar por qué una operación es correcta para `unsigned` pero incorrecta para `signed`, y viceversa, basándote en estas dos banderas.

4.  **Fluidez Total con el Estándar IEEE 754 (Simple Precisión):**
    *   **Codificar:** Pasar de decimal a la representación binaria de 32 bits (signo, exponente sesgado, fracción).
    *   **Decodificar:** Pasar de un patrón binario/hexadecimal de 32 bits a su valor decimal.
    *   **Identificar Casos Especiales:** Saber cómo se representan el $\pm 0$, $\pm \infty$, los `NaN` y los números denormalizados (cuando el exponente es todo 0s).

5.  **Manejo de Operadores de Bits en C:** Saber leer y escribir expresiones simples con `&`, `|`, `^`, `<<`, `>>` para manipular bits. Principalmente para aislar (con `&`), encender (con `|`), invertir (con `^`) o mover bits.

Si te concentras en los ejercicios cruciales que te marqué y te aseguras de entender a fondo estos cinco temas, el parcial te resultará muy familiar y accesible. ¡Mucho éxito en el estudio