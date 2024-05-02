const min = document.querySelector("#min");
let count = 0;
let timer = setInterval(() => {
  count += 1;
  min.innerHTML = count;
}, 1000);

let isPaused = false;

const pause = document.querySelector("#pause");
const continueB = document.querySelector("#continue");
const reset = document.querySelector("#reset");

pause.addEventListener("click", () => {
  if (!isPaused) {
    clearInterval(timer);
    isPaused = true;
  }
});

continueB.addEventListener("click", () => {
  if (isPaused) {
    timer = setInterval(() => {
      count += 1;

      min.innerHTML = count;
    }, 1000);
    isPaused = false;
  }
});

reset.addEventListener("click", () => {
  count = -1;
});
