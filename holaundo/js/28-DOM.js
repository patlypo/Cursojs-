'use strict'
function cambiarcolor(color) {
    caja.style.background(color);
    
}
//var caja = document.getElementById("micaja").innerHTML;
var caja = document.querySelector("#micaja");


caja.innerHTML="oh texto de caja dee";
caja.style.background = "red";
caja.style.padding = "20px";
console.log(caja);

var todoslosdiv = document.getElementsByTagName("div");
var valor;
for(valor in todoslosdiv){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(valor);
    parrafo.appendChild(texto);
    document.querySelector("#misection").appendChild(parrafo);
}
console.log();