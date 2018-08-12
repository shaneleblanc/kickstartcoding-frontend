import React, { Component } from 'react';
import './Calculator.css';

import Button from '../Button/Button.js';

class Calculator extends Component {
    state = {
        nums: [...Array(10).keys()],
        opers: ['/','*','-','+'],
    }

  render() {

    return (
      <div className="Calculator">
        <div className="Calculator-display">
          {this.props.number || 0}
        </div>
        <div className="Calculator-keypad">
          {/* TODO Will need to add events to every button here... */}
            {this.state.nums.map((number) =>
                <Button onClick={this.props.onNumberPress.bind(null,number)}>{number}</Button>
            )}
          <Button type="red">=</Button>
          <Button type="red">.</Button>
        </div>
        <div className="Calculator-operations">
          <Button onClick={this.props.onOperatorPress.bind(null,'divide')} type="yellow">÷</Button>
          <Button onClick={this.props.onOperatorPress.bind(null,'multiply')} type="yellow">×</Button>
          <Button onClick={this.props.onOperatorPress.bind(null,'subtract')} type="yellow">-</Button>
          <Button onClick={this.props.onOperatorPress.bind(null,'add')} type="yellow">+</Button>
        </div>
      </div>
    );
  }
}

export default Calculator;
