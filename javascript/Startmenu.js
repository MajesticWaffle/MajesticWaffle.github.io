var startMenuActive = false;

toggleStartMenu();

function toggleStartMenu(){
	//Play click sound
	document.getElementById('click').play();
	
	startMenuActive = !startMenuActive;
	
	document.getElementById("folder").style.visibility = startMenuActive ? "visible" : "hidden";
	
	
	document.getElementById("taskbarButton_inactive").style.visibility  = !startMenuActive ? "visible" : "hidden";
	document.getElementById("taskbarButton_active").style.visibility 	= startMenuActive ? "visible" : "hidden";
}



	