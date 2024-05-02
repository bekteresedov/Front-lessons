const btn = document.querySelector("button");
const not = document.querySelector(".not");
btn.addEventListener("click", () => {
  not.style.display = "block";
  setTimeout(() => {
    not.style.display = "none";
  }, 3000);
});
