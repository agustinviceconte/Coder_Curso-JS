/*function saludar(){
    console.log("Hola");
}


saludar();*/
const arroba="@";
 

function comprobacion(eldato){
    if(eldato.length >=8){
        return true;
    }
    return false;
}

function contieneArroba(nombreDeUsuario){
    if(nombreDeUsuario.includes (arroba)){
        return true;
    };
}

let nombre=prompt("Ingrese nombre");
let apellido=prompt("Ingrese apellido");
let username=prompt("Ingrese usernombre");

/*if(comprobacion (nombre)){
    console.log("Es un nombre de al menos 8 letras");
}

if(comprobacion (apellido)){
    console.log("Es un apellido de al menos 8 letras");
}*/

if(contieneArroba(username)){
    console.log("Es un username de al menos 8 letras");
    console.log("Contiene el caracter @");
}