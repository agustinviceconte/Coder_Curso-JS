//si no esxiste un valor con la clave "nombre" en el localstorage, solicitar un nombre al usuario,
// y almacenarlo con dicha clave. Si existe, mostrar el nombre obtenido desde el storage con un alerta

const CLAVE = "Nombre"
let datoEnStorage = localStorage.getItem(CLAVE);
if(!datoEnStorage){
    localStorage.setItem(CLAVE,prompt("Ingrese nombre"));
}
else{
    alert("El Local Storage está ocupado por el nombre " +localStorage.getItem(CLAVE));
}