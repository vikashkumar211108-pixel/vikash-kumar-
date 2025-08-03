document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    // Normally, you would send this data to a server here.
    document.getElementById('form-response').textContent = `Thank you, ${name}! Your message has been received.`;
    document.getElementById('form-response').style.color = 'green';

    // Reset form fields
    this.reset();
  } else {
    document.getElementById('form-response').textContent = 'Please fill out all fields.';
    document.getElementById('form-response').style.color = 'red';
  }
});
