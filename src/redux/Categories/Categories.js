// actions
const CHECKING_STATUS = '/src/redux/Categories/CHECKING_STATUS';

// reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;

// action creators
export const checkStatus = () => ({
  type: CHECKING_STATUS,
  payload: 'Under construction',
});
