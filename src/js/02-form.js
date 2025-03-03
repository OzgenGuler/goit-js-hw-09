document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  const storageKey = 'feedback-form-state';

  const saveData = localStorage.getItem(storageKey);
  if (saveData) {
    const formData = JSON.parse(saveData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }

  form.addEventListener('input', () => {
    const data = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    localStorage.setItem(storageKey, JSON.stringify(data));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    console.log({
      email: form.email.value,
      message: form.message.value,
    });
    localStorage.removeItem(storageKey);
    form.reset();
  });
});
