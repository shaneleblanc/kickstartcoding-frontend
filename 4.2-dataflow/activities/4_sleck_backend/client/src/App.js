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
    stars: [
      1,
      3,
    ],
  }

  componentDidMount = () => {
    // Do fetch for message data from server
    this.refreshMessages();
  }

  refreshMessages = () => {
    let msgdata, stardata;
    fetch('/get-messages/')
      .then(response => response.json())
      .then(data => {
        msgdata = data;
        console.log('receiving data!');

      });
    fetch('/get-stars/')
        .then(response => response)
        .then(data => {
          stardata = data;
          console.log(stardata);
      });
      this.setState({
          messages: msgdata,
          stars: stardata,
      });
  }

  toggleStar = (indexOfMessage) => {

    fetch(`/toggle-star/${indexOfMessage}`)
        .then(response => console.log(response));

    // Clone stars
    const stars = this.state.stars.slice(); // clone stars

    // Check if the stars array is listing this message as starred
    if (stars.includes(indexOfMessage)) {
      // Presently starred, remove from array
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
    const message = this.state.message;

    // Instead of doing a simple setState, we want to send this data to the server
    this.setState({ // set the state with new array
      message: '',
    });
    console.log("Loading...")
    fetch('/send-message/', { method: "POST", body: message, })
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
