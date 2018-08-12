import React, { Component } from 'react';
import './ChatMessage.css';

import logo from './logo.svg';
import avatar from "./placeholder.svg";
import starEmpty from "./star_empty.svg";
import starFilled from "./star_filled.svg";


class ChatMessage extends Component {
    toggleStar = () => {
        this.setState({isStarred: !this.state.isStarred});
    }
    render() { //howdy
        return (
            <div className="ChatArea">
                {
                        <div key={this.props.index} className="ChatArea-message">
                            <img className="ChatArea-avatar" src={this.props.avatar} alt="avatar" />
                            <div className="ChatArea-messageText">
                                <p>{this.props.text}</p>
                            </div>
                            {this.props.isStarred ?
                                (<img className="ChatArea-star" src={starFilled} alt="avatar" onClick={this.toggleStar}/>) :
                                (<img className="ChatArea-star" src={starEmpty} alt="avatar" onClick={this.toggleStar}/>)}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ChatMessage;
