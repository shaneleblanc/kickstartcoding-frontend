import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Type a message</h1>
        <input
            placeholder="Type your message"
            value={this.state.message}
          />
        <h1 className="App-title">
          Your message: <br />
          {this.state.message}
        </h1>
      </div>
    );
  }
}

export default App;
