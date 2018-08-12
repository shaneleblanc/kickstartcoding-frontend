import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import ChannelSelector from './components/ChannelSelector/ChannelSelector.js';
import ChatArea from './components/ChatArea/ChatArea.js';
import NewMessage from './components/NewMessage/NewMessage.js';


class App extends Component {
  state = {
    selectedChannel: 'parking-lot',
    message: '',
    channelData: {
      'parking-lot': {
        stars: [
          1,
          3,
        ],
        messages: [
          'Hi how are you',
          'how are you',
          'pls respond',
          'pls',
        ],
      },
      random: {
        stars: [],
        messages: [
          'Random discussions go here',
          'holds up spork',
        ],
      },
      jokes: {
        stars: [],
        messages: [
          'Why did the javascript coder quit their job?',
          "Because they didn't get arrays.",
        ],
      },
    },
  }

  // A helper method to make it easier to retrieve the current stars
  getStars = () => {
    return this.state.channelData[this.state.selectedChannel].stars;
  }

  // A helper method to make it easier to retrieve the current messages
  getMessages = () => {
    return this.state.channelData[this.state.selectedChannel].messages;
  }

  // A helper method to make it easier to save the current stars
  setStars = (newStars) => {
    const current = this.state.channelData[this.state.selectedChannel];
    current.stars = newStars;
    this.setState({
      [this.state.selectedChannel]: current,
    });
  }

  // A helper method to make it easier to save the current messages
  setMessages = (newMessages) => {
    const current = this.state.channelData[this.state.selectedChannel];
    current.newMessages = newMessages;
    this.setState({
      [this.state.selectedChannel]: current,
    });
  }

  toggleStar = (indexOfMessage) => {
    // Clone stars
    const stars = this.getStars().slice(); // clone stars

    // Check if the stars array is listing this message as starred
    if (stars.includes(indexOfMessage)) {
      stars.splice(stars.indexOf(indexOfMessage), 1);
    } else {
      stars.push(indexOfMessage);
    }
    this.setStars(stars);
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
    const messages = this.getMessages(); // duplicate messages
    messages.push(this.state.message); // push to messages
    this.setState({ // clear current message
      message: '',
    });
    this.setMessages(messages); // set the state with new array
  }

  render() {
    const messages = this.getMessages();
    const stars = this.getStars();

    return (
      <div className="App">
        <Nav
          selectedChannel={this.state.selectedChannel}
          starCount={stars.length} />
        <ChannelSelector
          channels={Object.keys(this.state.channelData)}
          selectedChannel={this.state.selectedChannel}
          onSelectChannel={this.selectChannel} />
        <ChatArea
          messages={messages}
          stars={stars}
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
