
console.log('Скрипт загружен');

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', onFormInput);

function onFormInput(evt) {
    evt.preventDefault();
    console.log(evt.target.email.value);
};
