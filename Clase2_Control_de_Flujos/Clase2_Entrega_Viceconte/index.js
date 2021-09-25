let nombre = prompt("Ingrese su nombre");
let categoria = prompt("Ingrese categoría: A, B o C")



if ((nombre == "") && (categoria== "")){
    console.log("No se ha registrado ingreso de datos");
}
else if(nombre != "" && categoria==""){
        console.log("Hola "+nombre+", no ha ingresado ninguna categoría");
}
else if((nombre=="") && ((categoria == "A" )|| (categoria == "B") || (categoria == "C"))){
    console.log("No hemos registrado su nombre, la categoría ingresada es " +categoria);
}
else if((nombre!="") && ((categoria == "A") || (categoria == "B") || (categoria =="C"))){
    console.log("Hola "+nombre+ " la categoría ingresada es " + categoria);
}
else if((nombre== "") && ((categoria != "A") || (categoria != "B") || (categoria !="C"))){
     console.log("No ha ingresado su nombre y la categoría ingresada es incorrecta");
}
else if((nombre!="") && ((categoria != "A") || (categoria != "B") || (categoria !="C"))){
     console.log("Hola "+nombre+ " la categoría ingresada es incorrecta"); 
}




