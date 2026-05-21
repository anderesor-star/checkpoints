# Preguntas teóricas

## Pregunta 1: ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

### Definición

La diferencia que tiene Javascript, comúnmente escrito JS, con cualquier otro lenguaje de programación es que es el único lenguaje de programación que los navegadores web pueden entender y ejecutar de la misma, sin necesidad de instalar ninguna extensión para que lo puedan leer.

Javascript es un lenguaje interpretado, es decir, al contrario que los lenguajes compilados (C++, Java...), los cuales pasan por un proceso de "traducción" antes de poder ejecutarse, con JS el navegador lee el código y lo ejecuta al momento, sin necesidad de esa "traducción".&#x20;

Además, como es un lenguaje de tipado dinámico, no es necesario especificar si es un número o una cadena, él lo deduce solo. Esto lo convierte en un lenguaje muy flexible, lo cual es ideal para empezar en la programación.

### Usos

Javascript se creó para dinamizar las páginas web, pero hoy en día tiene muchos más usos:

* **Desarrollo Fronted (el cliente)**: se encarga de controlar lo que el usuario ve y hace en una página web. Por ejemplo, las animaciones, los formularios inteligentes, los juegos...
* **Desarrollo Backend (el servidor)**: gracias a una tecnología llamada Node.js, a día de hoy se puede utilizar JS para gestionar las bases de datos y crear lógica interna de aplicaciones fuera del navegador, como pasa con los sistemas de Netflix o Spotify.
* **Aplicaciones móviles**: permite crear apps para android e iOS usando el mismo código base que en el navegador.

### Buenas prácticas

Algunas buenas prácticas en Javascript son utilizar camelCase, es decir, indicar el inicio de la siguiente palabra utilizando una mayúscula; o tener bien organizado el código, determinando las variables al inicio de la sección (se recomienda usar `let` para valores que cambian, `const` para valores fijos y no usar `var` ya que es más fácil que surjan errores con ella).&#x20;

También es recomendable usar nombres descriptivos para las variables, pues así será más fácil a la hora de utilizarlas saber para qué son y dónde van.

### Ventajas

* **Ejecución inmediata**: como el navegador es capaz de ejecutarlo sin ningún tipo de extensión o programas es mucho más fácil de iniciar.
* **Gran comunidad**: como es el lenguaje más usado en la web, si hay algún problema o bug, la solución ya estará en internet. Basta con buscar el problema que sale y aparecerá. Hay miles de liberías que se pueden reutilizar.
* **Versatilidad**: utilizando solo Javascript se puede programar el diseño visual, el servidor y una app móvil. Eso es bastante útil para no tener que andar cambiando de lenguaje, sobre todo si se es principiante y los conocimientos son limitados.

### Desventajas

* **Permisividad peligrosa**: al ser un lenguaje tan flexible y no exigir reglas estrictas para los tipos de datos, es muy fácil cometer errores invisibles que no fallan al momento, pero sí en el resultado final.
* **Dependencia del ordenador**: como se ejecuta en el dispositivo del usuario, si el navegador que usa es muy antiguo, puede ser que algunas funciones modernas no funcionen igual o directamente no lo hagan.
* **Seguridad**: como el código se descarga en el navegador, cualquiera puede darle a inspeccionar y ver el código para el Frontend.

### Ejemplos

Ejemplo 1:

```
const mensajeUno = 'Hola, esto es un mensaje';
```

Ejemplo 2:

```
function saludar() {
    console.log('Hola');
}
```

### Imágenes

<figure><img src="https://assets.pluhe.com/blog/small/JqxsAtj7G5bc4D8vfE5LKrGjLhm2dgYi7aRtEXBd.jpg" alt=""><figcaption></figcaption></figure>

## Pregunta 2: ¿Cuáles son algunos tipos de datos JS?

### Definición

En Javascript, un tipo de dato es la categoría del valor que es almacenado en una variable. Esto le indica al ordenador qué tipo de información es y qué hacer con ella.

