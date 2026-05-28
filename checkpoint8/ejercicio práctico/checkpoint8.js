/*
-Cree un bucle for en JS que imprima cada nombre en esta lista. 
    miLista = “velma”, “exploradora”, “jane”, “john”, “harry”

-Cree un bucle while que recorra la misma lista y también imprima los nombres. 
    Nota: Recuerda crear un contador para que el ciclo no sea infinito.

-Cree una función de flecha que devuelva "Hola mundo".*/

const miLista = ['velma', 'exploradora', 'jane', 'john', 'harry'];

//Ejercicio 1:
for (let i = 0; i < miLista.length; i++){
    console.log(miLista[i]);
}


//Ejercicio 2:
let a = 0;
while (a < miLista.length) {
    console.log(miLista[a]);
    a++;
}

//Ejercicio 3:
const flecha = () => {console.log("Hola mundo")};
flecha();