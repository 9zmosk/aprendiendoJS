//Defino numero y se lo pido al usuario
let numero = prompt("Escriba un numero de dos digitos:");
//Defino unidades
let unidades = numero % 10;
//Defino decenas
let decenas = parseInt(numero / 10);
//Muestro las decenas y unidades
alert(`El numero tiene ${decenas} decenas y ${unidades} unidades.`);
