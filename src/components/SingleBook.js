/* eslint-disable react/prop-types */
import React from 'react';

const SingleBook = (props) => {
  const { genre, title, author } = props;

  return (
    <div className="single-book">
      <div className="single-book-div1">
        <p className="genre">{genre}</p>
        <h2>{title}</h2>
        <p>{author}</p>
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
};

export default SingleBook;
