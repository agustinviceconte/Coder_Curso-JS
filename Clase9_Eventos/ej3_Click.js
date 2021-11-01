const cursos = [
    {
        id: 1,
        nombre: "Algebra"
    },
    {
        id: 2,
        nombre: "Analisis matemático"
    },
    {
        id: 3,
        nombre: "Matemática discreta"
    },
    {
        id: 4,
        nombre: "Probalididad y estadística"
    },
];

function cargarCursos(){
    const selectCursos = document.getElementById("cursos");
    for (const curso of cursos){

        const opcionCurso = document.createElement("option")
        opcionCurso.value =curso.id;
        opcionCurso.innerHTML=curso.nombre;

        selectCursos.appendChild(opcionCurso)
    }
}

function mostrarElementosGuardados(){

    const nombre=document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email=document.getElementById("email").value;
    const curso=cursos.find(cur => cur.id == document.getElementById("cursos").value).nombre;

    const elementosIngresados = `
         <p>Datos Ingresados para curso:</p>
         <ul>
            <li>Nombre: ${nombre} ${apellido}</li>
            <li>Email: ${email}</li>
            <li>Nombre: ${curso}</li>
        </ul>`;

       document.getElementById("elementosIngresados").innerHTML = elementosIngresados;
}

cargarCursos();
document.getElementById("btnGuardar").addEventListener("click", mostrarElementosGuardados);



