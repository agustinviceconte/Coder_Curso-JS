/*Armar un html que contenga:

    - Un titulo:Alumnos Javascript (h1 con atributo Id)

    - Dos párrafos con los siguientes textos:

           -  Esta es la sección para visualizar los alumnos del curso de Javascript del año 2021.
           -  Dichos alumnos se anotaron previamente para los cursos anualkes de JS

    - Una lista de alumnos (con class alumno)

    Se pide mostrar por consola, lo que está en la estructura del DOM anteriormente mencionada
    */

    const titulo =document.getElementById("titulo");
    const parrafos = document.getElementsByTagName("p");
    const alumnos = document.getElementsByClassName("alumno");

    console.log(titulo.innerHTML);

    for (const parrafo of parrafos){
        
        console.log(parrafo.innerHTML)
    }

    for (const alumno of alumnos){
        console.log(alumno.innerHTML);
    }