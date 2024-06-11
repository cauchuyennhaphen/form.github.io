const scriptURL = 'https://script.google.com/macros/s/AKfycbw2ZbXcZvoly-kwjGf9404KfbvJ0BBvcm_Mt8VtcdRhkqnDBf1-lV0d8uCosrZ4k2DThQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})