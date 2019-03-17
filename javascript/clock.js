function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  if(h < 12 && h > 0) //1 - 11 displays AM
	  document.getElementById('clock').innerHTML = h + ":" + m + " AM ";
  if(h > 12) // 13 - 23 display PM
	  document.getElementById('clock').innerHTML = (h - 12) + ":" + m + " PM ";
  if(h == 12) //special case for noon
	  document.getElementById('clock').innerHTML = h + ":" + m + " PM ";
  if(h == 0) //special case for midnight
	  document.getElementById('clock').innerHTML = 12 + ":" + m + " AM ";
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}