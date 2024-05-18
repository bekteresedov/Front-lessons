fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    render(data);
  })
  .catch((err) => {
    console.log(err);
  });

function render(data) {
  const body = document.querySelector("body");
  body.innerHTML = data
    .map((item) => {
      const { image, title, description } = item;
      return `
        <div>
        <h2>${title}</h2>
        <img src="${image}" alt="" />
        <p>${description}</p>
      </div>
        `;
    })
    .join("");
}
