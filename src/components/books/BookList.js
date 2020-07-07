import React, { useState, useEffect } from "react";
import * as bookApi from "../../api/bookApi";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookApi.getBooks().then((response) => {
      setBooks(response);
    });
  }, []);

  return (
    <div>
      <ul>
        {books.map((book) => {
          return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
