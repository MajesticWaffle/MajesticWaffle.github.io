document.getElementById("errorHolder").style.pointerEvents = "none";
document.getElementById("errorHolder").style.opacity = "0.0";

window.onerror = function(msg, url, line, col, error) {
	document.getElementById("errorHolder").style.pointerEvents = "auto";
	document.getElementById("errorHolder").style.opacity = "1.0";
    //alert(msg + " , " + url + " , " + line + " , " + col + " , " + error);
	var bsodText = document.getElementById('bsodText').innerHTML;
	bsodText = bsodText.replace("[error]" , error);
	bsodText = bsodText.replace("[url]" , url);
	bsodText = bsodText.replace("[line]" , line);
	bsodText = bsodText.replace("[column]" , col);
	document.getElementById('bsodText').innerHTML = bsodText;
};

function clearError(){
document.getElementById("errorHolder").style.pointerEvents = "none";
document.getElementById("errorHolder").style.opacity = "0.0";
}