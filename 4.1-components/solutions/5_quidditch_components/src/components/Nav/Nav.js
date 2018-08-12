import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
 render() {
    return (
      <header className="Nav">
        <img src="https://i.imgur.com/NrJQBLb.png" alt="snitch" />
        <h1 className="Nav-title">Quidditch Manager</h1>
      </header>
    );
  }
}
export default Nav;

