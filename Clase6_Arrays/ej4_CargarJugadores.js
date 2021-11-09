/*Declarar un array de cadenas de caracteres , compuesto por (4)nombres de jugadores
Recorrer el array, e informar por alerta el nombre de cada jugador, asi como la posición que ocupa
en la colección*/

const jugadores=["Jugador1","Jugador2","Jugador3","Jugador4"];

for(let i = 0; i < jugadores.length; i ++){

    document.write(i + "-" + jugadores[i]);
    document.write("<br>");
}

console.log(jugadores.toString());