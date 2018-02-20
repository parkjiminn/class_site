
window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('feb,19,2018,00:00:00'); 
}
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hr').firstChild.nodeValue = hours;
  document.getElementById('min').firstChild.nodeValue = mins;
  document.getElementById('sec').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}