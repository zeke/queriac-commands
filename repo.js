// GitHub Project Quickjump

/*
Jump to a Github project.

    gp foo
    gp foo u:bob
    gp u:bob p:jquery
*/

/*
Usage:
repo addons
repo defunkt/dotjs
*/

// Assume user is 'heroku' if no slash is present in first arg
if (args[0].indexOf("/") == -1) {
 args[0] = "heroku/"+args[0]; 
}

location = "https://github.com/"+args[0];