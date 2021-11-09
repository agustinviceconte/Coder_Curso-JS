/*Codificar dos funciones
Una función cotizar(pesos), la cual recibe un valor monetario en pesos argentinos y retorn su equivalente
en dolares
Una funcuión cotizar(dolar), que recibe un valor monetario en dolares y lo retorna en pesos
Luego invocar las funciones solicitando al usuario el valor y el tipo de cotizacion a realizar*/


const COTIZACION_DOLAR = 187;
function cotizarDolar(pesos){
    return pesos / COTIZACION_DOLAR;
}


const COTIZAR_PESOS = dolar =>  dolar * COTIZACION_DOLAR;


let valorUsuario = Number(prompt("Ingrese el valor a cotizar"));
let tipoCotizacion= prompt("Ingrese tipode cotización: DOLAR/PESO");
let resultadoCotizacion = null;

if(tipoCotizacion=="DOLAR"){
    resultadoCotizacion= cotizarDolar(valorUsuario);
}else if(tipoCotizacion=="PESO"){
    resultadoCotizacion= COTIZAR_PESOS(valorUsuario);
}else{
    console.error("Dato invalido")
}
console.log(resultadoCotizacion);