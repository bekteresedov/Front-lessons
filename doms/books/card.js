import { books } from "./data.js";

var storedCardJSON = localStorage.getItem("card");

var storedCard = JSON.parse(storedCardJSON);
var matchingBooks = [];
storedCard.data.forEach((cardItem) => {
  console.log(cardItem);
  var book = books.find((book) => book.id == cardItem.orderId);
  if (book) {
    matchingBooks.push({
      ...book,
      extra: { count: cardItem.count, total: book.price * cardItem.count },
    });
  }
});

render(matchingBooks);

function render(match) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = match.map(
    ({ id, bookName, extra, price, pages, genre, language, image }) => {
      return `  <tr>
        <th>${id}</th>
        <th>
        <img src="${image}"/>
        </th>
        <td>${bookName}</td>
        <td>${extra.count}</td>
        <td>${extra.total}</td>
        <td>
          <button>cancel</button>
        </td>
      </tr>`;
    }
  );
}
