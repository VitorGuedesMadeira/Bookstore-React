/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const SingleBook = (props) => (
  <div className="single-book">
    <div className="single-book-div1">
      <p className="genre">{props.genre}</p>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <div className="single-book-options">
        <p>Comments</p>
        <p>Remove</p>
        <p>Edit</p>
      </div>
    </div>
    <div>
      65% COMPLETED
    </div>
    <div>
      <p>CURRENT CHAPTER</p>
      <p>Chapter 17</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

export default SingleBook;
