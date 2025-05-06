const BTN_CONVERTIR = document.getElementById("btn_convertir");
const SECTION_RESULTADO = document.getElementById("section_resultado");
let acumladorResultado;
let residuo;
let acumladorResiduo;
BTN_CONVERTIR.addEventListener("click", ()=>{
   let numDecimal = parseInt(document.getElementById("num_decimal").value);
   let resultado = numDecimal;
   acumladorResultado = "";
   residuo=0;
   acumladorResiduo="";
   while(resultado > 0)
   {
        residuo = resultado%2;
        resultado  = parseInt(resultado / 2);
        acumladorResultado +="<br>" + resultado; 
        acumladorResiduo =  residuo + acumladorResiduo;
   }
   SECTION_RESULTADO.innerHTML=numDecimal + " en binario es " +acumladorResiduo;
});