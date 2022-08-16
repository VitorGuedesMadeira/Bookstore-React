// actions
const ADD_BOOK = 'bookstore-react/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/books/REMOVE_BOOK';

// reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
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
