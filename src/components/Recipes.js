import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   recipes: []
    // };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoaded, recipes } = this.props;
    if(error) {
      return<React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
        return <React.Fragment>Loading ...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <div className="recipe">
            <form className="search-form">
              <input className="search-bar" type="text"/>
              <button className="search-button" type="submit">Search</button>
            </form>
          </div>
          <h1>Recipes</h1>
          <ul>
            {recipes.map((recipe, index) =>
            <li key={index}>
              <h3>{recipe.title}</h3>
              <h3>{recipe.calories}</h3>
              <h3>{recipe.health}</h3>
            </li>
            )}
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