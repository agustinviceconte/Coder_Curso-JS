/*
Se piden las siguientes funcionalidades:


1. Pedir alumnos al usuario. Los alumnos tienen las siguientes características:
    - Nombre + Apellido
    - Edad
    - Curso
    - Año
    - Cuatrimestre

    Si no quiere seguir guardando alumnos, tiene que ingresar FIN.

2- Mostrar toda la info de los alumnos guardados por pantalla , si existen.
3- Guardar los alumnos ingresados en el storage (tener en cuenta que ya pueden existir datos).
4- Buscar todos los alumnos que tienen mas de 20 años, y mostrarlos como se muestran en el punto 1.
*/

class Alumno{

    constructor(alumno){

        this.nombre =alumno.nombre;
        this.edad = alumno.edad;
        this.curso = alumno.curso;
        this.anio = alumno.anio;
        this.cuatrimestre = alumno.cuatrimestre;
    }

    mostrarDatos(){

        document.write("<ul>");
        for(const propiedad in this){

            if(typeof this[propiedad]!= "function"){
                document.write("<li>"+ this[propiedad] +"</li>");
            }
        }
        document.write("<ul>");
    }
} 

function existeEnStorage(clave){

    let existe = true;
    if(!localStorage.getItem(clave)){
        existe=false;
    }
    return existe;
}
function guardarEnStorage(clave,valor){
    localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerDatosStorage(clave){
    return JSON.parse(localStorage.getItem(clave));
}
const CLAVE = "alumnos";
let condicionCorte ="";
let alumnos=[];

do{
    let nombre = prompt("Nombre y apellido del alumno");
    let edad = prompt("Edad del alumno");
    let curso = prompt("Curso del alumno");
    let anio = prompt("Año del alumno");
    let cuatrimestre = prompt("Cuatrimestre del alumno");

    const alumno = new Alumno({nombre, edad, curso, anio,cuatrimestre});
    alumnos.push(alumno);

    condicionCorte=prompt("Ingrese otro alumno o 'FIN' para terminar");

}while (condicionCorte.toUpperCase() != "FIN");

if(!existeEnStorage(CLAVE)){
    guardarEnStorage(CLAVE, alumnos);
}else{
    let listaStorage = obtenerDatosStorage(CLAVE);
    listaStorage.concat(alumnos);
    guardarEnStorage(CLAVE, listaStorage);
}

for (const alumnoTotal of alumnos){
    alumnoTotal.mostrarDatos();
}





