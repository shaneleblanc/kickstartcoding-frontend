import React, { Component } from 'react';
import './Pig.css';
import pigImage from './pigsprite.png';

class Pig extends Component {
  render() {
    return (
      <div className="Pig">
        <img src={pigImage} alt="pig" />
        <button onClick="">Feed Me</button>
      </div>
    );
  }
}

export default Pig;
