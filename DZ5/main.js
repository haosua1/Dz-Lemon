//Нужно написать функцию, которая проверяет,
//являются ли две строки анаграммами,
//причем регистр букв не имеет значения.
//Учитываются лишь символы; пробелы или знаки
//препинания в расчет не берутся.

const isAnagram = (str1, str2) => {
  str1 = str1.replace(/[0-9]|\s+/g, "");
  str2 = str2.replace(/[0-9]|\s+/g, "");

  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnagram("anba", "naan"));

let pick = [1, 2, 4, 3];
let pick2 = "bana0n";
pick2 = pick2.replace(/[0-9]|\s+/g, "");

console.log(pick.sort());
console.log(pick2.split("").sort().join(""));

//Нужно написать функцию, принимающую строку в качестве аргумента
//и возвращающую количество гласных, которые содержатся в строке.
//Гласными являются «a», «e», «i», «o», «u».

const findVowels = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(findVowels("annushka"));

//Нужно написать функцию, которая возвращает n-ную запись
//в определенной последовательности, причем n — число, которое
//передается в качестве аргумента функции.

const fibonacci = (num) => {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }

  return result[num];
};

console.log(fibonacci(13));
