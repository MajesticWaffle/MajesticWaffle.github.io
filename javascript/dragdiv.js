function yeet(){
var soundFoo = document.getElementById('sound1');
soundFoo.play();
soundFoo.onended = function() {
	soundFoo.muted = true;
}
}