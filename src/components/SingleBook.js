/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/Books/Books';

const SingleBook = (props) => {
  const {
    title, author, item_id, category,
  } = props;
  const dispatch = useDispatch();

  const removingBook = () => {
    dispatch(removeBook({
      title, author, item_id, category,
    }));
  };
  // progress circle
  const [porcentage, setPorcentage] = useState(0);
  const changeProgress = (e) => {
    if (porcentage < 100 && e.target.id === item_id) {
      const progressCircular = document.querySelector(`.circular-progress-${item_id}`);
      progressCircular.style.background = `conic-gradient(#4395fc ${porcentage * 3.6}deg, #ededed 0deg)`;
      setPorcentage(porcentage + 1);
    }
  };

  return (
    <div className="single-book">
      <div className="single-book-div1">
        <p className="genre">{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="single-book-options">
          <p>Comments</p>
          <button
            className="delete-btn"
            type="button"
            onClick={removingBook}
          >
            Remove
          </button>
          <p>Edit</p>
        </div>
      </div>
      <div className="container">
        <div className={`circular-progress circular-progress-${item_id}`}>
          <span className="progress-value">{`${porcentage}%`}</span>
        </div>
      </div>
      <div className="update-div">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button id={item_id} className="update-progress-btn" type="button" onClick={changeProgress}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

SingleBook.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default SingleBook;
