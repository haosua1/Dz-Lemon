let crud = 100;
let arr1 = [100, 150];

// if (crud >= 0) {
//   console.log(crud);
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

let arr = [100, 150, 151, 152, 135, 1354];

// let name = {
//   serName = "Karnaulksyi",
//   nameServer = "my Server",
// }

//console.log(name.serName);

let user = {
  create() {},
};

user.create();

//Строики и числа

let str = `hifi`;
let str1 = "It's my life";
let str2 = `It's my life`;

console.log(str + " " + str1);
console.log("1000 " + 1000);

let str3 = `dfjh
dfdf
dfdf
`;
console.log(str3);

let user1 = " Sasha ";
console.log("Hello " + user1 + " have a nice day!");
console.log(`Hello ${user1} have a nice day!`);

user1.toUpperCase;
console.log(user1.length);
console.log(user1[0]);

console.log(user1.charAt(1));

for (let index = 0; index < user1.length; index++) {
  console.log(user1[index]);
}

console.log(user1.concat(" ", str));
console.log(user1.includes("S"));

console.log(user1.endsWith("a"));
console.log(user1.startsWith("b"));

console.log(user1.repeat(10));
console.log(user1.slice(-2));
console.log(user1.trim());
console.log(user1.trimRight());
console.log(user1.padStart(101, "fuck "));

console.log(user1.toLowerCase());
console.log(user1.toUpperCase());

let arr99 = "hello world my name is";
console.log(arr99.split(" "));

// indexOff

//регулярка
const regex1 = /\w+/;
const regex2 = new RegExp("\\w+");

console.log(regex1);
// expected output: /\w+/

console.log(regex2);
// expected output: /\w+/

console.log(regex1 === regex2);
// expected output: false

let regx = new RegExp("/A-Z/");

// Поиск анаграммы, что слов читаеться точно так же анаграммой
// нижний регистр
// переворот
// сравнить

let she = "Anna";
let she1 = she.toLowerCase();

function reverseStr(she1) {
  return she1.split("").reverse().join("");
}
let she2 = reverseStr(she1);
console.log(reverseStr(she1));

if (she1 === she2) {
  console.log("Анаграмма");
} else {
  console.log("Не Анаграмма");
}

// ГоРодОк Задча 2 инвертировать регистр символов строки
// разбить на массив
// сравнить каждый символ
// иф елсе поменять регистр символа
// добавить символ в массив
