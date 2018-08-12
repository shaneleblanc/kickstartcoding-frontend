import React, { Component } from 'react';
import './ChatMessage.css';

import avatar from './placeholder.svg';
import starEmpty from './star_empty.svg';
import starFilled from './star_filled.svg';

class ChatMessage extends Component {
  // Start out unstarred
  state = {
    isStarred: false,
  }

  toggleStar = () => {
    // MYSTERY of the MOMENT: How do I reach into the Nav component to update
    // the number of stars?
    this.setState({
      isStarred: !this.state.isStarred,
    });
  }

  render() {
    let starIcon = starEmpty;

    if (this.state.isStarred) {
      starIcon = starFilled;
    }

    return (
      <div className="ChatMessage">
        <img className="ChatMessage-avatar" src={avatar} alt="avatar" />
        <div className="ChatMessage-text">
          <p>{this.props.text}</p>
        </div>
          <img onClick={this.toggleStar} className="ChatMessage-star" src={starIcon} alt="star" />
      </div>
    );
  }
}

export default ChatMessage;
