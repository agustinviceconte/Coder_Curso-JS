function multiplicar(primerNumero,segundoNumero){

    const RESULTADO = primerNumero * segundoNumero;
    console.log("El resultado es: "+RESULTADO)
}

let numeroUno = Number(prompt("Ingrese el primer número"));
let numeroDos = Number(prompt("Ingrese el segundo número"));

multiplicar(numeroUno,numeroDos);


function multiplicarV2(primerNumero,segundoNumero){

    const RESULTADO = primerNumero * segundoNumero;
    return RESULTADO;
}
let resultadoMultiplicacion = multiplicarV2(numeroUno,numeroDos);
console.log("Valor devuelto V2: "+ resultadoMultiplicacion);


// Version anonima
const multiplicarAnonima= function(a,b){return a * b};
console.log("Resultado de función anónima: " + multiplicarAnonima(numeroUno,numeroDos));