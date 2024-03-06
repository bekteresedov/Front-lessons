const input = document.querySelector("input");
const p = document.querySelector("p");
const art = document.querySelector("#art");
const az = document.querySelector("#az");

art.addEventListener("click", () => {
  if (!input.value || isNaN(input.value)) {
    alert("ok");
    return;
  }
  p.innerHTML = +input.value + +p.innerHTML;
});

az.addEventListener("click", () => {
  p.innerHTML = p.innerHTML - input.value;
});