Entre los tipos de datos que hay en JS podemos encontrar:

* Booleanos: son `True` o `False` .
* Null o nulo: significa que está vacío o que no tiene valor.
* Undefined o indefinido: valor automático que tiene una variable a la que no se le ha asignado ningún valor.
* Números: se expresan tal cual el número, sin comillas. JS no diferencia entre números enteros y decimales, todos pertenecen al tipo números.
* Cadenas: es texto expresado entre comillas.
* Símbolos: son valores únicos e inmutables que se utilizan principalmente de forma avanzada para crear identificadores ocultos o propiedades privadas dentro de los objetos.
* Objetos: entran dentro de las llamadas estructuras complejas. Son colecciones de datos relacionados en formato de "clave y valor", como los diccionarios de Python. Permiten agrupar muchas características en una sola variable. Los arrays o listas y las funciones también se consideran tipos de objetos.

### Usos

El tipo de dato determina qué operaciones se pueden hacer en el ordenador:

* Los números se usan para cálculos, contadores y finanzas.
* Las cadenas se usan para mostrar o procesar texto o leer formularios.
* Los booleanos son los motores de la lógica del programa. Por ejemplo, deciden si un usuario puede entrar a una sección (`true`) o no (`false`)
* Los objetos se usan para agrupar conjuntos de datos que están relacionados entre sí.

### Buenas prácticas

Entre las buenas prácticas están:

* Dejar bien claro que tipo de dato queremos expresar, porque si no, como Javascript es un lenguaje muy flexible, puede dar lugar a errores más adelante.
* Usar comparadores estrictos (=== en vez de ==) para evitar que los tipos de datos se cambien de forma involuntaria, ya que eso podría dar un error.
* Usar `const` en vez de `let` o `var` (esta última está desaconsejada) si el valor no va a cambiar de tipo ni de contenido. Así se evita reescribir la variable por error.
* Inicializar las variables. Por ejemplo, si la variable va a tener texto más adelante pero todavía no se le puede asignar, inicializarla como un texto vacío (`let nombre = ""`) en vez de dejarla como indefinida. Esto ayuda a la predicibilidad del código.

### Ventajas

* No es necesario escribir qué tipo de dato es cada variable al crearla. El lenguaje se adapta a lo que se guarde en la variable.
* Consta de estructuras potentes, ya que los objetos de JS son tan intuitivos y útiles que su formato inspiró la creación de JSON (método más usado de internet para enviar datos entre aplicaciones).

### Desventajas

* Como el lenguaje es tan flexible, es común que haya errores silenciosos en las operaciones. Si se comete un error matemático absurdo (`'hola' * 2`), en vez de detener el programa con un error aparecerá NaN(Not a Number), y la aplicación seguirá funcionando mostrando datos erroneos.
* Si se usa el comando `typeof` (comando para identificar el tipo de dato que contiene una variable) para un dato nulo, el sistema dirá que es un objeto. Es un error del diseño de lenguaje que se remonta a 1995, pero que no se puede arreglar porque rompería millones de páginas webs actuales.

### Sintaxis

Cadenas:

```
const nombre = 'texto';
```

Números:

```
const nombre = 21;
```

Booleanos:

```
let nombre = true;
```

Indefinidos:

```
let nombre;
```

Nulos:

```
let nombre = null;
```

Objetos:

```
let nombre = {
    clave: valor
};
```

Símbolos:

```
const nombre = Symbol();
const nombre = Symbol('id');
```

### Ejemplos

Ejemplo 1:

```
const persona = 'María Gutierrez';
```

Ejemplo 2:

```
let precio = 25,99;
```

Ejemplo 3:

```
const inicioDeSesion = true;
```

### Imágenes

<figure><img src="https://www.cursosgis.com/wp-content/uploads/javascript-data-types-primitive-and-non-primitive.png" alt=""><figcaption></figcaption></figure>

