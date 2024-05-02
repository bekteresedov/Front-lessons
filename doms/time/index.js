const timer = setInterval(() => {
  console.log(" setInterval men calisiram");
}, 1000);

// setTimeout(() => {
//   console.log("setTimeout men calisiram");
// }, 1000);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  clearInterval(timer);
  //   clearTimeout
});
