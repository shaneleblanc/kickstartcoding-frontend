import { connect } from 'react-redux';

import actionCreators from '../../../actions/index.js';
import React, { Component } from 'react';
import './CreateTask.css';

class CreateTask extends Component {
  // Trick to have more complicated code determine the initial / default state
  state = this.getDefaultState()

  getDefaultState() {
    // Not editing any tasks, show default / empty form
    const task = this.props.task;
    if (!this.props.task) {
      return {
        title: '',
        points: 5,
        text: '',
      }
    }

    // We are editing something, let's use it to populate the form
    return task;
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
    // Create & dispatch a new action
    const action = actionCreators.addTask(
      this.state.text,
      this.state.title,
      this.state.points,
    );
    this.props.dispatch(action);
    this.setState({
      message: 'Added!',
    });
  }

  save = () => {
    console.log('Getting saved!');

    // Create & dispatch a new action
    const action = actionCreators.editTask(
      this.props.task.id,
      this.state.title,
      this.state.text,
      this.state.points,
    );
    this.props.dispatch(action);
    this.setState({
      message: 'Saved!',
    });
  }

  render() {
    // If we are editing a task, we get it as a prop "task"
    const task = this.props.task;
    return (
      <div className="CreateTask">
        {
          task ? (
            <h1>Editing Task</h1>
          ) : (
            <h1>New Task</h1>
          )
        }

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
        {
          task ? (
            <button onClick={this.save}>Save</button>
          ) : (
            <button onClick={this.submit}>Create</button>
          )
        }

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let editingTaskID = ownProps.match.params.id;
  if (!editingTaskID) {
    // Not editing existing tasks, no extra store-related props needed!
    return {
      task: null,
    };
  }

  // Cast down to a number
  editingTaskID = Number(editingTaskID);

  // Now fetch the relevant task and include that as a prop
  const task = state.tasks.find(task => task.id === editingTaskID);
  return {
    task: task,
  };
}

export default connect(mapStateToProps)(CreateTask);
