import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class Recipes extends React.Component {
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, recipes } = this.props;
    if(error) {
      return<React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
        return <React.Fragment>Loading ...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <div className="RecipeSearch">
            <form className="search-form">
              <input className="search-bar" type="text"/>
              <button className="search-button" type="submit">Search</button>
            </form>
          </div>
          <h1>Recipes</h1>
            <div className="RecipeResult">
            {recipes.map((recipe, index) => 
              <li key={index}>
                <img className="image" src= {recipe.recipe.image}/>
                <h3>{recipe.recipe.label}</h3>
                <h4>Calories: {recipe.recipe.calories}</h4>
                <h4>Health Label: {recipe.recipe.healthLabels}</h4>
                <p><em>Ingredients:</em> {recipe.recipe.ingredientLines}</p>
              </li>
              )}
            </div>
        </React.Fragment>
      ) 
    }
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipesApi.recipes,
    isLoading: state.recipesApi.isLoading,
    error: state.recipesApi.error
  }
} 
export default connect(mapStateToProps)(Recipes)