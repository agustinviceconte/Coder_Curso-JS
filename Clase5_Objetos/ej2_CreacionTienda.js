/*
Declarar una clase Tienda que permita registrar
    Nombre
    Direccion
    Propietario
    Rubro
Luego invocar al menos 3 objetos usando esta clase*/

function Tienda(nombreTienda, direccionTienda, propietarioTienda, rubroTienda){
    
    this.nombre = nombreTienda;
    this.direccion= direccionTienda;
    this.propietario=propietarioTienda;
    this.rubro=rubroTienda;

    this.mostrarDatos=function(){
    document.write("<ul>");
    document.write("<li>" + this.nombre + "</li>");
    document.write("<li>" + this.direccion + "</li>");
    document.write("<li>" + this.propietario + "</li>");
    document.write("<li>" + this.rubro + "</li>");
    document.write("<br>");
    document.write("</ul");
    }
    
}

    
//for(i=1;i<=3;i++){

let palabraTerminar=null;
do{

    let nombre= prompt("Ingrese nombre de la tienda");
    let direccion= prompt("Ingrese dirección de la tienda");
    let propietario= prompt("Ingrese propietario de la tienda");
    let rubro= prompt("Ingrese rubro de la tienda");

    const TIENDA = new Tienda(nombre, direccion, propietario,rubro);
    TIENDA.mostrarDatos();

    
    for(const propiedad in TIENDA ){
        if(typeof TIENDA[propiedad] !="function"){
        console.log(propiedad);
        }
    }
    

    /*document.write("<ul>");
    document.write("<li>" + TIENDA.nombre + "</li>");
    document.write("<li>" + TIENDA.direccion + "</li>");
    document.write("<li>" + TIENDA.propietario + "</li>");
    document.write("<li>" + TIENDA.rubro + "</li>");
    document.write("<br>");
    document.write("</ul");
    */

    

    palabraTerminar = prompt("Para finalizar, escriba ESC");


}while(palabraTerminar.toUpperCase() !="ESC");


    
//}
    