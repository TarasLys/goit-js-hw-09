const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");

btnStart.addEventListener('click', StartButtonClick);
btnStop.addEventListener('click', StopButtonClick);

let interval = 0;

function btnEnable(startDisabled, stopDisabled) {
  btnStart.disabled = startDisabled;
  btnStop.disabled = stopDisabled;
}

function StartButtonClick() {
  btnEnable(true, false);
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function StopButtonClick() {
  btnEnable(false, true);
  clearInterval(interval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

