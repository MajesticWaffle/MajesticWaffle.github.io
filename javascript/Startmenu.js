//Quit snooping in mah javascript
var counter = 0;
function StartClick(){
console.log("test" + counter);
if(counter == 5){
window.location = "secret.html";
}else{counter++;}
}