let numero1;
let resultado;

function obtenerDatos()
{
    numero1 = parseInt(document.getElementById("numero1").value);
    return{numero1};
}
function mostrarResultado()
{
    obtenerDatos();
    let espacio = "";    
    for(let i = 0; i<=12; i++)
    {
        resultado = `${numero1} x ${i} = ${numero1*i}\n`;          
        espacio += resultado + "<br>";
    }
    document.getElementById(`resultado`).innerHTML=espacio;   
}