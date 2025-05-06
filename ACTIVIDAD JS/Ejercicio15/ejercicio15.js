const RESULTADO = document.getElementById("div_resultado");
const BTN_INGRESAR = document.getElementById("btn_ingresar");

BTN_INGRESAR.addEventListener("click",()=>{
    let columnas = parseInt(document.getElementById("txt_columnas").value);  
    let filas  = parseInt(document.getElementById("txt_filas").value);
    const TABLE = document.createElement("table");
    RESULTADO.innerHTML="";
    for(let i=0; i<filas;i++)
    {
        const TR = document.createElement("tr");
        TABLE.append(TR);
        TR.style.border="solid 1px black";
        for(let j=0; j<columnas; j++)
        {
            const TD = document.createElement("td");
            TR.append(TD);
            TD.style.border="solid 1px black";
            TD.textContent = " FILA: "+(i+1)+ "COLUMNA: "+(j+1);
        } 
    }
    TABLE.style.border="solid 1px black";
    RESULTADO.append(TABLE);

});