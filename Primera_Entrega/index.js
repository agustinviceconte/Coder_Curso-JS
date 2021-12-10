/*Objetivo: seleccionar y visualizar detalle de cursos ofrecidos.
*****************************************************************
 - Seleccionar el curso y completar datos de inscripción
 - Verificar que se hayan ingresado todos los datos del formulario
 - Mostrar los datos ingresados y al confirmar mostrar mensaje de bienvenida
 - En caso de que el usuario ingrese el código de promoción PROMO, al precio del curso se le aplica
un 20% de descuento*/

//Variables
let nombreCursoCatalogo=""
let tipoCursoCatalogo=""
let duracionCursoCatalogo=""
let precioCursoCatalogo=""
let cursos=[];
let datosIngresados=[];
const CLAVE="Alumnos"

//funcion para mostrar el curso seleccionado en el formulario
function mostrarCurso(){
    const cursoSeleccionado = document.getElementById("cursos").value;
       
        switch (cursoSeleccionado){

        case "Home Studio":
            cursosAMostrar=cursoHomeStudio.verDatosCursoInscripcion();
            let homeStudioEnStorage= JSON.parse(localStorage.getItem("Home Studio"));
            console.log(homeStudioEnStorage);
            break;
        case "Grabacion Analogica":
           cursosAMostrar=cursoGrabacionAnalogica.verDatosCursoInscripcion();
            let grabacionAnalogicaEnStorage= JSON.parse(localStorage.getItem("Grabación Analógica"));
            console.log(grabacionAnalogicaEnStorage);
            break;
        case "Grabacion Digital":
            cursosAMostrar=cursoGrabacionDigital.verDatosCursoInscripcion();
            let grabacionDigitalEnStorage= JSON.parse(localStorage.getItem("Grabación Digital"));
            console.log(grabacionDigitalEnStorage);
            break;
        case "Video":
            cursosAMostrar=cursoVideo.verDatosCursoInscripcion();
            let videoEnStorage= JSON.parse(localStorage.getItem("Video"));
            console.log(videoEnStorage);
             break;
        case "Fotografia Analogica":
            cursosAMostrar=cursoFotografiaAnalogica.verDatosCursoInscripcion();
            let fotografiaAnalogicaEnStorage= JSON.parse(localStorage.getItem("Fotografía Analógica"));
            console.log(fotografiaAnalogicaEnStorage);
            break;
        case "Fotografia Digital":
            cursosAMostrar=cursoFotografiaDigital.verDatosCursoInscripcion();
            let fotografiaDigitalEnStorage= JSON.parse(localStorage.getItem("Fotografía Digital"));
            console.log(fotografiaDigitalEnStorage);
            break;


        default:

    }

    $("#btnConfirmar").show()
    $("#btnAceptar").hide()

}
//Funcion que verifica si hay alumnos cargados en storage
function existeEnStorage(clave){
    let existe = true;
    if(!localStorage.getItem(clave)){
        existe = false
    }
    return existe;
}
//Funcion para guardar los datos del suscribiente (alumno) en storage
function guardarEnStorage(clave,valor){
    localStorage.setItem(clave,JSON.stringify(valor));
}
//Funcion para obtener los datos del suscribiente(alumno) del storage
function obtenerDatosDeStorage(clave){
    return JSON.parse(localStorage.getItem(clave))
}
//Función para verificar que se hayan completado todos los datos del formulario(menos "PROMOCION", que es opcional)
function datosFormulario(){
    let nombreFormulario=document.getElementById("nombre").value;
    let nroDocFormulario=document.getElementById("nroDocumento").value;
    let emailFormulario=document.getElementById("email").value;
    let cursoFormulario=document.getElementById("cursos").value;
        if(nombreFormulario==""||nroDocFormulario==""||emailFormulario==""||cursoFormulario==""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Se deben completar todos los campos',
              })
        $("#btnConfirmar").hide();
    
    }
}

//Creación  del objetovCurso
class Curso {

