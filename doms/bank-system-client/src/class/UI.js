export class UI {
  static renderBooks(books) {
    return books.map((e) => {
      return `
        <div>${e.title}<div/>
        `;
    });
  }
}
