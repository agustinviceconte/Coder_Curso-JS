// Prototipo para cargar cursos y las clases que componen cada curso
// Se usaron arrays para la carga de varios cursos/clases 
// Declaración de las arrays: líneas 84 y 115
// Carga de las arrays: líneas 127 y 131
//--------------------------------------------------------------------------------------

//Declaración objeto "Curso"
class Curso {

    constructor(nombre, tipo, duracion, precio, clases) {

        this.nombre = nombre;
        this.tipo = tipo;
        this.duracion = duracion;
        this.precio = precio;
        this.clases = clases
    }
    //Métodos del objeto
    verDatosCurso() {

        //console.log(this);

        document.write("<ul>");
        document.write("<li>Nombre: " + this.nombre + "</li>");
        document.write("<li>Tipo: " + this.tipo + "</li>");
        document.write("<li>Duración: " + this.duracion + " horas" + "</li>");
        document.write("<li>Precio: $" + this.precio + "</li>");
        document.write("</ul>");

        this.verClases();
        document.write("------------------<br>");
    }
    verClases() {

        for (const clase of this.clases) {

            document.write("<ul>");
            document.write("<li>" + clase.ver() + "</li>");
            document.write("</ul>");
        }
    }
}
//Declaración de objeto "Clases"
class Clases {

    constructor(nombre, duracion, orden) {

        this.nombre = nombre;
        this.duracion = duracion;
        this.orden = orden;
    }

    ver() {
        return this.orden + ". " + this.nombre + " " + this.duracion + "Hs";
    }
}
//Validación de carga de datos del curso
function validarDatos(nombre, tipo, duracion, precio) {
    let validos = false;
    if (nombre != "" && tipo != "" && !isNaN(duracion) && !isNaN(precio)) {
        validos = true;
    }
    return validos;
}
//Validación de carga de datos de las clases
function validarDatosClases(nombre, duracion, orden) {
    let validos = false;
    if (nombre != "" && duracion != "" && orden != "") {
        validos = true;
    }
    return true;
}
//Carga de los cursos
function cargarCurso() {

    let nombreCurso = prompt("Ingrese nombre del curso");
    let tipoCurso = prompt("Ingrese tipo de curso: SONIDO, FOTO/VIDEO");
    let duracionCurso = parseInt(prompt("Ingrese la duración del curso en horas:"));
    let precioCurso = parseInt(prompt("Ingrese precio del curso:"));

    const VALIDAR_DATOS = validarDatos(nombreCurso, tipoCurso, duracionCurso, precioCurso);

    let nuevoCurso = null;
    if (VALIDAR_DATOS) {
    //Declaración array clases
        const clases = [];
        nuevoCurso = new Curso(nombreCurso, tipoCurso, duracionCurso, precioCurso, clases);
    }

    return nuevoCurso;
}
//Carga de las clases
function cargarClases() {

    let nombreClase = prompt("Ingrese nombre de la clase");
    let duracionClase = prompt("Ingrese duración de la clase (en horas)");
    let ordenClase = prompt("Ingrese el orden de la clase:");

    const VALIDAR_DATOS = validarDatosClases(nombreClase, duracionClase, ordenClase);

    let nuevaClase = null;
    if (validarDatosClases) {
        nuevaClase = new Clases(nombreClase, duracionClase, ordenClase);
    }

    return nuevaClase;

}

function verClases() {

    const CLASE = new Clases(nombreClase, duracionClase, ordenClase);

}

function buscarCurso(datofiltro, cursos){


    const cursosEncontrados = cursos.filter(curso => curso.nombre.includes(datofiltro)|| curso.tipo.includes(datofiltro));


    return cursosEncontrados;

}
function devolverFavorito(nombreCursoFavorito, cursos){
    return cursos.find(curso => curso.nombre == nombreCursoFavorito)
}


//Declaración array "cursos"
let cursos = [];
let agregarCurso = "";
//Bucle para la carga de Cursos y clases
do {

    let cursoCargado = cargarCurso();

    let claseCargada = null;
    let agregarClase = "";
    do {

        claseCargada = cargarClases();
        cursoCargado.clases.push(claseCargada);
        agregarClase = prompt("Para agregar otra clase presione ENTER o ingrese FIN para finalizar");

    } while (agregarClase.toUpperCase() != "FIN");
    cursos.push(cursoCargado);
    agregarCurso = prompt("Para agregar otro curso presione ENTER o ingrese FIN para finalizar");
} while (agregarCurso.toUpperCase() != "FIN");

for (const curso of cursos) {
    curso.verDatosCurso();
}

let cursoBuscado = prompt("Ingrese nombre de curso o clase a buscar");
let cursosEncontrados = buscarCurso(cursoBuscado,cursos)
console.log(cursosEncontrados); 

let cursofavorito = prompt("Ingrese el nombre del curso favorito");
const favoritos = [];
let favorita = devolverFavorito(cursofavorito, cursos);
if (favorita){
    favoritos.push(favorita);
}

console.log(favoritos);
