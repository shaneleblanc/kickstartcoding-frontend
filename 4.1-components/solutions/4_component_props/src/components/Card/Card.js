import React, { Component } from 'react';
import './Card.css';

import Button from '../Button/Button.js';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h1 className="Card-title">{this.props.title}</h1>
        {
            this.props.image ? (
              <img src={this.props.image} alt="card" />
            ) : (
              null
            )
        }
        <div className="Card-info">
          {this.props.children}
          {
              this.props.buttonText ? (
                <Button onClick={this.props.onButtonClick}>
                  {this.props.buttonText}
                </Button>
              ) : (
                null
              )
          }
        </div>
      </div>
    );
  }
}

export default Card;
