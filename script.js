const name = prompt("enter your name");
const surname = prompt("enter your surname");
const age = prompt("enter your age");
const connection = prompt("how can we contact you?")

const userName = document.querySelector(".name");
userName.textContent = name;

const userSurname = document.querySelector(".surname");
userSurname.textContent = surname;

const userAge = document.querySelector(".age");
userAge.textContent = age;

const userConnection = document.querySelector(".link");
userConnection.setAttribute("href", "connection");
