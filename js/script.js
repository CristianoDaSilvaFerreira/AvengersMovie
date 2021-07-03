// Função de habilita o clique no icone de menu
$(document).ready(function (){

  // Trocando o item do icone do menu
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    // Exibindo o menu do navbar que estava oculto
    $('.navbar').toggleClass('nav-toggle');
  });

  // Função para criar e remover o scroll do menu
  $(window).on('scroll load', function(){

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

});