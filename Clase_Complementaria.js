
class Curso{

    constructor(nombre, tipo, duracion, precio,clases) {

        this.nombre=nombre;
        this.tipo=tipo;
        this.duracion=duracion;
        this.precio=precio;
        this.clases = clases
        }

    verDatosCurso(){

        document.write("<ul>");
        document.write("<li>Nombre: " + this.nombre + "</li>");
        document.write("<li>Tipo: " + this.tipo + "</li>");
        document.write("<li>Duración: " + this.duracion + " horas"+ "</li>");
        document.write("<li>Precio: $" + this.precio + "</li>");
        document.write("</ul>");

        document.write("------------------<br>");
    }

    verClases(){

    }
}

class Clases{

    constructor(nombre, duracion, orden){

        this.nombre =nombre;
        this.duracion =duracion;
        this.orden = orden;
    }

    ver(){
        document.write(this.orden + ". "+ this.nombre +" "+ this.duracion+"Hs");
    }
}

function validarDatos(nombre, tipo, duracion, precio){

    let validos =false;

    if(nombre != "" && tipo != "" && !isNaN(duracion) && !isNaN(precio)){
        validos=true;
    }

    return validos;
}
function validarDatosClases(nombre, duracion, orden){

    let validos=false;

    if(nombre !="" && duracion != "" && orden!=""){

    validos=true;
    }

    return true;

}

function cargarCurso(){

    let nombreCurso = prompt("Ingrese nombre del curso");
    let tipoCurso = prompt("Ingrese tipo de curso: SONIDO, FOTO/VIDEO");
    let duracionCurso = parseInt(prompt("Ingrese la duración del curso:"));
    let precioCurso = parseInt(prompt("Ingrese precio del curso:"));

    const VALIDAR_DATOS= validarDatos(nombreCurso,tipoCurso,duracionCurso,precioCurso);

    let nuevoCurso = null;
    if(validarDatos){
        nuevoCurso = new Curso(nombreCurso,tipoCurso,duracionCurso,precioCurso);
     }

     return nuevoCurso;
}

function cargarClases(){

    let nombreClase = prompt("Ingrese nombre de la clase");
    let duracionClase = prompt("Ingrese duración de la clase");
    let ordenClase = prompt("Ingrese el orden de la clase:");

    const VALIDAR_DATOS= validarDatosClases(nombreClase, duracionClase, ordenClase);

    let nuevaClase =null;
    if(validarDatosClases){
        nuevaClase = new Clases(nombreClase,duracionClase,ordenClase);
    }

    return nuevaClase;

}

function verClases(){

    const CLASE = new Clases(nombreClase, duracionClase, ordenClase);
     
}

let cursoCargado = cargarCurso();
let claseCargada = cargarClases();
cursoCargado.verDatosCurso();
claseCargada.ver();



// let opcion = prompt("Elija una opción: CARGAR_CURSO, CARGAR_CLASES, VER_CURSO, VER_DETALLE");

// switch(opcion){
 
//  case "CARGAR_CURSO":
//      cargarCurso();
//      break;
//  case "CARGAR_CURSO":
//     cargarClases();
//     break;
//  case "VER_CURSO":
//      verCurso();
//     break;
//  case "VER_CLASES":
//      verClases();
//      break;
// default:
//     break;

// }