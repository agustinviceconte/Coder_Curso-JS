function incrementarContador(){
    contador++;
    console.log(contador);
}

let contador =0;
document.getElementById("texto").addEventListener("mousemove",incrementarContador);