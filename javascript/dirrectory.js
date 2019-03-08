function games(){
	window.frames["yeets"].location = "https://drive.google.com/embeddedfolderview?id=1mb8XTzqCPMTbrhPRnfLS-kARaqMclhJB#list";
	alert(window.frames["yeets"].location);
}
function oses(){
	window.frames["yeets"].location = "https://drive.google.com/embeddedfolderview?id=1M9c3jLdIVnjxzYCbbSgm0Wz9tZ2FS-9E#list";	
}
function tools(){
	window.frames["yeets"].location = "https://drive.google.com/embeddedfolderview?id=1ONpd5o1Q1iSoq4rkDjE63PH82C2dk6u1#list";	
}
function midi(){
	var textArray = [
			'https://megamindchan.org/legacy/',
			'http://friendlydads.net/'
			
		];
	var randomNumber = Math.floor(Math.random()*textArray.length);
	window.frames["yeets"].location = textArray[randomNumber];
}