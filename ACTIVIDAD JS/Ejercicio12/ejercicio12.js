let palabra;

function obtenerValores()
{
    palabra = document.getElementById("palabra").value;
    return{palabra};
}

function mostrarPrimerDigito()
{
    obtenerValores();
    document.getElementById("resultado").innerHTML=`Primer Digito: ${palabra[0]}`;
}
function mostrarUltimoDigito()
{
    obtenerValores();
    document.getElementById("resultado").innerHTML=`Ultimo Digito: ${palabra[palabra.length-1]}`;
}
function mostrarCaracteres()
{
    obtenerValores();
    let espacio = "";
    let caracteres = palabra.split("");
    for(let i=0; i<caracteres.length; i++)
    {
        i++;
        espacio += caracteres[i+1] + "<br>";
    }
    document.getElementById("resultado").innerHTML+="Caracteres: <br>" +espacio;
   
}