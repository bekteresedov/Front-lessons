const data = [
  {
    id: 1,
    name: "test",
    price: 20,
  },
  {
    id: 2,
    name: "test1",
    price: 20,
  },
  {
    id: 3,
    name: "test2",
    price: 20,
  },
  {
    id: 4,
    name: "test3",
    price: 20,
  },
  {
    id: 5,
    name: "test4",
    price: 20,
  },
  {
    id: 6,
    name: "test",
    price: 20,
  },
];

var list = document.querySelector("ul");
function render(pro) {
  list.innerHTML = pro.map((el) => {
    return ` <li>
        <h2>${el.name}</h2>
        <p>${el.price}</p>
      </li>`;
  });
}
render(data);

const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const fake = data.filter((e) => e.name.includes(input.value));
  console.log(fake);
  // if (!fake.length) {
  //   alert("Data is empty");
  //   return;
  // }
  render(fake);
});
