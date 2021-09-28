//Ingresar nombres hasta que se ingresa ESC

let nombre = prompt("Ingrese nombre, ESC para terminar");

while(nombre!="ESC"){
    console.log("Nombre ingresado: "+ nombre);
    nombre = prompt("Ingrese nombre, ESC para terminar");
    
}