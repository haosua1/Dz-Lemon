let one = document.querySelector(".one");

one.style.width = "150px";
one.style.paddingBottom = "40px";

//console.log(one.style);

one.classList.add("two", "three"); //
one.classList.remove("three");

const toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  this.classList.toggle("three");
};

// Атрибуты data

console.log(one.getAttribute("data"));
console.log(document.querySelectorAll("link")[1].getAttribute("href"));

one.setAttribute("data-num", 6);

let elec = document.querySelectorAll(".elec");

// for (let i = 0; i < elec.length; i++) {
//   elec[i].onclick = function () {
//     let ampH = document.querySelector("ampH").vaiue;
//     let amount = this.getAttribute("data");
//     console.log(ampH * amount);
//   };
// }

elec.onclick = function () {
  console.log({ kek });
};

let but = document.querySelector("kek");
console.log({ but, kek });
