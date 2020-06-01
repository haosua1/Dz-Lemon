//1. Клонирование массива
// Напишите функцию copyArr(arr),
// которая копирует массив не изменяя оригинал.
let arr = [1, 2, 3, 4, "Kek", 15];
const arrCopy = [arr];
console.log(arrCopy);

//
//Преобразование массива в строку
//Напишите код, который преобразовывает и объединяет
//все элементы массива в одно строковое значение.
//Элементы массива будут разделены запятой.
//Получите результат двумя разными методами.

let arrStr = arr.toString();
console.log(arrStr);
let arrStr1 = arr.join(", ");
console.log(arrStr1);

//Заполните массив 10-ю иксами с помощью цикла.

for (let i = 0; i <= 10; i++) {
  if (arr.length <= 9) {
    arr.push("kek");
  }
}
console.log(arr);

// Заполните массив числами от 1 до 10 с помощью цикла

let arrSum = [];

for (let i = 1; i <= 10; i++) {
  arrSum.push(i);
}
console.log(arrSum);

// Заполните массив 10-ю случайными числами (дробями)
//от 0 до 1 с помощью цикла.Дроби округляйте до двух знаков в дробной части.

let arrSlu = [];

for (let i = 1; i <= 10; i++) {
  let n = Math.random();
  n = Math.round(n * 100) / 100;
  arrSlu.push(n);
}
console.log(arrSlu);

// Заполните массив 10 - ю случайными числами от 1 до 10 с помощью цикла.

let arrSlu4 = [];

for (let i = 1; i <= 10; i++) {
  let n = Math.random();
  n = Math.round(n * 10) / 1;
  arrSlu4.push(n);
}
console.log(arrSlu4);

//  Дан массив с числами. С помощью цикла выведите только те элементы массива,
// которые больше нуля и меньше 10 - ти.
let arrRandomNew = [];

let arrRandom = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < arrRandom.length; i++) {
  if (arrRandom[i] > 0 && arrRandom[i] < 10) {
    arrRandomNew.push(arrRandom[i]);
  }
}
console.log(arrRandomNew);

//Дан массив с числами.С помощью цикла проверьте,
//что в нем есть элемент со значением 5. Как только
//будет найден первый такой элемент - выведите 'Есть'
//и оборвите цикл.Если такого элемента нет - ничего не выводите.

let arrRandom2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arrRandom2.length; i++) {
  if (arrRandom2[i] == 5) {
    console.log("Есть!");
    break;
  }
}

// Дан массив с числами.С помощью цикла найдите сумму
// элементов этого массива.

let arr404 = [1, 2, 1, 2, 1];
let sum404 = 0;
for (let i = 0; i < arr404.length; i++) {
  sum404 += arr404[i];
}
console.log("сумма элементов массива:", sum404);

// Дан массив с числами.С помощью цикла найдите сумму квадратов
//элементов этого массива.

let arr303 = [1, 2, 1, 2, 3];
let sum303 = 0;
for (let i = 0; i < arr303.length; i++) {
  sum303 += arr303[i] * arr303[i];
}
console.log("сумма квадратов элементов массива:", sum303);

//Дан массив с числами.Найдите среднее арифметическое
//его элементов(сумма элементов, делить на количество)

let arr505 = [1, 2, 3, 7, 6, 9];
let sum505 = 0;
for (let i = 0; i < arr505.length; i++) {
  sum505 += arr505[i];
}
let result505 = sum505 / arr505.length;
console.log(
  "среднее арифметическое элементов массива (без остатка):",
  Math.trunc(result505)
);

//Пользователь вводит многозначное число
//через promt. Напишите функцию colonOdd(num),
//которая принимает число num в качестве аргумента
//и вставляет двоеточие (:) между двумя нечетными
//числами. Например, если вводится число 55639217,
//то на выход должно быть 5:563:921:7.

//const num = prompt("Введите число", 55639217);
let num = 55639217; // промт мешает при проверки дальнейших задач

function colonOdd(num) {
  let str = num.toString();
  let result = [str[0]];
  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result.push(":", str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

console.log(colonOdd(num));

//Напишите функцию removeDuplicates(arr), которая
//возвращает массив, в котором удалены
//повторяющиеся элементы из
//массива arr (игнорируйте чувствительность к регистру).

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "php",
  "php",
  "css",
  "css",
  "script",
  "script",
  "html",
  "html",
  "java",
];

console.log(unique(strings));

//Напишите функцию getFirst(array, n), которая возвращает
//фрагмент массива, содержащий первые 'n' элементов массива.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getFirst(array, n) {
  if (n == null) return array[0];
  return array.slice(0, n);
}

console.log(getFirst(array, 3));

/*Сумма элементов двух массивов
Напишите код, который создаёт массив элементов
представляющих собой сумму соответствующих элементов
заданных массивов.*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
let arr3 = [];
if (arr1.length > arr2.length) {
  let count = arr1.length;
} else {
  let count = arr2.length;
}
for (let i = 0; i < count; i++) {
  if (arr2[i] === undefined) {
    arr2.push(0);
  } else {
    if (arr1[i] === undefined) {
      arr1.push(0);
    }
  }
  arr3.push(arr1[i] + arr2[i]);
}
console.log(arr3); // [5,7,9,4,5]
