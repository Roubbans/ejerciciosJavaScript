let numero1;

function obtenerValores()
{
    numero1 = parseInt(document.getElementById("numero1").value);
    return{numero1};
}

function mostrarResultado()
{
    obtenerValores();
    for(let i=1; i<=numero1; i++)
    {
        document.getElementById("resultado").innerHTML+= i + " | ";
    }
}