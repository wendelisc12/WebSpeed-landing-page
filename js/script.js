$(document).ready(function(){
    $('#slide-planos').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]
      });

      $("#telefone").mask("(00)00000-0000")

      $("#form-contato").validate({
        rules:{
            nome: {required: true},
            email: {required: true},
            telefone: {required: true}
        },
        messages:{
            nome: "Por favor insira seu nome",
            email: "Por favor insira seu email",
            telefone: "Por favor insira seu telefone"
        }
      })
})