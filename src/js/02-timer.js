import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dataDays = document.querySelector("[data-days]");            
const dataHours = document.querySelector("[data-hours]");            
const dataMinutes = document.querySelector("[data-minutes]");            
const dataSeconds = document.querySelector("[data-seconds]");    
const inputDate = document.querySelector("#datetime-picker");
const btnDate = document.querySelector("[data-start]");

btnDate.disabled = true;

const fp = flatpickr(inputDate, {
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose([selectedDates]) { 
  if (selectedDates <= new Date()) { 
    btnDate.disabled = true; 
 Notiflix.Notify.failure(`Please choose a date in the future`);
  } else { 
    btnDate.disabled = false
  }    
    },
});

btnDate.addEventListener("click", onClick) 
function onClick() { 
interval = setInterval(() => { 
    const currentData = new Date();
    let n = new Date(inputDate.value);
  convertMs(n - currentData);
  if (n < currentData) { 
clearInterval(interval);
  }
}, 1000)
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
 return outData({ days, hours, minutes, seconds });
}

function outData({ days, hours, minutes, seconds }) {
    dataDays.textContent = days.toString().padStart(2,"0");
    dataHours.textContent = hours.toString().padStart(2,"0");
    dataMinutes.textContent = minutes.toString().padStart(2,"0");
    dataSeconds.textContent = seconds.toString().padStart(2,"0");
 }









