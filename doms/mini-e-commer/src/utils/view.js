export function render(data) {
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
