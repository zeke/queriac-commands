// Github Commits (Heroku)

/*
Usage:
c addons               # github.com/heroku/addons/commits/master
c zeke/queriac2        # github.com/zeke/queriac2/commits/master
*/

// Assume github user is 'heroku' if no slash is present in first arg
if (args[0].indexOf("/") == -1) {
 args[0] = "heroku/"+args[0]; 
}

location = "https://github.com/" + args[0] + "/commits/master";