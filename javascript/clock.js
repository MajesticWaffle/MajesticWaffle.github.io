function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  if(h > 12)
	  document.getElementById('clock').innerHTML = (h - 12) + ":" + m + " PM ";
  else
	  document.getElementById('clock').innerHTML = h + ":" + m + " AM ";
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}