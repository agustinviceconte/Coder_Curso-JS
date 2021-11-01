/*
Pedir al usuario la siguiente información:

-Nombre y apellido (input)
-Tipo de moneda con la cual cotizar (Select con las siguientes opciones: Dolar (100), Euro (115)
  libra esterlina (138)
- Dinero a cotizar en otra moneda (input donde va a haber numeros con decimales)

Finalmente va a existir un boton de cotizar, para mostrar por pantalla los siguientes datos:

    -Importe moneda origen (siempre es pesos): muestra valor ingresado a cotizar en pesos argentinos.
    -Importe moneda destino : muestra el valor a cotizar en la moneda destino

*/


function cotizar(){

    const valorMoneda = document.getElementById("monedas").value;
    const valorACotizar = document.getElementById("valorACotizar").value;
    let valorAMostrar= null;

    switch (valorMoneda){
        case "DOLAR":
            valorAMostrar = valorACotizar * 100;
            break;
        case "EURO":
            valorAMostrar = valorACotizar * 115;
            break;
        case "LIBRA":
            valorAMostrar = valorACotizar * 138;
            break;
        default:
            break;

    }

    document.getElementById("importeMonedaCotizada").innerHTML =`Valor moneda cotización: ${valorACotizar}`;
    document.getElementById("importePesos").innerHTML = `Valor en pesos: ${valorAMostrar}`

}

document.getElementById("btnCotizar").addEventListener("click",cotizar);
