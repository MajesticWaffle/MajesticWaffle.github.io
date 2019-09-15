var clickCount = 0;
function requestError(){
	clickCount++;
	if(clickCount == 10){
		//throw "User Requested Crash";
		test();
	}
	else{
	document.getElementById("splash").textContent = "Click " + (10-clickCount) + " more times to force a BSOD";
	}
}
	