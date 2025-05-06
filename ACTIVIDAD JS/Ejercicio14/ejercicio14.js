let texto1;

function obtenerValores()
{
    texto1 = document.getElementById("texto1").value;
    return{texto1};
}
function encontrarLetraS()
{
    obtenerValores();
    let contadora = 0;
    let contadore = 0;
    let contadori = 0;
    let contadoro = 0;
    let contadoru = 0;
    let separar = texto1.split("");
    for(let i=0; i<=texto1.length; i++)
    {
        if(separar[i]==='a' || separar[i]==='A')
        {
            contadora+=1;
        }
        else if(separar[i]==='e' || separar[i]==='E')
        {
            contadore+=1;
        }
        else if(separar[i]==='i' || separar[i]==='I')
        {
            contadori+=1;
        }
        else if(separar[i]==='o' || separar[i]==='O')
        {
            contadoro+=1;
        }
        else if(separar[i]==='u' || separar[i]==='U')
        {
            contadoru+=1;
        }
        
    }

    document.getElementById("resultado").innerHTML=`
    <table border="1">
    <tr><td style="border: 1px black solid ;">TEXTO</td><td style="border: 1px black solid; text-align: center;">CANTIDAD</td></tr>
    <tr><td style="border: 1px black solid ;">Letra a, A</td><td style="border: 1px black solid; text-align: center;">${contadora}</td></tr>
    <tr><td style="border: 1px black solid ;">Letra e,E</td><td style="border: 1px black solid; text-align: center;">${contadore}</td></tr>
    <tr><td style="border: 1px black solid ;">Letra i, I</td><td style="border: 1px black solid; text-align: center;">${contadori}</td></tr>
    <tr><td style="border: 1px black solid ;">Letra o, O</td><td style="border: 1px black solid; text-align: center;">${contadoro}</td></tr>
    <tr><td style="border: 1px black solid ;">Letra u,U</td><td style="border: 1px black solid; text-align: center;">${contadoru}</td></tr>
    <tr><td style="border: 1px black solid ;">TOTAL</td><td style="border: 1px black solid; text-align: center;">${contadora+contadore+contadori+contadoro+contadoru}</td></tr>
    </table>
    `;
}