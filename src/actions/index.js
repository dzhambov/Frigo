import * as c from './../actions/ActionTypes';

export const deleteProduct = id => ({
  type: c.DELETE_PRODUCT,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const requestRecipes = () => ({
  type: c.REQUEST_RECIPES
});

export const getRecipesSuccess = (recipes) => ({
  type: c.GET_RECIPES_SUCCESS,
  recipes
});

export const getRecipesFailure = (error) => ({
  type: c.GET_RECIPES_FAILURE,
  error
});

export const makeApiCall = () => {
  return async dispatch => {
    dispatch(requestRecipes);
    return await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          dispatch(getRecipesSuccess(jsonifiedResponse.hits));
          console.log(jsonifiedResponse.hits[0].recipe.label);
        })
      .catch((error) => {
        dispatch(getRecipesFailure(error));
      });
  }
}

// export const useProduct = (product) => {
//   const { name, brand, expiration, price, quantity, id } =product;
//   return {
//     type: c.USE_PRODUCT,
//     name: name,
//     brand: brand,
//     expiration: expiration,
//     price: price,
//     quantity: quantity,
//     id: id
//   }
// }