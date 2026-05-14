'''
Cree una clase de Python llamada Usuario que use el método init y cree un 
nombre de usuario y una contraseña. Crea un objeto usando la clase.
'''

class Usuario():
    def __init__(self, nombre, password):
        self.nombre = nombre
        self.password = password

    def datos (self):
        return f'Su usuario es {self.nombre}, y su contraseña es {self.password}. Bienvenido'
    

alguien = Usuario('Andere', 'Contraseña123')

print(alguien.datos())