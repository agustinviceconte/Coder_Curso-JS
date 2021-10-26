let cantidadElementos=prompt("Ingrese la cantidad de elementos");
let elementos=[];


for(let i=1;i<= cantidadElementos; i++){
    
    document.write("Elemento  "+ [i] + "\n total");
    elementos.push(i);
}

alert(elementos);