    constructor(nombre, tipo, duracion, precio,vacantes) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.duracion = duracion;
        this.precio = precio;
        this.vacantes=vacantes
    }
    //Métodos del objeto
    
    verDatosCursoCatalogo() {
                
            nombreCursoCatalogo=document.createElement("li");
            nombreCursoCatalogo.innerText="NOMBRE: "+ this.nombre;
            tipoCursoCatalogo=document.createElement("li");
            tipoCursoCatalogo.innerHTML="CATEGORIA: "+ this.tipo;
            duracionCursoCatalogo=document.createElement("li");
            duracionCursoCatalogo.innerHTML="DURACION: "+ this.duracion;
            precioCursoCatalogo=document.createElement("li");
            precioCursoCatalogo.innerHTML="PRECIO: "+ this.precio;
        
}
    verDatosCursoInscripcion() {
    
        let nombreCurso=document.createElement("h2");  
            nombreCurso.innerText=this.nombre
            document.getElementById(cursoSelect);
            cursoSelect.appendChild(nombreCurso);
            nombreCurso.style.color="black";
        let tipoCurso=document.createElement("li");
            tipoCurso.innerHTML="CATEGORIA: " +this.tipo
            document.getElementById(cursoSelect);
            cursoSelect.appendChild(tipoCurso);
            tipoCurso.style.color="black";
        let duracionCurso=document.createElement("li");  
            duracionCurso.innerHTML="DURACION: "+this.duracion;
            document.getElementById(cursoSelect);
            cursoSelect.appendChild(duracionCurso);
            duracionCurso.style.color="black";
        let precioCurso=document.createElement("li");  
            precioCurso.innerHTML="PRECIO: "+ "$"+this.precio;
            document.getElementById(cursoSelect);
            cursoSelect.appendChild(precioCurso);
            precioCurso.style.color="black";
        let vacantesCurso=document.createElement("li");  
            vacantesCurso.innerHTML="VACANTES: " +this.vacantes;
            document.getElementById(cursoSelect);
            cursoSelect.appendChild(vacantesCurso);
            vacantesCurso.style.color="black";

        //Cálculo de precio final en caso de que el usuario ingrese el código de promoción PROMO1
        let promo=document.createElement("li");
            document.getElementById("promocion").value;
            if((promocion).value=="PROMO"){
            promo.innerHTML="PRECIO CON PROMO: " + "$"+(parseFloat(this.precio)-(parseFloat(this.precio) * 0.2)) ;
            document.getElementById(cursoSelect);
            cursoSelect.appendChild(promo);
            promo.style.color="black";
        }  
        }
    
    }
//Creación del objeto Alumno
    class Alumno{
        constructor(nombre,nroDocumento,email,curso){
            this.nombre=nombre;
            this.nroDocumento=nroDocumento;
            this.email=email;
            this.curso=curso;
         }

    }
//Instanciado de los cursos, carga en array y guardado en local Storage  
 
