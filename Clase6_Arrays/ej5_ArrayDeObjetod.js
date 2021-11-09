//Agregar Usuarios a una lista


class Usuario{
    constructor(nombre,apellido,dni,email){

        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.email=email;
    }

}

const usuarios= [];
let condicionCorte="";
do{

    let nombre =prompt("Ingrese nombre");
    let apellido =prompt("Ingrese apellido");
    let dni =prompt("Ingrese dni");
    let email =prompt("Ingrese email");

    const usuario = new Usuario(nombre, apellido, dni, email);
    usuarios.push(usuario);


    condicionCorte=prompt("Ingrese otro usuario o ESC");
}while(condicionCorte.toUpperCase() !="ESC");

//Forma1
for(let i=0; i<usuarios.length;i++){
    console.log(usuarios[i]);
}


//Forma2
for(const usuario of usuarios){

    document.write("<ul>");
    document.write("<li>Nombre: " + usuario.nombre + " " + usuario.apellido +"</li>");
    document.write("<li>DNI: " + usuario.dni + "</li>");
    document.write("<li>Email: " + usuario.email + "</li>");
    document.write("</ul>");
}





