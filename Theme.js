var file = location.pathname.split( "/" ).pop();

var link = document.createElement( "link" );
var date = new Date();
var curtime = new Date(),
    curday = curtime.getDate(),
    curmonth = curtime.getMonth()+1;
link.href = "win98.css";
if(curmonth == 8 && curday == 24) //windows xp theme
	link.href = "winxp.css";
if(curmonth == 6 && curday == 25) //windows 98 release
	link.href = "win98.css";
if(curmonth == 10 && curday == 9) //windows 98 release
	link.href = "com64.css";
var S = window.location.href;
if(curmonth == 4 && curday == 3 && !(S.includes("?=ps2done"))) //ps2 release
	 window.location.replace("test1.html");

if(S.includes("?=forcexp"))
	link.href = "winxp.css";
if(S.includes("?=force98"))
	link.href = "winxp.css";
if(S.includes("?=ps2done"))
	link.href = "ps2.css";
if(S.includes("?=forceps2"))
	link.href = "ps2.css";
if(S.includes("?=forcec64"))
	link.href = "com64.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );
var cssLink = document.createElement("link");
cssLink.href = "style.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 
frames['iframe1'].document.head.appendChild(cssLink);