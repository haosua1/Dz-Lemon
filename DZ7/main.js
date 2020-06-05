//Задачи на основы работы с объектом Event на JavaScript

//На координаты

window.addEventListener("mousemove", go);
function go(event) {
  document.getElementById("show").innerHTML =
    "X:" + event.clientX + " Y:" + event.clientY;
}

/* Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию
на которую в конец ul будет добавляться новый li с текстом 'пункт'.
Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.
Это должно работать и для вновь добавленных li. Задачу решите с помощью
делегирования (то есть событие должно быть навешано на ul). */

let ul = document.getElementById("ul");
ul.addEventListener("click", addSign);
function addSign() {
  event.target.innerHTML = event.target.innerHTML + "!";
}

let button = document.getElementById("btn");
button.addEventListener("click", addLi);

function addLi() {
  let li = document.createElement("li");
  li.innerHTML = "пункт";
  ul.appendChild(li);
}

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button1 = document.getElementById("hide");
button1.addEventListener("click", hide);

function hide() {
  document.getElementById("hide").style.display = "none";
}

//задача переместить элемент в координаты клика мышки.
//Т.е.пользователь кликает и элемент(div, например) передвигается туда.

window.addEventListener("click", go1);
function go1(event) {
  var elem = document.getElementById("show1");
  elem.style.left = event.clientX + "px";
  elem.style.top = event.clientY + "px";
}
