const url = "http://localhost:3000";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = result.data.map((user) => {
      const { _id, fullname, email, password, address } = user;
      const { city, country } = address;
      return `<tr>
      <td>${_id.slice(10, 15)}</td>
      <td>${email}</td>
      <td>${fullname}</td>
      <td>${password}</td>
      <td>${city}</td>
      <td>${country}</td>
      <td>
      <button data-id="${_id}" class="delete">delete</button>
      <button>edit</button>
      </td>
    </tr>`;
    });

    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((element) => {
      element.addEventListener("click", () => {
        handleDelete(element.getAttribute("data-id"));
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

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
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

const handleDelete = (id) => {
  fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.success) {
        // render()
      }
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
