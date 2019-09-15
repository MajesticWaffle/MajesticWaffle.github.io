var clickCount = 0;
function requestError(){
	clickCount++;
	if(clickCount == 10){
		clickCount = 0;
		throw "User Requested Crash";
	}
	else{
	document.getElementById("splash").textContent = "Click " + (10-clickCount) + " more times to force a BSOD";
	}
}
	