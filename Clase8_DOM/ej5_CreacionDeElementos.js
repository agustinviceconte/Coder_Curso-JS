//Creación de nodo tipo Elemento, etiqueta p
// let parrafo = document.createElement("p");

//Insertar HTML interno
// parrafo.innerHTML = "<h2>"Hola Coder </h2>;

//Añadir el nodo Element como hijo de body
// document.body.appenchild(parrafo);

const primerPais = document.createElement("li");
const segundoPais = document.createElement("li");

primerPais.innerHTML ="Peru";
segundoPais.innerHTML="Colombia";

const contenedorPaises =document.getElementById("ContenedorPaises");
 
contenedorPaises.appendChild(primerPais);
contenedorPaises.appendChild(segundoPais);

//Eliminación de elmentos por clase

const elementosAEliminar= document.getElementsByTagName("li");

for(let i=0; i<elementosAEliminar.length;i++){

    let idDelElemento = elementosAEliminar[i].id;
    if(idDelElemento=="suiza"){
        elementosAEliminar[i].parentNode.removeChild(elementosAEliminar[i]);
    }
}
