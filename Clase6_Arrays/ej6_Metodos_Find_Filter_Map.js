class Usuario{
    constructor(nombre,apellido,dni,email,edad){

        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.email=email;
        this.edad=edad;
    }

}

const usuarios =[];
usuarios.push(new Usuario("Juan", "Perez", 5432, "juan@email.com",30));
usuarios.push(new Usuario("Carlos", "Gomez", 39448, "carlos@email.com",33));
usuarios.push(new Usuario("Maria", "Jimenez", 45860, "maria@email.com",27));

//Buscar el mail de Carlos Gomez
const resultado = usuarios.find(usuario => usuario.nombre == "Carlos" && usuario.apellido =="Gomez");
console.log(resultado);

//Buscar todos los usuarios que tengan mas de 30 años

const resultadoConFilter = usuarios.filter(usuario=> usuario.edad > 27);
console.log(resultadoConFilter);

//Ver Usuarios con nombre y apellido en mayuscila
const usuariosMayusculas = usuarios.map(usuario =>{
 usuario.nombre =usuario.nombre.toUpperCase();
 usuario.apellido = usuario.apellido.toUpperCase();
 return usuario;

});

console.log(usuariosMayusculas);



