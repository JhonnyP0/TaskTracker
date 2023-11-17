const display = document.getElementById('sinceTk');
const res = document.getElementById('btp');


let startTime;
let interval;

function start() {
    startTime = Date.now() - (startTime ? startTime : 0);
    interval = setInterval(updateDisplay, 1000);
}

function reset() {
    clearInterval(interval);
    startTime = null;
    updateDisplay();
    start();
}

function updateDisplay() {
    const currentTime = Date.now() - (startTime ? startTime : 0);
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    display.textContent = "SLT" + ":" + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

start();
res.addEventListener('click', reset);