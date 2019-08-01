var themeIndex = 1;
var themeMax = 2;
var themeArray = [
'<link rel="stylesheet" type="text/css" href="/css/win98.css">',
'<link rel="stylesheet" type="text/css" href="/css/winxp.css">',
'<link rel="stylesheet" type="text/css" href="/css/macos.css">'
]
function test(){
	$('head').append(themeArray[themeIndex]);
	themeIndex++;
	if(themeIndex > themeMax)
		themeIndex = 0;
}