const newUserBtn = document.querySelector(".new-user-btn");
newUserBtn.addEventListener("click", () => {
  const absolute = document.querySelector(".absolute");
  absolute.style.display = "flex";
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    absolute.style.display = "none";
  });
});
