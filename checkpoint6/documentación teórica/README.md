# Preguntas Teóricas

## Pregunta 1: ¿Para qué usamos Clases en Python?

### Definición
Las clases en Python son las plantillas que agrupan datos, como bien pueden ser los atributos, y comportamientos (es decir, los métodos) para crear objetos. A modo de comparativa: para crear un coche se necesitan una serie de instrucciones para decidir el modelo, el color, la forma... Todo eso se agrupa en un plano o lista de instrucciones. Las clases de Python funcionan igual: para crear un objeto o instancia se necesitan una serie de datos y funciones, las cuales son agrupadas en las clases, y así, posteriormente, es más fácil utilizarlas ya que todas las instrucciones se encuentran juntas.

### Usos
En Python el uso de clases es muy común, este se realiza para poder almacenar un conjunto de funciones y atributos en un mismo grupo. Las clases organizan datos y comportamiento. Aunque también se pueden almacenar variables, estas suelen ir dentro de las funciones. Su propósito es implementar un paradigma llamado Programación Orientada a Objetos (POO) (por eso muchas veces al buscar documentación sobre python en Internet aparece Python POO), cuyo fin principal es organizar el código de forma lógica; sin el uso de clases las variables y las funciones estarían sueltas por el código sin orden alguno, así están en bloques organizados por el objeto en el que se van a usar. Esto permite que el código sea más fácil de encontrar y mantener.

En Python existen atributos de clase (las variables comunes) y los atributos de instancia, que se definen en el `__init__`, pero son las que definen el objeto.

Gracias a ello, expresando una sola vez un set de datos se pueden utilizar múltiples funciones que requieran de dichos datos, sin tener que ponerlos una y otra vez cada vez que queramos utilizarlos.

Además, si varias funciones tienen características parecidas pueden ser agrupadas así, indicando que pertenecen al mismo tipo de funciones. O, por el contrario, funciones que realizan acciones que no se parecen nada entre ellas pero que sirven para un único elemento se ejecute correctamente; en ese caso indica todas las funciones necesarias para el funcionamiento del elemento.

Entre los beneficios de utilizar clases están la __reutilización del código__ (con crear la clase y sus funcionaes/datos una vez ya se pueden usar veces ilimitadas a lo largo del código sin tener que volver a escribirlas), el __encapsulamiento__ (permite proteger los datos, decidir que información es pública y cuál privada para que algunas partes del programa no interfieran con otras), ayuda al __mantenimiento__ (en caso de tener que cambiar algún dato/función principal solo hay que cambiarlo una vez en la clase donde está expresado, y no en todas las líneas en las que se utiliza) y permite tener __modularidad__ (facilita que varios programadores trabajen en el mismo código sin tener que interferir con las funciones ajenas, cada uno/a trabaja en su clase).

Sin embargo, también presenta algunas desventajas, como que para principiantes puede ser bastante complicado entender la lógica de objetos y el uso de `self`, sobre todo si se está empezando a programar en general. O que para programas muy pequeños puede hacer el código más largo y lento de lo necesario, cuando con haber dejado la función/dato suelto hubiera bastado.

Por convención la primera letra del nombre de la clase suele ir en mayúsculas(CapitalCase), para que así sea más fácil identificar más tarde en el código que estamos llamando una clase. También es una buena práctica que cada clase se especialice en una cosa y no mezclar funcionalidades dentro de las clases (si la clase se llama `Coche` no debería tener funciones de "maquillaje"); o que el primer parámetro que metamos en la clase siempre debe ser `self`, ya que es la forma en la que el objeto se refiere a sí mismo.

### Sintaxis
```python
class Nombre(elementos):
    contenido
```
### Ejemplos
Ejemplo 1:
```python
class Usuario:

    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def saludo(self):
        return f'Hola, {self.nombre} {self.apellido}'

ejemplo = Usuario()
print(ejemplo.saludo('Juan', 'Martínez'))
```

Ejemplo 2:
```python
class Sumatorio:

    def __init__(self, numero_uno, numero_dos):
        self.numero_uno = numero_uno
        self.numero_dos = numero_dos

    def operacion(self):
        return self.numero_uno + self.numero_dos

ejemplo = Sumatorio(4,8)
print(ejemplo.operacion())
```
### Imágenes
![clases](../documentación%20teórica/img/clases.webp)
## Pregunta 2: ¿Qué método se ejecuta automáticamente cuando se crea una instancia de una clase?

