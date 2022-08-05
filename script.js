jQuery(function($){
    $(window).on('scroll', function(){
      if ($(window).scrollTop() > 300) {
        $('.totop').fadeIn(400);
      } else {
        $('.totop').fadeOut(400);
      }
    });
  });