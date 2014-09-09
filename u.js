// Cornify

/*
Add some unicorns.
*/

(function(){
  var d=document,j=d.getElementById('__cornify_nodes'),k=null;
  var files=['http://cornify.com/js/cornify.js','http://cornify.com/js/cornify_run.js'];
  if(j){
    cornify_add();
  } else {
    k=d.createElement('div');
    k.id='__cornify_nodes';
    d.getElementsByTagName('body')[0].appendChild(k);
    for(var l=0; l<files.length; l++) {
      j=d.createElement('script');
      j.src=files[l];
      k.appendChild(j);
    }
  }
})();