fetch("https://jsonplaceholder.org/users")
  .then((reponse) => {
    return reponse.json();
  })
  .then((users) => {
    return users[0];
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
