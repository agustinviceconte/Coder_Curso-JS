//Si no existe un valor con la clave "comidas" en el localStorage, crear un array vacío y cargarlo de forma dinámica,
//solicitando al usuario nombres de comidas de forma consecutiva, hasta cinco veces.
//Luego almacenarlo con dicha clave. Si existe, recorrer el array, e informar por alerta

function existeEnStorage(clave){

     let item=localStorage.getItem(clave);
    if(!item){
        return false;
    }
    return true;
}

function guardarEnStorage(clave,valor){
    localStorage.setItem(clave,valor);
}

function cargarComidas(){
    for(i=1;i<=5;i++){
        let comida= prompt("Ingrese comida");
        comidas.push(comida);
    }

}
function mostrarMenuCargado(clave){
    let comidasStorage =localStorage.getItem(clave);
    alert("Menu: "+ comidasStorage)
}
const comidas =[];
const CLAVE="comidas";

if(!existeEnStorage(CLAVE)){
    cargarComidas();
    guardarEnStorage(CLAVE,comidas);
}else{
    mostrarMenuCargado(CLAVE);
}

