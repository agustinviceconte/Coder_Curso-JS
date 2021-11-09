//Generar formulario con nombre, apellido , username con 8 caracteres
//username contenga el caracter @

//Seccion constantes
const ARROBA ="@";
//Seccion de variables
let nombre = prompt("Ingrese nombre: ");
let apellido = prompt("Ingrese apellido: ");
let username = prompt("Ingrese username: ");

//Seccion de funciones
function tieneAlMenosOchoCaracteres(elDato){
    if(elDato.length >=8){
        return true;
    }
        return false;
}
function tieneArroba(nombreDeUsuario){
    if(nombreDeUsuario.includes(ARROBA)){
        return true;
    }
        return false;
}
//Seccion validaciones
if(tieneAlMenosOchoCaracteres(nombre)){//la variable nombre es el parametro de la funcion que reeplaza a "el Dato"
    console.log("Nombre correcto");
}
if(tieneAlMenosOchoCaracteres(apellido)){
    console.log("Apellido correcto");
}
if(tieneAlMenosOchoCaracteres(username) && tieneArroba(username)){
    console.log("Username correcto");
    console.log("Username contiene @");
}