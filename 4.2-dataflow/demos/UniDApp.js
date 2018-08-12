import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button.js';

class App extends Component {
  state = {
    counter: 0,
  }

  doIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    // This parent component stores the state, but the child component (Button)
    // is what calls the method that causes the increment.
    // EVERYTHING gets passed down as props, in one direction
    return (
      <div className="App">
        <h1>The counter increases: {this.state.counter}</h1>
        <Button gotClicked={this.doIncrement}>
          Increment {this.state.counter}
        </Button>
      </div>
    );
  }
}

export default App;
