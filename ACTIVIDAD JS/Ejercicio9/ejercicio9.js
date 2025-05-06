const x = texto;

function obtenerValores()
{
    texto = document.getElementById("texto").value;
    return{texto};
}

function mostrarResultado()
{
    obtenerValores();
    let separar = texto.split("");
    for(let i=0; i<separar.length; i++)
    {
        i++;
        alert(separar[i-1]+separar[i]);
        
    }
}