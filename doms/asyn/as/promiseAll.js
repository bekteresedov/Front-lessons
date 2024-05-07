const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "John 2",
  },
];

const findUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((d) => d.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 3000);
  });
};

const ul = document.querySelector("ul");
ul.innerHTML = "<h1>Loading...</h1>";
findUser(2)
  .then((data) => {
    return data.name;
  })
  .then((armud) => {
    return armud[0];
  })
  .then((name) => {
    ul.innerHTML = `<h1>${name}</h1>`;
  })
  .catch((err) => {
    ul.innerHTML = `<h1>Error ${err}</h1>`;
  })
  .finally((aaaa) => {
    console.log("men her zaman isleyirem");
    // ul.innerHTML = "";
  });