## Pregunta 3: ¿Cuáles son las tres funciones de String en JS?

### Definición

Las tres funciones de String son funciones integradas en JS que permiten manipular, analizar o modificar cadenas de texto. Estas son:

* `includes()`: examina una cadena de texto para comprobar si tiene algo específico dentro de ella (lo que le indiquemos dentro de los paréntesis). Devuelve true o false.
* `slice()`: extrae una sección de una cadena de texto y devuelve una nueva cadena sin modificar la original.
* `replace()`: busca el fragmento específico que le hayamos indicado entre paréntesis en la cadena y lo reemplaza por otro texto nuevo también indicado.

### Usos

* `includes()`: se usa para crear filtros de búsqueda. Por ejemplo, comprobar que el nombre del producto coincide con la búsqueda del usuario.
* `slice()`: normalmente se usa para limitar la longitud del texto. Por ejemplo, en las pruebas gratuitas de los periódicos online, solo te dejan leer las primeras 100 palabras de la noticia sin pagar.
* `replace()`: sirve para limpiar datos o corregir formatos. Por ejemplo, sustituir los espacios de la búsqueda en google por +, o para censurar palabras prohibidas en un chat.

### Buenas prácticas

Una de las buenas prácticas en estas tres funciones es tener siempre en cuenta la inmutabilidad. `slice()` o `replace()` no modifican el texto original, sino que generan uno nuevo. Por lo cual, es recomendable guardar ese nuevo resultado en una nueva variable y no sobreescribir la variable original.

También hay que tener cuidado con las mayúsculas, ya que `includes()` distingue entre mayúsculas y minúsculas. Si se busca un texto en mayúsculas y el original está en minúsculas, devolverá false aunque sí esté. Por ende, es recomendable pasar todo el texto a minúsculas primero con `.toLowerCase()`.

### Ventajas

* No es necesario escribir funciones complejas con bucles para buscar o cortar palabras, ya existen dichas funciones, optimizando el código.
* Funciones como `includes()` hacen que el código sea más fácil de leer, casi como si fuera un texto estándar.

### Desventajas

La principal desventaja es que en `replace()` tradicionalmente solo se reemplaza la primera coincidencia que se encuentra, lo cual puede dar lugar a errores si no se está atento. Los programadores modernos suelen usar un método parecido llamado `replaceAll()`.

### Sintaxis

```
nombre.includes(texto);
nombre.slice(inicio, final);
nombre.replace(textoViejo, textoNuevo);
```

### Ejemplos

Ejemplo 1:

```
const correo = 'nombre@gmail.com';
const arroba = correo.includes('@');

console.log('¿Válido?', arroba);
```

Ejemplo 2:

```
const textoLargo = 'Hoy he ido a la frutería y he comprado naranjas, manzanas, plátanos, melocotones y sandía.
const resumen = textoLargo.slice(0, 30) + '...';

console.log(resumen);
```

Ejemplo 3:

```
const barraDelNavegador = 'dónde comprar pan';
const buscador = barraDelNavegador.replace(' ', '+');

console.log(buscador);
```

### Imágenes

<figure><img src="https://media.licdn.com/dms/image/v2/C4E22AQGU6SkhUfL-Yg/feedshare-shrink_800/feedshare-shrink_800/0/1667648864034?e=2147483647&#x26;v=beta&#x26;t=l7LNjn2zmhiigM-Uj17m2Qm-Ho-Q5Lcuan_F_RSvsSs" alt=""><figcaption></figcaption></figure>

## Pregunta 4: ¿Qué es un condicional?

### Definición

En Javascript una condicional es aquellas líneas de código que funcionan solo si la situación que se ha planteado es cierta; de no ser así, existe la posibilidad de añadir una respuesta para cuando la situación no se cumple (`else`).

Esto permite al programa tomar decisones. Es como una bifurcación en el camino: evalúa la situación propuesta y, dependiendo de si el resultado que da es `true` o `false`, hace que el ordenador ejecute un bloque de código específico, sin tener en cuenta los demás.

