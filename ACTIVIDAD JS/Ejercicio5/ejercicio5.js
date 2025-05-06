let numero1;
let numero2;
let numero3;
let resultado;

function obtenerValores() {
  numero1 = parseInt(document.getElementById("numero1").value);
  numero2 = parseInt(document.getElementById("numero2").value);
  numero3 = parseInt(document.getElementById("numero3").value);
  return { numero1, numero2, numero3 };
}
function mostrarResultado() {
  obtenerValores();
  if (numero1 > numero2 && numero1 > numero3) {
    if (numero2 > numero3) {
      resultado = `El mayor es ${numero1}, el de enmedio es ${numero2} y el menor es ${numero3}`;
    } else {
      resultado = `El mayor es ${numero1}, el de enmedio es ${numero3} y el menor es ${numero2}`;
    }
  } else if (numero2 > numero1 && numero2 > numero3) {
    if (numero1 > numero3) {
      resultado = `El mayor es ${numero2}, el de enmedio es ${numero1} y el menor es ${numero3}`;
    } else {
      resultado = `El mayor es ${numero2}, el de enmedio es ${numero3} y el menor es ${numero1}`;
    }
  } else if (numero3 > numero1 && numero3 > numero2) {
    if (numero2 > numero1) {
      resultado = `El mayor es ${numero3}, el de enmedio es ${numero2} y el menor es ${numero1}`;
    } else {
      resultado = `El mayor es ${numero3}, el de enmedio es ${numero1} y el menor es ${numero2}`;
    }
  } else {
    resultado = `Ingrese tres numeros distintos`;
  }
  document.getElementById("resultado").innerHTML = resultado;
  alert(resultado);
}
