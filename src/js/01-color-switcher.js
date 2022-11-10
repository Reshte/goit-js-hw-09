// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона
// < body > на случайное значение используя инлайн стиль.При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.
// Учти, на кнопку «Start» можно нажать бесконечное количество раз.Сделай так,
// чтобы пока изменение темы запушено, кнопка «Start» была не активна(disabled).

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let backgroundColor = getRandomHexColor();
let intervalID = null;

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
}

function stopChangeColor() {
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  clearInterval(intervalID);
}
