import React from 'react';
import { connect } from 'react-redux';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipes: []
    };
  }

  makeApiCall = () => {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        this.setState({
          isLoaded: true,
          recipes: jsonifiedResponse.results
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(this.makeApiCall());
  }
  render() {
    const { error, isLoaded, recipes } = this.state;
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

Recipes = connect()(Recipes)
export default Recipes