const cursoHomeStudio = new Curso("Home Studio","Sonido","10hs","7000",10);
cursos.push(cursoHomeStudio);
const cursoGrabacionAnalogica = new Curso("Grabación Analógica","Sonido","20hs","10000",10);
cursos.push(cursoGrabacionAnalogica);
const cursoGrabacionDigital= new Curso("Grabación Digital","Sonido","16hs", "8000",10 );
cursos.push(cursoGrabacionDigital);
const cursoVideo= new Curso("Video","Foto/Video","20hs","10000",10);
cursos.push(cursoVideo);
const cursoFotografiaAnalogica= new Curso("Fotografía Analógica","Foto/Video","16hs","7000",10);
cursos.push(cursoFotografiaAnalogica);
const cursoFotografiaDigital= new Curso("Fotografía Digital","Foto/Video","18hs","8000",10);
cursos.push(cursoFotografiaDigital);
const guardarLocal = (clave, valor)=>{localStorage.setItem(clave,valor)};
for(const curso of cursos){
 guardarLocal(curso.nombre, JSON.stringify(curso));
}
//Botones para mostrar los detalles de los cursos en el catálogo
$("#btnHomeStudioMostrar").on("click",()=>{
    $("#detalleHomeStudio").show();
    cursoHomeStudio.verDatosCursoCatalogo();    
     document.getElementById(listaHomeStudio);
     listaHomeStudio.appendChild(nombreCursoCatalogo);
     listaHomeStudio.appendChild(tipoCursoCatalogo);
     listaHomeStudio.appendChild(duracionCursoCatalogo);
     listaHomeStudio.appendChild(precioCursoCatalogo);
    $("#btnHomeStudioMostrar").hide();
})
$("#btnHomeStudioOcultar").on("click",()=>{
    $("#detalleHomeStudio").hide()
    $("#btnHomeStudioMostrar").show();
    location.reload();
})
$("#btnGrabacionDigital").on("click",()=>{
    $("#detalleGrabacionDigital").show()
    document.getElementById(listaGrabacionDigital);
    cursoGrabacionDigital.verDatosCursoCatalogo();
    listaGrabacionDigital.appendChild(nombreCursoCatalogo);
    listaGrabacionDigital.appendChild(tipoCursoCatalogo);
    listaGrabacionDigital.appendChild(duracionCursoCatalogo);
    listaGrabacionDigital.appendChild(precioCursoCatalogo);
    $("#btnGrabacionDigital").hide()
})
$("#btnGrabacionDigitalOcultar").on("click",()=>{
    $("#detalleGrabacionDigital").hide()
    $("#btnGrabacionDigital").show()
    location.reload();
})
$("#btnGrabacionAnalogica").on("click",()=>{
    $("#detalleGrabacionAnalogica").show()
    document.getElementById(listaGrabacionAnalogica);
    cursoGrabacionAnalogica.verDatosCursoCatalogo();
    listaGrabacionAnalogica.appendChild(nombreCursoCatalogo);
    listaGrabacionAnalogica.appendChild(tipoCursoCatalogo);
    listaGrabacionAnalogica.appendChild(duracionCursoCatalogo);
    listaGrabacionAnalogica.appendChild(precioCursoCatalogo);
    $("#btnGrabacionAnalogica").hide()
})
$("#btnGrabacionAnalogicaOcultar").on("click",()=>{
    $("#detalleGrabacionAnalogica").hide()
    $("#btnGrabacionAnalogica").show()
    location.reload();
})
$("#btnVideo").on("click",()=>{
    $("#detalleVideo").show()
    document.getElementById(listaVideo);
    cursoVideo.verDatosCursoCatalogo();
    listaVideo.appendChild(nombreCursoCatalogo);
    listaVideo.appendChild(tipoCursoCatalogo);
    listaVideo.appendChild(duracionCursoCatalogo);
    listaVideo.appendChild(precioCursoCatalogo);
    $("#btnVideo").hide()
})
$("#btnVideoOcultar").on("click",()=>{
    $("#detalleVideo").hide()
    $("#btnVideo").show()
    location.reload();
})
$("#btnFotografiaAnalogica").on("click",()=>{
    $("#detalleFotografiaAnalogica").show()
    document.getElementById(listaFotografiaAnalogica);
    cursoFotografiaAnalogica.verDatosCursoCatalogo();
    listaFotografiaAnalogica.appendChild(nombreCursoCatalogo);
    listaFotografiaAnalogica.appendChild(tipoCursoCatalogo);
    listaFotografiaAnalogica.appendChild(duracionCursoCatalogo);
    listaFotografiaAnalogica.appendChild(precioCursoCatalogo);
    $("#btnFotografiaAnalogica").hide()
})
$("#btnFotografiaAnalogicaOcultar").on("click",()=>{
    $("#detalleFotografiaAnalogica").hide()
    $("#btnFotografiaAnalocica").show()
    location.reload();
})
$("#btnFotografiaDigital").on("click",()=>{
    $("#detalleFotografiaDigital").show()
    document.getElementById(listaFotografiaDigital);
    cursoFotografiaDigital.verDatosCursoCatalogo();
    listaFotografiaDigital.appendChild(nombreCursoCatalogo);
    listaFotografiaDigital.appendChild(tipoCursoCatalogo);
    listaFotografiaDigital.appendChild(duracionCursoCatalogo);
    listaFotografiaDigital.appendChild(precioCursoCatalogo);
    $("#btnFotografiaDigital").hide()
})
$("#btnFotografiaDigitalOcultar").on("click",()=>{
    $("#detalleFotograDigital").hide()
    $("#btnFotografiaDigital").show()
    location.reload();
})

//botones para mostrar el curso seleccionado en el formulario de inscripción y borrar los datos
let mostrar = document.getElementById("btnAceptar").addEventListener("click",mostrarCurso);
let limpiar = document.getElementById("limpiar").addEventListener("click",_=>{location.reload();
});

//guarda los datos ingresados en local Storage y muestra ficha de inscripción en pantalla
 $("#btnAceptar").on("click",()=>{

const alumnos=[];
datosIngresados.push("Nombre: " + $("#nombre").val());
datosIngresados.push("Documento: " + $("#nroDocumento").val());
datosIngresados.push("Email: " + $("#email").val());
datosIngresados.push("Curso: "+$("#cursos").val());
datosFormulario();
const nuevoAlumno= new Alumno($("#nombre").val(),$("#nroDocumento").val(),$("#email").val(),$("#cursos").val(),);
alumnos.push(nuevoAlumno);
if(!existeEnStorage(CLAVE)){
    guardarEnStorage(CLAVE,alumnos);
}else{
    let listaStorage=obtenerDatosDeStorage(CLAVE);
    listaStorage.concat(alumnos);
    guardarEnStorage(CLAVE, listaStorage);      
}
console.log(alumnos);

const guardarDatos=localStorage.setItem("Datos Ingresados",datosIngresados);
console.log(datosIngresados)// Chequeo de ingreso de datos ok

 let datos= document.createElement("ul");
 let plantillaDatos="";
 for(const dato of datosIngresados){
 plantillaDatos+=`<li style="color:black">${dato}</li>`;
 }
console.log(plantillaDatos)
datos.innerHTML=plantillaDatos
console.log(datos);

$("#datosIngresados").html(datos);
$("#confirmarDatos").show();
$("#btncursoElegido").show();

})  

//Muestra mensaje de bienvenida
$("#btnConfirmar").on("click",()=>{
    Swal.fire('BIENVENIDO/A !!. En breve recibirás el link de acceso')
$("#btnConfirmar").hide()
});

