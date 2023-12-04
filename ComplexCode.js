/* Filename: ComplexCode.js */

// This code demonstrates a complex implementation using JavaScript.
// It simulates a bookstore management system with various functionalities such as adding books, listing books, searching by title, author, etc.

// Book class representing a book object
class Book {
  constructor(title, author, genre, publicationYear, price, quantity) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publicationYear = publicationYear;
    this.price = price;
    this.quantity = quantity;
  }
}

// Bookstore class representing the bookstore
class Bookstore {
  constructor() {
    this.books = [];
  }

  // Method to add a book to the bookstore
  addBook(book) {
    this.books.push(book);
  }

  // Method to list all books in the bookstore
  listBooks() {
    console.log("Listing all books:");
    this.books.forEach((book) => {
      console.log(`
        Title: ${book.title}
        Author: ${book.author}
        Genre: ${book.genre}
        Publication Year: ${book.publicationYear}
        Price: ${book.price}
        Quantity: ${book.quantity}
      `);
    });
  }

  // Method to search books by title
  searchByTitle(title) {
    const matchingBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );

    console.log(`Matching books with title "${title}":`);
    matchingBooks.forEach((book) => {
      console.log(`- ${book.title}`);
    });
  }

  // Method to search books by author
  searchByAuthor(author) {
    const matchingBooks = this.books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );

    console.log(`Matching books by author "${author}":`);
    matchingBooks.forEach((book) => {
      console.log(`- ${book.title}`);
    });
  }

  // Method to calculate the total value of the bookstore inventory
  getInventoryValue() {
    let totalValue = 0;

    this.books.forEach((book) => {
      totalValue += book.price * book.quantity;
    });

    console.log(`Total inventory value: $${totalValue.toFixed(2)}`);
  }
}

// Create a new instance of Bookstore
const myBookstore = new Bookstore();

// Add books to the bookstore
myBookstore.addBook(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925, 9.99, 10)
);
myBookstore.addBook(
  new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960, 12.99, 5)
);
myBookstore.addBook(
  new Book("1984", "George Orwell", "Science Fiction", 1949, 7.99, 20)
);

// List all books in the bookstore
myBookstore.listBooks();

// Search for books by title
myBookstore.searchByTitle("the");

// Search for books by author
myBookstore.searchByAuthor("scott");

// Get the total value of the bookstore inventory
myBookstore.getInventoryValue();
...

// More code and functionalities can be added as needed

// End of code