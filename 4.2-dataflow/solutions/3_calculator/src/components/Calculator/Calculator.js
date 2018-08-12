import React, { Component } from 'react';
import './Calculator.css';

import Button from '../Button/Button.js';

class Calculator extends Component {
  onDigitClicked(value) {
    if (this.props.nextClear) {
      this.props.onChangeNumber(value);
    } else {
      const newNumber = String(this.props.number) + value;
      this.props.onChangeNumber(newNumber);
    }
  }

  render() {
    return (
      <div className="Calculator">
        {/*
        <div className="Calculator-currentOperation">
          {this.props.operation}
        </div>
        */}
        <div className="Calculator-display">
          {Math.round((this.props.number || 0) * 1000) / 1000}
        </div>
        {/*
        <div className="Calculator-extraOperations">
          <Button onClick={() => this.props.onSetOperation('divide')} type="green">exp</Button>
          <Button onClick={() => this.props.onSetOperation('multiply')} type="green">%</Button>
          <Button onClick={() => this.props.onSetOperation('add')} type="green">CE</Button>
        </div>
        */}
        <div className="Calculator-keypad">
          <Button onClick={() => this.onDigitClicked('9')}>9</Button>
          <Button onClick={() => this.onDigitClicked('8')}>8</Button>
          <Button onClick={() => this.onDigitClicked('7')}>7</Button>
          <Button onClick={() => this.onDigitClicked('6')}>6</Button>
          <Button onClick={() => this.onDigitClicked('5')}>5</Button>
          <Button onClick={() => this.onDigitClicked('4')}>4</Button>
          <Button onClick={() => this.onDigitClicked('3')}>3</Button>
          <Button onClick={() => this.onDigitClicked('2')}>2</Button>
          <Button onClick={() => this.onDigitClicked('1')}>1</Button>
          <Button onClick={() => this.onDigitClicked('0')}>0</Button>
          <Button onClick={() => this.props.onSetOperation('equals')} type="red">=</Button>
          <Button onClick={() => this.onDigitClicked('.')} type="red">.</Button>
        </div>
        <div className="Calculator-operations">
          <Button onClick={() => this.props.onSetOperation('divide')} type="yellow">÷</Button>
          <Button onClick={() => this.props.onSetOperation('multiply')} type="yellow">×</Button>
          <Button onClick={() => this.props.onSetOperation('subtract')} type="yellow">-</Button>
          <Button onClick={() => this.props.onSetOperation('add')} type="yellow">+</Button>
        </div>
      </div>
    );
  }
}

export default Calculator;
