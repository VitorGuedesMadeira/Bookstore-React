/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/Books/Books';
import SingleBook from './SingleBook';

const BooksList = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <ul className="books-list">
      {booksList.map((book) => (
        <li key={book.item_id}>
          <SingleBook title={book.title} author={book.author} item_id={book.item_id} category={book.category} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
