'use strict'
//Fetch (ajax) y peticiones a servicios/apis rest

var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())//capturar los datos y se convierte a json
    .then(data =>{
        usuarios = data;
        console.log(usuarios);
    });