import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <img src={this.props.image} className="Article-image" alt="allergy img" />
        <h2 className="Article-title">{this.props.title}</h2>
        <div className="Article-summary">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Article;
