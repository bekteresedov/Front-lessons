const John = {
  name: "John",
  surname: "Johnli",
  address: {
    city: "Izmir",
    country: "Turkish",
  },
};

// Object.freeze(John); //all
// Object.seal(John); //
// Object.preventExtensions()
delete John.address;

console.log(John);
