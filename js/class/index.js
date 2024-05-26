// function User(name, surname, email, password, age, address) {
//   this.name = name;
//   this.email = email;
//   this.surname = surname;
//   this.age = age;
//   this.address = address;
// }

// const user = new User("name", "surname", "email", "password", "age", "address");
// const user = new User("name", "surname", "email", "password", "age", "address");
// const user = new User("name", "surname", "email", "password", "age", "address");

// console.log(user);

// class User {
//   constructor(name, surname, email, age, address) {
//     this.name = name;
//     this.email = email;
//     this.surname = surname;
//     this.age = age;
//     this.address = address;
//   }
// }

// const user = new User("name", "surname", "email", "age", "address");
// user.yemekYe("As");

// console.log(user);

// class Apple {
//   constructor() {
//     console.log("Hello");
//   }
// }

// const alma = new Apple();

// class Car {
//   constructor(ad, mator) {
//     this.ad = ad;
//     this.mator = mator;
//   }
// }

// class Bmw extends Car {
//   constructor(marka, ad, mator) {
//     this.marka = marka;
//     new Car(ad, mator);
//   }
// }

// class Nissan extends Car {
//   constructor(teker, ad, mator) {
//     this.teker = teker;
//     super(ad, mator);
//   }
// }

class MyError extends Error {
  constructor(message) {
    super(message);
  }
}
function sum(a, b = 0) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new MyError("ancaq reqem daxil ede bilersen");

  return a + b;
}

try {
  console.log(sum(2, "8"));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
}
