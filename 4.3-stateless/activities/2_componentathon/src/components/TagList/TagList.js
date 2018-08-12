import React, { Component } from 'react';
import './TagList.css';
import Button from '../Button/Button.js';

// So much to do here!
class TagList extends Component {
  render() {
    return (
      <div className="TagList">
        <div className="TagList-tag">
          tag example
          <Button>x</Button>
        </div>

        <div className="TagList-final">
          <input
            className="TagList-tag"
            type="text"
            placeholder={"Add new tag"}
          />
          <Button>+</Button>
        </div>
      </div>
    );
  }
}

export default TagList;
