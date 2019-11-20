var easterAppend = '<link rel="stylesheet" type="text/css" href="/css/easteregg.css">'
var bsodAppend = '<link rel="stylesheet" type="text/css" href="/css/bsod.css">'
var thing = 1;
function requestError(){
	if(thing >= 10){
	$('head').append(easterAppend);
	$('head').append(bsodAppend);
	}
	thing++;
}
	