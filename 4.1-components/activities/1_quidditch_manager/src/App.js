import React, { Component } from 'react';
import './App.css';

// Pull in player data from the players JSON file
import players from './players.json';

// Uses filter to narrow down array into 4 individual player arrays, one for
// each of the 4 Quidditch positions
const chaserPlayers = players.filter(p => p.position === 'Chaser');
const beaterPlayers = players.filter(p => p.position === 'Beater');
const keeperPlayers = players.filter(p => p.position === 'Keeper');
const seekerPlayers = players.filter(p => p.position === 'Seeker');

// Define our App
class App extends Component {
  state = {

    // Define "pool" of available characters
    availableChasers: chaserPlayers,
    availableBeaters: beaterPlayers,
    availableKeepers: keeperPlayers,
    availableSeekers: seekerPlayers,

    // Define which ones we'll be using for this team
    chosenChasers: [],
    chosenBeaters: [],

    // There is only one keeper and one seeker per team
    chosenKeeper: null,
    chosenSeeker: null,
  }
  onChooseChaser = (index) => {
    console.log("we callin onChooseChaser with that index",index);
    const desiredChaser = this.state.availableChasers[index];
    const newChasers = this.state.chosenChasers.slice();
    newChasers.push(desiredChaser);
    this.setState({
        chosenChasers: newChasers,
    })
  };
  onChooseKeeper = (index) => {
    console.log("onchoosekeeper is being called with index",index);
    // When they click on a "chosen" keeper, get the keeper that we want
    // to use with the index provided, then do a setState
    const desiredKeeper = this.state.availableKeepers[index];
    this.setState({
      chosenKeeper: desiredKeeper,
    });
  };
  onChooseSeeker = (index) => {
      console.log("onChooseSeeker is being called with index",index);
      // When they click on a "chosen" keeper, get the keeper that we want
      // to use with the index provided, then do a setState
      const desiredSeeker = this.state.availableSeekers[index];
      this.setState({
          chosenSeeker: desiredSeeker,
      });
  }
  removeSeeker = () => {
      // Clear the chosen keeper
      this.setState({
          chosenSeeker: null,
      });
  }
  removeKeeper = () => {
    // Clear the chosen keeper
    this.setState({
      chosenKeeper: null,
    });
  }
  removeChaser = (index) => {
    const chasers = this.state.chosenChasers.slice();
    chasers.splice(index,1);
    this.setState({
        chosenChasers: chasers,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/NrJQBLb.png" />
          <h1 className="App-title">Quidditch Manager</h1>
        </header>
        <div className="TeamManager">
          <div className="TeamManager-position">
            <h2>Starting Keeper</h2>
            {
              this.state.chosenKeeper ? (
                <div className="TeamManager-character">
                  <h3>{this.state.chosenKeeper.name}</h3>
                  <h4>{this.state.chosenKeeper.house}</h4>
                  <button onClick={this.removeKeeper}>Remove</button>
                </div>
              ) : (
                <em>None selected</em>
              )
            }
          </div>

          <div className="TeamManager-position">
            <h2>Roster (Keepers)</h2>
            {
                this.state.availableKeepers.map((character, index) => (
                    <div className="TeamManager-character">
                        <h3>{character.name}</h3>
                        <h4>{character.house}</h4>
                        <button onClick={() => this.onChooseKeeper(index)}>Choose</button>
                    </div>
                ))
            }
          </div>

          <div className="TeamManager-position">
            <h2>Starting Seeker</h2>
              {
                  this.state.chosenSeeker ? (
                      <div className="TeamManager-character">
                          <h3>{this.state.chosenSeeker.name}</h3>
                          <h4>{this.state.chosenSeeker.house}</h4>
                          <button onClick={this.removeSeeker}>Remove</button>
                      </div>
                  ) : (
                      <em>None selected</em>
                  )
              }
          </div>
          <div className="TeamManager-position">
            <h2>Roster (Seekers)</h2>
              {this.state.availableSeekers.map((character ,index) => (
                  <div className="TeamManager-character">
                      <h3>{character.name}</h3>
                      <h4>{character.house}</h4>
                      <button onClick={() => this.onChooseSeeker(index)}>Choose</button>
                  </div>

              ) )
              }
          </div>

          <div className="TeamManager-position">
            <h2>Starting Chasers</h2>
              {
                  this.state.chosenChasers.length ? this.state.chosenChasers.map((chaser, index) => (
                      <div className="TeamManager-character">
                          <h3>{chaser.name}</h3>
                          <h4>{chaser.house}</h4>
                          <button onClick={() => this.removeChaser(index)}>Remove</button>
                      </div>
                  )) : (
                      <em>None selected</em>
                  )
              }
          </div>

          <div className="TeamManager-position">
            <h2>Roster (Chasers)</h2>
              {this.state.availableChasers.map((character ,index) => (
                  <div className="TeamManager-character">
                      <h3>{character.name}</h3>
                      <h4>{character.house}</h4>
                      <button onClick={() => this.onChooseChaser(index)}>Choose</button>
                  </div>

              ) )
              }
          </div>


          <div className="TeamManager-position">
            <h2>Starting Beaters</h2>
            <p>TODO</p>
          </div>

          <div className="TeamManager-position">
            <h2>Roster (Beaters)</h2>
            <p>TODO</p>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
