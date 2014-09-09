// Translate Current Page with Babelfish

/*
Open the current page in a new window, translated with Babelfish. Takes standard two-character options for 'from' and 'to' languages.

Example (Converts current page from Russian to English)
j babel -f ru -t en
*/

open('http://babelfish.yahoo.com/translate_url?doit=done&tt=url&intl=1&fr=bf-home&trurl='+encodeURIComponent(location.href)+'&lp=[:from]_[:to]&btnTrUrl=Translate')
