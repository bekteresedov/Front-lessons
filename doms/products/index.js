const data = [
  {
    id: 1,
    name: "test",
    price: 20,
  },
  {
    id: 2,
    name: "test1",
    price: 10,
  },
  {
    id: 3,
    name: "test2",
    price: 30,
  },

  {
    id: 5,
    name: "test4",
    price: 100,
  },
  {
    id: 6,
    name: "test",
    price: 20,
  },
  {
    id: 4,
    name: "test3",
    price: 90,
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

const sort = document.querySelector("#sort");
sort.addEventListener("change", (e) => {
  let fakeData = [...data];

  if (e.target.value == "asc") {
    fakeData.sort((a, b) => a.price - b.price);
    render(fakeData);
  } else if (e.target.value == "desc") {
    fakeData.sort((a, b) => b.price - a.price);
    render(fakeData);
  } else {
    render(data);
  }
});
