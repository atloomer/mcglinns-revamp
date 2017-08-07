// Mobile Menu
$('.menu-btn').on('click', function() {
  $('.navigation-sidebar').addClass('open-sidebar');
});

$('.close-btn').on('click', function() {
  $('.navigation-sidebar').removeClass('open-sidebar');
  $(this).removeClass('open-sidebar');
});

// Chocolat image gallery
$('.chocolat-parent').Chocolat();

///////////////////////
// SMOOTH SCROLLING //
/////////////////////
$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});
