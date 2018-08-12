import React, { Component } from 'react';
import './Contribute.css';
class Contribute extends Component {
  state = {
    title: '',
    content: '',
  }

  onChangeContent = (ev) => {
    this.setState({
      content: ev.target.value,
    });
  }

  onChangeTitle = (ev) => {
    this.setState({
      title: ev.target.value,
    });
  }

  submit = () => {
    const formData = {
      title: this.state.title,
      content: this.state.content,
    };

    fetch('/api/create/', {
        method: 'POST',
        body: JSON.stringify(formData),
      }).then(response => response.json())
      .then(data => {
        console.log('done!');
      });
  }


  render() {
    return (
      <div className="Contribute">
        <h1>Contribute</h1>
        <h2>Title</h2>
        <input
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />

        <h2>Content</h2>
        <textarea
            name="content"
            placeholder="Contents"
            value={this.state.details}
            onChange={this.onChangeContent}
          />

        <br />

        <button onClick={this.submit}>Add to blog</button>
      </div>

    );
  }
}

export default Contribute;
