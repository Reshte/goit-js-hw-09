// Выполняй это задание в файлах 02 - timer.html и 02 - timer.js.Напиши скрипт таймера, который ведёт обратный отсчет
// до определенной даты.Такой таймер может использоваться в блогах и интернет - магазинах, страницах регистрации событий,
// во время технического обслуживания и т.д. Посмотри демо видео работы таймера.

// 1. Если пользователь ыбирает дату ранее текущей, должен быть алерт и кнопка старт задизаблена
// 2. Если время корректное кнопка старт активна и запускается таймер отсчета в обратном порядке
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

//ВАРИАНТ 1

// const myInput = document.querySelector('input#datetime-picker');
// const timerDay = document.querySelector('[data-days]');
// const timerHours = document.querySelector('[data-hours]');
// const timerMinutes = document.querySelector('[data-minutes]');
// const timerSeconds = document.querySelector('[data-seconds]');
// const startBtn = document.querySelector('[data-start]');
// startBtn.disabled = true;

// startBtn.addEventListener('click', flatpickr);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     console.log(selectedDates[0]);

//     const selectDays = selectedDates[0].getDate();
//     const selectHours = selectedDates[0].getHours();
//     const selectMinutes = selectedDates[0].getMinutes();
//     const selectSeconds = selectedDates[0].getSeconds();

//     const currentTime1 = new Date();
//     const currentDays1 = currentTime1.getDate();
//     if (currentDays1 > selectDays) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       return;
//     } else {
//       startBtn.disabled = false;
//       const timerId = setInterval(() => {
//         const currentTime = new Date();
//         const currentDays = currentTime.getDate();
//         const currentHours = currentTime.getHours();
//         const currentMinutes = currentTime.getMinutes();
//         const currentSeconds = currentTime.getSeconds();

//         const SecondsForTimer = Math.abs(currentSeconds - 59);
//         const MinutesForTimer = Math.abs(selectMinutes - currentMinutes);
//         const HoursForTimer = Math.abs(selectHours - currentHours);
//         const dayForTimer = Math.abs(selectDays - currentDays);

//         timerDay.textContent = dayForTimer.toString().padStart(2, '0');
//         timerHours.textContent = HoursForTimer.toString().padStart(2, '0');
//         timerMinutes.textContent = MinutesForTimer.toString().padStart(2, '0');
//         timerSeconds.textContent = SecondsForTimer.toString().padStart(2, '0');

//         if (
//           timerDay.textContent === '00' &&
//           timerHours.textContent === '00' &&
//           timerMinutes.textContent === '00' &&
//           timerSeconds.textContent === '00'
//         ) {
//           Notiflix.Notify.success('Ура,ви дочекались');
//           clearInterval(timerId);
//         }
//       }, 1000);
//     }
//   },
// };

// flatpickr(myInput, options);

//ВАРИАНТ 2

const refs = {
  inputDate: document.querySelector('input#datetime-picker'),
  timerDay: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('[data-start]'),
};

refs.startBtn.disabled = true;

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

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectTime = selectedDates[0].getTime();
    const currentTimeStatic = new Date().getTime();
    timeCounter(currentTimeStatic, selectTime);
  },
};

flatpickr(refs.inputDate, options);

function timeCounter(currentTimeStatic, selectTime) {
  if (currentTimeStatic > selectTime) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  } else {
    refs.startBtn.disabled = false;
    const timerId = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeForTimer = convertMs(selectTime - currentTime);

      refs.timerDay.textContent = addLeadingZero(timeForTimer.days);
      refs.timerHours.textContent = addLeadingZero(timeForTimer.hours);
      refs.timerMinutes.textContent = addLeadingZero(timeForTimer.minutes);
      refs.timerSeconds.textContent = addLeadingZero(timeForTimer.seconds);

      if (
        refs.timerDay.textContent === '00' &&
        refs.timerHours.textContent === '00' &&
        refs.timerMinutes.textContent === '00' &&
        refs.timerSeconds.textContent === '00'
      ) {
        Notiflix.Notify.success('Hooray!');
        clearInterval(timerId);
      }
    }, 1000);
  }
}
