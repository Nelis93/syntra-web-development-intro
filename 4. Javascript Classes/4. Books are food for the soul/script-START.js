class LibrarySection {
  constructor() {
    // we create a placeholder for the actual books in the specialized classes
    // that will overwrite this variable.
    this.books = [];
  }

  search(term) {
    return this.books.filter((book) => {
      return book.title.toLowerCase().includes(term.toLowerCase());
    });
  }

  get all() {
    return this.books;
  }

  get available() {
    return this.books.filter((book) => {
      return book.inStock > book.borrowed;
    });
  }

  get borrowed() {
    return this.books.filter((book) => {
      return book.borrowed > 0;
    });
  }
  borrowBook(isbn) {
    this.books.find((book) => {
      book.ISBN === isbn;
    }).borrowed++;
  }
}

// here we can create as many sections as we want
class FantasySection extends LibrarySection {
  constructor(app) {
    // call super so the LibrarySection functions will all be available
    super();

    // store the books that we have in stock
    this.books = [
      {
        title: "A tale of two cities",
        author: "Charles Dickens",
        ISBN: 13518984,
        inStock: 20,
        bookPlacement: "Fiction|200|1",
        borrowed: 0,
        cover:
          "https://assets.matrubharti.com/cdni/book-cover/1588820931_017672000.jpg?w=700&q=50",
        desc: "definitely not a story about two cities",
      },
    ];
  }
}
class Library {
  constructor() {
    const state = {
      books: [],
    };
    this.state = new Proxy(state, {
      set: this.update,
    });
  }
  update(state, property, value) {
    console.log(`this is being changed: ${property} → ${value}`);
  }
}
class UI {
  #htmlToElement(htmlString) {
    const template = document.createElement("template");
    htmlString = htmlString.trim();
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }
  append(selector, html) {
    const article = this.#htmlToElement(html);
    return document.querySelector(selector).append(article);
  }
  bookCard(book) {
    return `<p>${book.title}</p>`;
  }
}
class App {
  #fantasySection;
  #ui;
  constructor() {
    this.#fantasySection = new FantasySection();
    this.#ui = new UI();
  }
  bootstrap() {
    const books = this.#fantasySection.all;
    books.forEach((book) => {
      this.#ui.append(".books", this.#ui.bookCard(book));
    });
    console.log(books);
  }
}

const app = new App();
app.bootstrap();
