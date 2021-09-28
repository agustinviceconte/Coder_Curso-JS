let numero =parseInt(prompt("Ingrerse número"));
let texto = prompt("Ingrese texto");


let textoAMostar= null;

for(let indice =1; indice <= numero; indice++){
    let textoAMostar= indice + ":" + texto;
    console.log(textoAMostar);
}