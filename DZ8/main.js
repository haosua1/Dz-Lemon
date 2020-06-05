/* Получить данные, вывести на страницу первые 10. 
После нажатия кнопки "Еще 10" - вывести следующие 10. 
Нажали еще раз - еще 10. И так далее.Выводим красиво, 
желательно юзать бустрап */

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

document.getElementById("show").innerHTML = 45;

fetch("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
  console.log(data);
  document.getElementById("show").innerHTML = data;
});

const headers = {};

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  headers: headers,
}).then((data) => {
  console.log(data);
  document.getElementById("show").innerHTML = data;
  return data.json();
});

document.getElementById("show").innerHTML = headers;

// не понял как сделать вывод на страницу
