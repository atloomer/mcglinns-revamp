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
