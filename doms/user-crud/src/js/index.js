import { GET, POST } from "../utils/httpService.js";
import { renderUserList } from "../utils/view.js";

const newUserBtn = document.querySelector(".new-user-btn");
newUserBtn.addEventListener("click", () => {
  const absolute = document.querySelector(".absolute");
  absolute.style.display = "flex";

  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    absolute.style.display = "none";
  });
});

const formAdd = document.querySelector(".form");
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const { fullname, email, password, country, city } = formAdd.elements;
  const user = {
    fullname: fullname.value,
    email: email.value,
    password: password.value,
    address: {
      city: city.value,
      country: country.value,
    },
  };

  POST("/", user).then((response) => {
    if (!response.succes) alert(response.message);
  });
});
GET().then((response) => {
  const { succes, data } = response;
  if (succes) {
    renderUserList(data);
  }
});
