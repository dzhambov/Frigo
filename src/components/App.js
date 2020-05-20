import React from 'react';
import Header from './Header';
import Recipes from './Recipes';
import ProductControl from './ProductControl';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />   
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Recipes />
            <ProductControl />
          </Route>   
        </Switch>
      </Router>
    </div>
  );
}

export default App;
