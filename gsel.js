// Google Search the Current Selection

/*
Perform a Google search on the selected text on the current page.

Remember: This is a bookmarklet, so calls to it must be run from your javascript bookmarklet.
*/

location = 'http://www.google.com/search?q='+window.getSelection();