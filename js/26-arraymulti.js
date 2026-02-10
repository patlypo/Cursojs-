'use strict'
var categorias = ["accion", "terror", "comedia"];
var peliculas = ["la verdad duele", "la vida es bella", "gran torino"];
//sort - ordenar por orden alfabetico/ reverse - se muestra al reves
peliculas.sort();
console.log(peliculas);
var cine = [categorias, peliculas];
console.log(cine[0][2]);
//Añadir elemento a la array
peliculas.push("Batman");
console.log(peliculas);

var elemento="";
do{
    elemento = prompt("Añadir un elemento:");
    peliculas.push(elemento);
}while(elemento!="Acabar");
peliculas.pop //eliminar el ultimo elemento de un array
console.log(peliculas);
// join = lo convierte a un string


//string to array
var cadena = "texto1,texto2,texto3";
var cadenaarray = cadenaarray.split(",");
console.log(cadenaarray);