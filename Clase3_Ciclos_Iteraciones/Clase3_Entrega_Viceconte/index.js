let operacion = prompt("Ingrese SUM, RES, MUL o DIV para seleccionar la operación a efectuar. Ingrese ESC para salir");
let continuar;


while (operacion != "ESC") {

    let primerNumero = parseFloat(prompt("Ingrese el primer número"));
    let segundoNumero = parseFloat(prompt("Ingrese el segundo número"));

    switch (operacion) {
        case "SUM":
            resultado = primerNumero + segundoNumero;
            console.log("El resultado es: " + resultado);
            break;
        case "RES":
            resultado = primerNumero - segundoNumero;
            console.log("El resultado es: " + resultado);
            break;
        case "MUL":
            resultado = primerNumero * segundoNumero;
            console.log("El resultado es: " + resultado);
            break;
        case "DIV":
            resultado = primerNumero / segundoNumero;
            console.log("El resultado es: " + resultado);
            break;
        default:
            console.log("La operación ingresada es incorrecta. Verifique que el texto sea correcto y esté en mayúsculas");
            break;
    }

    continuar = prompt("Presione cualquier letra/número para realizar otra operacion o ESC para salir");
    if (continuar != "ESC") {
        operacion = prompt("Ingrese SUM, RES, MUL o DIV para seleccionar la operación a efectuar. Ingrese ESC para salir");
    } else {
        operacion = "ESC"
    };
}