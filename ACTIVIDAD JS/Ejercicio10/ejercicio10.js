let texto;
let x;
function obtenerValores()
{
    texto = document.getElementById("texto").value;
    x = document.getElementById("x").value;
    return{texto,x};
}

function mostrarResultado()
{
    obtenerValores();
    let contador=0;
    let palabra = texto.split(" ");
    for(let i=0; i<=palabra.length;i++)
    {
        if(x===palabra[i])
        {
            contador += 1;
        }
        else
        {
            contador = contador;
        }
    }
    alert(contador);
    
}