//Defino kilometros y se lo pido al usuario
let kilometros = prompt("Cuantos kilometros recorrio el coche?");
//Defino litros y se lo pido al usuario
let litros = prompt("Cuantos litros consumio el coche?");
//Defino consumo
const consumo = litros / kilometros;
//Muestro el mensaje con el consumo
alert(`Has consumido ${consumo} litros por kilometro`);