En Javascript hay tres tipos de condicionales diferentes:

* `if...else`
* `switch` (para casos múltiples)
* Operador ternario&#x20;

### Usos

El principal uso de las condicionales en la programación es que el código ejecute una acción solo en ciertas circunstancias. Esto da paso a la interactividad, ya que, sin ellas, el código siempre haría lo mismo, sin excepciones.&#x20;

Los usos más comunes en los códigos del día a día son:

* **Validaciones de accesos**: si el usuario es un administrador, puede acceder a las nóminas de todos los trabajadores; si no, solo puede acceder a la suya.
* **Gestión de estados**: si el usuario ha iniciado sesión, mostrar su estado como activo.
* **Adaptación de interfaces**: si el usuario tiene activado el modo oscuro, cambiar el fondo de la pantalla a negro y las letras a blanco.

### Buenas prácticas

* **Utilizar operadores apropiados**: estos sirven para comparar y unir condiciones. Algunos de los operadores más comunes y sus símbolos son:
  * \=== (estrictamente iguales, compara que el valor y el dato sean idénticos)
  * !== (estrictamente desiguales, compara que dos cosas sean distintas)
  * && (y/and, ambas condiciones deben ser verdad)
  * || (o/or, al menos una de las condiciones debe ser verdad)
* **Evitar el Pyramid of Doom o anidamiento infinito**: esto es meter una condición dentro de otra, y esta dentro de otra, desplazando el código hacia la derecha y dificultando su lectura. Es mejor usar cláusulas de guarda (retornar el error de inmediato para evitar el `else`).
* **Simplificar los booleanos**: en vez de escribir `if condición === true`, es mejor poner solo `if condición`, pues JS ya sabe que es un booleano.

### Ventajas

* **Dinamismo y flexibilidad**: permite que la aplicación responda en tiempo real a las acciones del usuario o a los datos entrantes de internet.
* **Organización**: de esta forma, el código queda mucho más organizado, ya que si estamos buscando cierta acción ya sabemos a qué parte mirar. Esto ayuda a que si otros programadores miran nuestro código sepan la lógica detrás de este.

### Desventajas

* **Dificultad**: dependiendo del código, la condicional puede ser muy enrevesada y dificultar su lectura y comprensión.
* **Bugs**: es muy fácil que salgan errores en las condicionales, ya que son complicadas de expresar de forma correcta; sobre todo si son muy largas o complejas. Si se olvida contemplar un escenario posible, fallará de forma silenciosa; o si en `switch` olvidas poner `break`, el código seguirá ejecutándose por error.

### Sintaxis

Condicionales `if... else`:

```
if (condición){
    código a ejecutar
} else if (condición) {
    código a ejecutar
} else {
    código a ejecutar
}
```

Condicionales switch:

```
switch (expresión) {
    case uno:
        código
        break;
    
    case dos:
        código
        break;
        
    default:
        por si acaso, ejecuta este código;
}
```

Operadores ternarios:

```
let variable = (condición) ? ejecuta este código : en su lugar ejecuta este otro;
```

### Ejemplos

Ejemplo 1:

```
if (edad > 18 && <80) {
    console.log('puede beber');
} else if (edad > 80) {
    console.log('no debería beber');
} else {
    console.log('no puede beber');
}
```

Ejemplo 2:

```
switch (armaEquipada) {
    case "espada":
        daño = 25;
        break;
    case "arco":
        daño = 15;
        break;
    case "daga":
        daño = 5;
        break;
    default:
        daño = 0;
```

Ejemplo 3:

```
const rangoJugador = (nivelJugador > 10) ? "Pro" : "Novato";
```

### Imágenes

