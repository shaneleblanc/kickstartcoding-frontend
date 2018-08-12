import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  // I USE TWO PROPS:
  // "gotClicked" and "children"
  render() {
    return (
      <div className="Button" onClick={this.props.gotClicked}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
