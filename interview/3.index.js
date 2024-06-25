const John = {
  name: "John",
  surname: "Johnli",
  address: {
    city: "Izmir",
    country: "Turkish",
  },
};

const John2 = JSON.parse(JSON.stringify(John));

John2.name = "John2";

John2.address.city = "Antalya";

console.log(John);
console.log(John2);