### Definición
Cuando se crea una instancia de una clase en Python, automáticamente se ejecuta el método `__init__`, que viene de *initialize*, y se le conoce técnicamente como constructor.

Este sirve para inicializar atributos del objeto, de forma que se ejecuten automáticamente al llamarlo. Cuando llamamos a una clase para crear un objeto, después de que Python haya reservado un espacio en la memoria para dicho objeto, automáticamente se dispara el método `__init__` para configurar sus datos iniciales. Es como la "configuración de fábrica" de un móvil nuevo cuando se enciende por primera vez: antes de que le hagamos nada ya tiene algunos parámetros adjudicados.
### Usos
`__init__` se expresa de forma explícita cuando queremos que las funciones que vayan a haber dentro de la clase utilicen los mismos elementos y no haya que volverlos a escribir cada vez que se llame a una función, sino que se expresen con la clase en sí. Sin este método tendríamos que crear un objeto vacío y luego asignar cada dato de forma manual en líneas separadas, lo cual puede provocar errores y alarga el código.

Una buena práctica con `__init__` es expresarlo al inicio de la clase, para que así el resto de las funciones puedan funcionar correctamente. Como nota, el primer elemento dentro del paréntesis siempre deberá ser `self`.

Esto es beneficioso a la hora del funcionamiento de los programas, ya que con basta expresar los elementos que queremos utilizar en la clase y almacenarlo en una variable; y luego, a la hora de imprimirlo, basta con escribir la variable, punto y el nombre de la función (que se encuentra dentro de la clase) con los paréntesis vacíos. Así sigue funcionando pero no es necesario escribir los elementos por cada función. Entre otros beneficios también están la __encapsulación de la lógica de creación__ (si se necesita validar un dato antes de que se ejecute cualquier función, como puede ser que la edad sea positiva, se puede hacer dentro del `__init__`), o la __consistencia__ (todos los objetos creados a partir de esa clase tendrán la misma estructura de datos básica).

Este permite evitar repetir datos una y otra vez cada vez que se llama el método y permite crear objetos con estado propio, así como evitar repetir inicializaciones. También permite la automatización (que el programa no olvide inicializar variables importantes) y crear varios objetos con valores diferentes de forma rápida y limpia. 

Sin embargo, si el `__init__` es demasiado complejo (por ejemplo, si intenta descargar un archivo o algo del estilo), puede provocar que la cración de objetos sea lenta, y eso dificulta el probar si funcionan de forma correcta.

Entre las buenas prácticas de este método podemos encontrar en la documentación que hay que mantenerlo simple, pues debe servir para asignar valores, no para realizar operaciones complejas; o que todos los elementos/atributos sean expresados, aunque se les coloque un valor de `None`, para que el código sea predecible; y por último, `__init__` no debe devolver nada, solo tiene que configurar el objeto, no se le debe poner ningún `return`.
### Sintaxis
```python
class clase:

    def __init__(self, elemento_uno, elemento_dos):
        self.elemento_uno = elemento_uno
        self.elemento_dos = elemento_dos

```

PD: `self` es como el indicador de que estamos hablando del propio objeto. Teniendo en cuenta la forma de contar de Python (se empieza en el 0), interpretémoslo así: `self` (0) es el objeto, lo que esta detrás del `=`, y ya el resto de elementos serían el 1, el 2, etc., los cuales concordarían con los elementos del objeto si los contamos de manera estándar.
### Ejemplos
Ejemplo 1:
```python
class usuario:

    def __init__(self, nombre, apellido, contraseña):
        self.nombre = nombre
        self.apellido = apellido
        self.contraseña = contraseña

    def saludo(self):
        return f'Hola, {self.nombre} {self.apellido}!'

    def datos(self):
        return f'Hola, {self.nombre} {self.apellido}. Tu contraseña es {self.contraseña}'

usuario_uno = usuario('Juan', 'Martinez', 'Contraseña123')

print(usuario_uno.saludo())
print(usuario_uno.datos())
```
Ejemplo 2:
```python
class cuentas:

    def __init__(self, nombre, deuda):
        self.nombre = nombre
        self.deuda = deuda

    def aviso(self):
        return f'Hola {self.nombre}, debes {self.deuda}'

google = cuentas('google', 100)

print(google.aviso())
```
### Imágenes
![init](../documentación%20teórica/img/init-viz.png)
## Pregunta 3: ¿Cuáles son los tres verbos de API?

