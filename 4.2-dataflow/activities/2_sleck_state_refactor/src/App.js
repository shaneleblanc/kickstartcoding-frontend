import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import Nav from './components/Nav/Nav.js';
import ChannelSelector from './components/ChannelSelector/ChannelSelector.js';
import ChatArea from './components/ChatArea/ChatArea.js';
import NewMessage from './components/NewMessage/NewMessage.js';

class App extends Component {
  state = {
    messages: [
      'Hi how are you',
      'how are you',
      'pls respond',
      'pls',
    ],
    channels: [
        'parking-lot',
        'random',
        'jokes',
    ],
    stars: [],
    selectedChannel: 'parking-lot',

    message: '',
    starCount: 0,

}

  toggleStar = () => {
      this.setState({
          isStarred: !this.state.isStarred,
      });
  }

  selectChannel = (channelName) => {
    this.setState({
        selectedChannel: channelName,
    });
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
  }

  render() {
    return (
      <div className="App">
        <Nav selectedChannel={this.state.selectedChannel}/>
        <ChannelSelector
            channels={this.state.channels}
            selectedChannel={this.state.selectedChannel}
            onSelectButton={this.selectChannel}
        />
        <ChatArea messages={this.state.messages} />

        {/* Challenge #1: Add a couple lines below... */}
        <NewMessage
          value={this.state.message}
          onChangeMessage={this.onChangeMessage}
          onClickSend={this.sendMessage}
          />
      </div>
    );
  }
}

export default App;
