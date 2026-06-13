// Script simple para validar el formulario de inicio de sesión.
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function showError(element, message) {
  element.textContent = message;
}

function clearErrors() {
  showError(emailError, '');
  showError(passwordError, '');
}

function validateEmail(value) {
  // Validación simple de formato de email.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();

  let valid = true;
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue) {
    showError(emailError, 'El correo electrónico es obligatorio.');
    valid = false;
  } else if (!validateEmail(emailValue)) {
    showError(emailError, 'Ingresa un correo electrónico válido.');
    valid = false;
  }

  if (!passwordValue) {
    showError(passwordError, 'La contraseña es obligatoria.');
    valid = false;
  } else if (passwordValue.length < 6) {
    showError(passwordError, 'La contraseña debe tener al menos 6 caracteres.');
    valid = false;
  }

  if (valid) {
    // Solo demostración visual. No hay backend ni autenticación real.
    alert('Formulario válido. Aquí iría la autenticación real.');
    form.reset();
  }
});
