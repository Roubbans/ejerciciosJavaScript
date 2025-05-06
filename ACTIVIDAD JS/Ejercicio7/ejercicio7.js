let numero1;
let numero2;

function obtenerValores()
{
    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);
    return{numero1, numero2};
}

function mostrarResultado()
{
    obtenerValores();
    let espacio = " ";
    for(let i=numero1; i<numero2; i++)
    {
        if(i%2===0)
        {
            espacio += i + " ";
        }
    }
    document.getElementById("resultado").innerHTML=espacio;
    
}
