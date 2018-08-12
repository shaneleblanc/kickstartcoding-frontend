import React, { Component } from 'react';
import './Fish.css';
import fishImage from './fish.png';

class Fish extends Component {
  render() {
    return (
      <div className="Fish">
        <img src={fishImage} alt="fish" />
      </div>
    );
  }
}

export default Fish;
