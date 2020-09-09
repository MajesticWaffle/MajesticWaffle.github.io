	function randomSplash(){

		var textArray = [
    			'Users are banned.',
    			'Abort, Retry, Fail?',
			'No websites were harmed in the making of this website.',
			'Fun Fact: There was only a 1/24 chance of seeing this.',
			'Designed for 4:3 Monitors.',
			'BSOD?',
			'404: Subtitle not found.',
			'Dres does not exist.',
			'We do not acknowledge China\'s existence.',
			'Now on github.',
			'Half-life > Half-life 2',
			'it would appear that you exist, congrats',
			'Version 7.4',
			'Windows 98',
			'CTRL-ALT-DELETE',
			'800x600 is god\'s resolution',
			'System32 is optional',
			'DOS based kernel',
			'Epic Game Store Exclusive',
			'Press Start',
			'Start menu will be real in 200X',
			'Is Brazil even real?',
			'Squawk 7500',
			'You\' buck wild!'
		];
		var randomNumber = Math.floor(Math.random()*textArray.length);
		document.getElementById("splash").textContent = "THICC.EXE - " + textArray[randomNumber];
	}
	randomSplash();
	setInterval(randomSplash, 6000);// JavaScript Document
