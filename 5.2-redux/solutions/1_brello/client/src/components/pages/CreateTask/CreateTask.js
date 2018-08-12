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
    // Bonus Challenge #1: Check for empty title before submitting
    if (!this.state.title) {
      this.setState({
        error: 'Needs title',
      });
      return;
    }

    // Challenge #3: Create new one
    const data = {
      points: this.state.points,
      text: this.state.text,
      title: this.state.title,
    };

    fetch('/api/create/',
      {method: 'POST', body: JSON.stringify(data) })
      .then(response => response.json())
      .then(data => {
        console.log('success!');

        // Clear state after
        this.setState({
          points: 5,
          text: '',
          title: '',
          error: '',
        });
      });
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

        {this.state.error ? <p>{this.state.error}</p> : null}

        <button onClick={this.submit}>Create</button>
      </div>
    );
  }
}

export default CreateTask;
