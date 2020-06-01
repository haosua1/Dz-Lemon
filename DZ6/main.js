// Дан элемент #elem.Добавьте ему класс www

let classH1 = document.querySelector("#elem");
classH1.classList.add("www");

// Дан элемент #elem. Удалите у него класс www

classH1.classList.remove("www");

// Дан элемент #elem. Проверьте наличие у него класса www.

let classH2 = classH1.classList.contains("www");
console.log("содержит ли www наш elem:", classH2);

// Дан элемент #elem.Добавьте ему класс www,
//если его нет и удалите - если есть.

classH1.classList.toggle("zzz");
classH1.classList.toggle("qqq");

//Дан элемент #elem. Узнайте количество его классов.

let classH3 = classH1.classList.length;
console.log("Количество классов у елемента:", classH3);

//Дан элемент #elem.Выведите последовательно алертом его классы.

let classH4 = classH1.classList;

for (let classH5 of classH4) {
  alert(classH4, " ");
}

// Дан элемент #elem. Сделайте его красного цвета, размером 30px,
// добавьте ему границу.
