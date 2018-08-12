import React, { Component } from 'react';
import './Character.css';

class Character extends Component {
 render() {
    if (!this.props.info) {
      return (
        <em>None selected</em>
      );
    }
    return (
      <div className="Character">
        <h3>{this.props.info.name}</h3>
        <h4>{this.props.info.house}</h4>
        <button onClick={this.props.onButtonClick}>
          {this.props.buttonText || 'Choose'}
        </button>
      </div>
    );
  }
}
export default Character;