### Definición
Los verbos API o métodos HTTP son comandos estandarizados que nos indican qué acción queremos realizar sobre un recurso. Estos, como verbos que son, nos indican que acción van a realizar sobre el recurso, al igual que si fuera el sustantivo de una oración.

Los más comunes son: 
- GET: también se interpreta como leer. Nos muestra el recurso, pero solo consulta la información que hay en él, no lo modifica de ninguna forma.
- POST: también se interpreta como crear. Este es utilizado para enviar datos nuevos al servidor y crear un recurso.
- DELETE: este se usa para borrar un recurso en específico, y hay que poner explícitamente cuál es que ha de ser borrado.
### Usos
Estos se utilizan para realizar diferentes acciones con los recursos. Es muy útil para discernir entre las diferentes posibilidades de acción y escoger la que más nos convenga para nuestro programa.

Entre las razones por las que se utilizan tenemos la claridad, pues permite que el código sea predecible (si se ve el verbo DELETE ya se sabe qué va a pasar sin tener que leer toda la lógica); también está el hecho de que son un estándar universal y todas las APIs modernas usan los mismos verbos, por lo que permite que los diferentes sistemas se entiendan entre sí sin necesidad de intermediarios; y por último, otorgan seguridad, ya que si se usa GET se sabe que se va a poder ver el recurso sin modificarlo ni romperlo, lo que permite ir con más seguridad a la hora de consultar información.

La principal ventaja de los verbos APIs es que otorgan organización, es decir, separa las intenciones de las rutas, así que con la misma ruta puedes realizar diferentes acciones dependiendo del verbo. Sin embargo, cabe destacar que si no se respetan las reglas (por ejemplo, utilizar un GET para borrar un usuario), se pueden generar fallos graves de seguridad y confusión, por lo que hay que tener cuidado de utilizarlos correctamente.

Por último, algunas de las buenas prácticas señaladas en la documentación son no usar los verbos en la propia URL, dejarlo ambiguo y que el verbo determine la acción; asegurarse de que un GET o un DELETE tenga siempre el mismo resultado y no cause efectos secundarios en otros recursos; y es recomendable acompañar siempre los verbos con el código de respuesta adecuado, es decir, programar un return que sea `201 Created`para POST o `404 Not Found` si un GET falla.
### Sintaxis
La sintaxis sería algo así:
```python
@app.route("/nombre", methods=["GET"])
def get_nombre():
    all_nombres = db.session.execute(db.select(Nombre)).scalars().all()
    result = nombres_schema.dump(all_nombres)
    return jsonify(result)
```
En la aplicación de Postman la sintaxis sería algo así:

GET (URL del programa)
### Ejemplos
Ejemplo 1:
```python
@app.route("/guides", methods=["GET"])

def get_guides():
    #all_guides = Guide.query.all(), es legacy, mejor no usar
    all_guides = db.session.execute(db.select(Guide)).scalars().all()
    result = guides_schema.dump(all_guides)
    return jsonify(result)
```
Ejemplo 2:
```python
@app.route("/books", methods=["GET"])

def get_guides():
    all_books = db.session.execute(db.select(Book)).scalars().all()
    result = books_schema.dump(all_books)
    return jsonify(result)
```
### Imágenes
![api-verbs](../documentación%20teórica/img/api-verbs.png)
## Pregunta 4: ¿Es MongoDB una base de datos SQL o NoSQL?

### Definición
MongoDB es una base de datos NoSQL documental, es decir, no relacional. Esto significa que tiene una estructura mucho más flexible que la SQL, ya que guarda la información en documentos y dentro de esos documentos puede haber arrays, campos anidados y estructuras variables. Estos documentos utilizan un formato BSON (la version binaria de JSON).

MongoDB usa documentos flexibles, lo que lo hace NoSQL, y eso facilita cambiar la estructura de los datos sin definir columnas fijas desde el principio. Un simil sería que las bases de datos SQL son excels (hojas de cálculo) en las que cada celda es obligatoria; y, en cambio, las NoSQL son tablas de word (documento de texto) las cuales cada una puede tener diferente número de celdas según lo que necesite, pero estando todas dentro del mismo documento.

