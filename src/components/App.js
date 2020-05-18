import React from 'react';
import Header from './Header';
import Recipes from './Recipes';
import ProductControl from './ProductControl';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <ProductControl />
        </Route>
        <React.Fragment>
          <Recipes />
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
