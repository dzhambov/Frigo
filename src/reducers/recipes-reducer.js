import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  recipes: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_RECIPES:
      return Object.assign({}, state, {
        isLoading: true
      });
    default:
      return state;
  }
};