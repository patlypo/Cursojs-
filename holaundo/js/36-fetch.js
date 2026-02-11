'use strict'
//Fetch (ajax) y peticiones a servicios/apis rest
var div_usuarios = document.querySelector('#usuarios');
var div_nombre2 = document.querySelector('#nombre2');
//var usuarios = [];

    getusuarios()
    .then(data => data.json())//capturar los datos y se convierte a json
    .then(users => {
        //usuarios = data;
        console.log(users);
        listadousuarios(users);

        return getnombre2();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarnombre2(user);

        return getFotoUser2();

    })
    .then(data => data.json())
    .then(foto => {
        mostrarFoto(foto);

        return getinfo();
        
    })
    .then(data => {
        console.log(data);
    });

function getusuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');

}
function getnombre2(){
    return fetch('https://jsonplaceholder.typicode.com/users/2');
}
function getFotoUser2() {
    return fetch('https://jsonplaceholder.typicode.com/photos/2');
}

function getinfo(){
     var profesor = {
        nombre: 'victor',
        apellido: 'robles',
        url: 'victorroblesweb.es'
    };
    return new Promise((resolve, reject)=>{
        var profesor_string = JSON.stringify(profesor);//convierte el objeto a un string para poder enviarlo a un servidor

        if(typeof profesor_string !='string') return reject('error');

        return resolve(profesor_string);

    });
    }
function listadousuarios(usuarios){
    usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i +". " + user.name + " ";
            div_usuarios.appendChild(nombre);
    });      
}
function mostrarnombre2(user){
    let nombre = document.createElement('h4');
    nombre.innerHTML = user.name + " Correo: " + user.email;

    div_nombre2.appendChild(nombre);
         
}
function mostrarFoto(foto) {
    console.log("Recibiendo foto:", foto);
    let img = document.createElement('img');
    img.src = foto.thumbnailUrl; 
    img.alt = foto.title;
    img.style.width = "300px"; 
    
    div_nombre2.appendChild(img);
}