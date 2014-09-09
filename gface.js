// Google Images Face Search

/*
When you add &imgtype=face to the picture search string, only photos with faces are showing up. This feature has not been officially announced yet and I have no idea how reliable it works.

See http://lifehacker.com/software/url-hacking/google-enables-face-recognition-in-image-search-264331.php
*/

location = "http://images.google.com/images?imgtype=face&q="+args.join(" ");