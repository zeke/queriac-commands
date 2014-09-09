// Get the 'Follow Cost' for a Twitter User

/*
follow cost measures how much people tweet. We use an absolute scale (average number of tweets per day) but also measure tweets in milliscobles, or 1/1000th of Robert Scoble's Twitter output.

Usage
cost zeke
cost MCHammer
*/

if (args.length > 0) {
	location="http://followcost.com/"+args[0];  
} else if (location.host === "twitter.com") {
  var user = location.pathname.split("/")[1];
  if (user && user.length > 0) {
	location="http://followcost.com/"+args[0];  
  }
}