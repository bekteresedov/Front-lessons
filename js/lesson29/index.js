// let users = [
//   {
//     id: 1,
//     name: "John",
//     surname: "surname",
//   },
//   {
//     id: 2,
//     name: "Baktar",
//     surname: "surname2",
//   },
// ];

// function updateOneUser(userId, newUser) {
//   const findUserIndex = users.findIndex((user) => user.id === userId);
//   if (findUserIndex == -1) {
//     return {
//       success: false,
//       message: "User not found",
//     };
//   }
//   users[findUserIndex] = { ...users[findUserIndex], ...newUser };
//   return {
//     message: "User found",
//     succes: true,
//     data: users[findUserIndex],
//   };
// }

// console.log(updateOneUser(1, { name: "Tangiz" }));

// console.log(users);
// var user = {
//   id: 1,
//   name: "John",
//   surname: "surname",
// };
// const arry = [];
// for (var key in user) {
//   arry.push([[key, user[key]]]);
// }

// console.log(arry);

// function alma() {
//   alma();
// }
// alma();
// var start=0
// var end=10;
// for(var i=0;i<10;i++)
// function foo(num) {
//   if (num == 0) return;
//   console.log(num);
//   foo(num);
// }

// foo(10);

// var start=0
// var end=10;
// for(var i=0;i<10;i++)
// function foo(start, end) {
//   if (start >= end) return;
//   console.log(start);
//   start++;
//   foo(start, end);
// }

// foo(3, 10);

function saygac(start, end, sum) {
  if (start > end) return sum;
  return saygac(start + 1, end, sum + start);
}
console.log(saygac(1, 10, 0));
