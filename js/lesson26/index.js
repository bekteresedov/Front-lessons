// let a, b, c;
// a = 12;
// b = 23;
// c = 43;

// console.log(a);
// console.log(b);
// console.log(c);

// var user = {
//   name: "baktar",
//   surname: "asadov",
//   age: 13,
//   yeyir: () => "men yeyirem",
// };

// var { age } = user;
// var name=user.name;
// var surname=user.surname;
// var name, surname,age;
// name=user.name;
// surname=user.surname;
// age=user.age;

// console.log(name);
// console.log(surname);
// console.log(age);
// console.log(yeyir());
// console.log(name);

// function test() {
//   return "salam";
// }

// console.log(test);

// function validation(user) {
//   const { name,surname,age } = user;
//   const name=user.username
//   const surname = user.surname
//   const age=user.age
// }
// const array = ["alma", "armud", "gilas"];
// // const alma = array[0];

// let [t, z, v] = array;

// console.log(y);
// console.log(x);
// console.log(y);
// console.log(z);
// var name = 12;
// function test(a) {
//   console.log(name, a);
// }

// var sur = {
//   name: "test",
// };

// test.call(sur, 12);
// test.apply(sur, [12]);
// let f = test.bind(sur);
// f(12);

// var name = "asad";
// var user = {
//   name: "beki",
//   test: function () {
//     console.log(this.name);
//   },
//   test2: () => {
//     console.log(this.name);
//   },
// };

// user.test();
// user.test2.call(user);

// const users = [
//   {
//     name: "John",
//     birth: 1990,
//   },
//   {
//     name: "Huseyn",
//     birth: 2000,
//   },
// ];

// const year = 2024;

// users.forEach((user) => {
//   user.age = year - user.birth;
//   delete user.birth;
// });

// console.log(users);
var surname = "window surname";
const user = {
  name: "John",
  surname: "objext surname",
  getSurname1: function () {
    console.log(this);
    return this.surname;
  },
  getSurname2: (a) => {
    return this.surname;
  },
};
// 111
console.log(user.getSurname1());
console.log(user.getSurname2());
