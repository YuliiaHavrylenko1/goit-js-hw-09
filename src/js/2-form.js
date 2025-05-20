
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch (e) {
    console.error('Invalid JSON in localStorage', e);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim(); 

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ email, message });

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {
    email: '',
    message: '',
  };
});