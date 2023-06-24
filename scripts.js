const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordLabel = document.querySelector('label[for="password"]');
const confirmPasswordLabel = document.querySelector('label[for="confirm-password"]');

confirmPasswordInput.addEventListener('input', validatePasswords);

function validatePasswords() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  
  if (password !== confirmPassword) {
    passwordLabel.style.color = 'red';
    confirmPasswordLabel.style.color = 'red';
  } else {
    passwordLabel.style.color = '';
    confirmPasswordLabel.style.color = '';
  }
}
