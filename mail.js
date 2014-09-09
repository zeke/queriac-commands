// Gmail Inbox/Search

/*
Usage:
mail            # https://mail.google.com/mail/u/0/#inbox
mail foo 		# https://mail.google.com/mail/u/0/#search/foo
mail h			# https://mail.google.com/mail/u/1/#inbox
mail h bar		# https://mail.google.com/mail/u/1/#search/bar
*/

// Deafult to personal inbox
var account = "0";

// Go to Heroku inbox if first arg is "h"
if (args && args[0] == "h") {
	args.shift();
	account = "1";
}

// Search or Inbox?
var destination;
if (args && args.length > 0) {
	destination = "#search/" + args.join(" ");
} else {
 destination = "#inbox";
}

location="https://mail.google.com/mail/u/" + account + "/" + destination;