	function randomSplash(){

		var textArray = [
    		'Internet Explorer users are banned.',
    		'Abort, Retry, Fail?',
			'No websites were harmed in the making of this website.',
			'Fun Fact: There was only a 1/30 chance of seeing this.',
			'Designed for 4:3 Monitors.',
			'Now with functional BSOD.',
			'404: Subtitle not found.',
			'Dres does not exist.',
			'We do not acknowledge China\'s existence.',
			'Now on github.',
			'Half-life > Half-life 2.',
			'it would appear that you exist, congrats.',
			'Version 7.4',
			'Windows 98.',
			'CTRL-ALT-DELETE.',
			'800x600 is god\'s resolution.',
			'System32 is optional.',
			'DOS based kernel.',
			'Epic Game Store Exclusive.',
			'Press Start.',
			'Start menu will be real in 200X.',
			'Is Brazil even real?',
			'Squawk 7500.',
			'You\'s buck wild!',
			'vim index.html',
			'People still go here?',
			'Includes stdio.h!',
			'glBegin(GL_QUADS);',
			'All my homies hate XServer.',
			'Made by Notch!',
			'It\'s actually GNU + Thicc Industries!'
		];
		var randomNumber = Math.floor(Math.random()*textArray.length);
		document.getElementById("splash").textContent = "THICC.EXE - " + textArray[randomNumber];
	}
	randomSplash();
	setInterval(randomSplash, 10000);// JavaScript Document
