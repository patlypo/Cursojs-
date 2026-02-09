'use strict'
//Eventos del boton

function cambiarcolor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
    return true;
}
var boton = document.querySelector("#boton");
//CLICK 
boton.addEventListener('click', function(){
    cambiarcolor();
});
//MOuSE OVER
boton.addEventListener('mouseover', function(){
    boton.style.background ="rgba(31, 50, 216, 0.27)";
});
//Mouseout
boton.addEventListener('mouseout',function(){
    boton.style.background = "#e7257f";
});
//FOCUS
var input= document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("Estas dentro del input");
});
//BLUR
input.addEventListener('blur',function(){
    console.log("Estas afuera del input");
});

//keydown
input.addEventListener('keydown',function(){
    console.log("Estas pulsando la tecla", String.fromCharCode(event.keyCode));
});
//keypress
input.addEventListener('keypress',function(){
    console.log("Estas presionando la tecla", String.fromCharCode(event.keyCode));
});
//keyup
input.addEventListener('keyup',function(){
    console.log("Estas soltando la tecla", String.fromCharCode(event.keyCode));
});