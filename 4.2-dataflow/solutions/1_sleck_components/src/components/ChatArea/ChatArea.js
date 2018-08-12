import React, { Component } from 'react';
import './ChatArea.css';

import ChatMessage from "../ChatMessage/ChatMessage.js";

class ChatArea extends Component {
  render() {
    return (
      <div className="ChatArea">
        {
          this.props.messages.map((text, index) => (
            <ChatMessage
              key={index}
              text={text} />
          ))
        }
      </div>
    );
  }
}

export default ChatArea;
