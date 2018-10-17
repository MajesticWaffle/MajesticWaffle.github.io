function cacheWallpaper(id){
	document.body.style.backgroundImage = "url('../newbg/  (" + id +").jpg')";
}
function loadCached(){
	var cookie = document.cookie;
	document.body.style.backgroundImage = "url('../newbg/  (1).jpg')";
	//document.body.style.background = "#f3f3f3 url('../newbg/  (" + cookie + ").jpg') no-repeat right top";
	if(cookie){
		
	}else{
		
	}
	
}