Sin embargo, aunque otorgue gran flexibilidad a la hora de almacenar datos, también requiere de bastante responsabilidad ya que, si en un futuro la base de datos cambia de NoSQL a SQL y no se ha seguido un orden o estructura a la hora de meter los datos, el cambio no se podría hacer y daría error. Por ello, es especialmente importante seguir un orden a la hora de programar. 
### Usos
Se usa para cuando es necesario almacenar conjuntos de datos con mucha flexibilidad; es decir, algunos estructurados (para los que serviría SQL), otros semiestructurados y otros no estructurados. Esto es especialmente útil cuando las prioridades son la agilidad y la escala; en el desarrollo moderno los datos suelen cambiar rápidamente, y MongoDB permite a los programadores guardar datos sin tener que remodelar toda la base de datos cada vez que quieren añadir un campo nuevo.

Por ejemplo, para datos de tipo documento este tipo de bases de datos son bastante útiles, ya que con SQL nos exigiría organizar los datos de forma que cuadren las tablas.

Algunas de las ventajas que otorga una base de datos NoSQL son:
- __Esquema flexible__: se puede tener un documento de "Usuario" con teléfono y otro sin él en la misma colección sin que dé error de "campos vacíos".
- __Escalabilidad horizontal__: está diseñado para dividirse en muchos servidores de forma sencila (sharding), lo que es muy conveniente para aplicaciones con muchísimos usuarios
- __Velocidad de desarrollo__: como los datos se guardan de forma parecida a como se usan en el código, se pierde menos tiempo teniendo que transformar los datos.
- __Jerarquía natural__: se pueden guardar datos relacionados entre sí dentro de un mismo documento (direcciones, comentarios...) en lugar de tener que saltar entre tablas.

Sin embargo, también presenta algunas desventajas y limitaciones:
- __Consumo de memoria__: como no usa tablas relacionadas, a veces la información se repite y ocupa espacio innecesario.
- __Transacciones complejas__: las bases de datos SQL son más robustas para operaciones financieras donde es esencial la integridad entre tablas. En NoSQL como no se puede garantizar dicha integridad, pueden surgir errores.
- __Falta de estándar__: cada base de datos NoSQL tiene su propio leguaje de consulta, no como SQL en el que es universal.

Algunas de las buenas prácticas en las bases de datos NoSQL son el diseñar los documentos basándose en cómo se van a consultar los datos, no en cómo se ven; también evitar documentos gigantes, pues los documentos tienen un límite de tamaño de 16MB, es mejor guardar los registros en varos documentos que todos en uno solo; y, al igual que en SQL, es recomendable usar "índices" en los campos de consultas frecuentes (ejemplo: ID), esto acelera y simplifica las búsquedas.
### Sintaxis
Se trabaja con documentos JSON para poder escribir varias filas y poder plasmarlas de una sola vez. Algunos de los comandos más comunes son findOne(), insertOne() o updateOne().
### Ejemplos
Ejemplo 1:
```json
db.books.findOne(
    {
        name: 'OOP Programming'
    },
    {
        _id: 0,
        publishedDate: 1,
        authors: 1
    }
).pretty()
```
Ejemplo 2:
```json
db.books.insertOne({
    'name': 'Blink',
    'startDate': new Date(),
    'authors': [
        {'name': 'Malcolm Gladwell'},
        {'name': 'Ghost Writer'}
    ]
})
```
### Imágenes
![nosql](../documentación%20teórica/img/graph-sqlvsnosqul-2.png)
## Pregunta 5: ¿Qué es una API?

### Definición
Una API (Application Programming Interface(Interfaz de Programación de Aplicaciones)) es una interfaz de programación que permite que dos aplicaciones o programas se comuniquen entre sí e intercambien datos y/o funciones.

Una analogía comúnmente utilizada es el ejemplo del restaurante: el cliente no puede hablar directamente con la cocina (el servidor), necesita un intermediario, es decir, un camarero (la API).

Existen tres tipos de APIs según su acceso:
- __Privadas__: se usan solo dentro de una empresa (por ejemplo conectar diferentes sistemas de la misma empresa).
- __Públicas (abiertas)__: están disponibles para que cualquier desarrollador/a las use.
- __APIs de socios__: están disponibles solo para empresas que tienen un contrato específico.
### Usos
Las APIs son especialmente útiles para reducir la extensión del código, ya que solo llamándolo se pueden importar bastantes datos y funciones, muchas veces vitales, para el funcionamiento del programa. Todo esto sin que el programador/a tenga que escribirlo, o incluso saber cómo funciona (muy beneficioso para gente que está empezando a programar).

