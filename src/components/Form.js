import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/Books';

const Form = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');
  const [categoryName, setCategory] = useState('');

  const addingBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title: titleName,
      author: authorName,
      item_id: uuidv4(),
      category: categoryName,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="books-form">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={addingBook} className="form-styles">
        <input type="text" value={titleName} onInput={(e) => setTitle(e.target.value)} placeholder="Book Title" maxLength="40" required />
        <input type="text" value={authorName} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" maxLength="40" required />
        <select
          className="form-control"
          name="list"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        >
          <option value="">Category</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Historical">Historical</option>
          <option value="Romance">Romance</option>
          <option value="Western">Western</option>
          <option value="Bildungsroman">Bildungsroman</option>
          <option value="Speculative Fiction">Speculative Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Magical Realism">Magical Realism</option>
          <option value="Realist Literature">Realist Literature</option>

        </select>
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
