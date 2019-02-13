function Constructor(totalSeconds, time, start, pause, reset) {
    this.start = document.querySelector(start);
    this.pause = document.querySelector(pause);
    this.reset = document.querySelector(reset);
    this.totalSeconds = totalSeconds;
    this.time = document.querySelector(time);
    this.timer = null;

    this.doTimer = function () {
        if (totalSeconds < 0)
            return;
        this.totalSeconds--;
        this.setTime();
        this.timer = setTimeout(()=> this.doTimer(), 1000);

    };
    this.stopCount = function () {
        clearTimeout(this.timer);
    };
    this.setTime = function () {
        let hours = Math.floor(this.totalSeconds / 3600),
            minutes = Math.floor((this.totalSeconds % 3600) / 60),
            seconds = this.totalSeconds % 60;
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        this.time.innerHTML = hours + ":" + minutes + ":" + seconds;
        console.log(this.time.innerHTML);

    };
    this.resetCount = function () {
        this.totalSeconds = totalSeconds;
        this.setTime();
        clearTimeout(this.timer);
    };
    this.setTime();

    this.start.addEventListener('click', ()=>{
        this.doTimer()
    })
    this.pause.addEventListener('click', ()=>{
        this.stopCount()
    })
    this.reset.addEventListener('click', ()=>{
        this.resetCount()
    })
}

new Constructor(600, '#time', '#start', '#pause', '#reset');

new Constructor(30000, '#time1', '#start1', '#pause1', '#reset1' )
