import { getData } from "./utils/httpService";
import { render } from "./utils/view";

getData("products").then((data) => {
  render(data);
});

getData("products/categoruy").then((data) => {
  render(data);
});

getData("products?limit=4").then((data) => {
  render(data);
});
