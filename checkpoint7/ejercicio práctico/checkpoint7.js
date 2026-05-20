//Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, 
// luego los dos segundos y multiplícalos. 
// Si el número creado es mayor que 50, la consola registra 
// "¡El número es mayor que 50!". Si es más pequeño, la consola registra 
// "¡El número es menor que 50!"

function suma (arg1, arg2, arg3, arg4) {
    resultado = (arg1 + arg2) * (arg3 + arg4);

    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

suma (1,5,2,6);
suma(30, 20, 8, 15);