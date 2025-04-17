import throttle from 'lodash.throttle';
// console.log('Скрипт загружен');

const formEl = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

const formData = {
  email: formEl.elements.email.value,
  message: formEl.elements.message.value,
};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  evt.preventDefault();
  // const message = evt.target.value;


  // console.log(message);
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData.email, formData.message);
    evt.currentTarget.reset();  //очищает форму от текста
    localStorage.removeItem(localStorageKey); //очищаем локал 
};

