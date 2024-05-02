import { books } from "./data.js";

const filter = document.querySelector("#filter");
let card = {
  total: 0,
  data: [],
};

function add(BookId) {
  card.total++;
  const { id, image, price } = books.find((book) => book.id === BookId);
  card.data.push({
    id,
    image,
    count: 1,
    totalPrice: price,
  });
}
[...new Set(books.map((e) => e.genre))].forEach((genre) => {
  filter.innerHTML += `<option value=${genre}>${genre}</option>`;
});

render(books);

filter.addEventListener("change", (e) => {
  if (e.target.value == "All") {
    render(books);
  } else {
    const res = books.filter(({ genre }) => genre == e.target.value);
    render(res);
  }
});

function render(data) {
  const bookList = document.querySelector(".book-list");

  bookList.innerHTML = data
    .map((e) => {
      return `
        <div class="book read">
          <div data-id="${e.id}" class="cover">
            <img src=${e.image}>
          </div>
          <div class="description">
            <p class="title">${e.bookName}<br>
              <span class="author">${e.authorName}</span></p>
              <button data-id="${e.id}" class="absolute">Add to Card</button>
          </div>
          <span class="price">${e.price}$</span>
        </div>
    `;
    })
    .join("");
  const buttons = document.querySelectorAll(".absolute");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const id = e.target.getAttribute("data-id");
      addCard(id);
    });
  });

  const bookDetails = document.querySelectorAll(".cover");
  bookDetails.forEach((cover) => {
    cover.addEventListener("click", function (e) {
      const id = e.currentTarget.getAttribute("data-id");
      console.log(id);
      window.location.href = `./book-details.html#${id}`;
    });
  });
}

function addCard(id) {
  card.total++;
  const index = card.data.findIndex((e) => e.orderId === id);
  if (index != -1) {
    card.data[index].count++;
  } else {
    card.data.push({
      orderId: id,
      count: 1,
    });
  }

  const sup = document.querySelector("sup");
  sup.innerText = card.total;
  // var cardJSON = JSON.stringify(card);
  // localStorage.setItem("card", cardJSON);
  cardRender();
}

const cardBtn = document.querySelector(".card");
const basket = document.querySelector(".basket");

cardBtn.addEventListener("click", () => {
  basket.classList.toggle("show");
  cardRender();
});

function cardRender() {
  const data = [];
  card.data.forEach((cardItem) => {
    console.log(cardItem);
    var book = books.find((book) => book.id == cardItem.orderId);
    if (book) {
      data.push({
        id: cardItem.orderId,
        img: book.image,
        count: cardItem.count,
        total: book.price * cardItem.count,
      });
    }
  });
  const cards = document.querySelector(".card-list");
  cards.innerHTML = data.map((e, index) => {
    return `
  <li>
  <img
    src="${e.img}"
    alt=""
  />
  <span>${e.count}</span>
  <span>${e.total}$</span>
  <button data-id="${e.id}" class="d" >x</button>
</li>
  `;
  });
  const total = document.querySelector(".total");
  // total.innerHTML =
  const totals = data.reduce((acc, obj) => acc + obj.total, 0);
  total.innerHTML = totals + "$";

  const buttond = document.querySelectorAll(".d");
  const sup = document.querySelector("sup");

  buttond.forEach((element) => {
    element.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      let dd = card.data.find((d) => d.orderId == id).count;
      card.data = card.data.filter((d) => d.orderId !== id);
      card.total = card.total - dd;
      sup.innerText = card.total;
      cardRender();
    });
  });

  const clearBtn = document.querySelector("#clear");
  clearBtn.addEventListener("click", () => {
    card = {};
    cardRender();
  });
}
