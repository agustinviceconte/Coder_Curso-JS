const paises = document.getElementById("paises");
paises.addEventListener("change", gestionarCambiosSelectPais);

function gestionarCambiosSelectPais(event){

    console.log(event.target.value);
}

