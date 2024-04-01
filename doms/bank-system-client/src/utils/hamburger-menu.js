export const hamburgerFunction = () => {
  const hamburgerBtn = document.querySelector(".kotlet");
  hamburgerBtn.addEventListener("click", () => {
    const ul = document.querySelector("ul");
    ul.classList.toggle("hamburger-open");
  });
};
