export const getData = (url) => {
  return fetch(url).then((res) => {
    return res.json();
  });
};
