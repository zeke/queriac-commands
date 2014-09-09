// dict.org Quicksearch

/*
DICT is a dictionary network protocol created by the DICT Development Group. It is described by RFC 2229. Its goal is to surpass the Webster protocol and to allow clients to access more dictionaries during use.

More info at http://en.wikipedia.org/wiki/DICT
*/

location = 'http://www.dict.org/bin/Dict?Form=Dict2&Database=*&Query='+args.join(" ");