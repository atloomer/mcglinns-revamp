// TABSLET
$('.tabs').tabslet({
  animation: true
});

// COPYRIGHT AUTO UPDATE
var today = new Date();
var year = today.getFullYear();
console.log(year);
$('.year').text(year);
