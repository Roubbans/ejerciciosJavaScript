let carnet;
let nombre;

function obtenerValores()
{
    carnet = document.getElementById("carnet").value;
    nombre = document.getElementById("nombre").value;
    return{carnet, nombre};
}
function mostrarDatos()
{
    obtenerValores();
    alert(`Carnet: ${carnet} \n Nombre: ${nombre}`);
    console.log(`Carnet: ${carnet} \n Nombre: ${nombre}`);
    document.getElementById("mostrarCarnet").innerHTML="Carnet: "+carnet;
    document.getElementById("mostrarNombre").innerHTML="Nombre: "+nombre;
}

