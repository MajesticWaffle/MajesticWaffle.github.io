	function randomSplash(){

		var textArray = [
    		'Internet Explorer users (still) are banned.',
    		'Abort, Retry, Fail?',
			'No websites were harmed in the making of this website.',
			'Fun Fact: There was only a 1/56 chance of seeing this.',
			'Designed for 4:3 Monitors.',
			'Now with functional BSOD.',
			'404: Subtitle not found.',
			'Dres does not exist.',
			'The CCP is not the legitimate government of China.',
			'Now on github.',
			'Half-life 3.',
			'Woah, someone is here?',
			'Version 8...8.1? Who cares.',
			'Is it Windows 98?',
			'Is it Mac OS 9?',
			'CTRL-ALT-DELETE.',
			'Command - Option - Escape.',
			'800x600 is god\'s resolution.',
			'System32 is optional.',
			'Nobody NEEDS a System Folder.',
			'DOS based kernel.',
			'PowerPC Compatible.',
			'Digital video is a sin.',
			'Think Different.',
			'Its not piracy if you don\'t get caught.',
			'Epic Game Store Exclusive.',
			'Press Start.',
			'Start menu is finally real.',
			'An apple menu?',
			'Is Finland even real?',
			'Rust is not a real programming language',
			'Does what Nintendon\'t!',
			'But will there ever be desktop icons?',
			'Still a more functional operating system than Windows 11.',
			'Squawk 7500.',
			'You\'s buck wild!',
			'vim index.html',
			'People still go here?',
			'Includes stdio.h!',
			'glBegin(GL_QUADS);',
			'All my homies hate XServer.',
			'Made by Notch!',
			'It\'s actually GNU + Thicc Industries!',
			'Does the close button work?',
			'What will the next theme be?',
			'Will there ever be more uploads?',
			'Do NOT visit a Hmm? link at 3 AM.'
		];
		var randomNumber = Math.floor(Math.random()*textArray.length);
		document.getElementById("splash").textContent = "Thicc Industries - " + textArray[randomNumber];
		document.getElementById("spansplash").textContent = "Thicc Industries - " + textArray[randomNumber];
	}
	//randomSplash();
	setInterval(randomSplash, 7500);// JavaScript Document
