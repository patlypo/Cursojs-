$(document).ready(function(){
    console.log($('a').length);

    reloadlinks();
    $('#add_button').click(function(){
        $('#menu').html('<a href="' + $("#add_link").val() + '"></a>');
        reloadlinks();
    });
    //.prepend lo añade al inicio de la lista

});

function  reloadlinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");
        that.text(enlace);
    });
}
