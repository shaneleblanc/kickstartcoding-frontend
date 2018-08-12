import React, { Component } from 'react';
import './Nav.css';

import logo from './logo.svg';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img src={logo} className="Nav-logo" alt="sleck" />
      </div>
    );
  }
}

export default Nav;
