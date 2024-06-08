// promise all method
const getUsers = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("User List");
  }, 1000);
});

const getPosts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Post List");
  }, 2000);
});

const getComments = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Comment List");
  }, 3000);
});

// getUsers.then((s) => {
//   console.log(s);
// });
// getPosts.then((s) => {
//   console.log(s);
// });
// getComments.then((s) => {
//   console.log(s);
// });
// Promise.all([getUsers, getComments, getPosts])
//   .then((results) => {
//     console.log("All promises resolved:", results);
//   })
//   .catch((error) => {
//     console.error("At least one promise rejected:", error);
//   });

// promise race method

// const getUsers = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("User List");
//   }, 1000);
// });

// const getPosts = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Post List");
//   }, 2000);
// });

// const getComments = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Comment List");
//   }, 3000);
// });

Promise.race([getUsers, getComments, getPosts])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });
