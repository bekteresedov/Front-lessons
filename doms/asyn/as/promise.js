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

const render = () => {
  setTimeout(() => {
    const ul = document.querySelector("ul");
    ul.innerHTML = users
      .map(({ name }) => {
        return `
          <li>${name}</li>
          `;
      })
      .join("");
  }, 3000);
};

const addUser = (newUser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(newUser);
      resolve();
    }, 4000);
  });
};

addUser({
  id: 3,
  name: "John 4",
})
  .then(() => {
    render();
  })
  .catch((error) => {
    console.error("Error adding user:", error);
  })
  .finally(() => {
    console.log("ok");
  });
