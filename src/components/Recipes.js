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
          <ul>
            {/* {recipes.map((recipe, index) => 
            <li key={index}>
              <h3>Title:{recipe.recipe.lable}</h3>
              <h3>Calories:{recipe.recipe.calories}</h3>
              <h3>Health Label:{recipe.recipe.healthLabels}</h3>
              <h3>Image:{recipe.recipe.image}</h3>
            </li>
            )} */}
          </ul>
        </React.Fragment>
      ) 
    }
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    isLoading: state.isLoading,
    error: state.error
  }
} 
export default connect(mapStateToProps)(Recipes)