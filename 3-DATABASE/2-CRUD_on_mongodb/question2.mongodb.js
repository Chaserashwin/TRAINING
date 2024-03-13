// Assume you are working on a database

use("library");

db.books.insertMany([
  {
    title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    Genre: "Fiction",
    Year: 1960,
  },
  {
    title: "1984",
    Author: "George Orwell",
    Genre: "Science Fiction",
    Year: 1949,
  },
  {
    title: "The Great Gatsby",
    Author: "Classics",
    Year: 1925,
  },
]);
