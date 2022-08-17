// actions
const ADD_BOOK = 'bookstore-react/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore-react/books/GET_BOOK';

const initialState = [];

// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.book.item_id);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;

// action creators
export const addBook = (book) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vXzWCTDOZME3IDzzfJXJ/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  }).then(dispatch({
    type: ADD_BOOK,
    book,
  }));
};

export const removeBook = (book) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vXzWCTDOZME3IDzzfJXJ/books/${book.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(dispatch({
    type: REMOVE_BOOK,
    book,
  }));
};

export const getBooks = () => async (dispatch) => {
  const booksFetch = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vXzWCTDOZME3IDzzfJXJ/books/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((data) => data.json());

  const books = [];
  Object.keys(booksFetch).forEach((e) => {
    books.push({ ...booksFetch[e][0], item_id: e });
  });
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};
