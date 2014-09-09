// Heroku Github Issues

/*
Jump to the issues page for the specified repo, and optionally search it
*/

/*
Usage:
ish devcenter               # github.com/heroku/devcenter/issues
ish addons flash messages   # github.com/heroku/addons/issues/search?q=flash%20messages
ish zeke/queriac2           # github.com/zeke/queriac2/issues
ish defunkt/dotjs crx       # github.com/defunkt/dotjs/issues/search?q=crx
*/

// Assume github user is 'heroku' if no slash is present in first arg
if (args[0].indexOf("/") == -1) {
 args[0] = "heroku/"+args[0]; 
}

// Anything after the repo name becomes a search query...
q = (args.length > 1) ? "/search?q="+args.slice(1, args.length).join(" ") : "";

location = "https://github.com/" + args[0] + "/issues" + q;