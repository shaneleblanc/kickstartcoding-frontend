import React, { Component } from 'react';
import './BoxedText.css';

class BoxedText extends Component {
  render() {
    let className = 'BoxedText';
    if(this.props.type === 'dark'){
      className = 'BoxedText BoxedText--dark';
    }

    return (
      <div className={className} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default BoxedText;
