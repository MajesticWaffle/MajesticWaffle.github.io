	function randomSplash(){

		var textArray = [
    			'Internet Explorer users (still) are banned.',
    			'Abort, Retry, Fail?',
			'No websites were harmed in the making of this website.',
			'Fun Fact: There was only a 1/40 chance of seeing this.',
			'Designed for 4:3 Monitors.',
			'Now with functional BSOD.',
			'404: Subtitle not found.',
			'Dres does not exist.',
			'We do not acknowledge China\'s existence.',
			'Now on github.',
			'Half-life > Half-life 2.',
			'it would appear that you exist, congrats.',
			'Version 7.4... 7.5? Who cares.',
			'Windows 98.',
			'CTRL-ALT-DELETE.',
			'800x600 is god\'s resolution.',
			'System32 is optional.',
			'DOS based kernel.',
			'Digital video is a sin.',
			'Think Different.',
			'Its not piracy if you don\'t get caught.',
			'Epic Game Store Exclusive.',
			'Press Start.',
			'Start menu is finally real.',
			'Is Finland even real?',
			'Rust is not a real programming language',
			'Does what Nintendon\'t!',
			'But will there ever be desktop icons?',
			'Still a more functional operating system than Windows 10.',
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
			'Do NOT visit a Hmm? link at 3 AM.'
		];
		var randomNumber = Math.floor(Math.random()*textArray.length);
		document.getElementById("splash").textContent = "THICC.EXE - " + textArray[randomNumber];
	}
	randomSplash();
	setInterval(randomSplash, 7500);// JavaScript Document
