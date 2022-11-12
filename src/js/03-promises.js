import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const buttonEl = document.querySelector('button');
const localObj = {
  firstDelay: '',
  delayStep: '',
  amount: '',
};

formEl.addEventListener('input', textInput);

function textInput() {
  localObj.firstDelay = formEl.elements.delay.value;
  localObj.delayStep = formEl.elements.step.value;
  localObj.amount = formEl.elements.amount.value;
  return localObj;
}

buttonEl.addEventListener('click', onclickSubmit);

function onclickSubmit(evt) {
  evt.preventDefault();
  if (
    formEl.elements.delay.value === '' ||
    formEl.elements.step.value === '' ||
    formEl.elements.amount.value === ''
  ) {
    Notiflix.Notify.info('Заполните все поля');
  } else {
    let position = 1;
    let delay = Number(localObj.firstDelay);
    while (localObj.amount > 0) {
      createPromise(position, delay);
      position += 1;
      console.log(position);
      delay += Number(localObj.delayStep);
      console.log(delay);
      localObj.amount -= 1;
    }
  }

  formEl.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      } else {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }
    }, delay);
  });
}
