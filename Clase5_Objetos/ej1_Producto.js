let marcaProducto = prompt("Ingrese marca de producto");
let categoriaProducto= prompt("Ingrese categoría de producto");
let stockProducto= parseInt(prompt("Ingrese stock de producto"));

//Armamdo del objeto
//                key   value         key       value             key   value
const producto1 ={marca: marcaProducto,categoria:categoriaProducto,stock:stockProducto};
console.log(producto1);


//Armado con función constructora
function Producto(marcaProductoParametro, categoriaProductoParametro, stockProductoParametro){
    
    this.marca=marcaProductoParametro;
    this.categoria=categoriaProductoParametro;
    this.stock=stockProductoParametro;
}
const producto2 = new Producto("Gafa","Heldera",2);
const producto3 = new Producto("Philco","Aspiradora",15);

console.log(producto2.categoria + ":" + producto2.marca);
console.log(producto3["categoria"] + ":" + producto3.marca );


