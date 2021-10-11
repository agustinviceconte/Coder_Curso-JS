// Prototipo de ABM para cargar los cursos ofrecidos en la página

//Creación de objeto

class Curso {

    constructor(nombre, tipo, duracion, precio, clases) {

        this.nombre = nombre;
        this.tipo = tipo;
        this.duracion = duracion;
        this.precio = precio;

    }

    verDatosCurso() {

        document.write("<ul>");
        document.write("<li>Nombre: " + this.nombre + "</li>");
        document.write("<li>Tipo: " + this.tipo + "</li>");
        document.write("<li>Duración: " + this.duracion + " horas" + "</li>");
        document.write("<li>Precio: $" + this.precio + "</li>");
        document.write("</ul>");
    }
}
//Esta función corrobora que se ingresen todos los datos
function validarDatos(nombre, tipo, duracion, precio) {

    let validos = false;

    if (nombre != "" && tipo != "" && !isNaN(duracion) && !isNaN(precio)) {
        validos = true;
    }

    return validos;
}

// funcion para cargar el curso.  con lo visto hasta el momento solamente es posible cargar un curso a la vez
function cargarCurso() {

    let nombreCurso = prompt("Ingrese nombre del curso");
    let tipoCurso = prompt("Ingrese tipo de curso: SONIDO, FOTO/VIDEO");
    let duracionCurso = parseInt(prompt("Ingrese la duración del curso en horas totales (solo número):"));
    let precioCurso = parseInt(prompt("Ingrese precio del curso en pesos (solo número):"));

    const VALIDAR_DATOS = validarDatos(nombreCurso, tipoCurso, duracionCurso, precioCurso);

    let nuevoCurso = null;
    if (validarDatos) {
        nuevoCurso = new Curso(nombreCurso, tipoCurso, duracionCurso, precioCurso);
    }

    return nuevoCurso;
}

let cursoCargado = cargarCurso();
cursoCargado.verDatosCurso();