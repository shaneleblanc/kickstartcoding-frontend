import React, { Component } from 'react';
import './TagList.css';
import Button from '../Button/Button.js';

class TagList extends Component {
  state = {
    // We are adding state here, since this is one of the rare situations
    // where it's okay to add state to a child component,  as use of this
    // input is entirely confined. This is because what they are typing for
    // the "new tag" will only become useful when it is saved and becomes
    // part of the list, which IS stored in the exterior state.
    newTagValue: '',
  }

  deleteTag = (index) => {
    const tags = this.props.tags.slice();
    tags.splice(index, 1); // remove element
    this.props.onChange(tags);
  }

  addTag = () => {
    const tags = this.props.tags.slice();
    tags.push(this.state.newTagValue);
    this.setState({newTagValue: ''});
    this.props.onChange(tags);
  }

  onNewTagValueChanged = (event) => {
    this.setState({
      newTagValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="TagList">
        {
          this.props.tags.map((tag, index) => (
            <div className="TagList-tag" key={index}>
              {tag}
              <Button onClick={() => this.deleteTag(index)}>x</Button>
            </div>
          ))
        }

        <div className="TagList-final">
          <input
            className="TagList-tag"
            type="text"
            placeholder={"Add new tag"}
            value={this.state.newTagValue}
            onChange={this.onNewTagValueChanged}
          />
          <Button onClick={this.addTag}>+</Button>
        </div>
      </div>
    );
  }
}

export default TagList;
