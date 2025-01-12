const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');

let todos = [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;

    // Add the animation class
    li.classList.add('animate');

    // Wait for the animation to finish before removing the element
    li.addEventListener('animationend', () => {
        li.remove(); // Remove the element after the animation ends
    });

    // Update the todos array and save to localStorage
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}


function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;

    // Add the 'add-animate' class for animation
    li.classList.add('add-animate');

    const span = document.createElement('span');
    span.innerHTML = `${newTodo.text}  `;
    const btn = document.createElement('button');
    btn.innerHTML = '❌';
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);

    // Remove the 'add-animate' class after the animation ends
    li.addEventListener('animationend', () => {
        li.classList.remove('add-animate');
    });
}


function todoSubmit(event) {
    event.preventDefault();
    if (todos.length >= 10) {
        alert('The maximum number of to-do lists is 10.');
    } else {
        let newTodo = todoInput.value;
        todoInput.value = '';
        let newTodoObj = {
            text: newTodo,
            id: Date.now(),
        };
        todos.push(newTodoObj);
        paintTodo(newTodoObj);
        saveTodos();
    }
}


todoForm.addEventListener('submit', todoSubmit);

let savedTodos = localStorage.getItem('todos');

if (savedTodos !== null) {
    let parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}