	function randomSplash(){

		var textArray = [
    	'IE Users are banned.',
    	'Abort, Retry, Fail?',
		'No websites were harmed in the making of this website.',
		'Fun Fact: There was only a 1/10 chance of seeing this.',
		'Designed for 4:3 Monitors.',
		'Kernel Panic!',
		'404: Subtitle not found.',
		'Dres does not exist.',
		'We do not acknowledge Fortnite\'s existence.',
		'Now on github.',
		'Half-life > Half-life 2',
		'it would apear that you exist, congrats',
		'Version 6',
		'Mac OS > Windows 9x',
		'PowerPC > Wintel',
		'1280x1024 is god''s resoltion'
		];
		var randomNumber = Math.floor(Math.random()*textArray.length);
		document.getElementById("splash").textContent = textArray[randomNumber];
	}
	setInterval(randomSplash, 6000);// JavaScript Document