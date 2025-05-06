let nota1;
let nota2;
let nota3;
let nota4;
let nota5;
let promedio;
let nombre;
let curso;

function obtenerDatos()
{
    nota1 = parseInt(document.getElementById("nota1").value); 
    nota2 = parseInt(document.getElementById("nota2").value);
    nota3 = parseInt(document.getElementById("nota3").value);
    nota4 = parseInt(document.getElementById("nota4").value);
    nota5 = parseInt(document.getElementById("nota5").value);
    nombre = document.getElementById("nombre").value;
    curso = document.getElementById("curso").value;
    return{nota1, nota2, nota3, nota4, nota5, nombre, curso};
}
function mostrarResultado()
{
    obtenerDatos();
    promedio = (nota1+nota2+nota3+nota4+nota5)/5;
    alert(`Nombre: ${nombre} \n Curso: ${curso} \n Promedio: ${promedio}`);
}
