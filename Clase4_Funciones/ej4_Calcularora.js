function calculadora(primerNumero, segundoNumero, operacion){
    switch (operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10,5,"*"));

//Version sin return
let resultado = null;
function calculadoraV2(primerNumero, segundoNumero, operacion){
    switch (operacion){
        case "+":
            resultado = primerNumero + segundoNumero;
            break;
        case "-":
            resultado = primerNumero - segundoNumero;
            break;
        case "*":
            resultado = primerNumero * segundoNumero;
            break;
        case "/":
            resultado = primerNumero / segundoNumero;
            break;
        default:
            resultado = 0;
            break;
    }
    console.log(resultado);
}
console.log(calculadora(10,5,"*"));
calculadoraV2(6,5, "-");