var themeIndex = 1;
var themeMax = 2;
var themeArray = [
'<link rel="stylesheet" type="text/css" href="/css/win98.css">',
'<link rel="stylesheet" type="text/css" href="/css/winxp.css">',
'<link rel="stylesheet" type="text/css" href="/css/macos.css">'
]
function loadCookieTheme(){
	themeIndex = parseInt(document.cookie);
	$('head').append(themeArray[themeIndex]);
}
function changeTheme(){
	console.log("setting theme: " + themeIndex);
	$('head').append(themeArray[themeIndex]);
	themeIndex++;
	if(themeIndex > themeMax)
		themeIndex = 0;
	document.cookie = themeIndex.toString();
}