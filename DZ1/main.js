// Задача 0. Создать 9 переменных по три с let,const,var

/*let a = 1;
let b = 2;
let c = a + b; */
const name = "Sasha";
const serName = "Karnaulskyi";
const patronymic = "Igorevich";
var normalTemp = 36.6;
var lowTemp = "35.5";
var hiTemp = normalTemp + Number.parseInt(lowTemp);
console.log("Высокая температура:", hiTemp);

// Задача 1
// Из двух чисел с разной четностью вывести на экран нечетное число.

for (let i = 10; i <= 15; i++) {
  if (i % 2 == 1) {
    console.log("нечётные числа:", i);
  }
}

// Задача 2
// Определить количество дней в году, который вводит пользователь.

let year = prompt("Определитель высокостного года, введите год");

if (year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) {
  console.log("Введён обычный год");
} else {
  console.log("Введён високосный год");
}

// Задача 3
// Вводятся три разных числа.Найти, какое из них является средним(больше одного, но меньше другого).

let num1 = prompt("Введите число 1");
let num2 = prompt("Введите число 2");
let num3 = prompt("Введите число 3");

let numMin = Math.min(num1, num2, num3);
let numMax = Math.max(num1, num2, num3);

if (num1 > numMin && num1 < numMax) {
  console.log("Среднее число из введённых:", num1);
}

if (num2 > numMin && num2 < numMax) {
  console.log("Среднее число из введённых:", num2);
}

if (num3 > numMin && num3 < numMax) {
  console.log("Среднее число из введённых:", num3);
}

// Задача 4
// Вводятся три целых числа.Определить какое из них наибольшее.

console.log("минимальнео чилсо:", numMin);

/* 5. Написать 5 строчек любого нормального кода.Закомментировать
1 строчку однострочным комментарием и остальные многострочным */

if ((num1 == num2) == num3) {
  console.log("Так не поёдёт");
  //не вводи одинаковые числа для сравнения
}
