import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LS_FORM_STATE = 'feedback-form-state';
let formData = {};

populateForm();
formRef.addEventListener('input', throttle(handleFormInput, 500));
formRef.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) {
  formData[event.target.name] = event.target.value;

  const jsonFormData = JSON.stringify(formData);
  localStorage.setItem(LS_FORM_STATE, jsonFormData);
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (!formRef.elements.email.value || !formRef.elements.message.value) {
    alert('Not today bro 🥲');
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LS_FORM_STATE);
  event.currentTarget.reset();
}

function populateForm() {
  if (localStorage.getItem(LS_FORM_STATE)) {
    formData = JSON.parse(localStorage.getItem(LS_FORM_STATE));

    for (const key in formData) {
      if (formData[key]) {
        formRef.elements[key].value = formData[key];
      }
    }
  }
}
