//Estudiantes por ul

const estudiantesPorUl =$("#estudiantes");
const hijosEstudiantesPorUl= estudiantesPorUl.children();

for (const nodoLi of hijosEstudiantesPorUl){
    console.log(nodoLi.innerHTML);
}

console.log("--------------------------");

//Estudiante por Li
const estudiantesPorLis = $("li");
for (const itemLi of estudiantesPorLis){
    console.log(itemLi.innerHTML);
}

console.log("---------------------------");

//Estudiantes destacados
const estudiantesDestacados = $(".destacado");
for (const itemLiDestacado of estudiantesDestacados){
    console.log(itemLiDestacado.innerHTML);
}

console.log("--------------------------");

//Curswo resaltado
const cursoResaltado =$("li.popular #resaltado");
console.log(cursoResaltado[0].innerHTML);
