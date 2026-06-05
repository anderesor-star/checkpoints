let horario = prompt ('¡Bienvenido! Introduzca la hora a la que quiere comer para continuar(formato 24h, HH:HH):');
let desayuno = ""
let comida = ""
let cena = ""
let primero = ""
let precioPrimero = 0
let segundo = ""
let precioSegundo = 0
let tercero = ""
let precioTercero = 0
let extras = ""
let precioExtras = 0
let opcionValida = false;
 
if (horario >= '07:00' && horario < '13:00') {
  desayuno = confirm ('Horario de desayuno, ¿qué desea desayunar?');
} else if (horario >= '13:00' && horario <= '16:00') {
  comida = confirm ('Horario de comidas, ¿qué desea comer?');
} else if (horario > '16:00' && horario <= '23:00') {
  cena = confirm ('Horario de cenas, ¿qué desea cenar?');
} else if (horario > '23:00') {
  prompt ('Hemos cerrado, por favor, vuelva a las 07:00 o introduzca otra hora');
} else if (horario < '07:00') {
  prompt ('No estamos abiertos, por favor, vuelva a las 07:00 o introduzca otro hora');
} else {
  prompt ('No es una hora válida, por favor, introduzca una hora para comer');
};

if (desayuno) {
  confirm (`MENÚ DEL DESAYUNO:
Plato fuerte:
-Cruasán
-Tostada
-Cereales

Bebida:
-Café
-Té
-Infusión

Zumo:
-Naranja
-Piña
-Melocotón`);
  
  opcionValida = false;
  while (!opcionValida) {
    primero = prompt(`Elija un plato fuerte:
-Cruasán (2€)
-Tostada (1,20€)
-Cereales (1€)`).toLowerCase();

    if (primero.includes('cruas') || primero.includes('croissant')) {
      precioPrimero = 2.00
      opcionValida = true;
    } else if (primero.includes('tostada')) {
      precioPrimero = 1.20
      opcionValida = true;
    } else if (primero.includes('cereal')) {
      precioPrimero = 1.00
      opcionValida = true;
    } else if (primero.includes('nada') || primero.includes('no')) {
      precioPrimero = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Buena elección, seguimos:');
  opcionValida = false;
  
  while (!opcionValida) {
    segundo = prompt(`Elija una bebida:
-Café (1,20€)
-Té (1€)
-Infusión (1,50€)`).toLowerCase();

    if (segundo.includes('caf')) {
      precioSegundo = 1.20
      opcionValida = true;
    } else if (segundo.includes('t')) {
      precioSegundo = 1.00
      opcionValida = true;
    } else if (segundo.includes('infus')) {
      precioSegundo = 1.50
      opcionValida = true;
    } else if (segundo.includes('nada') || segundo.includes('no')) {
      precioSegundo = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Buena elección, vamos con el zumo:');
  opcionValida = false;
  
  while (!opcionValida) {
    tercero = prompt (`Elija un zumo:
-Naranja (2€)
-Piña (1,70€)
-Melocotón (1,80€)`).toLowerCase();

    if (tercero.includes('naranja')) {
      precioTercero = 2.00
      opcionValida = true;
    } else if (tercero.includes('piñ')) {
      precioTercero = 1.70
      opcionValida = true;
    } else if (tercero.includes('melocoton')) {
      precioTercero = 1.80
      opcionValida = true;
    } else if (tercero.includes('nada') || tercero.includes('no')) {
      precioTercero = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Delicioso');
  opcionValida = false;
  
  while (!opcionValida) {
    extras = prompt(`¿Quiere algún extra? (máximo 1):
-Napolitana (2€)
-Pan tumaca (0,70€)
-Galletas (1€)
-Empanada (1,50€)`);

    if (extras === null) {
      extras = "nada";
      precioExtras = 0;
      opcionValida = true;
      continue;
    };
    
    extras = extras.toLowerCase();
    
    if (extras.includes('napolitana')) {
      precioExtras = 2.00
      opcionValida = true;
    } else if (extras.includes('tumaca') || extras.includes('pan')) {
      precioExtras = 0.70
      opcionValida = true;
    } else if (extras.includes('galleta')) {
      precioExtras = 1.00
      opcionValida = true;
    } else if (extras.includes('empanada')) {
      precioExtras = 1.50
      opcionValida = true;
    } else if (extras.includes('nada') || extras.includes('no')) {
      precioExtras = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  }
  
  alert (`¡Perfecto!`);
};

if (comida) {
  confirm (`MENÚ DE LA COMIDA:
Primer plato:
-Arroz con chistorra
-Fabada asturiana
-Macarrones con tomate

Segundo plato:
-Carne guisada
-Lubina a la plancha
-Calabacines rellenos

Postre:
-Arroz con leche
-Natillas
-Yogurt`);
  opcionValida = false;
  while (!opcionValida) {
    primero = prompt(`Elija el primer plato:
-Arroz con chistorra (4€)
-Fabada asturiana (6€)
-Macarrones con tomate (2,50€`).toLowerCase();

    if (primero.includes('arroz')) {
      precioPrimero = 4.00
      opcionValida = true;
    } else if (primero.includes('fabada')) {
      precioPrimero = 6.00
      opcionValida = true;
    } else if (primero.includes('macarrones')) {
      precioPrimero = 2.50
      opcionValida = true;
    } else if (primero.includes('nada') || primero.includes('no')) {
      precioPrimero = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Buena elección, seguimos:');
  opcionValida = false;
  
  while (!opcionValida) {
    segundo = prompt(`Elija un segundo plato:
-Carne guisada (6€)
-Lubina a la plancha (4€)
-Calabacines rellenos (5€)`).toLowerCase();

    if (segundo.includes('carne')) {
      precioSegundo = 6.00
      opcionValida = true;
    } else if (segundo.includes('lubina')) {
      precioSegundo = 4.00
      opcionValida = true;
    } else if (segundo.includes('calabacin')) {
      precioSegundo = 5.00
      opcionValida = true;
    } else if (segundo.includes('nada') || segundo.includes('no')) {
      precioSegundo = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Buena elección, vamos con el postre:');
  opcionValida = false;
  
  while (!opcionValida) {
    tercero = prompt (`Elija un postre:
-Arroz con leche (2€)
-Natillas (1,70€)
-Yogurt (1€)`).toLowerCase();

    if (tercero.includes('arroz')) {
      precioTercero = 2.00
      opcionValida = true;
    } else if (tercero.includes('natillas')) {
      precioTercero = 1.70
      opcionValida = true;
    } else if (tercero.includes('yogurt') || tercero.includes('yogur')) {
      precioTercero = 1.00
      opcionValida = true;
    } else if (tercero.includes('nada') || tercero.includes('no')) {
      precioTercero = 0
      opcionValida = true;
    }  else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Delicioso');
  opcionValida = false;
  
  while (!opcionValida) {
    extras = prompt(`¿Quiere algún extra? (máximo 1):
-Croquetas (2€)
-Pan tumaca (0,70€)
-Empanadillas (1€)
-Ensalada (3€)`);

    if (extras === null) {
      extras = "nada";
      precioExtras = 0;
      opcionValida = true;
      continue;
    };
    
    extras = extras.toLowerCase();
    
    if (extras.includes('croquetas')) {
      precioExtras = 2.00
      opcionValida = true;
    } else if (extras.includes('tumaca')|| extras.includes('pan')) {
      precioExtras = 0.70
      opcionValida = true;
    } else if (extras.includes('empanadillas')) {
      precioExtras = 1.00
      opcionValida = true;
    } else if (extras.includes('ensalada')) {
      precioExtras = 3.00
      opcionValida = true;
    } else if (extras.includes('nada') || extras.includes('no')) {
      precioExtras = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert (`¡Perfecto!`);
};

if (cena) {
  confirm (`MENÚ DE LA CENA:
Primer plato:
-Ensalada de queso de cabra
-Pasta con parmesano
-Revuelto de verduras

Segundo plato:
-Filete a la plancha
-Albondigas con salsa de cerveza y miel
-Lasaña

Postre:
-Arroz con leche
-Natillas
-Yogurt`);
  
  opcionValida = false;
  while (!opcionValida) {
    primero = prompt(`Elija el primer plato:
-Ensalada de queso de cabra (4€)
-Pasta con parmesano (6€)
-Revuelto de verduras (3,50€`).toLowerCase();

    if (primero.includes('ensalada')) {
      precioPrimero = 4.00
      opcionValida = true;
    } else if (primero.includes('pasta')) {
      precioPrimero = 6.00
      opcionValida = true;
    } else if (primero.includes('revuelto')) {
      precioPrimero = 3.50
      opcionValida = true;
    } else if (primero.includes('nada') || primero.includes('no')) {
      precioPrimero = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Buena elección, seguimos:');
  opcionValida = false;
  
  while (!opcionValida) {
    segundo = prompt(`Elija un segundo plato:
-Filete a la plancha (6€)
-Albondigas con salsa de cerveza y miel (8€)
-Lasaña (5€)`).toLowerCase();

    if (segundo.includes('filete')) {
      precioSegundo = 6.00
      opcionValida = true;
    } else if (segundo.includes('albondigas')) {
      precioSegundo = 8.00
      opcionValida = true;
    } else if (segundo.includes('lasaña')) {
      precioSegundo = 5.00
      opcionValida = true;
    } else if (segundo.includes('nada') || segundo.includes('no')) {
      precioSegundo = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Buena elección, vamos con el postre:');
  opcionValida = false;
  
  while (!opcionValida) {
    tercero = prompt (`Elija un postre:
-Arroz con leche (2€)
-Natillas (1,70€)
-Yogurt (1€)`).toLowerCase();

    if (tercero.includes('arroz')) {
      precioTercero = 2.00
      opcionValida = true;
    } else if (tercero.includes('natillas')) {
      precioTercero = 1.70
      opcionValida = true;
    } else if (tercero.includes('yogurt') || tercero.includes('yogur')) {
      precioTercero = 1.00
      opcionValida = true;
    } else if (tercero.includes('nada') || tercero.includes('no')) {
      precioTercero = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert ('Delicioso');
  opcionValida = false;
  
  while (!opcionValida) {
    extras = prompt(`¿Quiere algún extra? (máximo 1):
-Croquetas (2€)
-Pan tumaca (0,70€)
-Empanadillas (1€)
-Nachos (3€)`);

    if (extras === null) {
      extras = "nada";
      precioExtras = 0;
      opcionValida = true;
      continue;
    };
    
    extras = extras.toLowerCase();
    
    if (extras.includes('croquetas')) {
      precioExtras = 2.00
      opcionValida = true;
    } else if (extras.includes('tumaca')) {
      precioExtras = 0.70
      opcionValida = true;
    } else if (extras.includes('empanadillas')) {
      precioExtras = 1.00
      opcionValida = true;
    } else if (extras.includes('nachos')) {
      precioExtras = 3.00
      opcionValida = true;
    } else if (extras.includes('nada') || extras.includes('no')) {
      precioExtras = 0
      opcionValida = true;
    } else {
      alert ('Ese plato no está en el menú, por favor, elija un plato del menú.');
      opcionValida = false;
    };
  };
  
  alert (`¡Perfecto!`);
};

if (desayuno || comida || cena) {
  const precioTotal = precioPrimero + precioSegundo + precioTercero + precioExtras;
  
  let total = alert (`Detallado de la cuenta:
-${primero} --> ${precioPrimero.toFixed(2)}€
-${segundo} --> ${precioSegundo.toFixed(2)}€
-${tercero} --> ${precioTercero.toFixed(2)}€
-${(extras || !extras.includes('no') || !extras.includes('nada')) ? extras : 'Ninguno'} --> ${precioExtras.toFixed(2)}€

-total: ${precioTotal.toFixed(2)}€`); 
};