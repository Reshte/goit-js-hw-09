// Выполняй это задание в файлах 02 - timer.html и 02 - timer.js.Напиши скрипт таймера, который ведёт обратный отсчет
// до определенной даты.Такой таймер может использоваться в блогах и интернет - магазинах, страницах регистрации событий,
// во время технического обслуживания и т.д. Посмотри демо видео работы таймера.

// 1. Если пользователь ыбирает дату ранее текущей, должен быть алерт и кнопка старт задизаблена
// 2. Если время корректное кнопка старт активна и запускается таймер отсчета в обратном порядке

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector('input#datetime-picker');
const timerDay = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectDays = selectedDates[0].getDate();
    const selectHours = selectedDates[0].getHours();
    const selectMinutes = selectedDates[0].getMinutes();
    const selectSeconds = selectedDates[0].getSeconds();

    const timerId = setInterval(() => {
      const currentTime = new Date();
      const currentDays = currentTime.getDate();
      const currentHours = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();
      const currentSeconds = currentTime.getSeconds();

      const SecondsForTimer = Math.abs(currentSeconds - 59);
      const MinutesForTimer = Math.abs(selectMinutes - currentMinutes);
      const HoursForTimer = Math.abs(selectHours - currentHours);
      const dayForTimer = Math.abs(selectDays - currentDays);

      timerDay.textContent = dayForTimer.toString().padStart(2, '0');
      timerHours.textContent = HoursForTimer.toString().padStart(2, '0');
      timerMinutes.textContent = MinutesForTimer.toString().padStart(2, '0');
      timerSeconds.textContent = SecondsForTimer.toString().padStart(2, '0');

      if (
        timerDay.textContent === '00' &&
        timerHours.textContent === '00' &&
        timerMinutes.textContent === '00' &&
        timerSeconds.textContent === '00'
      ) {
        clearInterval(timerId);
      }
    }, 1000);
  },
};

flatpickr(myInput, options);
