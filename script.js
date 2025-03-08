let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function start() {
  if (!interval) {
    interval = setInterval(updateTime, 1000);
  }
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("seconds").textContent = formatTime(seconds);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("hours").textContent = formatTime(hours);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
