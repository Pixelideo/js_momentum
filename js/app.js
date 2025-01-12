const loginInput = document.querySelector('input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');
const nameHeading = document.querySelector('#name-heading'); // Correctly target the name heading

function login(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem('username', username);
  loginForm.classList.add('hidden');
  nameHeading.classList.add('hidden'); // Hide the correct heading
  sayHello(username);
}

function sayHello(username) {
  greeting.innerHTML = `Hello, ${username}.`;
  document.querySelector('#clock').classList.remove('hidden');
  document.querySelector('#quote').classList.remove('hidden'); // Access exports via the module
  document.querySelector('#author').classList.remove('hidden');
  document.querySelector('#todo-form').classList.remove('hidden');
  greeting.classList.remove('hidden');
}

const savedUsername = localStorage.getItem('username');

if (savedUsername === null) {
  nameHeading.classList.remove('hidden'); // Show the correct heading
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', login);
} else {
  sayHello(savedUsername);
}