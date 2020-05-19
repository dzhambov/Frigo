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
    case c.GET_RECIPES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        recipes: action.recipes
      });
    case c.GET_RECIPES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};