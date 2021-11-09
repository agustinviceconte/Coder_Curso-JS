//codificar un funcion con la siguiente cabecera: impusto(precio, porcentaje)
//En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado
//Luego invocar la función de forma iterativa 5 veces, solicitando en cada ciclo un precio y un porcentaje


function impuesto(precio, porcentaje){

    let valorNumerico = precio + (precio * porcentaje/100);
    return valorNumerico;

}

for(let i = 1; i<=5; i++){

    let precio = Number(prompt("Ingrese precio"));
    let porcentaje = Number(prompt("Ingrese porcentaje de 1 a 100: "));

    console.log("El impuesto es: " + impuesto(precio, porcentaje));
}