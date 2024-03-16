// const btn = document.querySelector("#btn");
const body = document.querySelector("body");

const h2 = document.createElement("h2");

body.appendChild(h2);

// h2.innerText = "Hello, world!";
var text = "Salam";
h2.innerHTML = `<ul>
<li classs="foo" id="alma">
${text}
<img src="" alt=""/>
</li>
</ul>`;

// h2.classList.add("foo");
// h2.classList.remove("foo");

// h2.addEventListener("click", () => {
//   h2.classList.toggle("foo");
// });

// h2.setAttribute("id", "alma");
// alert(h2.getAttribute("id"));
