import React, { Component } from 'react';
import './ChannelSelector.css';

import logo from './logo.svg';

class ChannelSelector extends Component {
  render() { //howdy
    return (
        <div className="ChannelSelector">
            <div className="ChannelSelector-channelHeader">All Channels</div>
            {
                this.props.channels.map((channelName, index) => (
                    this.props.selectedChannel === channelName ? (
                        <div key={index} className="ChannelSelector-channel ChannelSelector-channel--selected"># {channelName}</div>
                    ) : (
                        <div key={index} className="ChannelSelector-channel"># {channelName}</div>
                    )
                ))
            }
        </div>
    );
  }
}

export default ChannelSelector;
