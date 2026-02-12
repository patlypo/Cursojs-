$(document).ready(function(){
    //mover un elemento de la pagina
    $('.elemento').draggable();

    //Redimensionar
    $('.elemento').resizable();

    //seleccionar elemntos
    //$('.lista-selecionable').selectable();

    //Cambiar el orden de la lista
    $('.lista-selecionable').sortable({
        update: function(event,ui){
            console.log("ha cambiado la lista");
        }

    });

    //Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop:function(){
            console.log("Has soltado algo dentro de el area");
        }
    });


});