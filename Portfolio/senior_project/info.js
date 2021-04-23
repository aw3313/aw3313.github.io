var $sun = $('.sun');
var $win = $(window);





$win.on('scroll',function () {
  console.log($win.scrollTop());
  var top = $win.scrollTop();
  $sun.css('transform','rotate(' + top + 'deg)');

});


$('.btn-area').click(function(){
  $('.wrapper').toggleClass('animate');
});


$( "#target" ).scroll(function() {
  $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );


 });
