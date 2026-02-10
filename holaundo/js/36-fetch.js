'use strict'
//Fetch (ajax) y peticiones a servicios/apis rest
var div_usuarios = document.querySelector('#usuarios');
var div_nombre2 = document.querySelector('#nombre2');
//var usuarios = [];

    getusuarios()
    .then(data => data.json())//capturar los datos y se convierte a json
    .then(users =>{
        //usuarios = data;
        console.log(usuarios);
        listadousuarios(users.data);

        return getnombre2();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarnombre2(user.data);

    });

function getusuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');

}
function getnombre2(){
    return fetch('https://jsonplaceholder.typicode.com/users/2');
}

function listadousuarios(usuarios){
    usuarios.map((data, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i +". " + data.name + " ";
            div_usuarios.appendChild(nombre);
    });      
}
function mostrarnombre2(user){
    let nombre = document.createElement('h4');
    nombre.innerHTML = i +". " + user.name + " ";
    div_nombre2.appendChild(nombre);
         
}