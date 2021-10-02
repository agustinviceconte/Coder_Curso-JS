/*const multiplicarV2 = function (a,b){return a * b};

let numerouno = Number(prompt("Ingrese primer Numero"));
let numerodos = Number(prompt("Ingrese segundo Numero"));
console.log(multiplicarV2(numerouno,numerodos));*/


function impuesto(elprecio, elporcentaje){

    let valornumerico = elprecio + (elprecio * (elporcentaje/100));
    return valornumerico;
}

for(let indice =1; indice <=5; indice++){
    let precio = Number(prompt("Ingrese precio"));
    let porcentaje =Number(prompt("Ingrese porcentaje"))

    console.log("El impuesto es: " + impuesto (precio, porcentaje))
}
