import React, { Component } from 'react';
import './App.css';

import Calculator from './components/Calculator/Calculator.js';

/*
  Given a left and right operand, and an operation, it actually performs
  the operation requested and returns the result.
*/
function computeValue(operation, leftString, rightString) {
  const left = Number(leftString);
  const right = Number(rightString);
  if (!left) {
    return right;
  }
  if (operation === 'add') {
    return left + right;
  } else if (operation === 'multiply') {
    return left * right;
  } else if (operation === 'subtract') {
    return left - right;
  } else if (operation === 'divide') {
    return left / right;
  } else {
    console.error('Bad operation', operation);
    return NaN;
  }
}

class App extends Component {
  state = {
    number: '',
    accum: '',
    addend: '',
    nextClear: true,
    operation: null,
  }

  setOperation = (operation) => {
    // If this is the first operation set, then we need to set the
    // accumulator and the operation value
    if (!this.state.operation) {
      this.setState({
        nextClear: true,
        operation: operation,
        accum: this.state.number,
      });
      return
    }

    // If the operation is not equals, then set the operation state
    if (operation !== 'equals') {
      this.setState({
        operation: operation,
      });

      // If we have just hit an operation, we should just exit now, to
      // avoid "double presses"
      if (this.state.nextClear) {
        return;
      }
    }

    // Actually perform operation
    const results = computeValue(
      this.state.operation,
      this.state.accum,
      this.state.addend,
    );

    this.setState({
      nextClear: true,
      number: results,
      accum: results,
    });
  }

  setNumber = (number) => {
    this.setState({
      number: number,
      addend: number,
      nextClear: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Calculator
          number={this.state.number}
          operation={this.state.operation}
          nextClear={this.state.nextClear}
          onSetOperation={this.setOperation}
          onChangeNumber={this.setNumber} />
      </div>
    );
  }
}

export default App;
