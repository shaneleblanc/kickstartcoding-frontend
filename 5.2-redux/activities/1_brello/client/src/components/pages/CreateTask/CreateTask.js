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
    fetch('/api/create/',{method: 'POST', body: JSON.stringify(this.state)})
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Success')
          } else {
            console.log('Failure T_____T')
          }
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

        <button onClick={this.submit}>Create</button>
      </div>
    );
  }
}

export default CreateTask;
