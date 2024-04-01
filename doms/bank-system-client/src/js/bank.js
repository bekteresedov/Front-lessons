import { hamburgerFunction } from "../utils/hamburger-menu.js";

hamburgerFunction();

const pushView = `
<div class="content">
<div class="content-container">
<h2 class="title">Pul Daxil et</h2>
<h4 class="sub-title">Meblegi daxil edin </h4>
<div class="operation-content">
<input id="push-input" type="number" class="input" />
<button id="push-btn" class="button" >Daxil Et</button>
</div>
</div>
</div>`;

const pullView = `
<div class="content">
<div class="content-container">
<h2 class="title">Pul Cekmek</h2>
<h4 class="sub-title">Meblegi daxil edin </h4>
<div class="operation-content">
<input id="pull-input" type="number" class="input" />
<button id="pull-btn" class="button" >Daxil Et</button>
</div>
</div>
</div>`;

const funList = document.querySelectorAll(".fun");
const view = document.querySelector(".view");
view.innerHTML = pushView;
const balance = document.querySelector("#balance");

funList.forEach((fun) => {
  fun.addEventListener("click", () => {
    let operator = fun.innerHTML;
    if (operator == "Push") {
      view.innerHTML = pushView;
    } else if (operator == "Pull") {
      view.innerHTML = pullView;
    } else if (operator == "Deposit") {
      view.innerHTML = `<h2>Deposit</h2>`;
    } else if (operator == "Credit") {
      view.innerHTML = `<h2>Credit</h2>`;
    }
  });
});

const pushBtn = document.querySelector("#push-btn");
pushBtn.addEventListener("click", () => {
  const pushInput = document.querySelector("#push-input");
  if (pushInput.value < 0) return;
  balance.innerHTML = Number(balance.innerHTML) + Number(pushInput.value);
  pushInput.value = "";
});

const pullBtn = document.querySelector("#pull-btn");
console.log(pushBtn);
pullBtn.addEventListener("click", () => {
  const pullInput = document.querySelector("#pull-input");
  if (pullInput.value < 0) return;
  balance.innerHTML = Number(balance.innerHTML) - Number(pullInput.value);
  pullInput.value = "";
});
