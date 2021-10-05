function Tienda(nombreTienda, direccionTienda, propietarioTienda,rubroTienda){

    this.nombre = nombreTienda;
    this.direccion= direccionTienda;
    this.propietario =propietarioTienda;
    this.rubro= rubroTienda;
}

let palabraTerminar = "";

do{
    
    let nombre = prompt("Ingrese nombre");
    let direccion = prompt("Ingrese direccion");
    let propietario = prompt("Ingrese propietario");
    let rubro = prompt("Ingrese rubro");

    const TIENDA = new Tienda(nombre,direccion,propietario,rubro);

    document.write("<ul>");
        document.write("<li>"+ TIENDA.nombre + "</li>");
        document.write("<li>"+ TIENDA.direccion + "</li>");
        document.write("<li>"+ TIENDA.propietario + "</li>");
        document.write("<li>"+ TIENDA.rubro + "</li>");
    document.write("</ul>");

    palabraTerminar=prompt("Si desea salir presione ESC");

} while(palabraTerminar.toUpperCase() != "ESC");
