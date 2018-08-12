import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// react-date-picker
import DatePicker from 'react-date-picker';

// react-select
import Select from 'react-select';

// react-color
import { SketchPicker } from 'react-color';

// antd
import Button from 'antd/lib/button';
import Timeline from 'antd/lib/timeline';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];



class App extends Component {

  // Copied and pasted from the website...
  state = {
    date: new Date(),
    selectedOption: null,
  }

  onChange = (date) => {
    this.setState({
      date: date,
    });
  }

  // From the react select site
  handleChange = (selectedOption) => {
    this.setState({
      selectedOption: selectedOption,
    });
    console.log('Option selected:', selectedOption);
  }


  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1>Date picker</h1>
          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
            />


          <h1>React select</h1>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            />

          <h1>React color</h1>
          <SketchPicker />

          <h1>Antd examples</h1>
          <Button>antd button example</Button>

          <Timeline>
            <Timeline.Item>step1 2015-09-01</Timeline.Item>
            <Timeline.Item>step2 2015-09-01</Timeline.Item>
            <Timeline.Item>step3 2015-09-01</Timeline.Item>
            <Timeline.Item>step4 2015-09-01</Timeline.Item>
          </Timeline>

        </div>
      </div>
    );
  }
}

export default App;
