const productos = [{id: 1, producto: "Arroz", precio: 125}, 
                   {id: 2, producto: "Fideos", precio: 70},
                   {id: 3, producto: "Pan", precio: 50},
                   {id: 4, producto: "Flan", precio: 100}];

const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};

//Alamacenar producto por producto

for (const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos))