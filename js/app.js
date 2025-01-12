const input = document.querySelector('input');
const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');
const h1 = document.querySelector('#h1');


function login(event) {
  event.preventDefault();
  const username = input.value;
  localStorage.setItem('username', username);
  form.classList.add('hidden');
  h1.classList.add('hidden');
  sayHello(username);
}

function sayHello(username) {
  greeting.innerHTML = `Hello, ${username}.`;
  greeting.classList.remove('hidden');
  h1.classList.add('hidden');
}

const savedUsername = localStorage.getItem('username');

if (savedUsername === null) {
  h1.classList.remove('hidden');
  form.classList.remove('hidden');
  form.addEventListener('submit', login);
} else {
  sayHello(savedUsername);
}

