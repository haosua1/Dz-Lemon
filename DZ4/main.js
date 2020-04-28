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

// в массыиве arrSlut4 иногда генерируеться 0, ячейку которого в консоль не попадает

for (let i = 0; i <= arrSlu4.length; i++) {
  if (arrSlu4[i] > 0 && arrSlu4[i] < 10) {
    console.log(arrSlu4[i]);
  }
}
