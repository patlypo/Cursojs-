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
        $(this).addClass("zebra");
    });
});