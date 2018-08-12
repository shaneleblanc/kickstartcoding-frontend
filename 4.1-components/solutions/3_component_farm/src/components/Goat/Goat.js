import React, { Component } from 'react';
import './Goat.css';
import goatImage from './goat.png';

class Goat extends Component {
  render() {
    return (
      <div className="Goat">
        <img src={goatImage} alt="Goat" />
      </div>
    );
  }
}

export default Goat;
