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
