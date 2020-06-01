/*
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array

let a = 100;

let arr = [23, 24, 25, 26, 27, 28];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr1 = [1];
arr1[100] = 200;
console.log(arr1);

let arr2 = [{}, {}, {}];
let arr3 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(arr3[0], [2]);

// let obj { name: 'Aleksadr'};
// console.log(obj.name);

let arrMas = ["10", "15"];
let arrMas2 = arrMas.push("11");
console.log;

let arrMas3 = arrMas.pop;
console.log(arrMas3);

//shift

var myFish = ["ангел", "клоун", "мандарин", "хирург"];

console.log("myFish до: " + myFish);
//myFish до: ангел,клоун,мандарин,хирург

var shifted = myFish.shift();

console.log("myFish после: " + myFish);
//myFish после: клоун,мандарин,хирург

console.log("Удалён этот элемент: " + shifted);
//Удалён этот элемент: ангел

//unshift

var arr10 = [1, 2];

arr10.unshift(0); // результат вызова равен 3, новой длине массива
// arr равен [0, 1, 2]

arr10.unshift(-2, -1); // = 5
// arr равен [-2, -1, 0, 1, 2]

arr10.unshift([-3]);
// arr равен[[-3], -2, -1, 0, 1, 2]

//revers крутит массив

const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// expected output: "array1:" Array ["three", "two", "one"]

//fill заполнение

const array2 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array2.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array2.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array2.fill(5));
// expected output: [6, 6, 6, 6]

//slice

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

//splice ДЗ

// сoncat

const array11 = ["a", "b", "c"];
const array22 = ["d", "e", "f"];
const array33 = array11.concat(array22);

console.log(array33);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//join

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(" kek "));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

// КолБэк функция

//вывести все элементы масс ива большк 20

arr.forEach((element) => console.log(element));
//arr.forEach(function{currentValue, index, arr });

//arr.forEach(function { })

function isBigEnough(element, index, array) {
  return element < 100;
}

[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

console.log(arr.every(isBigEnough));

function is(element, index, array) {
  return element < 15;
}
console.log(arr.every(is));

//some

function isit(element, index, array) {
  return element < 15;
}
console.log(arr.some(isit));

//filtr

function isit(element, index, array) {
  return element < 25;
}
console.log(arr.filter(isit));

// find

function isit(element, index, array) {
  return element > 27;
}
console.log(arr.find(isit));

//map

function isit(element, index, array) {
  return element + " k";
}
console.log(arr.map(isit));

//includes

function isit(element, index, array) {
  return (element = 23);
}
console.log(arr.includes(isit));

//reduce

const array15 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array15.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array15.reduce(reducer, 5));
// expected output: 15

//sort
let fruit = ["арбузы", "бананы", "Вишня"];
fruit.sort(); // ['Вишня', 'арбузы', 'бананы']

let scores = [1, 2, 10, 21];
scores.sort(); // [1, 10, 2, 21]

let things = ["слово", "Слово", "1 Слово", "2 Слова"];
things.sort(); // ['1 Слово', '2 Слова', 'Слово', 'слово']
// В Unicode, числа находятся перед буквами в верхнем регистре,
// а те, в свою очередь, перед буквами в нижнем регистре.

*/
