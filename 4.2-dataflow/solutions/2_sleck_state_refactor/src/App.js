import React, { Component } from 'react';
import './App.css';

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
    selectedChannel: 'parking-lot',
    message: '',
    stars: [
      1,
      3,
    ],
  }

  toggleStar = (indexOfMessage) => {
    // Clone stars
    const stars = this.state.stars.slice(); // clone stars

    // Check if the stars array is listing this message as starred
    if (stars.includes(indexOfMessage)) {
      // Presently starred, remove from array
      // (This is the way you remove a particular value from an array in
      // JavaScript, sadly there is no "remove" method.)
      stars.splice(stars.indexOf(indexOfMessage), 1);

    } else {
      // Not presently starred, add to array
      stars.push(indexOfMessage);
    }

    // Finally, set the state with the new stars
    this.setState({
      stars: stars,
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
        <Nav
          selectedChannel={this.state.selectedChannel}
          starCount={this.state.stars.length} />
        <ChannelSelector
          channels={this.state.channels}
          selectedChannel={this.state.selectedChannel}
          onSelectChannel={this.selectChannel} />
        <ChatArea
          messages={this.state.messages}
          stars={this.state.stars}
          onStarToggle={this.toggleStar} />
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