API permite reutilizar funcionalidades (reduciendo la duplicación y haciéndolo más limpio) y separar responsabilidades entre sistemas, lo cual es conveniente por si alguno de ellos falle, así no falla todo junto.

Una de las principales características de API es que permite separar cliente y servidor, lo cual es esencial a la hora de probar los endpoints. También permite conectar sistemas sin mezclar su lógica interna.

También tiene un factor de seguridad, ya que el servidor solo entrega los datos que la API permite, lo que protege el resto del sistema.

Algunos de los beneficios de usar APIs son el __ahorro de costes y tiempo__, ya que en lugar de programar nosotros todo el sistema que necesitemos, podemos utilizar la API con las funciones que necesitamos (por ejemplo, en vez de construir un sistema de pagos, se usa la API de PayPal); también da paso a la __innovación__, ya que permite crear aplicaciones nuevas combinando varias ya existentes; y por último ofrece __escalabilidad__, lo que permite separar el "fronted" o lo que ve el usuario del "backend" o la lógica del programa, lo que facilita actualizar partes del programa sin romper la otra.

También consta con sus desventajas, como que siempre está __dependiente de terceros__, por lo que si deja de funcionar, nuestra aplicación tambien; como añadido, presenta un problema de __seguridad__, ya que una API mal configurada es una puerta abierta para que hackers accedan a la aplicación; y también existe un problema de __latencia__, ya que cada vez que se piden los datos a una API externa, el programa tarda unos milisegundos en recibir la respuesta, lo cual puede ralentizar la aplicación.

Algunas buenas prácticas con las APIs son tener la documentación clara, ya que una API sin manual de uso no sirve para nada, hay que explicar qué datos pide y cuáles devuelve; deben tener versiones, si se hacen cambios grandes es recomendable que haya distintas versiones para no romper las aplicaciones de quienes ya usaban la version antigua; y deben tener un límite de tasa (Rate Limiting), es decir, establecer un máximo de peticiones por minuto para evitar la saturación del servidor.
### Ejemplos
Ejemplo 1: las aplicaciones del tiempo consultan una API meteorológica

Ejemplo 2: una aplicación de sanidad utiliza una API de probabilidades para las enfermedades.
### Imágenes
![API](../documentación%20teórica/img/how-a-web-api-works.avif)
## Pregunta 6: ¿Qué es Postman?

### Definición
Postman es una plataforma que sirve para crear, probar, documentar y compartir APIs. Se podría decir que es el laboratorio de pruebas de APIs, permite interactuar con una API sin necesidad de escribir código en el navegador o crear una aplicación para probarla.

Si un programador de Backend está construyendo un sistema, no puede esperar a que el Frontend esté terminado para probar si todo funciona correctamente, por lo que Postman es ese "cliente" que permite enviar peticiones y ver qué responde el servidor en tiempo real.

### Usos
Algunos de los principales usos de la aplicación son enviar peticiones HTTP, revisar las respuestas que da nuestro código u organizar colecciones de requests. Postman permite visualizar y depurar el cambio de información, convirtiendo los datos ilegibles en legibles, organizados y fáciles de entender.

Una de las principales características de Postman y el por qué su uso es tan recomendado y extendido es que permite probar distintas APIs sin tener que programar una interfaz para ello.

Algunos de los beneficios de usar Postman son el ahorro de tiempo masivo, pues se puede probar el código sin tener que tener terminar de construir todo el programa; tiene una organización por colecciones, lo que permite agrupar todas las rutas de un proyecto en carpetas para que sea más fácil de usar; crea entornos para que se pueda cambiar fácilmente entre probar el código en el ordenador y probarlo en el servidor real sin cambiar las URLs; y la automatización, pues permite escribir pequeños scripts para comprobar automáticamente si la respuesta de la API es correcta.

También tiene sus desventajas, como que consume muchos recursos como la memoria RAM si se tienen muchas pestañas abiertas, o que para un principiante la interfaz puede resultar complicada debido a todos los botones y aplicaciones que tiene.

Entre sus funcionalidades clave están:
- Request Builder: donde se elige el verbo (GET, POST...), la URL y los datos que se envían.
- History: el historial de todas las pruebas que se han hecho.
- Documentation: se genera automáticamente un manual de uso para el API basado en las pruebas guardadas.

