const result = document.querySelector("#result");
const inp = document.querySelector("#number");
const btn = document.querySelector("#onclick");

var sum = (start, topla) =>
  start == 0 ? topla : sum(start - 1, topla + start);
btn.addEventListener("click", () => {
  var result = sum(Number(inp.value), 0);
  result.innerHTML = result;
  inp.value = result;
});
