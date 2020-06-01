// видимо промт это всегад строка

// let testNum = prompt("число1");
// console.log(Number.isInteger(testNum));

// let testNum2 = Number.isInteger(10.1);
// console.log(testNum2);

//преоброзования масисва данных их строкового в числовой после промта

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
