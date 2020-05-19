import recipesReducer from '../../reducers/recipes-reducer';
import * as c from './../../actions/ActionTypes';

let action;

describe('recipesReducer', () => {

  const defaultState = {
    isLoading: false,
    recipes: [],
    error: null
  };

  const loadingState = {
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

  test('successfully getting recipes should change isLoading to false and update recipes', () => {
    const recipes = "Chicken Soup";
    action = {
      type: c.GET_RECIPES_SUCCESS,
      recipes
    };
    expect(recipesReducer(loadingState, action)).toEqual({
      isLoading: false,
      recipes: "Chicken Soup",
      error: null
    });
  });
});