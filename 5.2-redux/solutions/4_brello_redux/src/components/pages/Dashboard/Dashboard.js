import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreators from '../../../actions/index.js';
import './Dashboard.css';

import DashboardColumn from '../../DashboardColumn/DashboardColumn.js';

class Dashboard extends Component {
  moveTask = (taskId, newPhase) => {
    // Create a new action
    const action = actionCreators.moveTask(taskId, newPhase);

    // Dispatch comes from "react-redux" to kick off actions
    this.props.dispatch(action);
  }

  doTestDelete = () => {
    // Create a new action
    const action = actionCreators.deleteTask(2);

    // hmmmmm need to do dispatch this action now....
    this.props.dispatch(action);
  }

  render() {
    const tasksPhase0 = this.props.tasks.filter(task => task.phase === 0);
    const tasksPhase1 = this.props.tasks.filter(task => task.phase === 1);
    const tasksPhase2 = this.props.tasks.filter(task => task.phase === 2);
    const tasksPhase3 = this.props.tasks.filter(task => task.phase === 3);

    return (
      <div className="Dashboard">
        {/*
        <div>
          <button onClick={this.doTestDelete}>Delete id 2</button>
        </div>
        */}
        <DashboardColumn
          title="Wanna do it"
          tasks={tasksPhase0}
          columnNumber={0}
          moveTask={this.moveTask}
          deleteTask={this.deleteTask}
        />

        <DashboardColumn
          title="Gettin it done"
          tasks={tasksPhase1}
          columnNumber={1}
          moveTask={this.moveTask}
          deleteTask={this.deleteTask}
        />

        <DashboardColumn
          title="Did it already"
          tasks={tasksPhase2}
          columnNumber={2}
          moveTask={this.moveTask}
          deleteTask={this.deleteTask}
        />

        <DashboardColumn
          title="Forget about it"
          tasks={tasksPhase3}
          columnNumber={3}
          moveTask={this.moveTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state getting mapped', state); // state
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(Dashboard);
