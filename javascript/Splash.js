	function randomSplash(){

		var textArray = [
    	'THICC.EXE - IE Users are banned.',
    	'THICC.EXE - Abort, Retry, Fail?',
		'THICC.EXE - No websites were harmed in the making of this website.',
		'THICC.EXE - Fun Fact: There was only a 1/20 chance of seeing this.',
		'THICC.EXE - Designed for 4:3 Monitors.',
		'THICC.EXE - BSOD?',
		'THICC.EXE - 404: Subtitle not found.',
		'THICC.EXE - Dres does not exist.',
		'THICC.EXE - We do not acknowledge Apex Legends\'s existence.',
		'THICC.EXE - Now on github.',
		'THICC.EXE - Half-life > Half-life 2',
		'THICC.EXE - it would appear that you exist, congrats',
		'THICC.EXE - Version 7.3',
		'THICC.EXE - Windows 98... or XP?',
		'THICC.EXE - CTRL-ALT-DELETE',
		'THICC.EXE - 800x600 is god\'s resolution',
		'THICC.EXE - System32 is optional',
		'THICC.EXE - DOS based kernel',
		'THICC.EXE - Epic Game Store Exclusive',
		'THICC.EXE - Press Start',
		];
		var randomNumber = Math.floor(Math.random()*textArray.length);
		document.getElementById("splash").textContent = textArray[randomNumber];
	}
	randomSplash();
	setInterval(randomSplash, 6000);// JavaScript Document
