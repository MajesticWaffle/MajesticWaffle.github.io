var startMenuActive = false;
toggleStartMenu();

function toggleStartMenu(){
	startMenuActive = !startMenuActive;
	
	document.getElementById("folder").style.visibility = startMenuActive ? "visible" : "hidden";
	
	
	document.getElementById("taskbarButton_inactive").style.visibility  = !startMenuActive ? "visible" : "hidden";
	document.getElementById("taskbarButton_active").style.visibility 	= startMenuActive ? "visible" : "hidden";
}

function toggleStartMenu_win(){
	//Play click sound
	document.getElementById('click').play();
	toggleStartMenu();
}
function toggleStartMenu_mac(){
	if(startMenuActive)
		document.getElementById('close').play();
	else
		document.getElementById('open').play();
	toggleStartMenu();
}



	