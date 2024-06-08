const tikla = document.querySelector("button");

tikla.onclick = function () {
  console.log("onclick 1");
};

tikla.onclick = function () {
  console.log("onclick 2");
};

tikla.addEventListener("click", function () {
  console.log("addEventListener 1");
});

tikla.addEventListener("click", function () {
  console.log("addEventListener 2");
});
