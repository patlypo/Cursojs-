'use strict'
window.addEventListener('load', function(){

    var formulario = document.querySelector("#formulario");
    var boxdashed = document.querySelector(".dashed");
    boxdashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;//poner el id del campo
        var apellidop = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edadd").value;
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("El nombre no es valido");
            return false;
            
        }
        if (apellidop.trim() == null || apellidop.trim().length == 0) {
            alert("El apellido no es valido");
            return false;
            
        }
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("La edad no es valida");
            return false;
            
        }

        boxdashed.style.display = "block";

        console.log(nombre, apellidop, edad);
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellidop;
        p_edad.innerHTML = edad;
        /** 
        var datosuser = [nombre,apellido,edad];
        var indice;
        for(indice in datosuser){
             var parrafo = document.createElement("p");
             parrafo.append(datosuser[indice]);
             boxdashed.append(parrafo);
        }*/
       
    });

});