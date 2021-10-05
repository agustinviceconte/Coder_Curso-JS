let marcaProducto = prompt("Ingrese marca de producto");
let categoriaProducto = prompt("Ingrese categoría");
let stockProducto = parseInt(prompt("Ingrese stock"));

const producto = {marca : marcaProducto, categoria : categoriaProducto, stock : stockProducto};
console.log(producto);


//Funcion constructora
function Producto(marcaProductoParam, categoriaProductoParam, stockProductoParam){
    this.marca=marcaProductoParam;
    this.categoria=categoriaProductoParam;
    this.stock=stockProductoParam;
}