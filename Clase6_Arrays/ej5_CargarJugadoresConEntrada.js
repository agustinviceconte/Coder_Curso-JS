/*Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de jugadores
de forma consecutiva, hasta que se ingrese "ESC". Luego recorrer el array, e informar por alerta
el nombre de cada jugador, asi como la posición que ocupa en la colección*/


const jugadores=[];


let condicionDECorte="";
do{
    let jugador = prompt("Ingrese nombre del jugador");
    jugadores.push(jugador);
    condicionDECorte=prompt("Continue o ESC para salir");


}while(condicionDECorte != "ESC");

for(let i =0; i < jugadores.length; i++){
    alert(i + "-" + jugadores[i]);
}

