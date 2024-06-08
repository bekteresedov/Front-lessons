// const Adam = {
//   name: "Baktar",
//   surname: "Asadov",
// };

// const Developer = Object.create(Adam);
// Developer.dil = "Java";

// // const Solider = Object.create(Developer);
// // Solider.silah = "M416";

// const Solider = { silah: "M416", __proto__: Developer };
// console.log(Solider.__proto__ == Developer);

// console.log(Solider);

// function Adam(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// const baktar = new Adam("Baktar", "Asad");
// const huseyn = new Adam("Huseyn", "Huseynov");

// Adam.prototype.age = 21;
// Adam.prototype.yemekYe = function (yemek) {
//   console.log(yemek);
// };

// console.log(baktar);
// console.log(huseyn);

Array.prototype.alma = "Alma";
Array.prototype.max = function () {
  return Math.max(...this);
};

const array = [12, 3, 4];
const array2 = [2, 3, 4];

console.log(array.max());
