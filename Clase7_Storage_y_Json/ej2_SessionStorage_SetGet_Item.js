let paises = ["Italia","Brasil","Suiza","Uruguay","Argentina"];



 let paisesEnStorage = sessionStorage.getItem("paises");
if(!paisesEnStorage){//significa paisesEnStorage = null, o paisesEnStorage false
    
    sessionStorage.setItem("paises",paises);}

console.log(sessionStorage.getItem("paises"));

 
