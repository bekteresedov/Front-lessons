import { DELETE } from "./httpService.js";

export const renderUserList = (data) => {
  const userList = document.querySelector(".user-list");
  userList.innerHTML = data
    .map((user) => {
      const { id, email, password, fullname, address } = user;
      const { city, country } = address;

      return `
   <tr>
      <td>${id}</td>
      <td>${email}</td>
      <td>${fullname}</td>
      <td>${password}</td>
      <td>${city}</td>
      <td>${country}</td>
      <td>
      <button data-id="${id}" class="delete">delete</button>
      <button>edit</button>
      </td>
    </tr>
    `;
    })
    .join("");

  const deleteBtns = document.querySelectorAll(".delete");
  let fakeData = data;
  deleteBtns.forEach((element) => {
    element.addEventListener("click", () => {
      const getId = element.getAttribute("data-id");
      DELETE("/" + getId).then((response) => {
        if (response.succes) {
          fakeData = fakeData.filter((user) => user.id != getId);
          renderUserList(fakeData);
        }
      });
    });
  });
};
