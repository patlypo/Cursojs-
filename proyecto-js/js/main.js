$(document).ready(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 1200,
      responsive:true,
      pager:false
    });

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
});
