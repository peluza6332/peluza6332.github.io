const formLogin = document.querySelector('#form-login');
const formInput = document.querySelector('#form-login input');
const greeting = document.querySelector('#greeting');

const CLASSNAME_HIDDEN = 'hidden';
const KEY_NAME = 'name';

function onSubmitLogin(event) {
    event.preventDefault();
    const name = formInput.value;
    formLogin.classList.add(CLASSNAME_HIDDEN);
    localStorage.setItem(KEY_NAME, name);
    paintGreetings(name);
}

function paintGreetings(name) {
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

const name = localStorage.getItem(KEY_NAME);

if(name === null) {
    formLogin.classList.remove(CLASSNAME_HIDDEN);
    formLogin.addEventListener('submit', onSubmitLogin);
} else {
    paintGreetings(name);
}