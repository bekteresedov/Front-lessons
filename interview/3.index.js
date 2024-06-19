const John = {
  name: "John",
  surname: "Johnli",
  address: {
    city: "Izmir",
    country: "Turkish",
  },
};

const John2 = John;

John2.name = "John2";

John2.address.city = "Antalya";

console.log(John);
console.log(John2);