Algunas buenas prácticas son el uso de variables (no escribir `http://localhost:5000` en cada petición, mejor usar `{{url}}`, así si se cambia de servidor solo se cambia la variable en un sitio), nombrar las peticiones (en vez de dejar "New Request" poner nombres descriptivos) y guardar las respuestas de ejemplos para que otros sepan qué esperar del código.

En resumen, es una plataforma que nos permite visualizar en tiempo real las acciones que queremos realizar con nuestro código, así como compartirlo con otros programadores. Sirve para probar diferentes endpoints sin tener que construir la aplicación completa, lo cual es muy conveniente para comprobar que se va por el buen camino.
### Ejemplos
Como ejemplo tenemos el probar un GET con nuestra URL, o enviar un POST con JSON para crear un recurso y que otros puedan usarlo.
### Imágenes
![postman](../documentación%20teórica/img/postman%20get.png)
## Pregunta 7: ¿Qué es el polimorfismo?

### Definición
El polimorfismo es el hecho de que distintas clases pueden responder al mismo método de forma diferente, para poder usar la misma función en diferentes casos y, aunque tenga la misma estructura, que de resultados diferentes dependiendo de la variable con la que la usamos.

En resumen, el polimorfismo se trata de la misma interfaz con comportamiento diferente.
### Usos
Esto es especialmente útil para aplicaciones en las que hay una acción común pero que queremos que tenga diferentes resultados dependiendo de los datos que le metamos.

Esto permite crear código más flexible y adaptable a cualquier situación, es decir, prepararse para cualquier resultado y reducir la cantidad de código para que este quede más limpio y profesional.

Se utiliza para construir sistemas flexibles y escalables, así el programador/a escribe un código general que funciona con muchos tipos de objetos sin tener que saber exactamente qué objetos es en cada situación. Esto evita que haya cantidad de condicionales infinitos.

Algunos beneficios del polimorfismo son que el código se vuelve más limpio, que hay más extensibilidad (se pueden añadir clases que funcionen con los métodos ya escritos en el código) y reduce la duplicación y facilita la corrección de errores.

Algunas de las desventajas son que el seguimiento en proyectos más grandes se vuelve más complicado, sobre todo si hay muchas clases polimórficas encontrar exactamente qué versión del método se está ejecutando; o que el diseño inicial requiere una fase de planificación más cuidadosa para decidir qué métodos deben ser comunes.

Por último, las buenas prácticas en el polimorfismo son que los métodos deben tener exactamente el mismo nombre, que el método debe recibir la misma cantidad de argumentos en todas las clases y que las clases deben ser abstractas o usar "clases base" que obligan a las demás a implementar el método.
### Sintaxis
```python
class uno:
    def común():
        return resultado_uno

class dos:
    def común():
        return resultado_dos
```
### Ejemplos
Ejemplo 1:
```python
class chica:
    def __init__(self, género):
        self.género = género
        
    def baño(self):
        return f'Ve al baño de {self.género}.'

class chico:
    def __init__(self, género):
        self.género = género
        
    def baño(self):
        return f'Ve al baño de {self.género}.'

nombres = {
    'Aiala' : chica('chicas'),
    'Jon' : chico('chicos'),
    'Juan': chico('chicos'),
    'Maialen': chica('chicas')
}

for nombre in nombres:
    print(str(nombre) + ',' + str(nombres[nombre].baño()))
```
Ejemplo 2:
```python
class Perro:
    def hablar(self):
        return "Guau"

class Gato:
    def hablar(self):
        return "Miau"

perro = Perro()
gato = Gato()

print(perro.hablar())
print(gato.hablar())
```
### Imágenes
![polimorfismo](../documentación%20teórica/img/polimorfirmo.jpg)
## Pregunta 8: ¿Qué es un método dunder?

### Definición
Un método dunder, que viene de *Double Underscore* (doble guión bajo) es un método especial de Python el cual empieza y acaba por dos barras bajas, como puede ser `__init__`, `__str__`... En todos ellos, el primer elemento que tendremos que pasar será `self`.

No están diseñados para que se llamen directamente (ej. `objeto.__init__()` no está bien), sino para que Python los llame de forma automática. 

