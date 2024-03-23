import {
  nameValidate,
  passwordValidate,
  repeatPasswordValidate,
  surnameValidate,
} from "../utils/validation.js";

const formRegisterBtn = document.querySelector(".form-register");
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
formRegisterBtn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  const { name, surname, password, repeatPassword } = formMain.elements;
  if (
    !name.value ||
    !surname.value ||
    !password.value ||
    !repeatPassword.value
  ) {
    formRegisterBtn.classList.toggle("right");
    formRegisterBtn.innerHTML = "hahah:)";
  } else {
    formRegisterBtn.innerHTML = "register";
  }
});

formRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const { name, surname, password, repeatPassword } = formMain.elements;
  ///validations
  const nameResult = nameValidate(name.value.trim());
  const surnameResult = surnameValidate(surname.value.trim());
  const passwordResult = passwordValidate(password.value.trim());
  const repeatPasswordResult = repeatPasswordValidate(
    repeatPassword.value.trim(),
    password.value.trim()
  );
  //   errr messages
  const errorName = document.querySelector("#error-name");
  const errorSurname = document.querySelector("#error-surname");
  const errorPassword = document.querySelector("#error-password");
  const errorRepeatPassword = document.querySelector("#error-repeat");

  if (!nameResult.success) {
    errorName.innerHTML = nameResult.message;
  } else {
    errorName.innerHTML = "";
  }
  if (!surnameResult.success) {
    errorSurname.innerHTML = surnameResult.message;
  } else {
    errorSurname.innerHTML = "";
  }
  if (!passwordResult.success) {
    errorPassword.innerHTML = passwordResult.message;
  } else {
    errorPassword.innerHTML = "";
  }
  if (!repeatPasswordResult.success) {
    errorRepeatPassword.innerHTML = repeatPasswordResult.message;
  } else {
    errorRepeatPassword.innerHTML = "";
  }
});
