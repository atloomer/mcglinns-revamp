// Mobile Menu
$('.menu-btn').on('click', function() {
  $('.navigation-sidebar').addClass('open-sidebar');
});

$('.close-btn').on('click', function() {
  $('.navigation-sidebar').removeClass('open-sidebar');
  $(this).removeClass('open-sidebar');
});

$('.mobile-links').on('click', function(){
  $('.navigation-sidebar').removeClass('open-sidebar');
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

// SLIDER
$('.event-slider').slick({
  arrows: true,
  draggable: false,
  infinite: false,
  adaptiveHeight: true
});

// COPYRIGHT AUTO UPDATE
var today = new Date();
var year = today.getFullYear();
console.log(year);
$('.year').text(year);

// GIFT CARD CHECK
function popBalance() {

	var width      = 500;
	var height     = 500;
	var merchantID = '6524_en';

	window.open('https://wwws.givex.com/Merchant_pages/'+merchantID,
		'balanceWindow', 'width='+width+', height='+height,
		'left=0, top=0, menubar=0, toolbar=0, status=0, resizable=0');
}
