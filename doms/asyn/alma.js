// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((dat) => console.log(dat));

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// }

// async function getData() {
//   const res = await (
//     await fetch("https://jsonplaceholder.typicode.com/todos")
//   ).json();
//   console.log(res);
// }

// getData();

(async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();
  console.log(res);
})();

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const jsondata = await response.json();
//   } catch (error) {
//     console.log("Error Fetching data ", error);
//   } finally {
//   }
// };
