// Ord

if (args.length > 1 && args[args.length-1].match(/^-/)) {
	var lang = args.pop().replace(/^-/, '')
	location="http://ord.zeke.xxx/?lang=" + lang + "&query="+args.join(" ");
} else {
	location="http://ord.zeke.xxx/?query="+args.join(" ");
}