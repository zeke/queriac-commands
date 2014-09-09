// Github Pull Requests

/*
Usage:
pulls devcenter             # github.com/heroku/devcenter/pulls
pulls zeke/queriac          # github.com/zeke/queriac/pulls
*/

// Assume github user is 'heroku' if no slash is present in first arg
if (args[0].indexOf("/") == -1) {
 args[0] = "heroku/"+args[0]; 
}

location="https://github.com/" + args[0] + "/pulls"