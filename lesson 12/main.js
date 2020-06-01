// let $ = function (selector) {
//   return document.querySelectorAll(selector);
// };

// console.log($("h1"));

//$(selector).действие();

// $("h1").hide();
// //console.log($("p"));

// console.log($(".h1"));
// $('p').hide();

// function sayHi(name, surname) {

//     let argument;
//     let scope = {
//         varib = d;
//     }

//     console.log('Hi' + name)

// }

// let obj = {
//     name: 'Mark',
//     getName() {
//         return this.name;
//     }
// }

// let obj = {
//   name: "Sasha",
//   function(params) {
//     console.log(getName());

//     function getName(params) {
//       return this.name;
//     }
//   },
// };

// let obj = {
//   name: "Sasha",
//   getName() {
//     return this.name;
//   },
// };

// let obj1 = {
//   name: "Dima",
// };

// console.log(obj.getName.call(obj1));
// //console.log(obj.getName.apply(obj1, "Donya"));
// console.log(obj.getName.apply(obj1, ["Donya"]));

function getFullName(name, surname) {
  console.log(arguments);
  console.log(arguments[0]);
  return name + " " + surname;
}

getFullName("Sasha", "Karnaulskyi");
