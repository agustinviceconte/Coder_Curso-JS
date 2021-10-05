//Algoritmo que permite seleccionar entre 3 cursos. Se puede seleccionar 1,2 o los 3
//Dependiendo de la cantidad de cursos seleccionados se aplica un descuento de 10% o 20% sobre el total



const porcentaje1 = 10;
const porcentaje2 = 20;
const precioHomeStudio = 1000;
const precioGrabacionDigital = 1000;
const precioGrabacionAnalogica = 1000;
let precioTotal = 0;


//Descuento del 10% sobre el total
function descuento(precioCurso, porcentaje) {
    let descuento1 = precioTotal - (precioTotal * (parseInt(porcentaje1) / 100));
    return descuento1;
}
//Descuento del 20% sobre el total
function descuento2(precioCurso, porcentaje) {
    let descuento1 = precioTotal - (precioTotal * (parseInt(porcentaje2) / 100));
    return descuento1;
}



let curso = prompt("Ingrese los cursos a realizar, separados por un espacio y respetando el orden: 'HS' para Home Studio, 'GA' para Grabación Analógica, 'GD' para Grabación Digital o ingrese 'ESC'; ");
switch(curso){
    case "HS":
        precioTotal=precioHomeStudio;
        console.log("Ingresaste 'Home Studio', el precio total es: " + precioTotal);
        break;
    case "GA":
        precioTotal=precioGrabacionAnalogica;
        console.log("Ingresaste 'Grabación Analógica', el precio total es: " + precioTotal);
         break;
    case "GD":
        precioTotal=precioGrabacionDigital;
        console.log("Ingresaste 'Grabación Digital', el precio total es: " + precioTotal);
        break;
    case "HS GA":
        precioTotal=parseInt(precioHomeStudio)+parseInt(precioGrabacionAnalogica);
        console.log("Ingresaste 'Home Studio' y 'Grabación Analógica', el precio total es: "+ precioTotal);
        console.log("El precio con descuento es: " + descuento(precioTotal, porcentaje1));
        break;
    case "HS GD":
        precioTotal=parseInt(precioHomeStudio)+parseInt(precioGrabacionDigital);
        console.log("Ingresaste 'Home Studio' y 'Grabación Digital', el precio total es: "+ precioTotal);
        console.log("El precio con descuento es: " + descuento(precioTotal, porcentaje1));
        break;
    case "GA GD":
        precioTotal=parseInt(precioGrabacionDigital)+parseInt(precioGrabacionAnalogica);
        console.log("Ingresaste 'Grabación Analógica' y 'Grabación Digital', el precio total es: "+ precioTotal);
        console.log("El precio con descuento es: " + descuento(precioTotal, porcentaje1));
        break;
    case "HS GA GD":
        precioTotal=parseInt(precioGrabacionDigital)+parseInt(precioGrabacionAnalogica)+parseInt(precioGrabacionDigital);
        console.log("Ingresaste 'Home Studio', Grabación Analógica' Y 'Grabación Digital'  el precio total es: "+ precioTotal);
        console.log("El precio con descuento es: " + descuento2(precioTotal, porcentaje2));
        break;
    case "ESC":
        console.log("Hasta luego!!");
        break;
    default:
        console.log("Verifique los datos ingresados")
        break;
}



