import React from 'react';
import SingleBook from './SingleBook';

const BooksList = () => (
  <div className="books-list">
    <SingleBook genre="Action" title="The Hunger Games" author="Suzanne Collins" />
    <SingleBook genre="Fiction" title="Harry Potter" author="J.K.Rowling" />
    <SingleBook genre="Fiction" title="Harry Potter" author="J.K.Rowling" />
    <SingleBook genre="Fiction" title="Harry Potter" author="J.K.Rowling" />
  </div>
);

export default BooksList;
