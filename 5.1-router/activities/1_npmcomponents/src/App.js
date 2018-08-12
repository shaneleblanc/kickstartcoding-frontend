import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { SketchPicker } from 'react-color';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];
class App extends Component {
    state = {
        selectedOption: null,
        date: new Date(),
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    onChange = date => this.setState({ date })

  render() {
        const selectedOption = this.state.selectedOption;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <div><h1>Date picker</h1>
        <DatePicker onChange={this.onChange}
            value={this.state.date} >
        </DatePicker>
        </div>
          <div><h1>Select</h1>
              <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
              />
          </div>
          <div><h1>Color picker</h1>
              <SketchPicker />
          </div>
      </div>
    );
  }
}

export default App;
