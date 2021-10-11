let opcion = prompt("Elija una opción: CARGAR_CURSO, CARGAR_CLASES, VER_CURSO, VER_DETALLE");

switch(opcion){
 
 case "CARGAR_CURSO":
     cargarCurso();
     break;
 case "CARGAR_CURSO":
    cargarClases();
    break;
 case "VER_CURSO":
     verCurso();
    break;
 case "VER_CLASES":
     verClases();
     break;
default:
    break;

}