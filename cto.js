// Gmail - Compose Message to Recipient

/*
Open a Gmail compose window to specified recipient(s). The page loads a little faster than it does for the non-parametric 'c' command, because it doesn't load up the full Gmail interface, but rather a simple compose window.
*/

location="https://mail.google.com/mail/?view=cm&ui=2&tf=0&fs=1&to="+args.join(" ")
