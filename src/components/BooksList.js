import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const BooksList = () => {
  const booksList = useSelector((state) => state.books);
  return (
    <ul className="books-list">
      {booksList.map((book) => (
        <li key={book.id}>
          <SingleBook title={book.title} author={book.author} id={book.id} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
