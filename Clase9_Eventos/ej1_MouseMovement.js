function resaltarEnVerde(){
    document.getElementById("textoAResaltar").style.color = "green";
}

function resaltarEnRojo(){
    document.getElementById("textoAResaltar").style.color = "red";
}

function resaltarEnAzul(){
    document.getElementById("textoAResaltar").style.color = "blue";
}

function resaltarEnNaranja(){
    document.getElementById("textoAResaltar").style.color = "orange";
}

document.getElementById("textoAResaltar").addEventListener("mouseup", resaltarEnVerde);
document.getElementById("textoAResaltar").addEventListener("mousedown", resaltarEnRojo);
document.getElementById("textoAResaltar").addEventListener("mouseover", resaltarEnAzul);
document.getElementById("textoAResaltar").addEventListener("mouseout", resaltarEnNaranja);