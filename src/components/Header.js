import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <React.Fragment>
      <div className="Header">
        <h1>FRIGO</h1>
        <h4>Your Personal Kitchen Assistant</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;