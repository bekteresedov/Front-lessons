const users = [
  {
    id: 1,
    name: "Baktar",
    surname: "Asadov",
    job: "Software Developer",
  },
  {
    id: 2,
    name: "Huseyn",
    surname: "Huseynov",
    job: "Front End Developer",
  },
  {
    id: 3,
    name: "Tangiz",
    surname: "Salmanova",
    job: "SQL Developer",
  },
];

const render = () => {
  setTimeout(() => {
    const ul = document.querySelector("ul");
    ul.innerHTML = users
      .map((user) => {
        return `
            <li>
            <h2>${user.name}</h2>
            <h3>${user.surname}</h3>
            <p>${user.job}</p>
            <li/>
            `;
      })
      .join("");
  }, 3000);
};

const addUser = (newUser, callback) => {
  setTimeout(() => {
    users.push(newUser);
    callback();
  }, 4000);
};

addUser(
  {
    id: 4,
    name: "John",
    surname: "Smith",
    job: "QA Tester",
  },
  render
);
