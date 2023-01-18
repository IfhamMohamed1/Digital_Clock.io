/*const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h -= 12
        ampm = "PM"
    }

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    serTimeout(()=>{
        updateClock()
    }, 1000)

}

updateClock()*/
/*
// Set the current date and time
let currentTime = new Date();

// Update the clock every second
setInterval(updateClock, 1000);

// Call the updateClock function
updateClock();

// Create a function to update the clock
function updateClock() {
  // Get the current time
  let currentTime = new Date();
  
  // Get the current hour, minute, and second
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();
  
  // Format the hour, minute, and second
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  
  // Display the current time
  document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}*/

/*function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }*/

  function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var ampm = document.getElementById('ampm');

    if(hrs > 12){
      ampm.innerHTML = 'PM';
    }
    else
    {
      ampm.innerHTML = 'AM';
    }

    if (hrs >= 12){
      hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
  }

  setInterval(displayTime, 10);