//Js
const liLibros = document.getElementsByTagName("li");
for (const itemLibro of liLibros) {
    //document.write(`<div>${itemLibro.innerHTML}</div>`);
    
}

//Jquery
const liLibrosJq = $("li");
//console.log(liLibrosJq);
for (const itemlibroJq of liLibrosJq) {
    console.log(itemlibroJq.innerHTML);
}

//Obtener destacados
const librosDestacados =$("#libros .destacado")
for (const itemDestacado of librosDestacados) {
    document.write(`<div>${itemDestacado.innerHTML}</div>`);
}