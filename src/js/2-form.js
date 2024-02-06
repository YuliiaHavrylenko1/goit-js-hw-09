const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(localStorageKey));

if (savedState) {

  form.elements.email.value = savedState.email || '';
  form.elements.message.value = savedState.message || '';
}


form.addEventListener('input', event => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };


  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener('submit', event => {
  event.preventDefault();


  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

 
  localStorage.removeItem(localStorageKey);
  form.reset();
});