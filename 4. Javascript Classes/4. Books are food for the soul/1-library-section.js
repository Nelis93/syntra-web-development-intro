export class LibrarySection {
  #books;
  constructor() {
    // we create a placeholder for the actual books in the specialized classes
    // that will overwrite this variable.
    this.#books = [
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

  search(term) {
    return this.#books.filter((book) => {
      return book.title.toLowerCase().includes(term.toLowerCase());
    });
  }

  get all() {
    return this.#books;
  }

  get available() {
    return this.#books.filter((book) => {
      return book.inStock > book.borrowed;
    });
  }

  get borrowed() {
    return this.#books.filter((book) => {
      return book.borrowed > 0;
    });
  }
}

// here we can create as many sections as we want
export class FantasySection extends LibrarySection {
  constructor(app) {
    // call super so the LibrarySection functions will all be available
    super();

    // store the books that we have in stock
    this.#books = [
      {
        title: "Another Book",
        author: "Raymond E. Feist",
        ISBN: 4029,
        inStock: 20,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 0,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
      {
        title: "The Magician",
        author: "Raymond E. Feist",
        ISBN: 4030,
        inStock: 20,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 0,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
      {
        title: "The Magician",
        author: "Raymond E. Feist",
        ISBN: 4031,
        inStock: 18,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 20,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
    ];
  }
}
