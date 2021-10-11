/*const numeros = [1,2,3,4,5];

let resultado1 = numeros[0] + numeros[2]; // 1+3 = 4

for(let index = 0; index < numeros.length; index++){

    alert(numeros[index]);
}*/

//Metodos y propiedades

/*const numeros = [1,2,3,4,5];

let resultado1 = numeros[0] + numeros[2]; // 1+3 = 4

for(let index = 0; index < numeros.length; index++){

    document.write( index + "-" +numeros[index] +"<br>"+"<br>") ;
}

document.write("Fin del array original"+"<br>"+"<br>");

numeros.push(10,11,12);

for(let index = 0; index < numeros.length; index++){

    document.write( index + "-" +numeros[index] + "<br>"+"<br>" ) ;
}*/

//array de objetos


class usuario{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
        
    }
}
const usuarios=[];
let condicionCorte=""
do{
    let nombre =prompt("Ingrese nombrte");
    let apellido =prompt("Ingrese apellido");

    const usuario = new usuario(nombre, apellido);
    usuarios.push(usuarios);

    condicionCorte =prompt("Ingrese otro o ESC");


}while (condicionCorte != "ESC");

for(let indice = 0; indice < usuarios.length ; indice ++){

    
}














