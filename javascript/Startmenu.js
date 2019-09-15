var themeIndex = 0;
var themeMax = 2;
var themeArray = [
'<link rel="stylesheet" type="text/css" href="/css/win98.css">',
'<link rel="stylesheet" type="text/css" href="/css/winxp.css">',
'<link rel="stylesheet" type="text/css" href="/css/macos.css">'
]
var bsodAppend = '<link rel="stylesheet" type="text/css" href="/css/bsod.css">'
function changeTheme(){
	console.log("setting theme: " + themeIndex);
	$('head').append(themeArray[themeIndex]);
	$('head').append(bsodAppend);
	themeIndex++;
	if(themeIndex > themeMax)
		themeIndex = 0;
}