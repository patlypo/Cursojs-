'use strict'
//Fetch (ajax) y peticiones a servicios/apis rest
var div_usuarios = document.querySelector('#usuarios');
//var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())//capturar los datos y se convierte a json
    .then(data =>{
        //usuarios = data;
        console.log(usuarios);
        listadousuarios(data);
    });


function listadousuarios(usuarios){
    usuarios.map((data, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i +". " + data.name + " ";
            div_usuarios.appendChild(nombre);
    });      
}