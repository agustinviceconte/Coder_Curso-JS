//DOM : Document Object Model

//Tipoe de nodos htps://developer.mozilla.org/es/docs/web/API/Node/nodetype

/*Acceso a los Nodos
    - getElementById()
    - getElementsByClassName()
    - getElementsByTagName()
    */

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");

console.log(div);
console.log(div.innerHTML);
console.log(parrafo.innerHTML);


//Acceso al texto
console.log(div.innerText);
console.log(parrafo.innerText);

