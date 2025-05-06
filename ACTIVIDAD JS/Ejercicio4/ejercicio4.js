let numero;
let resultado;

function obtenerValor()
{
    numero = parseInt(document.getElementById("numero").value);
    return{numero};
}
function mostrarResultado()
{
    obtenerValor();
    if(numero>0)
    {
        resultado = "es Positivo";
    }
    else if(numero<0)
    {
        resultado = "es Negativo";
    }
    else
    {
        resultado = "es Neutro";
    }
    document.getElementById("resultado").innerHTML="El numero "+resultado;
}