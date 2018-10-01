	function randomSplash(){

		var textArray = [
    	'IE Users are banned.',
    	'Abort, Retry, Fail?',
		'No websites were harmed in the making of this website.',
		'Fun Fact: There was only a 1/10 chance of seeing this.',
		'Designed for 4:3 Monitors.',
		'Please insert the Windows 98 SE Setup Disk',
		'404: Subtitle not found.',
		'Dres does not exist.',
		'We do not acknowledge Fortnite\'s existence.',
		'Now on github.',
		'Half-life > Half-life 2',
		'it would apear that you exist, congrats',
		'Version 5.1',
		'Come back on Windows XP Release Date',
		'Come back on PS2 Release Date'	
		];
		var randomNumber = Math.floor(Math.random()*textArray.length);
		document.getElementById("splash").textContent = textArray[randomNumber];
		if(curmonth == 8 && curday == 24) //windows xp theme
			document.getElementById("splash").textContent = "Windows XP Released Today!";
		if(curmonth == 6 && curday == 25) //windows 98 release
			document.getElementById("splash").textContent = "Windows 98 Released Today!";
		if(curmonth == 7 && curday == 22) //windows 7 release
			document.getElementById("splash").textContent = "Windows 7 Released Today!";
	}
	setInterval(randomSplash, 6000);// JavaScript Document