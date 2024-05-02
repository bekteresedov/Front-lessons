import { bookList } from "../mock/data.js";
import { UI } from "./UI.js";

const alma = null;
alma.innerHtml = UI.renderBooks(bookList);
