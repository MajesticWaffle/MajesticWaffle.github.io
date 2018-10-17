var file = location.pathname.split( "/" ).pop();

var link = document.createElement( "link" );
var date = new Date();
var curtime = new Date(),
    curday = curtime.getDate(),
    curmonth = curtime.getMonth()+1;
link.href = "css/win98.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
var totalCount = 44;
function ChangeIt()
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'newbg/'+num+'.jpg';
document.body.style.background = "URL('newbg/ ("+ num +").jpg')";
console.log("doing bg: " + num);
//document.body.style.backgroundSize = "auto";// Background repeat
}
document.getElementsByTagName( "head" )[0].appendChild( link );
var cssLink = document.createElement("link");
cssLink.href = "style.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 