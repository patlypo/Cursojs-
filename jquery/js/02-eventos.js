$(document).ready(function(){
    //MouseOver y MoseUout
    var caja = $('#caja');

  /*  caja.mouseover(function(){
        $(this).css('background', 'red');
    });

    caja.mouseout(function(){
        $(this).css('background','green');
    });
*/

    function cambiarojo(){
        $(this).css('background', 'red');
   
    }
    function cambiaverde(){
        $(this).css('background','green');
    }
    //HOVER
    caja.hover(cambiarojo, cambiaverde);

    //click, doble click
    caja.click(function(){
        $(this).css('background', 'blue')
                .css('color', 'white');
        
    });

    caja.dblclick(function(){
        $(this).css('background', 'pink')
                .css('color', 'black');
        
    });

    //focus y bur
    var nombre = $('#nombre');
    nombre.focus(function(){
        $(this).css('border','6px solid #17f573');
    });
    nombre.blur(function(){
        $(this).css('border','3px solid transparent ');
    });

});