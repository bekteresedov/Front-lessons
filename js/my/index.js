// var array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// // array = array.toString();
// array.pop("_");

// console.log(array);

// var array = [];

// var count = Number(prompt("Enter a size"));

// for (let index = 0; index < count; index++) {
//   var a = prompt("Enter value: ");
//   array.push(a);
// }

// alert(array);

// var lastIn = Number(prompt("last index"));
// var m = (nextIn = Number(prompt("index")));

// var newArray = [];

// for (var i = lastIn; i < nextIn; i++) {
//   newArray.push(array[i]);
// }

// alert(newArray);

// var username = "Huseyn";
// var password = "Huseyn123";
// while (true) {
//   var newUser = prompt("Enter username: ");
//   var newPass = prompt("Enter username: ");

//   if (newUser == username && password == newPass) {
//     alert("Welcome");
//     break;
//   }
// }

// var count = 0;
// for (let index = 2; index < 20; index += 2) {
//   count++;
// }

// console.log(count);
const result = document.querySelector("#result");
const inp = document.querySelector("#number");
const btn = document.querySelector("#onclick");

var sum = (start, topla) => {
  return start == 0 ? topla : sum(start - 1, topla + start);
};
btn.addEventListener("click", () => {
  result.innerHTML = sum(Number(inp.value), 0);
  inp.value = result.innerHTML;
});
