const John = {
  name: "John",
  surname: "Johnli",
};

const John2 = { ...John }; // Object.assign(John)

John2.name = "John2";

console.log(John, John2);
