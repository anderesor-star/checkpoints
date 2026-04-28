#Ejercicio 1:Cree un bucle For de Python.

alumnos = range(1, 25)

for alumno in alumnos:
    print(f'Este es el alumno número {alumno}')


#Ejercicio 2: Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3.

def suma(valor_uno, valor_dos, valor_tres):
    print(valor_uno + valor_dos + valor_tres)

suma(4, 8, 25)


#Ejercicio 3: Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear.

suma_dos = lambda valor_uno, valor_dos, valor_tres: valor_uno + valor_dos + valor_tres

print(suma_dos(3, 42, 9))


'''
Ejercicio 4: Utilizando la siguiente lista y variable, 
determine si el valor de la variable coincide o no con un valor de la lista. 
*Sugerencia, si es necesario, utilice un bucle for in y el operador in.
'''

nombre = 'Enrique'

lista_nombre = 'Jessica', 'Paul', 'George', 'Henry', 'Adán'

for name in lista_nombre:
    if name == nombre:
        print('Sí está')
    else:
        print('No está')