// const users = [
//   {
//     id: 1,
//     name: "John",
//   },
//   {
//     id: 2,
//     name: "John 2",
//   },
// ];

// const render = () => {
//   setTimeout(() => {
//     const ul = document.querySelector("ul");
//     ul.innerHTML = users
//       .map(({ name }) => {
//         return `
//         <li>${name}</li>
//         `;
//       })
//       .join("");
//   }, 3000);
// };

// const addUser = (newUser, callback) => {
//   setTimeout(() => {
//     users.push(newUser);
//     callback();
//   }, 4000);
// };

// addUser(
//   {
//     id: 3,
//     name: "John 4",
//   },
//   render
// );
