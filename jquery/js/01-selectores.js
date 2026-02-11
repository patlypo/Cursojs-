$(document).ready(function(){
    //Selector de id
    var rojo = $("#rojo").css("background", "red")
                            .css("color", "white");
    $("#amarillo").css("background", "yellow")
                    .css("color","green");
    $("#verde").css("background", "green")
                .css("color","white");
    console.log(rojo);

    //selectores de clases
    var miclase = $(".zebra").css("padding", "3px");
    $(".sin_borde").click(function(){
        console.log("clivk");
        miclase.addClass("zebra");
    });

    //Selectores de etiqueta 
    var parrafos =$("p").css("cursor", "pointer");

    parrafos.click(function(){
        if ($(this).hasClass("zebra")) {
            $(this).removeClass("zebra");    
        }else{
             $(this).addClass("zebra");
        }       
    });

    //Selectores de atributos
    $('[title= "google"]').css("background", "#ccc");
    $('[title="linkeind"]').css("background", "blue");

    //otros
    $('p, a').addClass('margen-superior');

    var busqueda = $('#caja').find('.resultado');
    console.log(busqueda);
});