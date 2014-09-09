// Heroku Sigma Search

/*
Sigma collects all of heroku's platform technical documentation from individual code repositories and wikis on Github into a single Git repository that is searchable via the built-in Github web interface.
*/

location = "https://github.com/heroku/sigma/search?q="+args.join(" ");