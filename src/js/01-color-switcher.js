const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");

btnStart.addEventListener('click', StartButtonClick);
btnStop.addEventListener('click', StopButtonClick);

let interval = 0;

function StartButtonClick() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function StopButtonClick() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(interval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

