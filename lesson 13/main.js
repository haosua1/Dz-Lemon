/*
// 100;

// //CRUD;

// let a = 100;

// let b, c;
// console.log(a);

// if (condition) {
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// let arr = [23, 24, 24, 24, 65, 4, 656, 5];

// console.log(arr.length);

// arr.push(10);

// console.log(arr.length);

// let obj = {
//   name: "Sasha",
//   hands: "two",
// };

// console.log(obj.hands);

// тайм аут

function sayHi() {
  console.log("Privet");
}

setTimeout(sayHi, 4000);

//call back hell

function getName() {
  return "sasha";
}

function setName(func, names) {
  let name = func();
  if (name !== "") {
    return name;
  } else {
    return names;
  }
}

setName(getName, "Igor");

// promise

let promise = new Promise(function (resolve, reject) {
  // через 1 секунду готов результат: result
  setTimeout(() => resolve("result"), 1000);

  // через 2 секунды — reject с ошибкой, он будет проигнорирован
  setTimeout(() => reject(new Error("ignored")), 2000);
});

promise.then(
  (result) => console.log("Fulfilled: " + result), // сработает
  (error) => console.log("Rejected: " + error) // не сработает
);

// fehtc

// fehtc("http://example.com/movies.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//think away
//TODO

// acync function getServerData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let user = await response.json();
// }

*/
