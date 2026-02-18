$(document).ready(function(){
  //Slider 
  if (window.location.href.indexOf('index') > -1) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 1200,
      responsive:true,
      pager:false
    });
  }
  

    //posts
    var posts = [
      {
        title:'Prueba de titulo 1',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam, est sunt sint ipsum assumenda atque fuga at dolore? Aut iure blanditiis ipsam eveniet voluptatum dolorem?'
      },
      {
        title:'Prueba de titulo 2',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam, est sunt sint ipsum assumenda atque fuga at dolore? Aut iure blanditiis ipsam eveniet voluptatum dolorem?'
      
      },
      {
        title:'Prueba de titulo 3',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam, est sunt sint ipsum assumenda atque fuga at dolore? Aut iure blanditiis ipsam eveniet voluptatum dolorem?'
      
      },
      {
        title:'Prueba de titulo 4',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam, est sunt sint ipsum assumenda atque fuga at dolore? Aut iure blanditiis ipsam eveniet voluptatum dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam, est sunt sint ipsum assumenda atque fuga at dolore? Aut iure blanditiis ipsaLorem ipsum dolor sit amet consectetur adipisicing elit.Ullam, est sunt sint ipsum assumenda atque fuga at dolore? Aut iure blanditiis ipsaLorem ipsum dolor sit amet consectetur adipisicing elit.Ullam, est sunt sint ipsum assumenda atque fuga at dolore? Aut iure blanditiis ipsa'
      }
    ];

    if (window.location.href.indexOf('index') > -1) {
    posts.forEach((item, index)=>{
      var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}
                      </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
      `;
      $("#posts").append(post);
    });
  }

    //Selector de estilos
    var theme = $("#theme");
    $("#to-green").click(function(){
      theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function(){
      theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
    });

    //Scroll arriba de la web
    $('.subir').click(function(){
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 500);

      return false;
    });

    //login falso
    $('#login').submit(function(){
      var form_name = $("#form_name").val();
      localStorage.setItem("form_name", form_name);
    });
    
    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined" ) {
      var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong> Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login").hide();

        $("#logout").click(function(){
          localStorage.clear();
          location.reload();
        })
      
    }

    if(window.location.href.indexOf('about') > -1){
      $("#acordeon").accordion();
    }
    
});
