// Задачи:
// 0. Составить расписание на неделю.Пользователь вводит порядковый
// номер дня недели и у него на экране отображается, то, что запланировано
// на этот день.

// let weekDay = prompt("Введите порядковый день недели:");

// if (weekDay < 0 || weekDay > 8) {
//   alert("wrong day");
// }
// if (weekDay == 1) {
//   alert("Понедельник отдых");
// }
// if (weekDay == 2) {
//   alert("Вторник отдых");
// }
// if (weekDay == 3) {
//   alert("Среда отдых");
// }
// if (weekDay == 4) {
//   alert("Четверг отдых");
// }
// if (weekDay == 5) {
//   alert("Пятница отдых");
// }
// if (weekDay == 6) {
//   alert("Суббота отдых");
// }
// if (weekDay == 7) {
//   alert("Воскресенье отдых");
// }

// Задача 1
// Написать программу, вычисляющую стоимость 10 минутного
// междугороднего разговора в зависимости от кода города.
//  (Москва(905) - 4.15руб.Ростов(194) - 1.98руб.
//   Краснодар(491) - 2.69руб.Киров(800) - 5.00руб. )

// let cityCode = prompt(
//   "Введите код города:(Москва(905), Ростов(194), Краснодар(491), Киров(800)"
// );
// let cityTime = prompt("Введите количетво минут разговра:");

// if (cityCode == 905) {
//   console.log("Moscow", cityTime * 4.15, "RUB");
// }
// if (cityCode == 194) {
//   console.log("Rostov", cityTime * 1.98, "RUB");
// }
// if (cityCode == 491) {
//   console.log("Krasnodar", cityTime * 2.69, "RUB");
// }
// if (cityCode == 800) {
//   console.log("Kirov", cityTime * 5, "RUB");
// }

// Задача 2
// В переменной $min лежит число от 0 до 59. Определите в
// какую четверть часа попадает это число(в первую, вторую,
//   третью или четвертую).

let minets = Math.floor(Math.random() * 60);
console.log(minets, "мин это:");
if (minets >= 0 && minets <= 15) {
  console.log("Первая четверть часа");
}
if (minets >= 16 && minets <= 30) {
  console.log("Вторая четверть часа");
}
if (minets >= 31 && minets <= 45) {
  console.log("Третья четверть часа");
}
if (minets >= 46 && minets <= 59) {
  console.log("Четвёртая четверть часа");
}

// Задача 3
// Переменная $num может принимать одно из значений: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную $result запишем 'зима',
// если имеет значение '2' – 'лето' и так далее

let yearTime = Math.floor(Math.random() * 5);
if (yearTime == 1) {
  let result1 = "Время года зима";
  console.log(result1);
}
if (yearTime == 2) {
  let result2 = "Время года лето";
  console.log(result2);
}
if (yearTime == 3) {
  let result3 = "Время года весна";
  console.log(result3);
}
if (yearTime == 4) {
  let result3 = "Время года осень";
  console.log(result3);
}

// Задача 6
// Вводится натуральное число.Найти сумму четных цифр, входящих в его состав.

let testOne = prompt("Введите натуральнео число, лучше побольше");
console.log(testOne);
let testTwo = testOne.toString().split("");
console.log(testTwo);
let testThre;
testThre = testTwo.map((elements, index) => Number(elements));
console.log(testThre);
let testFour = 0;
for (let i = 0; i < testThre.length; i++) {
  testFour += testThre[i];
}
console.log(testFour);

// Задача 7
// Калькулятор.Хотя бы первую часть
// Написать программу, в которой вводятся два операнда Х и Y и
// знак операции(+, –, /, *). Вычислить результат Z в зависимости от знака.
// Предусмотреть реакции на возможный неверный знак операции, а также на
// ввод Y = 0 при делении.Организовать возможность многократных вычислений
// без перезагрузки программа(т.е.построить цикл).В качестве символа
// прекращения вычислений принять ‘0’.

function calcul(x, y) {}

//////////////////////////

//перебрать числа от 5 до 123 и вывести в консоль;

let i = 5;

do {
  i += 1;
  //console.log(i);
} while (i < 123);

// Вывести произведение чисел этого диапазона;

let mult = 1;

for (i = 5; i <= 123; i++) {
  mult = mult * i;
}
//console.log(mult);

//Вывести прозведение чётныйх чисел этого диопазона;

let chot = 1;

for (i = 5; i <= 123; i++) {
  if (i % 2 == 0) {
    chot = chot * i;
  }
}
//console.log(chot);

// Вывести сумму квадратов чётных чисел этого диопазона;

let = kvadrat = 0;
let = sumKva = 0;

for (i = 5; i <= 123; i++) {
  if (i % 2 == 0) {
    kvadrat = Math.pow(i, 2);
    sumKva = sumKva + kvadrat;
  }
}
//console.log(sumKva);
