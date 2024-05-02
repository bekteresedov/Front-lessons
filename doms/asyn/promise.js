// const users = [
//   {
//     id: 1,
//     name: "Baktar",
//     surname: "Asadov",
//     job: "Software Developer",
//   },
//   {
//     id: 2,
//     name: "Huseyn",
//     surname: "Huseynov",
//     job: "Front End Developer",
//   },
//   {
//     id: 3,
//     name: "Tangiz",
//     surname: "Salmanova",
//     job: "SQL Developer",
//   },
// ];
// const render = (user) => {
//   setTimeout(() => {
//     const { name, surname, job } = user;
//     const ul = document.querySelector("ul");
//     ul.innerHTML = `
//                     <li>
//                     <h2>${name}</h2>
//                     <h3>${surname}</h3>
//                     <h4>${job}</h4>
//                     <li/>
//                     `;
//   }, 4000);
// };
// const findById = (id) => {
//   return new Promise((resolve, reject) => {
//     const findUser = users.find((user) => user.id === id);
//     if (findUser) {
//       resolve(findUser);
//     } else {
//       reject("User not found");
//     }
//   });
// };

// findById(2)
//   .then((user) => {
//     render(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("men her zaman calisiram");
//   });
