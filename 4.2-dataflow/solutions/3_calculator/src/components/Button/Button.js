import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    let className = 'Button';

    if (this.props.type === 'red') {
      className = 'Button Button--red';
    }
    if (this.props.type === 'green') {
      className = 'Button Button--green';
    }
    if (this.props.type === 'blue') {
      className = 'Button Button--blue';
    }
    if (this.props.type === 'yellow') {
      className = 'Button Button--yellow';
    }

    return (
      <div className={className} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
