//arrays, arreglos, matrices
//arrays es una coleccion de datos []
var nombre= "paty";
var nombres = ["laura", "ana", "silvia"];

var lenguajes = new Array("php", "js", "java");
console.log(nombres[4]);

var elemento = parseInt(prompt("Qué elementos deseas?", 0));
if (elemento >= nombres.lengt) {
    alert("Introduce un numero menor o hasta " + nombres.length);
    
}else{
    alert(nombres[elemento]);
}

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");
/** 
for(var i = 0; i<=lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}
*/
lenguajes.forEach((elemento)=>{
    document.write("<li>" + lenguajes[i] + "</li>");
})
document.write("</ul>");