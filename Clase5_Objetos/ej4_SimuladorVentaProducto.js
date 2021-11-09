/*
Pedir los siguiente datos de un producto por prompt:

-Marca
-Categotia (TV. Heladera, Aspiradora, etc)
-Color
-Stock
-Precio
-Descuento (de 1 a 100)

Inicialmente, tiene 0 de cantidad vendida  y 0 de precio de venta

Luego , simular las siguientes funcionalidades:

- Crear producto (Suponemos que todos los productos que ingresa son correctos)
-Vender
        - Pedir la cantidad de productos a comprar
        - Validar que haya stock
        - Reducir el stock
        - Cargar cantidad vendida
        - Aplicar el descuento si es aplicable al producto
        - Calcular precio total por venta
- Mostrar datos iniciales del producto por pantalla
- Mostrar datos de venta del producto por pantalla (incluir cuantos quedan en stock)
*/

class Producto{
    constructor(marca, categoria, color, stock, precio,descuento){

        this.marca = marca;
        this.categoria = categoria;
        this.color = color;
        this.stock = stock; 
        this.precio = precio;
        this.descuento = descuento;

        this.cantidadVendida = 0;
        this.precioVenta = 0;
    }

    vender(cantidad){
        if(this.stock >= cantidad){
            this.stock = this.stock - cantidad;
            this.cantidadVendida = cantidad;
            this.aplicarDescuento();
            this.calcularPrecioTotalVenta();
        }
    }

    aplicarDescuento(){
        if(this.descuento > 0){
            this.precio = this.precio - (this.precio * this.descuento / 100);
        }
    }
    calcularPrecioTotalVenta(){
        this.precioVenta = this.cantidadVendida * this.precio;
    }
    mostrardatosVenta(){
        document.write("Datos de venta:<br> ");
        document.write("Producto vendido: " + this.categoria + "-" + this.marca + "<br>");
        document.write("Cantidad: " + this.cantidadVendida + "<br>");
        document.write("Precio total: " + this.precioVenta);
    }
}

let nuevoProducto = new Producto("LG", "TV","negro",10,50000,10);
nuevoProducto.vender(2);
nuevoProducto.mostrardatosVenta();

