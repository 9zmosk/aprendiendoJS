//Defino y pido al usuario el nombre
let nombre = prompt("Cual es tu nombre?");
//Mientras el nombre este vacio lo sigue pidiendo
while (nombre === "") {
  nombre = prompt("Escribe algun nombre");
}
//Imprimo el saludo
console.log(`Hola, ${nombre}`);
