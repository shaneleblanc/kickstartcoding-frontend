import React, { Component } from 'react';
import './Goat.css';
import goatImage from './goatsprite.png';

class Goat extends Component {
  render() {
    return (
      <div className="Pig">
        <img src={goatImage} alt="pig" />
        <button onClick="">Feed Me</button>
      </div>
    );
  }
}

export default Goat;
