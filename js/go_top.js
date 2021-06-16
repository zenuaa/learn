$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "450") $(this).fadeIn("slow");
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "450") $(scrollDiv).fadeOut("slow");
   else $(scrollDiv).fadeIn("slow");
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow");
  });
 };
});

$(function() {
 $("#go-top").scrollToTop();
});