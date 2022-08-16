import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/Books/Books';

const SingleBook = (props) => {
  const {
    title, author, id,
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="single-book">
      <div className="single-book-div1">
        <p className="genre">Mumenya</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="single-book-options">
          <p>Comments</p>
          <button
            className="delete-btn"
            type="button"
            onClick={() => {
              dispatch(removeBook({ title, author, id }));
            }}
          >
            Remove
          </button>
          <p>Edit</p>
        </div>
      </div>
      <div>
        65% COMPLETED
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button className="update-progress-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default SingleBook;
