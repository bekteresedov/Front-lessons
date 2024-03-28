export function hamburgerFunction() {
  const hamburgerbtn = document.querySelector("kotlet");
  const ul = document.querySelector("ul");
  hamburgerbtn.addEventListener("click", () => {
    ul.style.display = "block";
    ul.classList.toggle("hamburger-open");
  });
}
