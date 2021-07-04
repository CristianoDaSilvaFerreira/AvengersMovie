// Função de habilita o clique no icone de menu
$(document).ready(function(){

  // Trocando o item do icone do menu
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    // Exibindo o menu do navbar que estava oculto
    $('.navbar').toggleClass('nav-toggle');
  });

  // Função para criar e remover o scroll do menu
  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    // Exibindo o icone da nave no Scroll
    if($(window).scrollTop() > 0){
      $('.scroll-top').show();
    }else{
      $('.scroll-top').hide();
    }

    // scroll espinhão 

    $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      // Verificando qual item do menu estar na posição
      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    )


  });

});