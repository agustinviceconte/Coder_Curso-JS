// Prototipo para cargar cursos y las clases que componen cada curso
// Se usaron arrays para la carga de varios cursos/clases 
// Declaración de las arrays: líneas 84 y 115
// Carga de las arrays: líneas 127 y 131
//--------------------------------------------------------------------------------------

//Declaración objeto "Curso"
class Curso {

    constructor(nombre, tipo, duracion, precio) {

        this.nombre = nombre;
        this.tipo = tipo;
        this.duracion = duracion;
        this.precio = precio;
       
    }
    //Métodos del objeto
    verDatosCurso() {

        document.write("<ul>");
        document.write("<li>Nombre: " + this.nombre +"__"+"</li>");
        document.write("<li>Tipo: " + this.tipo +"__"+ "</li>");
        document.write("<li>Duración: " + this.duracion + "horas " +"__"+ "</li>");
        document.write("<li>Precio: $" + this.precio + "</li>");
        document.write("</ul>");
        document.write("------------------<br>");
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

//Carga de los cursos
function cargarCurso() {

    let nombreCurso = prompt("Ingrese nombre del curso");
    let tipoCurso = prompt("Ingrese tipo de curso: SONIDO, FOTO/VIDEO");
    let duracionCurso = parseInt(prompt("Ingrese la duración del curso en horas:"));
    let precioCurso = parseInt(prompt("Ingrese precio del curso:"));

    const VALIDAR_DATOS = validarDatos(nombreCurso, tipoCurso, duracionCurso, precioCurso);

    let nuevoCurso = null;
    if (VALIDAR_DATOS) {
    
        nuevoCurso = new Curso(nombreCurso, tipoCurso, duracionCurso, precioCurso);
        cursoJson = JSON.stringify(nuevoCurso)
        localStorage.setItem("Curso", cursoJson);
    }

    return nuevoCurso;
}


//Declaración array "cursos"
let cursos = [];
let agregarCurso = "";
//Bucle para la carga de Cursos
do {

    let cursoCargado = cargarCurso();

    cursos.push(cursoCargado);
    agregarCurso = prompt("Para agregar otro curso presione ENTER o ingrese FIN para finalizar");
} while (agregarCurso.toUpperCase() != "FIN");

for (const curso of cursos) {
    curso.verDatosCurso();
}

//mUESTRA EN CONSOLA EL CURSO CARGADO EN EL STORAGE
let cursoEnStorage =(localStorage.getItem("Curso"));
console.log("Curso: " + cursoEnStorage);

//MUESTRA EN CONSOLA LOS CURSOS PRE-EXISTENTES EN EL HTML
    const fotoVideo=document.getElementById("Foto-Video");
    const nombreCursos = document.getElementsByTagName("h3");
    console.log(fotoVideo.innerText);

        for(let i=0; i<nombreCursos.length;i++){
        const element = nombreCursos[i];
        console.log(element.innerText);
    }

    // MUESTRA EN EL HTML EL ULTIMO CURSO CARGADO
    cursoEnStorage = JSON.parse(localStorage.getItem("Curso"));
    const nuevoCursoNombre = document.createElement("li");
    const nuevoCursoTipo = document.createElement("li");
    const nuevoCursoDuracion = document.createElement("li");
    const nuevoCursoPrecio = document.createElement("li");
    
    
    nuevoCursoNombre.innerHTML =cursoEnStorage.nombre;
    nuevoCursoTipo.innerHTML="-"+cursoEnStorage.tipo;
    nuevoCursoDuracion.innerHTML="-"+cursoEnStorage.duracion;
    nuevoCursoPrecio.innerHTML="-"+cursoEnStorage.precio;
    nuevoCursoNombre.style.fontSize="30px";
    nuevoCursoTipo.style.fontSize="30px";
    nuevoCursoDuracion.style.fontSize="30px";
    nuevoCursoPrecio.style.fontSize="30px";
    
    const contenedorCurso =document.getElementById("nuevoCurso");
    
    contenedorCurso.appendChild(nuevoCursoNombre);
    contenedorCurso.appendChild(nuevoCursoTipo);
    contenedorCurso.appendChild(nuevoCursoDuracion);
    contenedorCurso.appendChild(nuevoCursoPrecio);
    

