// Post Current Page to Delicious.com

/*
This bookmarklet will redirect you to delicious.com's post page, prefilling the form as follows:

'Title' field: the page's title
'URL' field: the page's URL
'Notes' field: whatever block of text you had selected on the page
'Tags' field: if you specify space-delimited words as an argument when calling the command, they will become the tags.

Note: The overhaul of delicious.com in July 2008 required a change in this bookmarklet. It seems prepopulation of tags is no longer supported. However, this can be overcome with a little help form a Greasemonkey script..

See also: ppost command (same as this command but defaults bookmark to private status)
*/

location = 'http://delicious.com/save?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title)+'&tags=(q)&notes='+window.getSelection()+'&v=5';