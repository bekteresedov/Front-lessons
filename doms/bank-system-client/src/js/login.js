import { nameValidate, passwordValidate } from "../utils/validation.js";

const formLoginBtn = document.querySelector(".form-login");
const formMain = document.querySelector(".form-main");
const hiddenBtn = document.querySelector(".form-hidden");
const passwordInput = document.querySelector("#password");
hiddenBtn.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});
formLoginBtn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  const { name, password } = formMain.elements;
  if (!name.value || !password.value) {
    formLoginBtn.classList.toggle("right");
    formLoginBtn.innerHTML = "hahah:)";
  } else {
    formLoginBtn.innerHTML = "login";
  }
});
formLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const { name, password } = formMain.elements;
  //   ///validations
  const nameResult = nameValidate(name.value.trim());
  const passwordResult = passwordValidate(password.value.trim());
  //   //   errr messages
  const errorName = document.querySelector("#error-name");
  const errorPassword = document.querySelector("#error-password");
  if (!nameResult.success) {
    errorName.innerHTML = nameResult.message;
  } else {
    errorName.innerHTML = "";
  }

  if (!passwordResult.success) {
    errorPassword.innerHTML = passwordResult.message;
  } else {
    errorPassword.innerHTML = "";
  }
  const errorServer = document.querySelector("#error-server");

  if (nameResult.success && passwordResult.success) {
    const oldName = localStorage.getItem("name");
    const oldPassword = localStorage.getItem("password");

    if (oldName == name.value && oldPassword == password.value) {
      errorServer.innerHTML = "";
      window.location.href = "./bank.html";
    } else {
      errorServer.innerHTML = "Passoword ve ya name Sehvdir!";
    }
  }
});
