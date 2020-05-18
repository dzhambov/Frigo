import recipesReducer from '../../reducers/recipes-reducer';
import * as c from './../../actions/ActionTypes';

let action;

describe('recipesReducer', () => {
  const defaultState = {
    isLoading: false,
    recipes: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(recipesReducer(defaultState, {type: null})).toEqual({
        isLoading: false,
        recipes: [],
        error: null
      }
    );
  });

  test('requesting recipes should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_RECIPES
    };

    expect(recipesReducer(defaultState, action)).toEqual({ 
      isLoading: true,
      recipes: [],
      error: null
    });
  });
});