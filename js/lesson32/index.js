// const users = [
//   {
//     name: "Baktar",
//     surname: "Asadov",
//   },
//   {
//     name: "Huseyn",
//     surname: "Huseynov",
//   },
//   {
//     name: "Tangiz",
//     surname: "Suleymanova",
//   },
// ];

// const body = document.querySelector("body");
// const ul = document.createElement("ul");
// body.append(ul);

// users.forEach((user) => {
//   const li = document.createElement("li");
//   ul.append(li);
//   li.setAttribute("class", "alma");
//   //   li.classList.add("alma");
//   li.innerHTML = user.name + " " + user.surname;
// });

// const head = document.querySelector("h1");
// head.classList.remove("head");

// head.addEventListener("click", () => {
//   head.classList.toggle("head");
// });

const h1 = document.querySelector("h1");
// h1.innerHTML = "Salam dunya";
// h1.innerText = "Salam dunya";
var s = 12;
h1.innerHTML = `
<ul>
<li class="head">${s}<li/>
</ul>
`;
