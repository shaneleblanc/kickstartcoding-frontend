import React, { Component } from 'react';
import './ChannelSelector.css';

class ChannelSelector extends Component {
  state = {
    channels: [
      'parking-lot',
      'random',
      'jokes',
    ],
    selectedChannel: 'parking-lot',
  }

  selectChannel = (channelName) => {
    this.setState({
      selectedChannel: channelName,
    });
  }

  render() {
    return (
      <div className="ChannelSelector">
        <div className="ChannelSelector-channelHeader">All Channels</div>
        {
          this.state.channels.map((channelName, index) => (
            this.state.selectedChannel === channelName ? (
              <div key={index} className="ChannelSelector-channel ChannelSelector-channel--selected"># {channelName}</div>
            ) : (
              <div onClick={() => this.selectChannel(channelName)} key={index} className="ChannelSelector-channel"># {channelName}</div>
            )
          ))
        }
      </div>
    );
  }
}

export default ChannelSelector;
