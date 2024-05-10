// const set = new Set();
// set.add(12);
// set.add(13);
// set.add(13);

// const array = [...set];
// console.log(array[0]);

// const array = [22, 33, 22, 33];
// const uniqueArray = [...new Set(array)];

// set.delete(12);
// set.size
// set.has(12);
// set.forEach((e) => console.log(e));
// console.log(set);
// const array = [];
// array.push(12);
// array[12];

// const set = new WeakSet();
// const ob = {
//   name: "foo",
// };
// set.add(ob);
// set.add(12);

// console.log(set);

// const map = new Map();
// const map = new WeakMap();
// map.set("key", "deyer");
// map.set({}, "deyer");

// console.log(map);

// map.set("name", "Baktar");
// map.set("name2", "Baktar2");

// console.log(map.get("name"));
// console.log(map.has("name"));
// console.log(map.size);
// console.log(map.);

// map.forEach((e, k) => console.log(e, k));
// const map = new Map();
// map.set(1, [
//   {
//     name: "Beyaz geceler",
//   },
//   {
//     name: "Qumarbaz",
//   },
// ]);

// console.log(map.get(1));
// 111
// const user = {
//   name: "baktar",
//   surname: "asadov",
//   address: {
//     city: "Baku",
//     country: "Turkish",
//   },
//   //   33
// };

// 112
// shallow copy
// const user2 = { ...user };
// const user2 = Object.assign({}, user);
// user2.address 33
// and deep copy
// const user2 = JSON.parse(JSON.stringify(user));
// user2.name = "huseyn";
// user.address.city = "Kurdamir";
// console.log(user);
// console.log(user2);
// const string = JSON.stringify(user);
// console.log(JSON.parse(string));

class MyError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
throw new MyError("Invalid", 501);
