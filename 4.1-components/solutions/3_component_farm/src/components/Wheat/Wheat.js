import React, { Component } from 'react';
import './Wheat.css';
import wheatImage from './wheat.png';

class Wheat extends Component {
  render() {
    return (
      <div className="Wheat">
        <img src={wheatImage} alt="wheat" />
      </div>
    );
  }
}

export default Wheat;
