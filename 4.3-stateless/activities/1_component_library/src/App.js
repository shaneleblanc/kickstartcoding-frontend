import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import Dropdown from './components/Dropdown/Dropdown.js';
import Modal from './components/Modal/Modal.js';

class App extends Component {
  state = {
    counter: 0,
      counter2: 0,
      modals: [1]
  }

  onButtonClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  onOtherButtonClick = () => {
    this.setState({
        counter2: this.state.counter2 + 1,
    })
  }
    dismissModal = (index) => {
    let arr = this.state.modals.slice();
      arr[index] = 0;
      this.setState({
          modals: arr,
      })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Component Library</h1>
        </header>
        <div className="App-library">
          {/*
            Challenge #1: Use the Button component to display a button that
            says "Click to increment" and increments the counter using onButtonClick
          */}

          <h1>Button example:</h1>
          <h4>{this.state.counter}</h4>
          <Button
          gotClicked={this.onButtonClick}

          />
            <h4>{this.state.counter2}</h4>
            <Button
                gotClicked={this.onOtherButtonClick}

            />
          <Modal
              visible={!!+this.state.modals[0]}
            title="Modal example"
            onDismiss={() => this.dismissModal(0)}
            >
            Modal ipsum and stuff
          </Modal>

          {/*
            Challenge #2: Create a separate counter example like above, b
            says "Count" and increments the counter using onButtonClick
          */}
          <p>Second counter: {this.state.counter2}</p>





          <h1>Modal example</h1>

          <p>Modal ipsum dolor sit amet,
          consectetur adipiscing elit. Sed at
          metus id tellus vestibulum.</p>


          {/* Challenge #3: Use the Modal component */}



          {/* Challenge #4 & #5: Use the Dropdown component */}
          <h1>Dropdown example</h1>
        </div>
      </div>
    );
  }
}

export default App;
