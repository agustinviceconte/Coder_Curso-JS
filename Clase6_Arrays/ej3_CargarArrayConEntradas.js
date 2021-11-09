//Declaración de array vacío  variable para determinar cantidad

const listaNombres=[]
let cantidad = 5;
let salir="";

//Empleo de do...while para cargar nombres por prompt()
do{
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres );
    console.log(listaNombres.length);
    salir=prompt("ESC para salir")
    }while(salir.toUpperCase() != "ESC");

//Concatenar un nuevo array definiendolo en el método
const listaNueva= listaNombres.concat(["Nombre Nuevo"])
//Uso de "join" para definir un salto de linea como separador del array
alert(listaNueva.join("\n"));
    