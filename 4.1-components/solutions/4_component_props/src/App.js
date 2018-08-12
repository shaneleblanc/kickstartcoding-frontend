import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import Card from './components/Card/Card.js';
import BoxedText from './components/BoxedText/BoxedText.js';
import Modal from './components/Modal/Modal.js';

class App extends Component {
  state = {
    counter: 0,
    showingModal: false,
  }

  doIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  showModal = () => {
    this.setState({
      showingModal: true,
    });
  }

  hideModal = () => {
    this.setState({
      showingModal: false,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Component Library</h1>
        </header>
        <div className="App-library">
          <div>
            <h1>Buttons</h1>

            <Button onClick={() => console.log('Button 1')}>
              Button 1
            </Button>

            <Button type="gray" onClick={() => console.log('Button 2')}>
              Button 2
            </Button>

            <Button type="primary" onClick={() => console.log('Button 3')}>
              Button 3
            </Button>
          </div>

          <div>
            <h1>Cards</h1>

            <Card title="Example Card">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ante quam, lobortis a auctor lacinia, ultricies in elit.</p>
            </Card>

            <Card title="Card With Image" image="https://i.imgur.com/qviVh.jpg">
              <p>Nulla sem velit, consectetur sagittis ligula et, pellentesque
              aliquam dolor.</p>
            </Card>

          </div>
        </div>

        <div className="App-library">
          <div>
            <h1>Your stuff</h1>
            <Button onClick={() => console.log('Button 4')}>
              Button 4
            </Button>

            <Button type="gray" onClick={() => console.log('Button 5')}>
              Button 5
            </Button>

            <Card title={this.state.counter} buttonText="Count" onButtonClick={this.doIncrement}>
              <p>Click to Increment</p>
            </Card>
          </div>
        </div>


        <div className="App-library">
          <div>
            <h1>Your stuff</h1>
            <BoxedText>
              <p>Boxed text example</p>
              <p>More text</p>
            </BoxedText>
            <BoxedText type="lightondark">
              <p>Light on dark text example</p>
              <p>More text</p>
            </BoxedText>
          </div>
        </div>

        <div className="App-library">
          <div>
            <h1>More stuff</h1>
            <Button onClick={this.showModal}>
              Show Modal
            </Button>
          </div>
        </div>

        {
          this.state.showingModal ? (
            <Modal onDismiss={this.hideModal}>
              <p>Modal contents...</p>
              <p>More text</p>
            </Modal>
          ) : null
        }
      </div>
    );
  }
}

export default App;
