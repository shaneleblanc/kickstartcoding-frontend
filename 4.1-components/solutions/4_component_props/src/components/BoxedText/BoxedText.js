import React, { Component } from 'react';
import './BoxedText.css';

class BoxedText extends Component {
  render() {
    let className = 'BoxedText';

    if (this.props.type === "lightondark") {
      className = 'BoxedText BoxedText--lightondark';
    }

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default BoxedText;
