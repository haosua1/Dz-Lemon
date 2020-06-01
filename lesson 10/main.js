// 100;
// //CRUD;

// let a = 100;
// let b = a + 100;
// console.log(b, a);

// // if (condition) {
// // }

// // for (let index = 0; index < array.length; index++) {
// //   const element = array[index];
// // }

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length);

// function name(params) {
//   let a = 100;
//   return `hi mark`;
// }
// console.log(name);

// arr.push(10);
// console.log(arr[4]);

// let soundLevel = 75;
// localStorage.setItem("sound", soundLevel);

// //локальное хранилище на системе пользывателя
// console.log(localStorage.getItem("sound"));

// //хранилище временное для сессии
// sessionStorage;

// //работа сервера
// //http masage
// //coocie
// console.log(document.cookie);

let ajaxRequest = new XMLHttpRequest();

ajaxRequest.open("GET", "http://jsonplaceholder.typicode.com/posts");

let responseData;

ajaxRequest.addEventListener("readystatechange", function () {
  if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
    responseData = JSON.parse(ajaxRequest.responseText);
    console.log(ajaxRequest.responseText);
  }
});

ajaxRequest.send();
