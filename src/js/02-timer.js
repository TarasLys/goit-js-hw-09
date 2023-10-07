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

const fp = flatpickr(inputDate, {
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
});

btnDate.disabled = true;
inputDate.addEventListener("input", onInput)
function onInput() {
  let n = new Date(inputDate.value);
  //n <= new Date() ? btnDate.disabled = true : btnDate.disabled = false;
  if (n <= new Date()) {
    
    btnDate.disabled = true;
     //window.alert("Please choose a date in the future");
 Notiflix.Notify.failure(`Please choose a date in the future`);
  } else { 
    btnDate.disabled = false
  }
}

btnDate.addEventListener("click", onClick) 
function onClick() { 
setInterval(() => { 
    const currentData = new Date();
    let n = new Date(inputDate.value);
    console.log(convertMs(n - currentData));
}, 1000)
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    dataDays.textContent = days.toString().padStart(2,"0");
    dataHours.textContent = hours.toString().padStart(2,"0");
    dataMinutes.textContent = minutes.toString().padStart(2,"0");
    dataSeconds.textContent = seconds.toString().padStart(2,"0");

  return { days, hours, minutes, seconds };
}






