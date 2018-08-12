import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button.js';

import Nav from './components/Nav/Nav.js';

import avatar from './components/ChatArea/placeholder.svg';
import starEmpty from './components/ChatArea/star_empty.svg';
import ChannelSelector from "./components/ChannelSelector/ChannelSelector";
import ChatArea from './components/ChatArea/ChatArea';

class App extends Component {
  state = {
    channels: [
      'parking-lot',
      'random',
      'jokes',
    ],
    selectedChannel: 'parking-lot',
    messages: [
      'Hi how are you',
      'how are you',
      'pls respond',
      'pls',
    ],
      numStars: 0

    message: '',
  }

  onChangeMessage = (ev) => {
    this.setState({
      message: ev.target.value,
    });
  }

  sendMessage = () => {
    const messages = this.state.messages.slice(); // duplicate messags
    messages.push(this.state.message); // push to messages
    this.setState({ // set the state with new array
      message: '',
      messages: messages
    });

    selectChannel = (channel) => {

    };
  }

  render() {
    return (
      <div className="App">
        <Nav />

          <ChannelSelector
              channels={this.state.channels}
              selectedChannel={this.state.selectedChannel}
              onClick={()=>{this.selectChannel(value)}
              messageClicke={}} />


            <ChatArea messages={this.state.messages} />


        <div className="NewMessage">
          <input value={this.state.message} onChange={this.onChangeMessage} placeholder="Type your message" />
          <Button onClick={this.sendMessage}>Send</Button>
        </div>
      </div>
    );
  }
}

export default App;
