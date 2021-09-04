const KEY_TODO = 'todo';
const CLASSNAME_TODO_ITEM = 'todo-item';
const MESSAGE_WELLDONE_ID = 5555

let todos = [];

const formTodo = document.querySelector('#form-todo');
const formTodoInput = document.querySelector('#form-todo input');
const listTodo = document.querySelector('#ul-todo-list');

function saveTodo() {
    localStorage.setItem(KEY_TODO, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    if(todos.length === 0) paintTodo({text: 'You\'ve done well!', id: MESSAGE_WELLDONE_ID})
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const a = document.createElement('a');
    a.innerText = newTodo.text;
    a.href = '#';
    a.classList.add(CLASSNAME_TODO_ITEM);
    a.addEventListener('click', deleteTodo)
    li.appendChild(a);
    listTodo.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: formTodoInput.value,
        id: Date.now()
    };
    todos.filter((todo) => console.log(todo.id));
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodo();
}

formTodo.addEventListener('submit', handleTodoSubmit);

const savedTodo = localStorage.getItem(KEY_TODO);

if(savedTodo !== null) {
    const parsedTodos = JSON.parse(savedTodo);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
