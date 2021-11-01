//Funcionalidad para ingresar datos, seleccionar y visualizar cursos
//En caso de que el usuario ingrese el código de promoción PROMO1, al precio del curso se lee aplica
//un 20% de descuento


//Creación  de los cursos

class Curso {

    constructor(nombre, tipo, duracion, precio) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.duracion = duracion;
        this.precio = precio;

    }
    //Métodos del objeto
    verDatosCurso() {
        
        let nombreCurso=document.createElement("h2");  
            nombreCurso.innerHTML=this.nombre
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

       
        //Cálculo de precio final en caso de que el usuario ingrese el código de promoción PROMO1
        let promo=document.createElement("li");
            document.getElementById("promocion").value;

            if((promocion).value=="PROMO1"){
            promo.innerHTML="PRECIO FINAL: " + "$"+(parseFloat(this.precio)-(parseFloat(this.precio) * 0.2)) ;
            document.getElementById(cursoSelect);
            cursoSelect.appendChild(promo);
            promo.style.color="black";

        
            }  
            }
            
    }
  //Instanciado de los cursos      
const cursoGrabacionAnalogica = new Curso("Grabación Analógica","Sonido","20hs","10000");
const cursoGrabacionDigital= new Curso("Grabación Digital","Sonido","16hs", "8000" );
const cursoFotografia= new Curso("Fotografía","Foto/Video","16hs","7000");

//botones para mostrar el curso seleccionado y borrar los datos
let aceptar = document.getElementById("btnAceptar").addEventListener("click",mostrarCurso);
let limpiar = document.getElementById("limpiar").addEventListener("click",_=>{location.reload();
});



let cursosAMostrar=true;
//funcion para mostrar el curso
function mostrarCurso(){
    const cursoSeleccionado = document.getElementById("cursos").value;


    switch (cursoSeleccionado){
        case "grabacionAnalogica":
           cursosAMostrar=cursoGrabacionAnalogica.verDatosCurso();
            break;
        case "grabacionDigital":
            cursosAMostrar=cursoGrabacionDigital.verDatosCurso();
            break;
        case "fotografia":
           cursosAMostrar=cursoFotografia.verDatosCurso();
            break;
        default:

    }

}

  
 
