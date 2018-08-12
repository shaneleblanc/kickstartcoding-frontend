import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import Card from './components/Card/Card.js';
import BoxedText from './components/BoxedText/BoxedText.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Component Library</h1>
        </header>
        <div className="App-library">
          <div>
            <h1>Buttons</h1>

            <Button onClick={() => console.log('BoxedText 1')}>
              Button 1
            </Button>

            <Button type="gray" onClick={() => console.log('BoxedText 2')}>
              Button 2
            </Button>

            <Button type="primary" onClick={() => console.log('BoxedText 3')}>
              Button 3
            </Button>

            <Button type="green" onClick={() => console.log('BoxedText 4')}>
                Button 4
            </Button>

            <Button type="blue" onClick={() => console.log('BoxedText 5')}>
                Button 5
            </Button>

            <BoxedText type="dark">This is a box of texttt
            </BoxedText>
          </div>

          <div>
            <h1>Cards</h1>

            <Card buttonText="Howdy!" title="Example Card">
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
            <p><em>AS you complete the activities, add in your own stuff here!</em></p>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
