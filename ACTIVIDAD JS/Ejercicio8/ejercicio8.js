function obtenerValores() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    return { numero1, numero2 };
}

function calcularMCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function mostrarResultado() {
    let { numero1, numero2 } = obtenerValores();
    let mcd = calcularMCD(numero1, numero2);
    document.getElementById("resultado").innerHTML = `El MCD es: ${mcd}`;
    alert(mcd);
    console.log(mcd);
}
