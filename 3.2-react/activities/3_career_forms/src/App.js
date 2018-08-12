import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: '',
    dob: '',
    position: 'Pizza Delivery',
    interests: {
      funTimes: false,
      gruelingLabor: true,
      officePolitics: true,
    },
    degrees: 'Gold Stars from Kindergarten',
  }

  onNameChange = (ev) => {
    console.log("Name updated")
    let value = ev.target.value;
    this.setState({
      name: value,
    });
  }

  onDOBChange = (ev) => {
    console.log("DOB Updated")
    let value = ev.target.value;
    this.setState({
      dob: value,
    });
  }

  onPosChange = (ev) => {
    console.log("position updated")
    let value = ev.target.value;
    this.setState({
    position: value,
    });
  }

  onDegreesChange = (ev) => {
    console.log("degrees changed")
    let value = ev.target.value;
    this.setState({
      degrees: value
    });
  }

  onStateChange = (ev) => {
    b
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/91fScLx.png" />
          <h1 className="App-title">Career Assignment Office</h1>

          <h2>Hi, {this.state.name}.</h2>
        </header>
        <div className="Form">

          <h2>Name: {this.state.name}</h2>
          <input
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.onNameChange}
            />

          <h2>Date of birth: {this.state.dob}</h2>
          <input
              placeholder="Date of birth"
              value={this.state.dob}
              onChange={this.onDOBChange}
            />

          <h2>Most recent position:</h2>
          <p>{this.state.position}</p>
          <textarea
              placeholder="Most recent position"
              value={this.state.position}
              onChange={this.onPosChange}
            />

          <h2>Degrees earned:</h2>

          <p>{this.state.degrees}</p>
          <textarea
              placeholder="Degrees earned"
              value={this.state.degrees}
              onChange={this.onDegreesChange}
              />

          <h2>Interests:</h2>

          <label>
            <input
                type="checkbox"
                checked={this.state.interests.funTimes}
                onChange={this.onFunTimesChange}
              />
            Fun times
          </label>

          <label>
            <input
                type="checkbox"
                checked={this.state.interests.gruelingLabor}
                onChange={this.onLaborChange}
              />
            Grueling labor
          </label>

          <label>
            <input
                type="checkbox"
                checked={this.state.interests.officePolitics}
                onChange={this.onPoliticsChange}
              />
            Office politics
          </label>



          <h2>Salary calculator</h2>
          <label>
            <input /> x 12 + <input /> (bonus) = {100} bucks
          </label>

          <h2>Prove you are not a robot:</h2>
          <p>We cannot plant career chips in robots. Apologies to
          Bender, Flexo, Boxy, and Calculon units.</p>

          <label style={{background: "green"}}>
            3 + 7 = <input />
          </label>

          <label style={{background: "red"}}>
            6 / 2 = <input />
          </label>

        </div>
      </div>
    );
  }
}

export default App;
