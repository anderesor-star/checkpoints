# Preguntas Teóricas

## Pregunta 1: ¿Para qué usamos Clases en Python?

### Usos
En Python el uso de clases es muy común, este se realiza para poder almacenar un conjunto de funciones en un mismo grupo. Las clases organizan datos y comportamiento. Aunque también se pueden almacenar variables, estas suelen ir dentro de las funciones.

En Python existen atributos de clase (las variables comunes) y los atributos de instancia, que se definen en el `__init__`, pero son las que definen el objeto.

Gracias a ello, expresando una sola vez un set de datos se pueden utilizar múltiples funciones que requieran de dichos datos, sin tener que ponerlos una y otra vez cada vez que queramos utilizarlos.

Además, si varias funciones tienen características parecidas pueden ser agrupadas así, indicando que pertenecen al mismo tipo de funciones. O, por el contrario, funciones que realizan acciones que no se parecen nada entre ellas pero que sirven para un único elemento se ejecute correctamente; en ese caso indica todas las funciones necesarias para el funcionamiento del elemento.

### Sintaxis
```python
class nombre(elementos):
    contenido
```
### Ejemplos
Ejemplo 1:
```python
class usuario:

    def saludo(self, nombre, apellido):
        return f'Hola, {nombre} {apellido}'

ejemplo = usuario()
print(ejemplo.saludo('Juan', 'Martínez'))
```

Ejemplo 2:
```python
class sumatorio:

    def __init__(self, numero_uno, numero_dos):
        self.numero_uno = numero_uno
        self.numero_dos = numero_dos

    def operacion(self):
        return self.numero_uno + self.numero_dos

ejemplo = sumatorio(4,8)
print(ejemplo.operacion())
```
### Imágenes
![clases](../documentación%20teórica/img/clases.webp)
## Pregunta 2: ¿Qué método se ejecuta automáticamente cuando se crea una instancia de una clase?

### Definición
Cuando se crea una instancia de una clase en Python, automáticamente se ejecuta el método init; aunque si se quiere expresar manualmente se escribe `__init__`.

Este sirve para inicializar atributos del objeto, de forma que se ejecuten automáticamente al llamarlo.
### Usos
`__init__` se expresa de forma explícita cuando queremos que las funciones que vayan a haber dentro de la clase utilicen los mismos elementos y no haya que volverlos a escribir cada vez que se llame a una función, sino que se expresen con la clase en sí.

Una buena práctica con `__init__` es expresarlo al inicio de la clase, para que así el resto de las funciones puedan funcionar correctamente.

Esto es beneficioso a la hora del funcionamiento de los programas, ya que con expresar los elementos que queremos utilizar solamente en la clase y almacenarlo en una variable, y luego, a la hora de imprimirlo, basta con escribir la variable, punto y el nombre de la función con los paréntesis vacíos. Así sigue funcionando pero no es necesario escribir los elementos por cada función.

Este permite evitar repetir datos una y otra vez cada vez que se llama el método y permite crear objetos con estado propio, así como evitar repetir inicializaciones.
### Sintaxis
```python
class clase:

    def __init__(self, elemento_uno, elemento_dos):
        self.elemento_uno = elemento_uno
        self.elemento_dos = elemento_dos

```
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
Los verbos API son métodos HTTP que nos indican qué acción queremos realizar sobre un recurso. Los más comunes son GET, POST y DELETE. En estos casos cada uno realiza lo que significa el verbo: GET nos muestra el recurso, POST crea uno nuevo, y DELETE elimina uno.
### Usos
Estos se utilizan para realizar diferentes acciones con los recursos. Es muy útil para discernir entre las diferentes posibilidades de acción y escoger la que más nos convenga para nuestro programa.
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
MongoDB es una base de datos NoSQL documental, es decir, no relacional. Esto significa que tiene una estructura mucho más flexible que la SQL, ya que guarda la información en documentos y dentro de esos documentos puede haber arrays, campos anidados y estructuras variables.

MongoDB usa documentos flexibles, lo que lo hace NoSQL, y eso facilita cambiar la estructura de los datos sin definir columnas fijas desde el principio.

Sin embargo, aunque otorgue gran flexibilidad a la hora de almacenar datos, también requiere de bastante responsabilidad ya que, si en un futuro la base de datos cambia de NoSQL a SQL y no se ha seguido un orden o estructura a la hora de meter los datos, el cambio no se podría hacer y daría error. Por ello, es especialmente importante seguir un orden a la hora de programar. 
### Usos
Se usa para cuando es necesario almacenar conjuntos de datos con mucha flexibilidad; es decir, algunos estructurados (para los que serviría SQL), otros semiestructurados y otros no estructurados. 

Por ejemplo, para datos de tipo documento este tipo de bases de datos son bastante útiles, ya que con SQL nos exigiría organizar los datos de forma que cuadren las tablas.
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
Una API es una interfaz de programación que permite que dos aplicaciones o programas se comuniquen entre sí e intercambien datos y/o funciones.
### Usos
Las APIs son especialmente útiles para reducir la extensión del código, ya que solo llamándolo se pueden importar bastantes datos y funciones, muchas veces vitales, para el funcionamiento del programa. Todo esto sin que el programador/a tenga que escribirlo, o incluso saber cómo funciona (muy beneficioso para gente que está empezando a programar).

API permite reutilizar funcionalidades (reduciendo la duplicación y haciéndolo más limpio) y separar responsabilidades entre sistemas, lo cual es conveniente por si alguno de ellos falle, así no falla todo junto.

Una de las principales características de API es que permite separar cliente y servidor, lo cual es esencial a la hora de probar los endpoints. También permite conectar sistemas sin mezclar su lógica interna.
### Ejemplos
Ejemplo 1: las aplicaciones del tiempo consultan una API meteorológica

Ejemplo 2: una aplicación de sanidad utiliza una API de probabilidades para las enfermedades.
### Imágenes
![API](../documentación%20teórica/img/how-a-web-api-works.avif)
## Pregunta 6: ¿Qué es Postman?

### Definición
Postman es una plataforma que sirve para crear, probar, documentar y compartir APIs. 
### Usos
Algunos de los principales usos de la aplicación son enviar peticiones HTTP, revisar las respuestas que da nuestro código u organizar colecciones de requests.

Una de las principales características de Postman y el por qué su uso es tan recomendado y extendido es que permite probar distintas APIs sin tener que programar una interfaz para ello.

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
Un método dunder es un método especial de Python el cual empieza y acaba por dos barras bajas, como puede ser `__init__`, `__str__`... En todos ellos, el primer elemento que tendremos que pasar será `self`.

Estos son métodos que Python de por sí ya ejecuta por sí solo, pero que podemos llamarlos nosotros para asignarles características concretas.
### Usos
Estos son muy útiles para poder realizar acciones en las funciones que de normal no se podrían. El especificar algunas acciones en métodos que van a ser llamados siempre (no como las funciones) nos permite simplificar el código en las funciones.
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
Un decorador de Python es una función que recibe otra función y devuelve otra que añade comportamiento, siempre sin tocar el código original de la primera función.
### Usos
Los decoradores son especialmente útiles para cuando queremos que haga más acciones que las que tiene programadas, sin tener que modificar esa misma función (ya sea por comodidad o porque no podemos modificarla).

El poder hacer esto es fundamental para actualizar las aplicaciones, ya que muchas veces el cambiar el código de las funciones originales es mucho más complicado que modificarlas así, por lo que se ahorra tiempo.

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
