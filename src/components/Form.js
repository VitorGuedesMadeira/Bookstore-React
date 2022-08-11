import React from 'react';

const Form = () => (
  <div className="books-form">
    <h3>ADD NEW BOOK</h3>
    <form className="form-styles">
      <input placeholder="Book Title" />
      <input placeholder="Author" />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
