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
<button id="pull-btn" class="button" >Pull</button>
</div>
</div>
</div>`;
const depositView = `
<div class="content">
<div class="content-container">
<h2 class="title">Depozit</h2>
<h4 class="sub-title">Meblegi daxil edin </h4>
<p class="depozit">   1 to 5% | 2 to 10% | 5 to 12% | 10 to 15%</p>
<div class="operation-content">
<select name="" id="select-credit" style="margin-top: 5px">
 <option >1 year</option>
 <option >2 year</option>
 <option >5 year</option>
 <option >10 year</option>

 </select>
<input id="pull-input" type="number" class="input" />
<button id="pull-btn" class="button" >Pull</button>
</div>
</div>
</div>`;

const creditView = `
<div class="content">
<div class="content-container">
<h2 class="title">Depozit</h2>
<h4 class="sub-title">Meblegi daxil edin </h4>
<p class="depozit">   1 to 5% | 2 to 10% | 5 to 12% | 10 to 15%</p>
<div class="operation-content">
<select name="" id="select-credit" style="margin-top: 5px">
 <option >1 year</option>
 <option >2 year</option>
 <option >5 year</option>
 <option >10 year</option>

 </select>
<input id="pull-input" type="number" class="input" />
<button id="pull-btn" class="button" >Pull</button>
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
      const pushBtn = document.querySelector("#push-btn");
      pushBtn.addEventListener("click", () => {
        const pushInput = document.querySelector("#push-input");
        if (pushInput.value < 0) return;
        balance.innerHTML = Number(balance.innerHTML) + Number(pushInput.value);
        pushInput.value = "";
      });
    } else if (operator == "Pull") {
      view.innerHTML = pullView;
      const pullBtn = document.querySelector("#pull-btn");
      pullBtn.addEventListener("click", () => {
        const pullInput = document.querySelector("#pull-input");
        if (pullInput.value < 0) return;
        balance.innerHTML = Number(balance.innerHTML) - Number(pullInput.value);
        pullInput.value = "";
      });
    } else if (operator == "Deposit") {
      view.innerHTML = depositView;
    } else if (operator == "Credit") {
      view.innerHTML = creditView;
    }
  });
});
