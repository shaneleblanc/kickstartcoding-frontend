import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Leela',
    dob: '2975',
    position: 'Space Delivery',
    degree: 'BA in Space Delivery Piloting',
    salaryMonthly: 0,
    salaryBonus: 42,
    interests: {
      funTimes: true,
      gruelingLabor: false,
      officePolitics: false,
    },
  }

  onNameChange = (ev) => {
    let value = ev.target.value;
    console.log('getting a new value!', value);
    this.setState({
      name: value,
    });
  }

  onDobChange = (ev) => {
    let value = ev.target.value;
    console.log('dob value!', value);
    this.setState({
      dob: value,
    });
  }

  onPositionChange = (ev) => {
    let value = ev.target.value;
    console.log('position value!', value);
    this.setState({
      position: value,
    });
  }

  onDegreeChange = (ev) => {
    let value = ev.target.value;
    console.log('degree value!', value);
    this.setState({
      degree: value,
    });
  }

  onFunTimesChanged = (ev) => {
    let interests = Object.assign({}, this.state.interests);
    interests.funTimes = !interests.funTimes;
    this.setState({
      interests: interests,
    });
  }

  onGruelingLaborChanged = (ev) => {
    let interests = Object.assign({}, this.state.interests);
    interests.gruelingLabor = !interests.gruelingLabor;
    this.setState({
      interests: interests,
    });
  }

  onOfficePoliticsChanged = (ev) => {
    let interests = Object.assign({}, this.state.interests);
    interests.officePolitics = !interests.officePolitics;
    this.setState({
      interests: interests,
    });
  }

  onSalaryChange = (ev) => { // Condensed style
    this.setState({ salaryMonthly: ev.target.value });
  }

  onBonusChange = (ev) => {
    this.setState({ salaryBonus: ev.target.value });
  }

  onSubmit = () => {
    console.log('submitted');
    this.setState({
      isSubmitted: true,
    });
  }

  render() {
    if (this.state.isSubmitted) {
      return this.renderSubmittedForm();
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/91fScLx.png" alt="chip" />
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
              onChange={this.onDobChange}
            />

          <h2>Most recent position:</h2>
          <p>{this.state.position}</p>
          <textarea
              placeholder="Most recent position"
              value={this.state.position}
              onChange={this.onPositionChange}
            />

          <h2>Degrees earned:</h2>
          <textarea
              placeholder="Degrees earned"
              value={this.state.degree}
              onChange={this.onDegreeChange}
            />
          {/* TODO Add in input for "degrees earned" */}

          <h2>Interests:</h2>

          <label>
            <input
                type="checkbox"
                checked={this.state.interests.funTimes}
                onChange={this.onFunTimesChanged}
              />
            Fun times
          </label>

          <label>
            <input
                type="checkbox"
                checked={this.state.interests.gruelingLabor}
                onChange={this.onGruelingLaborChanged}
              />
            Grueling labor
          </label>

          <label>
            <input
                type="checkbox"
                checked={this.state.interests.officePolitics}
                onChange={this.onOfficePoliticsChanged}
              />
            Office politics
          </label>

          <h2>Salary calculator</h2>
          <label>
            <input
                onChange={this.onSalaryChange}
                value={this.state.salaryMonthly}
            /> x 12 + <input
                onChange={this.onBonusChange}
                value={this.state.salaryBonus}
            /> (bonus) = {this.state.salaryMonthly * 12 +
            this.state.salaryBonus} bucks per year
          </label>

          <h2>Prove you are not a robot:</h2>
          <p>We cannot plant career chips in robots. Apologies to
          Bender, Flexo, Boxy, and Calculon units.</p>

          <label style={{background: this.state.robo1 === "10" ? "green" : "red"}}>
            3 + 7 = <input
                onChange={(ev) => this.setState({robo1: ev.target.value})}
                value={this.state.robo1 || ''}
              />
          </label>

          <label style={{background: this.state.robo2 === "3" ? "green" : "red"}}>
            6 / 2 = <input
                onChange={(ev) => this.setState({robo2: ev.target.value})}
                value={this.state.robo2 || ''}
              />
          </label>

          {
            this.state.robo1 === "10" && this.state.robo2 === "3" ? (
              <button onClick={this.onSubmit}>Submit</button>
            ) : null
          }

        </div>
      </div>
    );
  }

  renderSubmittedForm() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/91fScLx.png" alt="chip" />
          <h1 className="App-title">Career Assignment Office</h1>

          <h2>{this.state.name}'s submitted form.</h2>
          <div className="Form">
            <h2>Name: {this.state.name}</h2>
            <h2>Date of birth: {this.state.dob}</h2>
            <h2>Most recent position:</h2>
            <p>{this.state.position}</p>
            <h2>Degrees earned:</h2>
            <p>{this.state.degree}</p>
            <h2>Interests:</h2>
            <p>
              {this.state.interests.funTimes ? "Fun times" : ""}
              {this.state.interests.gruelingLabor ? "Grueling labor" : ""}
              {this.state.interests.officePolitics ? "Office politics" : ""}
            </p>
            <h2>Salary: {this.state.salaryMonthly * 12 +
            this.state.salaryBonus} bucks per year</h2>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
