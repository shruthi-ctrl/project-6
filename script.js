const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  // Reset messages
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';
  successMessage.textContent = '';

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.style.display = 'block';
    isValid = false;
  }

  // Validate Email
  const email = emailInput.value.trim();
  if (email === '') {
    emailError.textContent = 'Email is required.';
    emailError.style.display = 'block';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
    emailError.style.display = 'block';
    isValid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    messageError.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();
  }
});