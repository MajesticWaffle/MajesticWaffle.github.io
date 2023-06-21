function detect_and_redirect(){
	let os = navigator.userAgent;
    if (os.search('Mac')!==-1){
        window.location.href = 'mac/index.html';
    }
	
	window.location.href = 'win/index.html';
}