Estos son métodos que Python de por sí ya ejecuta por sí solo, pero que podemos llamarlos nosotros para asignarles características concretas.
### Usos
Se utilizan para realizar la sobrecarga de operadores y personalizar el comportamiento estándar de Python y así simplificar el código, pues no se necesita añadir funciones extras. Un ejemplo es permitir que los objetos sean sumados, o que pueda medir su longitud con `len()`.

Una gran ventaja es que permite que otros programadores usen las clases de forma intuitiva, o que permite la integración ya que hace que las clases sean compatibles con las funciones integradas de Python (`sum()`, `len()`), o que ayuda a la legibilidad, pues si se utilizan métodos dunder el código suele ser mucho más limpio y fácil de leer.

Pero también tiene sus desventajas, como que si se abusa de ellos o se les da un uso que no les corresponde, el código será confuso e imposible de mantener; o que en aplicaciones importantes dependientes del tiempo, el uso excesivo de lógica compleja dentro de los dunder puede afectar al rendimiento y añadir una ligera sobrecarga.

Entre las buenas prácticas están respetar la semántica, implementar siempre `__str__` (para que los objetos no se vean como `<__main__.Clase object at ...>` al imprimirlos), y no inventar dunders, pues aunque es posible los nombres con doble guión bajo son para el núcleo de Python.

### Sintaxis
```python
def __nombre__(self):
```
### Ejemplos
Ejemplo 1:
```python
class Persona:
    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def saludo(self):
        return f'Hola {self.nombre} {self.apellido}'

p = Persona('Juan', 'Perez')
print(p.saludo())
```

Ejemplo 2:
```python
class Persona:
    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def __repr__(self):
        return f'Hola {self.nombre}!'

p = Persona('Juan', 'Perez')
print(p)
```
### Imágenes
![dunder](../documentación%20teórica/img/python-dunder-methods-overview-1200x800.webp)
## Pregunta 9: ¿Qué es un decorador de python?

### Definición
Un decorador de Python es una función que recibe otra función y devuelve otra que añade comportamiento, siempre sin tocar el código original de la primera función. Se podría decir que es el "envoltorio" de las funciones.

### Usos
Se utiliza para aplicar el principio de "separación de intereses". Permite extraer lódigca que se repite en muchas funciones (ejemplo: verificar si un usuario ha iniciado sesión) y ponerla en un solo lugar. Así no hay que escribir el mismo código de seguridad en múltiples funciones diferentes, solo se añade el decorador.

Los decoradores son especialmente útiles para cuando queremos que haga más acciones que las que tiene programadas, sin tener que modificar esa misma función (ya sea por comodidad o porque no podemos modificarla). 
El poder hacer esto es fundamental para actualizar las aplicaciones, ya que muchas veces el cambiar el código de las funciones originales es mucho más complicado que modificarlas así, por lo que se ahorra tiempo.

Algunos de los beneficios son que se evita duplicar el código (ejemplo: para medir el tiempo que tarda cada función del programa se cera un decorador de tiempo y se le aplica a todas), aporta limpieza al código, pues cada función se centra en su tarea y las secundarias se le delegan al decorador, y ofrece flexibilidad pues permite quitar o poner decoradores solo modificando una línea (la que empieza por `@`).

Entre sus desventajas están la dificultad de debugging (al añadir capas sobre la función, a veces los errores pueden ser más difíciles de rastrear si no se sabe el funcionamiento del rastreador) y la ocultación de metadatos (si no se tiene cuidado, la función decorada puede "olvidar" su nombre originar o su documentación, pero se puede solucionar usando `functools.wraps`).

Algunas buenas práctias con los decoradores son usar el `functools.wraps`, utilizar nombres descriptivos y no abusar de los decoradores, si solo se va a usar una vez en todo el programa, igual no es necesario un decorador.

En resumen, los decoradores añaden funcionalidad sin cambiar la función original del código inicial. 
### Sintaxis
```python
@nombre_de_la_función
def nueva_función():
    nuevas acciones
```
### Ejemplos
Ejemplo 1:
```python
def decorador(func):
    def tiempo():
        print("Antes")
        func()
        print("Después")
    return tiempo

@decorador
def saludo():
    print("Hola")

saludo()
```
Ejemplo 2:
```python
def decorador(func):
    def comprobador():
        func()
        print("Hecho")
    return comprobador

@decorador
def despedida():
    print("Adiós")

despedida()
```
### Imágenes
![decorator](../documentación%20teórica/img/python_decorator.webp)