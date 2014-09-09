// Find RetailMeNot Codes for Current Domain

/*
RetailMeNot.com is an easy way to find online coupon codes. Enter these codes at the checkout page of participating merchants for instant discounts.

current-window version: javascript:location.href='http://retailmenot.com/view/'+encodeURIComponent(document.domain)
*/

void(open('http://retailmenot.com/view/'+encodeURIComponent(document.domain)));