 function sumar(numero1, numero2){
    return numero1 + numero2;
}

function guardarEnLocalStorage(clave, valor){
    localStorage.setItem(clave, valor);
}

function obtenerDelStorage(clave){
    return localStorage.getItem(clave); 
}

let primerNumero = Number(prompt("Primer número"));
let segundoNumero = Number(prompt("Segundo número"));
const CLAVE_A_PEDIR= "suma";

guardarEnLocalStorage(CLAVE_A_PEDIR, sumar(primerNumero,segundoNumero));

document.write("La suma es: " + obtenerDelStorage(CLAVE_A_PEDIR));
