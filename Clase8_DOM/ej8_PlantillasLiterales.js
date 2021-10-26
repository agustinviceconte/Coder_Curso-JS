 let producto ={id:1,nombre:"Arroz",precio:125};
 let concatenado = "ID: " + producto.id + " - Producto: " + producto.nombre + "$ "+ producto.precio;
 let plantilla = `ID: ${producto.id} - Producto ${producto.nombre} ${producto.precio}`;

 
 let htmlEjemplo = `
 <div>   
    <div>${producto.id}</div>
    <p>${producto.nombre}</p>
    <h1>${producto.precio}</h1>
 </div>
 
 `;
 document.body.innerHTML= htmlEjemplo;
 console.log(plantilla);