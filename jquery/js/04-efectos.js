$(document).ready(function(){
     $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        //$("#caja").show('medium');
        $('#caja').fadeTo('slow',1);
    });
    $("#ocultar").click(function(){
        $(this).hide();
         $("#mostrar").show();
        //$("#caja").hide('medium');
        $("#caja").fadeTo('slow',0);
    });
});