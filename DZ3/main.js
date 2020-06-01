//Создайте 4 любые математические функции  с как минимум одним параметром функции.

// function suma(a, b) {
//   let c = a + b;
//   console.log(c);
// }

// suma(4, 6);

function chotnie(x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

// chotnie(4, 10);
// chotnie(1, 20);

//Создать 3 функции без параметров и return, вывод в консол.лог и в алерте

function name1() {
  return "Aleksandr";
}

let name = name1();
//alert(name);
//console.log(name);

//Функция: Суммы всех нечетных чисел в передаваемом числе

let sum = 0;
function chotnie(x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
      if (i >= y) {
        return sum;
      }
    }
  }
}
console.log(chotnie(1, 50));

//Задача на вывод наращивающихся ":)" до 5 в консоль

let outStr = ":)";
let p = 0;
while (p < 5) {
  console.log(outStr);
  p++;
  outStr += ":)";
}
//console.log(outStr);