<figure><img src="https://lh3.googleusercontent.com/VJIwkYcMlEsTgZzdFESMV04mylGCVg8xYzY_nN5BVhZWE5Btm66KzfsfiXZRWrD6jo7TjQiJ5LIiXSxNq-G4xaDQ9xc1qqaMdyRSe_GzJ5ERHfTsvil58WtiVIg77ID32uwhkc7HiE9dfN6x6t3Pdbzykb38MA0JPbhsX-xkYne_EovQ0ia6xYsQ-vS51zorEEOCEmZjnfbSAbT2uhdGngkO5HvB1-cbo52UXC87zIs9tarSuTX9evGLLDFKJJIMIN8diwfq-jZPyeY3ZpNRxv78iLtm1rv8pQ6BMLLFljCbWWS9QvsVBC4EH4_GjO9ha2VLiXikltCkhme6i7q6KggYfA8YYtKh9lJZ8HQ4BAYbFaVUwDmWUjGrnXEwRgaZvs8hq8khQTb50vVy4iKnADPNQ5GPwS6eDcU05M5lxxDKtxhL7GUcc6qdxZjXagUfAMvJSbK5YWTW9uS8PrenTKdn1i--TJi7izgdhYrxJ-s49po9GLYvGo1YH6BNEBGElI24-7A6SBH4YuRNTMeexAR4LohIBpvoZebzZs7-1t1GK8Z7HPOI0BDPnZ_ap5aOAGemo8CvAs1QaYNA9fRSAEUiTd3I9TmhHGLiLK8yujEKKO4Cl97r=w404-h288-no" alt=""><figcaption></figcaption></figure>

## Pregunta 5: ¿Qué es un operador ternario?

### Definición

Un operador ternario es una forma de expresar una condicional en Javascript, el cual da la oportunidad de almacenar el resultado de dicha condicional en una variable para usarla más tarde. Se considera una expresión, al contrario que `if...else`, que es una instrucción; esto significa que JS lo evalúa y lo procesa para devolver un único valor; dicha acción nos permite asignarlo a una variable o pasarlo como argumento dentro de una función.

Este se suele expresar en una sola línea separado por ? y :. Sin embargo, también se puede escribir en múltiples líneas cuando es  muy largo para que sea más fácil de leer.

Su nombre viene del hecho de que es la única estructura en JS que toma tres operandos: la condición, el resultado si la condición es verdadera y el resultado si es falsa.

### Usos

Los usos de los operadores ternarios son los mismos que los de las condicionales, pero a estos se les suman los siguientes:

* **Almacenabilidad**: los operadores ternarios nos permiten almacenar los resultados de las condicionales en variables para luego poder usarlas de forma más directa.
* **Escritura directa**: con los operadores ternarios escribimos la condición, un interrogante simbolizando la acción que queremos que realice si se cumple, la acción, dos puntos simbolizando el `else`, y la acción que queremos que se realice si no se cumple la acción. De esta forma, la condicional se expresa de forma más directa, aunque cueste un poco más de leer si se es nuevo al lenguaje.

### Buenas prácticas

* **Mantener la regla en una sola línea**: aunque es posible partir el operador en varias líneas, es mejor mantenerlo en una; y, si no es posible, seguramente será mejor usar un `if...else`.
* **No encadenar ternarios**: evitar meter un operador dentro de otro ternario (ternarios anidados). Aunque es posible, se vuelve muy complicado de leer y se considera mala práctica.
* **Usarlo solo para retornas valores**: no usar el ternario para ejecutar funciones complejas o lógicas; si se necesitan muchas operaciones es mejor una estructura tradicional.

### Ventajas

* **Código más simple**: usando operadores ternarios se reduce la cantidad de código que escribir, incluso si el operador ocupa varias líneas, por lo que este queda mucho más limpio y legible.
* **Disponibilidad de la condicional**: como nos permite almacenar la condicional en una variable, es mucho más fácil utilizarla/llamarla más tarde en el código que de las formas tradicionales. Al contrario que con un `if...else`, con el cual hay que crear una variable vacía para poder cambiar su valor dentro del bloque.

### Desventajas

