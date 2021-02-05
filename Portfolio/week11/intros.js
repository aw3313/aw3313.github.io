
//wait for my javascript to run, wait for document to load then do stuff
$(document).ready(function() {

//  $('#word').hide(200).show(1000).slideUp(500).slideDown(500);

  var i;

//animation located here !!!

  for(i = 0; i < 100; i++) {

   $('#word').slideUp(500).slideDown(500);
   $('#word2').hide(300).show(500);
   $('#word3').animate({width: 'toggle'});


  }


}

);
