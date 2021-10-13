//Calcular el precio de un producto

class Producto {
constructor(nombre,codigo,presentacion,precio){
    this.nombre = nombre;
    this.codigo = codigo;
    this.presentacion = presentacion;
    this.precio = precio;
    }

    calcularPrecioVenta(){
        let precioVenta= this.precio * 1.21;
        return precioVenta;
    }

    mostrarProducto(){
        alert("Producto" + this.nombre + "\n"+ this.codigo +"\n"+this.presentacion + "\n" + this.precio);
    }
}

function campoVacio(cadena){
    if (cadena == ""){
        return true;
    }else{
        return false;
    }
}

let band = true;
let nombreProducto;
let codigoProducto;
let presentacionProducto;
let precioProducto;

band=true;

while(band){
    nombreProducto = prompt("Ingrese nombre del producto");
    if(campoVacio(nombreProducto)){
        alert("Debe ingresar un valor");
    }else{
        band=false
    }
}
band=true;
while(band){
    codigoProducto = prompt("Ingrese código del producto");
    if(campoVacio(codigoProducto)){
        alert("Debe ingresar un valor");
    }else{
        band=false
    }
}
band=true;
while(band){
    presentacionProducto = prompt("Ingrese la presentación del producto");
    if(campoVacio(presentacionProducto)){
        alert("Debe ingresar un valor");
    }else{
        band=false
    }
}
band=true;
while(band){
    precioProducto = prompt("Ingrese el precio del producto");
    if(campoVacio(precioProducto)){
        alert("Debe ingresar un valor");
    }else{
        band=false
    }
}



//Creación de un nuevo objeto del tipo Producto
let nuevoProducto = new Producto(nombreProducto,codigoProducto,presentacionProducto,precioProducto);

// Utilizamos el método mostrarProducto del objeto para mostrar los datos ingresados

nuevoProducto.mostrarProducto();

//Calcular precio final de venta utilizando el otro método del objeto
let PrecioFinal = nuevoProducto.calcularPrecioVenta();
alert("El precio de venta del producto es: "+ PrecioFinal);