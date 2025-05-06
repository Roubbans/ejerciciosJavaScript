let texto1;
let texto2;

function obtenerValores()
{
    texto1 = document.getElementById("texto1").value;
    texto2 = document.getElementById("texto2").value;
    return{texto1, texto2};
}

function contarCaracteres()
{
    obtenerValores();
    textoFinal = texto1 + texto2;
    document.getElementById("resultado").innerHTML=`<b>Texto 1:</b> ${texto1.length} caracteres <br> <b>Texto 2:</b> ${texto2.length} caracteres <br> <b>Texto Final:</b> ${textoFinal.length} caracteres `;
}

function encontrarLetraS()
{
    
    contarCaracteres();
    let contadors = 0;
    let contadorS = 0;
    var separar = textoFinal.split("");
    for(let i=0; i<=textoFinal.length; i++)
    {
        if(separar[i]==='s')
        {
            contadors+=1;
        }
        else if(separar[i]==='S')
        {
            contadorS+=1;
        }
        
    }

    document.getElementById("resultado").innerHTML=`
    <table border="1">
    <tr><td style="border: 1px black solid ;">TEXTO</td><td style="border: 1px black solid; text-align: center;">CANTIDAD</td></tr>
    <tr><td style="border: 1px black solid ;">Letra s</td><td style="border: 1px black solid; text-align: center;">${contadors}</td></tr>
    <tr><td style="border: 1px black solid ;">Letra S</td><td style="border: 1px black solid; text-align: center;">${contadorS}</td></tr>
    <tr><td style="border: 1px black solid ;">TOTAL</td><td style="border: 1px black solid; text-align: center;">${contadorS+contadors}</td></tr>
    </table>
    `;
}

const BTN_PARES = document.getElementById("btn_Pares");
const RESULTADO = document.getElementById("resultado");

/* BTN_PARES.addEventListener("click",()=>{
    const TABLE = document.createElement("table");   
    const THEAD = document.createElement("thead");   
    const TH = document.createElement("th");   
    const TITULO = document.createElement("h1");
    const OL = document.createElement("ol");
    TABLE.append(THEAD,TH,OL);
    OL.style.border="2px black solid";
    THEAD.style.border="2px black solid";
    TH.style.border="2px black solid";
    TH.append(OL);
    obtenerValores();
    
    textoFinal = texto1 + texto2;
    let separar = textoFinal.split("");
    let espacio;
    for(let i=0; i<separar.length; i++)
        {
            let LI = document.createElement("li");
            LI.style.border="2px black solid";
            espacio =  separar[i];
            LI.textContent = espacio;
            i++;
            LI.style.textAlign="center";
            OL.append(LI); 
        }
        THEAD.textContent="CORRELATIVO";
        TITULO.textContent="Caracteres Pares";
        RESULTADO.innerHTML="";
        RESULTADO.append(TITULO, TABLE);

}); */

BTN_PARES.addEventListener("click", () => {
    obtenerValores();
    const TABLE = document.createElement("table");
    RESULTADO.innerHTML = "";
    textoFinal = texto1 + texto2;
    let separar = textoFinal.split("");
    
    let contador = 1; 
    for (let i = 0; i < separar.length; i++) {
        if ((i + 1) % 2 ==! 0) { 
            const TR = document.createElement("tr");
            TABLE.append(TR);
            TR.style.border = "solid 1px black";
            for (let j = 0; j < 2; j++) {
                const TD = document.createElement("td");
                TR.append(TD);
                TD.style.border = "solid 1px black";
                if (j === 1) {
                    TD.textContent = separar[i];
                } else {
                    TD.textContent = contador; // Mostrar el contador
                    contador++; // Incrementar el contador
                }
            }
        }
    }
    TABLE.style.border = "solid 1px black";
    RESULTADO.append(TABLE);
});

