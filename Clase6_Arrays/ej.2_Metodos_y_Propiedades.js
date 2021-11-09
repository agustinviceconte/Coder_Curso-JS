let numeros = [5, -1, 7];

function recorrerLista(lista){

    //propiedad length
for(let i=0; i < numeros.length; i++){

    const elemento = numeros[i];
    document.write(elemento +"<br><br>");
}
    document.write("--------------------------------------<br>");
}

recorrerLista(numeros);
//metodo push
numeros.push(10);

recorrerLista(numeros);

//metodo join
const fecha = [12,05,2021];

document.write(fecha.toString() +"<br>");

const resultadoConGuiones = fecha.join("-");
document.write(resultadoConGuiones + "<br>");

//metodo concat

const array1= [1,2,3,4];
const array2= [5,6,7,8];
const nuevoArray = array1.concat(array2);
const nuevoArray2=array2.concat(array1);

document.write(nuevoArray + "<br>");
document.write(nuevoArray2);







