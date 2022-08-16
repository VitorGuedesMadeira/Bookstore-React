// actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return 'add a book';
    case REMOVE_BOOK:
      return 'remove a book';
    default:
      return state;
  }
};

export default booksReducer;

// action creators
export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});
