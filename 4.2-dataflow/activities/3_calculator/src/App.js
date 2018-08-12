import React, { Component } from 'react';
import './App.css';

import Calculator from './components/Calculator/Calculator.js';

class App extends Component {
  state = {
    number: '',
      leftString: '',
      leftStringEntered: false,
      rightString: '',
      operator: '',
  }

  /*
    TODO: Will need to add new methods to implement clicking on numbers and
    other events.
  */
  numberPressed = (num) => {
      let prevNums = this.state.number ? this.state.number : '';
      if (this.state.leftStringEntered){
          this.setState({
              number: prevNums+num,
              leftStringEntered: true,
              rightString: prevNums+num
          })
      } else {
          this.setState({
              number: prevNums + num,
              leftStringEntered: true,
              leftString: prevNums + num
          });
      }
    console.log(num);
  }
  operatorPressed = (oper) => {
    if(!this.state.leftStringEntered){
      this.setState({
          operator: oper,
          leftStringEntered: true,
      })
    } else {
      let result = this.computeValue(this.state.operator, this.state.leftString, this.state.rightString);
      this.setState({
          number: '',
          leftString: result,
          rightString: '',
          operator: ''
      })
    }
  }
  equalsPressed = () => {
      this.computeValue(this.state.operator, this.state.leftString, this.state.rightString);
  }
  computeValue = (operation, leftString, rightString) => {
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
  render() {
    return (
      <div className="App">
        {/* TODO: Will need to replace the event here,
          to add the number to the state... */}
        <Calculator
          testevent={(number) => console.log('testing', number)}
          number={this.state.number}
          onNumberPress={number => this.numberPressed(number)}
          onOperatorPress={operator => this.operatorPressed(operator)}
          onEqualsPress={this.equalsPressed}
        />
      </div>

    );
  }
}

export default App;
