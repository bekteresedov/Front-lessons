const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
ham.addEventListener("click", function () {
  console.log("Ok");
  nav.classList.toggle("block");
  nav.classList.toggle("alma");
});
