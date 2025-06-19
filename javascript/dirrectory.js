function dirLoad(){
	theme_home();
	
	var hash = location.hash;
	console.log(hash);
	switch (hash.toLowerCase()){
		case "#games":
			games();
			break;
		case "#oses":
			oses();
			break;
		case "#dev":
			tools();
			break;			
	}
}


function theme(){
	currentTheme = currentTheme == 0 ? 1 : 0;
	theme_home();
	
}

function theme_home(){
	if(currentTheme == 0){
		removejscssfile("os9.css", "css");
		document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="css/win98.css" />');
		document.getElementById("select").setAttribute('src', 'audio/click.wav');
	}
	
	if(currentTheme == 1){
		removejscssfile("win98.css", "css");
		document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="css/os9.css" />');
		document.getElementById("select").setAttribute('src', 'audio/open.wav');
	}
	
	home();
}
function games(){
	window.frames["yeets"].location = "https://drive.google.com/embeddedfolderview?id=1MEShixtBNKNLAPjG0oT4QB4L4i6n1aEu#list";
	document.getElementById('select').play();
}
function oses(){
	window.frames["yeets"].location = "https://drive.google.com/embeddedfolderview?id=1TbsYdx00e-d27UkHbuo8xkcbe828qoSi#list";
	document.getElementById('select').play();
}
function tools(){
	window.frames["yeets"].location = "dev/index.html";	
	document.getElementById('select').play();
}
function midi(){
	var textArray = [
			'http://friendlydads.net/',
			'https://hooooooooo.com/',
			'https://pointerpointer.com/',
			'https://crouton.net/',
			'https://html5zombo.com/',
			'http://tunnelsnakes.com/',
			'https://bonzi.link/'
		];
	var randomNumber = Math.floor(Math.random()*textArray.length);
	window.frames["yeets"].location = textArray[randomNumber];
	document.getElementById('select').play();
}

function home(){
		if(currentTheme == 0){
		window.frames["yeets"].location = "splash-windows.html";	
	}
	if(currentTheme == 1){
		window.frames["yeets"].location = "splash-mac.html";
	}	
	document.getElementById('select').play();
}


function mgames(){
	window.frames["yeets"].location = "https://drive.google.com/embeddedfolderview?id=1MEShixtBNKNLAPjG0oT4QB4L4i6n1aEu#grid";
	document.getElementById('select').play();
}
function moses(){
	window.frames["yeets"].location = "https://drive.google.com/embeddedfolderview?id=1TbsYdx00e-d27UkHbuo8xkcbe828qoSi#grid";
	document.getElementById('select').play();
}
function mtools(){
	window.frames["yeets"].location = "https://drive.google.com/embeddedfolderview?id=1wnD5bA4X6tovffcdfwQGT5S5jZjC7i_w#grid";	
	document.getElementById('select').play();
}

function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}
