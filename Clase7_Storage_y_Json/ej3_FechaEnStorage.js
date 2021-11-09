let fechaActual= new Date();



let fechaActualStorage = sessionStorage.getItem("fechaActual");
if(!fechaActualStorage){
    sessionStorage.setItem("fechaActual",fechaActual);
    document.write(fechaActual);
}
