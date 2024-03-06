// // const factorial=(num, result)=> num == 1 ? result : factorial(num - 1, result * num);

// function factorial(num, result) {
//   if (num == 1) return result;
//   console.log(num,result);
//   return factorial(num - 1, result * num);
// }

// console.log(factorial(5, 1));

// result = 5 * 4 * 3 * 2 * 1;
// 5;

// const p = document.querySelector(".title");
// const art = document.querySelector("#art");
// const azal = document.querySelector("#azal");

// art.addEventListener("click", () => {
//   p.innerHTML = +p.innerHTML + 1;
// });

// azal.addEventListener("click", () => {
//   if (p.innerHTML == 0) {
//     alert("Olmaz");
//     return;
//   }
//   p.innerHTML = p.innerHTML - 1;
// });

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert(input.value);
});
