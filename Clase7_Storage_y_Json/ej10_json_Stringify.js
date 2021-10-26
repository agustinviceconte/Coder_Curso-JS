const producto1= {
    nombre: "LG",
    categoria: "Televisor",
    precio: 50000,
    descuentos : [
        2000,
        4000,
        5000
    ]
};

const enJson = JSON.stringify(producto1);

console.log(enJson); //{"id":2,"producto":"Arroz"}
localStorage.setItem("producto1", enJson);//guarda {"id":2,"producto":"Arroz"}

//jsonlint.com : página para validar json