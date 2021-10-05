
function Tienda(nombreTienda, direccionTienda, propietarioTienda,rubroTienda){

    this.nombre = nombreTienda;
    this.direccion= direccionTienda;
    this.propietario =propietarioTienda;
    this.rubro= rubroTienda;

    this.mostrarDatos= function(){
        document.write("<ul>");
        document.write("<li>"+ this.nombre + "</li>");
        document.write("<li>"+ this.direccion + "</li>");
        document.write("<li>"+ this.propietario + "</li>");
        document.write("<li>"+ this.rubro + "</li>");
    document.write("</ul>");


    
    }
}

let palabraTerminar = "";

do{
    
    let nombre = prompt("Ingrese nombre");
    let direccion = prompt("Ingrese direccion");
    let propietario = prompt("Ingrese propietario");
    let rubro = prompt("Ingrese rubro");

    const TIENDA = new Tienda(nombre,direccion,propietario,rubro);

    

    palabraTerminar=prompt("Si desea salir presione ESC");

} while(palabraTerminar.toUpperCase() != "ESC");
