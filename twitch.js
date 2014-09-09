// Twitchy Page

i=10;
setInterval(function() {
  $('body').css("-webkit-transform","rotate("+ (i=i*-1) +"deg)")
},500)