//Especial para validaciones

//Validacion texto previo
function handlerKeyDown(){

    console.log("key down; ", document.getElementById("nombre").value);
}

//Validacion texto actual
function handlerKeyUp(){

    console.log("key up: ", document.getElementById("nombre").value);
}

function handlerKeyPress(){

    console.log("key press: ", document.getElementById("apellido").value);
}

document.getElementById("nombre").addEventListener("keydown", handlerKeyDown);
document.getElementById("nombre").addEventListener("keyup", handlerKeyUp);
document.getElementById("apellido").addEventListener("keypress", handlerKeyPress);