$(document).ready(function(){
    //Load
   // $('#datos').load("https://reqres.in/");

    //Get y Post
    $.get("https://reqres.in/api//app-users", {page:3}, function(response){
        response.data.forEach((element, index)=>{
            $("#datos").append("<p>" + element.first_name + " "+element.last_name + "</p>");
        });
    });
    var usuario={
        name: "Victor robles",
        web: "victorrobles.es"
    }

    $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response);
    });

});