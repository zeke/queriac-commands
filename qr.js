// Generate QR code for Current URL

var base_url = 'http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=';
var this_url = encodeURIComponent(location.href);
var title = "QR%20Code"
var options = 'top=100,left=200,width=350,height=350,status=yes';
window.open(base_url+this_url, title, options);