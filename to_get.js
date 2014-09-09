// Change method of all forms on current page to GET

/*
Want to convert a form on the web to a Queriac command? Rather than picking apart the HTML source of the form to construct a URL string, use this form to convert the form to GET. That way when you submit the form, you'll get the full URL string with all of the forms attributes right in your address bar, ready for for copying and pasting as the URL of your new Queriac command.
*/

javascript:(function(){var x,i; x = document.forms; for (i = 0; i < x.length; ++i) x[i].method="get"; alert("Changed " + x.length + " forms to use the GET method.  After submitting a form from this page, you should be able to copy the resulting URL string and use it to make a new Queriac command."); })();