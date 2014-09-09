// Highlight a Search String on the Current Page

/*
When run, this bookmarklet will highlight all instances of your query on the current page with a yellow background. At the moment, there's a not way to clear the highlighting.

Usage: j hl dog
*/

javascript:(function(){var count=0, text, dv;text="(q)";if(text==null || text.length==0)return;dv=document.defaultView;function searchWithinNode(node, te, len){var pos, skip, spannode, middlebit, endbit, middleclone;skip=0;if( node.nodeType==3 ){pos=node.data.toUpperCase().indexOf(te);if(pos>=0){spannode=document.createElement("SPAN");spannode.style.backgroundColor="yellow";middlebit=node.splitText(pos);endbit=middlebit.splitText(len);middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);++count;skip=1;}}else if( node.nodeType==1&& node.childNodes && node.tagName.toUpperCase()!="SCRIPT" && node.tagName.toUpperCase!="STYLE"){for (var child=0; child < node.childNodes.length; ++child){child=child+searchWithinNode(node.childNodes[child], te, len);}}return skip;}window.status="Searching for '"+text+"'...";searchWithinNode(document.body, text.toUpperCase(), text.length);window.status="Found "+count+" occurrence"+(count==1?"":"s")+" of '"+text+"'.";})();