* **Complejidad**: si no se conoce bien el lenguaje puede ser complicado de interpretar la primera vez que se ve.&#x20;
* **Limitación lógica**: solo funciona para escenarios "blanco o negro" (verdadero o falso). No está diseñado para evaluar múltiples caminos intermedios.

### Sintaxis

```
const variable = (condición) ? acción si se cumple : acción si no se cumple;
```

### Ejemplos

Ejemplo 1:

```
const rangoJugador = (nivelJugador > 10) ? "Pro" : "Novato";
```

Ejemplo 2:

```
const permisos = (usuario === admin) ? 'Tienes acceso' : 'No tienes acceso';
```

### Imágenes

<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbTnyAiKiSxl_Npf35zeHDVjPiZ6-_3iCyg&#x26;s" alt=""><figcaption></figcaption></figure>

## Pregunta 6: ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

### Definición

La principal diferencia entre declarar una función y expresar una función se puede explicar con el concepto técnico Hoisting o levantamiento.

La declaración de función es la forma tradicional. Se crea una función independiente usando la palabra `function` y dándole un nombre. Debido al hoisting, JS lee las funciones y las sube lógicamente (no físicamente) al principio del archivo antes de ejecutarlo. De esta forma se pueden llamar estas funciones antes de la línea en las que están escritas.

La expresión de función se basa en crear una función (con o sin nombre, es decir, anónima) y guardarla dentro de una variable. Al estar dentro de dicha variable, no sufre de hoisting, es decir, no se puede usar hasta que el código llegue a esa línea en la que está expresada.

### Usos

Las declaraciones de función se utilizan para definir funciones principales y generales del programa que se necesita que estén disponibles en cualquier parte del archivo, sin tener en cuenta el orden de escritura.

Las expresiones de función son muy utilizadas en la programación moderna de JS. Se usan mucho para pasar funciones como si fueran datos dentro de otras funciones (también llamado callbacks), así se limita el alcance funcional de una función a una zona específica del código y no a todo ello; o para transformarlas en Arrow functions o funciones flecha. Estas son funciones que no utilizan la palabra `function`, sino `() ⇒ {}`, y se utilizan para funciones breves o callbacks.

### Buenas prácticas

* **Priorizar las expresiones con `const`**: esto evita poder sobreescribir la función por error posteriormente en el código, y obliga a escribir un código más ordenado y predecible.
* **No abusar del Hoisting**: aunque es posible primero llamar la función y luego declararla, es mejor no abusar de ello pues se convierte en un código difícil de leer. Es mejor declarar todas las funciones posibles arriba del código y posteriormente llamarlas.

### Ventajas

* Declaración de función:
  * **Flexibilidad de orden**: se puede organizar el archivo poniendo la lógica principal arriba y los detalles de las funciones abajo del documento para que no estorben la lectura inicial.
* Expresión de función:
  * **Control del flujo**: al no "subir" las funciones con el hoisting, se sabe exactamente cuándo empieza a existir la función, evitando comportamientos raros del programa.
  * **Sintaxis moderna**: es el paso previo obligatorio para poder usar las Arrow Functions, que hacen el código mucho más corto y limpio.

### Desventajas

* Declaración de función:
  * **Duplicas**: es más fácil que el nombre de una función se encuentre dos o más veces en archivos grandes, y eso provocará que la primera función se sobreescriba con la segunda, aunque tuvieran fines diferentes.
* Expresión de función:
  * **Restricción estricta**: no es posible llamar la función antes de que sea expresada; si eso ocurre por error, el programa se romperá y lanzará un error tipo `ReferenceError`.

### Sintaxis

Declaración de función:

```
function nombreDeLaFuncion(parámetros) {
    código
}
```

Expresión de función:

```
const nombreDeLaVariable = function(parámetros) {
    código
}; //se pone ; porque es una variable
```

### Ejemplos

Ejemplo 1:

