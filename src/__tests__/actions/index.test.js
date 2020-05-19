import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help product actions', () => {
  it('deleteProduct should create DELETE_PRODUCT action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: c.DELETE_PRODUCT,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('requestRecipes should create REQUEST_RECIPES action', () => {
    expect(actions.requestRecipes()).toEqual({
      type: c.REQUEST_RECIPES
    });
  });

  it('getRecipesSuccess should create GET_RECIPES_SUCCESS action', () => {
    const recipes = "Chicken Soup";
    expect(actions.getRecipesSuccess(recipes)).toEqual({
      type: c.GET_RECIPES_SUCCESS,
      recipes
    });
  });

  it('getRecipesFailure should create GET_RECIPES_FAILURE action', () => {
    const error = "An error";
    expect(actions.getRecipesFailure(error)).toEqual({
      type: c.GET_RECIPES_FAILURE,
      error
    });
  });
});