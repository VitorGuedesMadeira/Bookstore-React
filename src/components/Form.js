import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/Books';

const Form = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');

  const addingBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title: titleName,
      author: authorName,
      item_id: uuidv4(),
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="books-form">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={addingBook} className="form-styles">
        <input type="text" value={titleName} onInput={(e) => setTitle(e.target.value)} placeholder="Book Title" required />
        <input type="text" value={authorName} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <button
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
