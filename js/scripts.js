$('.hamburger__button').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('hamburger__button-active');
  $('.hamburger__menu').toggleClass('hamburger__menu-active');
  $("body").toggleClass("disable-scroll");
  $(".nav__bar-item").toggleClass("hide");

});

