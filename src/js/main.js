let timer_is_on = 0;
let t;
let totalSeconds = 300;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
minutes = String(minutes).padStart(2, "0");
hours = String(hours).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
let allTime = hours + ":" + minutes + ":" + seconds;
let time = document.getElementById('time');
time.innerHTML = allTime;


function timedCount()
{
    if (totalSeconds>=0){
        totalSeconds--;
        hours = Math.floor(totalSeconds / 3600);
        minutes = Math.floor((totalSeconds % 3600) / 60);
        seconds = totalSeconds % 60;
        minutes = String(minutes).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        allTime = hours + ":" + minutes + ":" + seconds;
        time.innerHTML = allTime;
        console.log(totalSeconds);
        t=setTimeout("timedCount()",1000);
    }
}
function doTimer()
{
    if (!timer_is_on)
    {
        timer_is_on=1;
        timedCount();
    }
}
function stopCount()
{
    clearTimeout(t);
    timer_is_on=0;
}
function resetCount() {
    location.reload()
}

function selectTime() {
    let selectSec = document.getElementById('secectSec');
    let selectMin = document.getElementById('secectMin');
    let selectHour = document.getElementById('secectHour');
    totalSeconds = Math.floor( selectHour.value*3600) + Math.floor(selectMin.value*60) + Math.floor(selectSec.value);
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = totalSeconds % 60;
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    allTime = hours + ":" + minutes + ":" + seconds;
    time.innerHTML = allTime;
}
