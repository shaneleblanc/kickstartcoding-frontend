import React, { Component } from 'react';
import './Pig.css';
import pigImage from './pigsprite.png';

class Pig extends Component {
  state = {
    count: 0,
  }

  getFed = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="Pig">
        <img src={pigImage} alt="pig" />
        <button onClick={this.getFed}>
          Feed me x{this.state.count}
        </button>
      </div>
    );
  }
}

export default Pig;
