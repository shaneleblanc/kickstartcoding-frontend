import React, { Component } from 'react';
import './Stew.css';
import stewImage from './stew.png';

class Stew extends Component {
  render() {
    return (
      <div className="Stew">
        <img src={stewImage} alt="stew" />
      </div>
    );
  }
}

export default Stew;
