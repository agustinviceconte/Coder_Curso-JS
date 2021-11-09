class Tienda{
    
    constructor(nombreTienda, direccionTienda, propietarioTienda, rubroTienda){
    
    this.nombre = nombreTienda;
    this.direccion= direccionTienda;
    this.propietario=propietarioTienda;
    this.rubro=rubroTienda;
    }

    mostrarDatos(){
    document.write("<ul>");
    document.write("<li>" + this.nombre + "</li>");
    document.write("<li>" + this.direccion + "</li>");
    document.write("<li>" + this.propietario + "</li>");
    document.write("<li>" + this.rubro + "</li>");
    document.write("<br>");
    document.write("</ul");
    }
}  


