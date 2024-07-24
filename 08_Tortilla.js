//Defino mis variables
let comensales, papasGramos, huevosUnidades, cebollaGramos;
//Imprimo mi mensaje inicial
alert("Calculadora de ingredienstes - Tortilla");
//Pido al usuario la cantidad de personas que comen
comensales = parseInt(prompt("Cuantos comencales van a comer?"));

//Calculo las proporciones de ingredientes
papasGramos = ((1 * 1) / 5) * comensales;
huevosUnidades = comensales;
cebollaGramos = ((1 * 300) / 5) * comensales;

//Muestro el calculo de ingredientes segun las personas
alert(
  `Usted necesitara ${papasGramos}kg de papa, ${huevosUnidades} huevos y ${cebollaGramos}g de cebolla`
);
