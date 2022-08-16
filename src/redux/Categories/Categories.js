// actions
const CHECKING_STATUS = 'Checking status...';

// reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;

// action creators
export const checkStatus = () => ({
  type: CHECKING_STATUS,
});
