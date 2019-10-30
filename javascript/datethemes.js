//test x-mas
var xmasAppend = '<link rel="stylesheet" type="text/css" href="/css/xmas.css">'
var bsodAppend = '<link rel="stylesheet" type="text/css" href="/css/bsod.css">'
var d = new Date();
if(d.getMonth() == 11){
$('head').append(xmasAppend);
$('head').append(bsodAppend);
}else{
snowStorm.stop();
}