# MDS (Meta data server) 

> Actúa como el directorio central y la autoridad de gestión de todo el sistema. Su única responsabilidad es manejar la información descriptiva de los archivos (metadatos).
> *"Introducción a la Administración de HPC" - Fundación Sadosky 2026*

# OSS/OST (Object storage server/target)
> Son las unidades de almacenamiento masivo. Guardan y sirven los contenidos binarios y los bloques de datos reales del usuario.
> *"Introducción a la Administración de HPC" - Fundación Sadosky 2026*

Es re loco eso, podeś tener un único nodo que tenga el "mapa" del sistema de archivos (que puede ser gigantesco, millones de millones de carpteas y subcarpetas) con la información importante de cada archivo, y después delegas el almacenamiento del archivo en si a nodos específicos que no saben qué están guardando.

Es como tener un centro de almacenamiento, donde hay una persona que tiene cada caja, donde y cuando hay que enviarla, mientras que el resto de los trabajadores se enfocan en el almacenamiento de las caja y se aseguran de poder encontrar la caja que les pidan de manera eficiente.

Así, con un poco de redundancia, podés sacar y poner nodos de almacenamiento masivo y escalar infinitamente. Es bastante ingenioso.
