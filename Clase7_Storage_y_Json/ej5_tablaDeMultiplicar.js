const multipllicar = (a,b) => a*b;
const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};

let ingresarNumero=parseInt(prompt("Ingrese un número:"));
// en cada repetición se multiplica el número ingresado por el número de repetición (i)
for (let i=1;i<=10;i++){

guardarLocal(i, multipllicar(parseInt(ingresarNumero),i));
}