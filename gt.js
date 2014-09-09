// Google Search the Current Domain

/*
This bookmarklet will conduct a Google search for your query, but limit the results to documents at your current location's domain.

usage: j gthis dog
*/

parts = [
    "http://www.google.com/search?num=100&q=site:", 
    escape(location.hostname), 
    " ", 
    args.join(' ')
];
location = parts.join("");