const mainPath = "http://localhost:3000";

export const GET = (url = "/") =>
  fetch(mainPath + url).then((data) => data.json());

export const POST = (url = "/", body) => {
  return fetch(mainPath + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((data) => data.json());
};

export const DELETE = (url = "/") =>
  fetch(mainPath + url, {
    method: "DELETE",
  }).then((data) => data.json());
