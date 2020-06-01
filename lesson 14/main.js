/*
// https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js
// underscore библиотека

// https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.core.js
// lodash библиотека

// обьекты

//копирование обьекта

var obj = { a: 1, b: 2 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1, b: 2 }

//Метод Object.is() определяет, являются ли два значения одинаковыми значениями.
//Два значения являются одинаковыми в следующих случаях

Object.is("foo", "foo"); // true
Object.is(window, window); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false

var test = { a: 1 };
Object.is(test, test); // true

Object.is(null, null); // true

// Специальные случаи
Object.is(0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true

let obj1 = {
  name: "Sasha",
  age: 29,
};

console.log(Object.keys(obj1));

function getName(n) {
  let a = 100;
  let d = 200;

  return function getMyName(f) {
    let b = a + 200;
  };
}

function makeCounter() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

let kek = makeCounter();

console.log(kek());
console.log(kek());
console.log(kek());

function sumThreeNumbers(a, b, c = 33) {
  console.log(a + b + c);
}

function sumThreeNumbers(x, y, ...a) {
  return (x + y) * a.lenght;
}

sumThreeNumbers(12, 34, 56);

*/
