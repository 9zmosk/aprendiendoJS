//Defino horas y se las pido al usuario
let horas = prompt("Escriba las horas:");
//Defino minutos y se las pido al usuario
let minutos = prompt("Escriba los minutos");
//Defino segundos
let segundos = horas * 60 * 60 + minutos * 60;
//Muestro los segundos calculados
alert(`Los segundos exactos son ${segundos} segundos`);
