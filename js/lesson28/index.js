// var Bmw = {
//   ad: "Bmw",
//   reng: "Mavi",
//   mator: 2.7,
// };

// var { ad, mator, reng } = Bmw;
// var bmw2 = { ...Bmw };

// Object.freeze(Car);
// Car.foo = "r33434";

// var Huseyn = {
//   name: "Huseyn",
//   surname: "Huseynov",
//   age: 30,
// };

// var Tangiz = {
//   name: "Tangiz",
//   surname: "Salamanov",
//   age: 23,
// };
var array = [];
function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.foo = function () {
    return "alma";
  };
}

// array.push(new User("Huseyn", "Huseynov", 30));
// array.push(new User("Tangiz", "Salamnova", 23));

// array.push(new User("tangiz", "test", 30));
// console.log(array);

// array.forEach((user) => {
//   console.log(user.name);
// });
// console.log(huseyn);
// var say = prompt("sayi daxil ele");
// var i = 1;
// const users = [];
// function User(id, name, surname, age) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }
// while (i <= say) {
//   users.push(new User(i, prompt("enter name"), prompt("enter surname"),  prompt("enter age")));
//   i++;
// }

// console.log(users);
