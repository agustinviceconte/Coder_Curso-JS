//Mostrar números pares//

for(let i = 0; i<=100;i++){
    if(i % 2 !=0){ //resto de dividir por 2 es distinto a 0, o sea número impar
        continue; //saltea este paso, no lo muestra en el console.log
    }
console.log(i);
}