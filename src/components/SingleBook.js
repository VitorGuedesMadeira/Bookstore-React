/* eslint-disable camelcase */
import React from 'react';
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
  // progress circle bar
  const circularProgress = document.querySelector('.circular-progress');
  const progressValue = document.querySelector('.progress-value');
  let progressStartValue = 0;
  const progressEndValue = 100;
  const speed = 20;

  const progress = setInterval(() => {
    progressStartValue += 1;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#4395fc ${progressStartValue * 3.6}deg, #ededed 0deg)`;

    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

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
        <div className="circular-progress">
          <span className="progress-value">0%</span>
        </div>
      </div>
      <div className="update-div">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button className="update-progress-btn" type="button">UPDATE PROGRESS</button>
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
