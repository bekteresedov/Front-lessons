// function step1(callback) {
//   setTimeout(function () {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(function () {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(function () {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }

// step1(function () {
//   step2(function () {
//     step3(function () {
//       console.log("All steps completed");
//     });
//   });
// });

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

const posts = [
  {
    userId: 2,
    posts: [
      {
        id: 1,
        text: "John",
      },
      {
        id: 1,
        text: "John",
      },
    ],
  },
];

const getUser = (id, getPost) => {
  setTimeout(() => {
    const user = users.find((u) => u.id == id);
    getPost(user.id);
  }, 3000);
};

const getPost = (id) => {
  setTimeout(() => {
    const user = posts.find((p) => p.userId == id);
    console.log(user);
  }, 4000);
};

getUser(1);
