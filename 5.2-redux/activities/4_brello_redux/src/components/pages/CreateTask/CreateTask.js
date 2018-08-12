import React, { Component } from 'react';
import './CreateTask.css';

class CreateTask extends Component {
  state = {
    title: '',
    points: 5,
    text: '',
  }

  onChangeTitle = (ev) => {
    this.setState({
      title: ev.target.value,
    });
  }

  onChangeText = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  }

  onChangePoints = (ev) => {
    this.setState({
      points: ev.target.value,
    });
  }

  submit = () => {
    console.log('Getting submitted!');

    // TODO
  }

  render() {
    return (
      <div className="CreateTask">
        <h1>New Task</h1>

        <p>
          <label>Title
            <input
              onChange={this.onChangeTitle}
              value={this.state.title} />
          </label>
        </p>

        <p>
          <label>Points
            <input
              type="number"
              onChange={this.onChangePoints}
              value={this.state.points} />
          </label>
        </p>

        <p>
          <label>Text
            <textarea
              onChange={this.onChangeText}
              value={this.state.text} />
          </label>
        </p>

        {this.state.message && <h1>{this.state.message}</h1>}
        <button onClick={this.submit}>Create</button>
      </div>
    );
  }
}

export default CreateTask;
