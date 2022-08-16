import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/Books';

const Form = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');

  return (
    <div className="books-form">
      <h3>ADD NEW BOOK</h3>
      <form className="form-styles">
        <input type="text" name="title" value={titleName} onInput={(e) => setTitle(e.target.value)} placeholder="Book Title" />
        <input type="text" name="author" value={authorName} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button
          type="button"
          onClick={() => {
            dispatch(addBook({
              title: titleName,
              author: authorName,
              id: uuidv4(),
            }));
            setTitle('');
            setAuthor('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
