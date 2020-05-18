import React from 'react';

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
    return 
  }
}

export default Recipes