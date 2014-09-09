// Inject jQuery into the current page

(function(){
  var s=document.createElement('script');
  s.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
  document.getElementsByTagName('head')[0].appendChild(s);
})();