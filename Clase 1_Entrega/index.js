const ANACTUAL=2021;
let nombre = prompt("Ingrese su nombre");
let anNacimiento = prompt("Ingrese el año de su nacimiento");

let resultado = parseInt(ANACTUAL)-parseInt(anNacimiento);
let resultado2 = parseInt(ANACTUAL)-parseInt(anNacimiento)-1;

console.log("Hola "+nombre+ ". Según los datos ingresados, usted tiene entre "+resultado2+" y "+resultado
+" años, dependiendo del mes de su nacimiento.")
