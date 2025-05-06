let catetoA;
let catetoB;
let resultado;
function obtenerValores()
{
    catetoA = parseFloat(document.getElementById("catetoA").value);
    catetoB = parseFloat(document.getElementById("catetoB").value);
    return{catetoA, catetoB};
}

function mostrarResultado()
{
    obtenerValores();
    resultado = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
    document.getElementById("resultado").innerHTML="La hipotenusa es: "+ resultado;
}