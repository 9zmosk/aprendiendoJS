//Defino un array de numeros
let numeros = [];
// Defino la suma y le asigno el valor 9
let suma = 0;
//Recorro el array de 3 valores y los sumo
for (i = 0; i < 3; i++) {
  numeros[i] = parseFloat(prompt("Escriba un numero:"));
  suma = suma + numeros[i];
}
//Defino y asigno el promedio al valor correspondiente
let promedio = suma / 3;
//Imprimo el promedio
alert(`Promedio es igual a: ${promedio}`);
