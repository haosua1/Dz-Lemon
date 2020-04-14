// let num1 = 100;
// let num2 = 150;

// if (num1 < 110 && num1 > 1) {
//   console.log("Fine");
// }

// console.log("hi");

// let year = prompt("Какой год?");

// if (year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) {
//   alert("Обычный год");
// } else {
//   alert("Високосный");
// }

let num1 = prompt("Число 1");
let num2 = prompt("Число 2");
let num3 = prompt("Число 3");

let numMin = Math.min(num1, num2, num3);
let numMax = Math.max(num1, num2, num3);

if (num1 > numMin && num1 < numMax) {
  alert("Среднее число");
  alert(num1);
}

if (num2 > numMin && num2 < numMax) {
  alert("Среднее число");
  alert(num2);
}

if (num3 > numMin && num3 < numMax) {
  alert("Среднее число");
  alert(num3);
}
