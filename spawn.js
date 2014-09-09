// Create a Queriac command based on Current Page

/*
When run, this bookmarklet will redirect you to Queriac's 'New Command' page, with some fields prepopulated for you.

'Name' field: previous page's title
'Keyword' field: if you specify an argument when calling the command, the argument will become the keyword.
'URL' field: previous page's URL
'Description' field: whatever block of text you had selected on the previous page
*/

location = 'http://queriac.herokuapp.com/users/zeke/commands/new?script='+encodeURIComponent(location.href)+'&name='+encodeURIComponent(document.title)+'&description='+window.getSelection()+'&keyword='+args[0];