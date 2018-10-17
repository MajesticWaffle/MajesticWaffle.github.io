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

document.getElementsByTagName( "head" )[0].appendChild( link );
var cssLink = document.createElement("link");
cssLink.href = "style.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 