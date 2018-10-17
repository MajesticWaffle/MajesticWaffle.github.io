function changeHTMLCache(id){
	
}
function loadCached(){
	var cookie = document.cookie;
	if(cookie){
		document.body.style.background = "#f3f3f3 url('../newbg/  (" + cookie + ").png') no-repeat right top";
	}else{
		document.body.style.background = "#f3f3f3 url('../newbg/  (40).png') no-repeat right top";
	}
	
}