let numero1 = prompt("Digite el primer numero");
let numero2 = prompt("Digite el segundo numero");
let diferencia;
if (numero1 > numero2) {
  diferencia = numero1 - numero2;
  alert(`La diferencia entre ${numero1} y ${numero2} es ${diferencia}`);
} else {
  if (numero2 > numero1) {
    diferencia = numero2 - numero1;
    alert(`La diferencia entre ${numero2} y ${numero1} es ${diferencia}`);
  }
}
