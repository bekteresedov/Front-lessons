import { books } from "./data.js";

const fragment = window.location.hash.split("#").join("");
alert(window.location.hash.split("#").join(""));
const back = document.querySelector(".back");
const main = document.querySelector(".main");
back.addEventListener("click", () => {
  history.back();
});

const { bookName, authorName, price, pages, genre, language, image } =
  books.find((book) => book.id == fragment);

main.innerHTML = `
<section>
<div>
  <h2><span>Book name:</span> <span>${bookName}</span></h2>
  <h3>
    <span>Author name:</span>
    <span>${authorName}</span>
  </h3>
  <p>
    <span>Page:</span>
    <span>${pages}</span>
  </p>
  <p>
    <span>Genre:</span>
    <span>${genre}</span>
  </p>
  <p>
    <span>Language:</span>
    <span>${language}</span>
  </p>
  <p>
  <span>Price:</span>
  <span>${price}</span>
</p>
</div>
<div>
  <img
    src=${image}
    alt=""
  />
</div>
</section>
`;
