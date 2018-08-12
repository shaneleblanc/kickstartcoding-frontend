import React, { Component } from 'react';
import './ChatArea.css';

import logo from './logo.svg';
import avatar from "./placeholder.svg";
import starEmpty from "./star_empty.svg"

class ChatArea extends Component {
    render() { //howdy
        return (
            <div className="ChatArea">
                {
                    this.props.messages.map((text, index) => (
                        <div key={index} className="ChatArea-message">
                            <img className="ChatArea-avatar" src={avatar} alt="avatar" />
                            <div className="ChatArea-messageText">
                                <p>{text}</p>
                            </div>
                            <img className="ChatArea-star" src={starEmpty} alt="avatar" />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ChatArea;
