// const user = {
//   name: "John",
//   age: 36,
// };

// const user2 = {
//   name: "Baktar",
//   age: 36,
// };

// function global(text, t) {
//   console.log(`${this.name} ${text} ${t}`);
// }

// var copyGlobal = global.bind(user);
// var copyGlobal2 = global.bind(user2);

// copyGlobal("Welcome", 21);
// copyGlobal2("Welcome");

// global.call(user, "welcome", 27);
// global.apply(user, ["welcome", 27]);

// console.log(user2.getName("Welcome"));

//

// var user = {
//   name: "Welcome",
//   age: 23,
// };

// console.log(Object.entries(user));
// const kitab = {
//   id: 1,
//   title: "Qumarbaz",
//   seyfeSayi: 180,
//   tip: "Mini klassika",
//   umumiMelumat: "eweuerueriutuitueu43r2iwefoieoifoiweoergergrthtrhtrh56",
//   yazar: {
//     id: 1,
//     name: "fyoder",
//     surname: "kafka",
//   },
// };

// const user = {
//   name: "kafka",
//   age: 28,
// };

// Object.freeze(user);  sabit hala getirir.
// Object.seal(user);    deyeri  deyise bilirik
// Object.preventExtensions(user); hamsi mumkindir amma yeni ozellik elave ede bilmirik.

// user.surname = "asadov";
// user.name = "baktar";
// delete user.age;

// console.log(user);