```
saludarUsuario("Lucas"); 

function saludarUsuario(nombre) {
    console.log("¡Hola, " + nombre + "! ¡Bienvenido!");
}
```

Ejemplo 2:

```
const despedirUsuario = function(nombre) {
    console.log("Hasta luego, " + nombre + ". ¡Sigue practicando!");
};

despedirUsuario("Lucas");
```

### Imágenes

<figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTs5ajn4AD8gNOa8wY3zqAcohzZM8zNVnGAw&#x26;s" alt=""><figcaption></figcaption></figure>

## Pregunta 7: ¿Qué es la palabra clave "this" en JS?

### Definición

En JS, `this` es una palabra clave que hace referencia a un objeto, el cual cambia según el contexto de ejecución (lugar y forma en la que se llama al código):

1. **Dentro de un método de un objeto**: `this` se refiere al objeto dueño del método (el objeto que está antes del punto. Es la equivalencia al `self`  de Python.
2. **Sola (en el espacio global del archivo)**: `this` se refiere al objeto global del sistema. En el caso del navegador, hace referencia a la ventana entera (window).
3. **Dentro de una función común**: en el JS moder (usando el modo estricto) `this` da como resultado `undefined` para evitar accidentes.

### Usos

* **Acceder a propiedades internas**: al igual que `self`, se usa dentro de los objetos para que sus funciones puedan leer o modificar sus propias características. Por ejemplo, que el método `saludas()` de un objeto usuario pueda usar el `nombre` guardado en ese mismo objeto; igual que en Python pondríamos `self.nombre`, solo que aquí no es necesario poner `this`. y el nombre.
* **Programación Orientada a Objetos (POO)**: es fundamental dentro de las clases y funciones constructoras para indicarle al código qué propiedades debe asignarle a un objeto nuevo cuando lo estamos instanciando.

### Buenas prácticas

* **Tener cuidado con las Arrow Functions y `this`**: las funciones flecha tienen un comportamiento especial, ya que no tienen su propio `this`. En su lugar, heredan el `this`  del lugar donde fueron creadas. Como regla general es mejor usar funciones tradicionales para los métodos de los objetos y Arrow Functions para procesos internos donde no se quiera que `this` cambie de valor.
* **Asegurar el contexto con `bind()` , `call()` o `apply()` :** si se necesita pasar el método de un objeto a otra parte del programa, `this` puede perderse. JS da herramientas profesionales como `.bind()` para "congelar" y amarrar el valor de `this` para que nunca cambie.

### Ventajas

* **Reutilización de código**: permite escribir una sola función y usarla en muchos objetos diferentes. La función sabrá automáticamente sobre qué objeto está trabajando gracias al `this`.
* **Flexibilidad dinámica**: como su valor se decide en el momento exacto de ejecutar la acción, permite crear sistemas muy dinámicos que se adaptan al contexto del usuario en tiempo real.

### Desventajas

Puede suceder una pérdida de contexto. Es sumamente fácil perder el rastro de a qué está apuntando `this`. Si se saca una función de un objeto y se ejecuta en otro lado, o si se usan funciones anidadas, `this` puede volverse `undefined` o apuntar al objeto `window` por accidente, rompiendo la aplicación.

### Sintaxis

```
this.nombreDeLaPropiedad;
```

### Ejemplos

Ejemplo 1:

```
const personaje = {
    nombre: "Aragorn",
    clase: "Guerrero",
    presentarse: function() {
        console.log("Soy " + this.nombre + ", el gran " + this.clase + ".");
    }
};

personaje.presentarse();
```

Ejemplo 2:

```
const perro = {
    nombre: "Toby",
    
    ladrar: function() {
        console.log("¡Guau! Mi nombre es " + this.nombre);
    }
};

perro.ladrar();
```

### Imágenes

<figure><img src="https://dmitripavlutin.com/static/96be8894060c323082745bb09e3ba854/92f0d/7-1.png" alt=""><figcaption></figcaption></figure>
