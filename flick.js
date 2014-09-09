// Send to Flickr

/*
From the page containing the image you want to upload to flickr, run the command and it will list all images on that page. Click the image you want to upload. Login to Flickr if it asks you to. Choose "Upload To Flickr" button. Voila! Your file should be uploaded into your account on Flickr.

Nabbed from http://www.transmit.net/vh/archives/2005/08/send_to_flickr_1.html
*/

t = '';
for (var n = 0; n < document.images.length; n++) {
    t += '<a href=/ onclick=\'document.f.url.value=document.images[' + n + '].src;document.f.submit();return false;\'><img border=0 src=' + document.images[n].src + '></a><br>';
};
if (t != '') {
  document.write('\<p\>Click an image to add it to your photostream\</p\>\<form name=f action=http://www.flickr.com/tools/sendto.gne method=get\>\<input type=hidden name=url\>\</form\>' + t + '');
  void(document.close())
} else {
  alert('No images!');
}