import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import FieldSet from './components/FieldSet/FieldSet.js';
import Tabs from './components/Tabs/Tabs.js';
import TagList from './components/TagList/TagList.js';

class App extends Component {
  state = {
    dropdownShowing: false,
    firstname: "",
    tabs: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
    currentTab: 'Paul McCartney',
    tags: ['backgrounds', 'abstract', 'generated', 'cgi'],
    buttonPresses: 0,
  }

  incrementButtonPresses = () => {
    this.setState({
      buttonPresses: this.state.buttonPresses + 1,
    });
  }

  onFirstnameChange = (ev) => {
    this.setState({
      firstname: ev.target.value,
    });
  }

  setTags = (newTags) => {
    this.setState({
      tags: newTags,
    });
  }

  setCurrentTab = (tabName) => {
    this.setState({
      currentTab: tabName,
    });
  }

  setCurrentTab2 = (tabName) => {
    this.setState({
      currentTab2: tabName,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Component Style Library</h1>
        </header>
        <div className="App-library">
          <h1>Button</h1>
          <Button onClick={this.incrementButtonPresses}>
            Hello! {this.state.buttonPresses}
          </Button>

          <h1>FieldSet</h1>
          <p>Name entered: {this.state.firstname}</p>
          <FieldSet
            onChange={this.onFirstnameChange}
            value={this.state.firstname}
            legend="Personal Information"
            label="First Name"
            placeholder="Please enter your real first name" />

          <h1>Tabs</h1>
          <Tabs
            tabs={this.state.tabs}
            currentTab={this.state.currentTab}
            onChange={this.setCurrentTab} />
          <p>{this.state.currentTab} is the best Beatle.</p>

          <br />
          <br />
          <br />
          <h1>TagList (Bonus)</h1>
          <TagList
            tags={this.state.tags}
            onChange={this.setTags} />

          <h1>Tabs from TagList (Bonus)</h1>
          <Tabs
            tabs={this.state.tags}
            currentTab={this.state.currentTab2}
            onChange={this.setCurrentTab2} />
        </div>
      </div>
    );
  }
}

export default App;
