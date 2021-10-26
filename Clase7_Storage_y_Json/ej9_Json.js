// Json = java script object notation - ES UN STRING CON UN FORMATO ESPECIFICO
// Es utilizado para enviar y almacenar datos en aplicaciones web (API)

const producto1={id:2, producto: "Arroz"};

localStorage.setItem("producto1",producto1); //se guarda como [objet object]

/*Conversiones

stringify(): acepta un objeto como parámetro, y devualve la forma de texto JSON equivalente

parse(): recibe un texto JSON como parámewtro, y devuelve el objeto JavaScript correspondiente
*/


