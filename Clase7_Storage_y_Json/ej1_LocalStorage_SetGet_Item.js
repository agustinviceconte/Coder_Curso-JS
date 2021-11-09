//Método : localStorage.setItem(clave,valor)
//clave = nombre para identificar
//valor = contenido del elemento


let username= prompt("Ingrese username");
localStorage.setItem("nombre",username);


username = localStorage.getItem("nombre");
document.write("Nombre: " + username);





//session storage: guarda datos de la pestaña

/*let paises = ["Italia", "Japon"];

let paisesEnStorage= sessionStorage.getItem("paises");
if(!paisesEnStorage){

    sessionStorage.setItem("paises", paises);
}
console.log(sessionStorage.getItem("paises"));*/









