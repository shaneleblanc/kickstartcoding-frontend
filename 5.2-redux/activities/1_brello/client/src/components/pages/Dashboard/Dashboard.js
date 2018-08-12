import React, { Component } from 'react';
import './Dashboard.css';

import Task from '../../Task/Task.js';

class Dashboard extends Component {
  state = {
    tasks: [],
  }
  componentDidMount() {
    fetch('/api/all')
        .then(response => response.json())
        .then(data =>
          this.setState({tasks: data.tasks})
          );
  }

  update(id) {
      let task = this.state.tasks.find(task => task.id === id);
      fetch(`/api/${id}/update/`,{method: 'PUT', body: JSON.stringify(task)})
          .then(response => response.json())
          .then(data => this.componentDidMount())
          .catch(err => console.log(err));
  }

  moveTask(taskId, newPhase) {
    // Duplicate the state to work with it
    const tasks = this.state.tasks.slice();

    // Find the relevant task using the Array method "find"
    const task = tasks.find(task => task.id === taskId);

    // modify the phase to be the new requested phrase
    task.phase = newPhase;

    // Set the new state to rerender
    this.setState({
      tasks: tasks,
    });
    this.update(taskId);
  }

  render() {
    const tasksPhase0 = this.state.tasks.filter(task => task.phase === 0);
    const tasksPhase1 = this.state.tasks.filter(task => task.phase === 1);
    const tasksPhase2 = this.state.tasks.filter(task => task.phase === 2);
    const tasksPhase3 = this.state.tasks.filter(task => task.phase === 3);

    return (
      <div className="Dashboard">
        <div className="Dashboard-column">
          <h1>Wanna do it</h1>
          {
            tasksPhase0.map(task => (
              <Task title={task.title} text={task.text} phase={task.phase} points={task.points}
                onMoveForward={() => this.moveTask(task.id, 1)}
              />
            ))
          }
        </div>
        <div className="Dashboard-column">
          <h1>Gettin it done</h1>
          {
            tasksPhase1.map(task => (
              <Task title={task.title} text={task.text} phase={task.phase} points={task.points}
                onMoveForward={() => this.moveTask(task.id, 2)}
                onMoveBackward={() => this.moveTask(task.id, 0)}
                />
            ))
          }
        </div>
        <div className="Dashboard-column">
          <h1>I did it already</h1>
          {/* The "..." is shorthand to assign everything as props */}
          {
            tasksPhase2.map(task => (
              <Task {...task}
                onMoveForward={() => this.moveTask(task.id, 3)}
                onMoveBackward={() => this.moveTask(task.id, 1)}
              />
            ))
          }
        </div>
        <div className="Dashboard-column">
          {/* TODO Finish this! */}
          <h1>Forget about it</h1>
          {
              tasksPhase3.map(task => (
                  <Task {...task}
              onMoveForward={() => this.moveTask(task.id, 3)}
              onMoveBackward={() => this.moveTask(task.id, 2)}
              />
          ))
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
