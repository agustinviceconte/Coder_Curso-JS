//Cálculo de áreas

alert("Bienvenidos, a continuación calcularemos el área de una figura geométrica, según los datos a ingresar");

let opcion = Number(prompt("Ingrese la figura a calcular: \n1-Círculo \n2-Triángulo \n3-Cuadrado"));

if (opcion ==1){
    let radio = Number(prompt("Ingrese el radio: "));
    let resultadoCirculo= areaCirculo(radio);
    alert("El área del círculo para el radio  "+ radio+" es "+resultadoCirculo);
}else if(opcion==2){
    let base=Number(prompt("Ingrese la base: "));
    let altura=Number(prompt("Ingrese la altura: "));
    let resultadoTriangulo = areaTriangulo(base,altura);
    alert("El área del triángulo según base "+base +" y altura "+altura+" es "+resultadoTriangulo);
}else if (opcion==3){
    let lado= Number(prompt("Ingrese el lado del cuadrado"));
    let resultadoCuadrado = areaCuadrado(lado);
    alert("El área del cuadrado es "+ resultadoCuadrado);
}else{
    alert("Verifique los datos ingresasos");
}

//funciones para calcular el área

function areaCirculo(radio){
  return Math.PI * Math.pow(radio,2)
}

function areaTriangulo(base,altura){
    return base * altura /2
}

function areaCuadrado(lado){
    return lado * lado

}
