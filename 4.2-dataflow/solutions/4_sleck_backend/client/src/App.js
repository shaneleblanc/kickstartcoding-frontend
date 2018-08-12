import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import ChannelSelector from './components/ChannelSelector/ChannelSelector.js';
import ChatArea from './components/ChatArea/ChatArea.js';
import NewMessage from './components/NewMessage/NewMessage.js';

class App extends Component {
  state = {
    messages: null,
    channels: [
      'parking-lot',
      'random',
      'jokes',
    ],
    selectedChannel: 'parking-lot',
    message: '',
    stars: [],
  }

  componentDidMount = () => {
    // Do fetch for message & star data from server
    this.refreshMessages();
    this.refreshStars();
  }

  refreshMessages = () => {
    fetch('/get-messages/')
      .then(response => response.json())
      .then(data => {
        console.log('receiving message data!', data);
        this.setState({
          messages: data,
        });
      });
  }

  refreshStars = () => {
    fetch('/get-stars/')
      .then(response => response.json())
      .then(data => {
        console.log('receiving star data!', data);
        this.setState({
          stars: data,
        });
      });
  }

  toggleStar = (indexOfMessage) => {
    fetch('/toggle-star/' + indexOfMessage, {method: "POST"})
      .then(response => response.json())
      .then(data => {
        // Let's go ahead and do a refresh after sending
        this.refreshStars();
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
    const message = this.state.message;

    // Instead of doing a simple setState, we want to send this data to the server
    this.setState({ // set the state with new array
      message: '',

      // Set messages to be null when we send the request
      messages: null,
    });

    fetch('/send-message/', {method: "POST", body: message})
      .then(response => response.json())
      .then(data => {
        // Let's go ahead and do a refresh after sending
        this.refreshMessages();
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
        {
          this.state.messages === null ? (
            <div>Loading</div>
          ) : (
            <ChatArea
              messages={this.state.messages}
              stars={this.state.stars}
              onStarToggle={this.toggleStar} />
          )
        }
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
