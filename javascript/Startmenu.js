var themetoggle = false;
function test(){
	if(themetoggle)
		$('head').append('<link rel="stylesheet" type="text/css" href="/css/win98.css">');
	else
		$('head').append('<link rel="stylesheet" type="text/css" href="/css/winxp.css">');
	themetoggle = !themetoggle;
}