'use strict'
/**
 * Pida 6 numeros por pantalla y los meta a un array.
 * Mostrar el array entero y que se muestre en la pagina y en la consola
 * Ordenarlo y mostrarlo
 * Invertir su orden y mostrarlo
 * Mostrar cuantos elementos tiene un array
 * Busqueda de un valor por el usuario y que nos diga si lo encuentra su indice
 */

function mostrarArray(elementos, textcusm =""){
    //Motrarlo en la pantalla
    document.write("<h1>Numeros"+ textcusm + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index)=>{   
        document.write("<li>" + elemento + "</li>");
    })
    document.write("</ul>");

}
//Pedir los 6 numeros
var numero = new Array(6);
for(var i=0; i<=5; i++){
    numero[i] = parseInt(prompt("Introduce un numero:",0));
}
//Mostrarlo en la pantalla
mostrarArray(numero);

console.log(numero);
//Ordenarlo
numero.sort(function(a,b){ return a-b });//Ordenarlo de menor a mayor
mostrarArray(numero, " ordenado");
//Invertirlo
numero.reverse();
mostrarArray(numero, " invertido");
//Contar elementos
document.write("<h3>El array tiene " + numero.length + " elementos");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero:",0));
console.log(busqueda);
var posicion = numero.findIndex(numeros => numeros == busqueda);

if(posicion && posicion != -1){
    document.write("<h2>Encontrado</h2>");
    document.write("<h3> Posicion encontrada en " + posicion + "</h3>");
}else{
    document.write("<h2>No encontrado</h2>");
}
