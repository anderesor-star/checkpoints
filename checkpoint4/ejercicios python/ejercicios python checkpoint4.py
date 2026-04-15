#imports
from decimal import Decimal
import math

#ejercicio 1
ejemplo_lista = ['lista1', 'lista3', 'lista2']
ejemplo_tupla = ('tupla1', 'tupla2', 'tupla3')
ejemplo_float = 43.47
ejemplo_integer = 85
ejemplo_decimal = Decimal(54.64)
ejemplo_diccionario = {
    'diccionario1': 1, 
    'diccionario2': 2, 
    'diccionario3': 3
}
print(ejemplo_lista)
print(ejemplo_tupla)
print(ejemplo_float)
print(ejemplo_integer)
print(ejemplo_decimal)
print(ejemplo_diccionario)

#ejercicio2
print(math.ceil(ejemplo_float))

#ejercicio3
print(math.sqrt(ejemplo_float))

#ejercicio4
print(ejemplo_diccionario['diccionario1']) #si conocemos exactamente el elemento que queremos coger
print(list(ejemplo_diccionario.items())[0][1]) #si solo sabemos la posición del elemento y no el nombre

#ejercicio5
nueva_tupla = ejemplo_tupla [1]
print(nueva_tupla) #si queremos almacenar ese elemento en una variable
print(ejemplo_tupla[1]) #si solo queremos el elemento

#ejercicio6
nueva_lista = ejemplo_lista + ['lista4'] #si no queremos modificar la lista original
print(nueva_lista)
ejemplo_lista.append('lista4.2') #si queremos modificar la lista original
print(ejemplo_lista)

#ejercicio7
ejemplo_lista [0] = 'lista1.2'
print(ejemplo_lista)

#ejercicio8
ejemplo_lista. sort()
print(ejemplo_lista)

#ejercicio9
ejemplo_tupla += ('tupla4',)
print(ejemplo_tupla)