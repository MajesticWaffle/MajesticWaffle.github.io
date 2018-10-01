var width = screen.width;
var height = screen.height;
var S = window.location.href;
document.getElementById('items').style.width = '800px';
document.getElementById('items').style.height = '600px';
document.getElementById('yeets').style.top = '7.5px';
if (width >= 1280 && height >= 1024){
document.getElementById('items').style.width = '960px';
document.getElementById('items').style.height = '720px';
document.getElementById('yeets').style.top = '15px';
}
if (width >= 1920 && height >= 1080){
document.getElementById('items').style.width = '1024px';
document.getElementById('items').style.height = '768px';
document.getElementById('yeets').style.top = '20px';
}
if (width >= 2560 && height >= 1440){
document.getElementById('items').style.width = '1024px';
document.getElementById('items').style.height = '768px';
document.getElementById('yeets').style.top = '20px';
}
//manual mode
if (S.includes("?=force86")){
document.getElementById('items').style.width = '800px';
document.getElementById('items').style.height = '600px';
document.getElementById('yeets').style.top = '7.5px';
}	
if (S.includes("?=force97")){
document.getElementById('items').style.width = '960px';
document.getElementById('items').style.height = '720px';
document.getElementById('yeets').style.top = '15px';
}
if (S.includes("?=force17")){
document.getElementById('items').style.width = '1024px';
document.getElementById('items').style.height = '768px';
document.getElementById('yeets').style.top = '20px';
}
if (S.includes("?=force19")){
document.getElementById('items').style.width = '1024px';
document.getElementById('items').style.height = '768px';
document.getElementById('yeets').style.top = '20px';
}	
if(S.includes("?=forcec64"))
	document.getElementById("itemsheader").innerHTML = "**** COMMADORE 64 BASIC V2 ****"// JavaScript Document