
    // Define which ones we'll be using for this team
    chosenChasers: [],
    chosenBeaters: [],

    // There is only one keeper and one seeker per team
    chosenKeeper: null,
    chosenSeeker: null,
  }

  onChooseKeeper = (index) => {
    // When they click on a "chosen" keeper, get the keeper that we want
    // to use with the index provided, then do a setState
    const desiredKeeper = this.state.availableKeepers[index];
    this.setState({
      chosenKeeper: desiredKeeper,
    });
  }

  removeKeeper = () => {
    // Clear the chosen keeper
    this.setState({
      chosenKeeper: null,
    });
          }import React, { Component } from 'react';
      import './App.css';

      import Nav from './components/Nav/Nav.js';
      import Character from './components/Character/Character.js';

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


              onChooseSeeker = (index) => {
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

  onChooseChaser = (index) => {
    // Duplicate the two arrays we have to modify
    const chosenChasers = this.state.chosenChasers.slice();
    const availableChasers = this.state.availableChasers.slice();

    // Retrieve the character in question
    const character = availableChasers[index];

    // Add to the chosen
    chosenChasers.push(character);

    // How to remove an element from an array based on ID
    availableChasers.splice(index, 1);

    this.setState({
      chosenChasers: chosenChasers,
      availableChasers: availableChasers,
    });
  }

  removeChaser = (index) => {
    // Duplicate the two arrays we have to modify
    const chosenChasers = this.state.chosenChasers.slice();
    const availableChasers = this.state.availableChasers.slice();

    // Same as "add", but in reverse: Retrieve, add, then remove
    const character = chosenChasers[index];
    availableChasers.push(character);
    chosenChasers.splice(index, 1);

    this.setState({
      chosenChasers: chosenChasers,
      availableChasers: availableChasers,
    });
  }


  onChooseBeater = (index) => {
    // Duplicate the two arrays we have to modify
    const chosenBeaters = this.state.chosenBeaters.slice();
    const availableBeaters = this.state.availableBeaters.slice();

    // Retrieve the character in question
    const character = availableBeaters[index];

    // Add to the chosen
    chosenBeaters.push(character);

    // How to remove an element from an array based on ID
    availableBeaters.splice(index, 1);

    this.setState({
      chosenBeaters: chosenBeaters,
      availableBeaters: availableBeaters,
    });
  }

  removeBeater = (index) => {
    // Duplicate the two arrays we have to modify
    const chosenBeaters = this.state.chosenBeaters.slice();
    const availableBeaters = this.state.availableBeaters.slice();

    // Same as "add", but in reverse: Retrieve, add, then remove
    const character = chosenBeaters[index];
    availableBeaters.push(character);
    chosenBeaters.splice(index, 1);

    this.setState({
      chosenBeaters: chosenBeaters,
      availableBeaters: availableBeaters,
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="TeamManager">
          <div className="TeamManager-position">
            <h2>Starting Keeper</h2>
            <Character
              info={this.state.chosenKeeper}
              onButtonClick={this.removeKeeper}
              buttonText={"Remove"} />
          </div>

          <div className="TeamManager-position">
            <h2>Roster (Keepers)</h2>
            {
              this.state.availableKeepers.map((character, index) => (
                <Character
                  info={character}
                  onButtonClick={() => this.onChooseKeeper(index)} />
              ))
            }
          </div>

          <div className="TeamManager-position">
            <h2>Starting Seeker</h2>
            <Character
              info={this.state.chosenSeeker}
              onButtonClick={this.removeSeeker}
              buttonText={"Remove"} />
          </div>

          <div className="TeamManager-position">
            <h2>Roster (Seekers)</h2>
            {
              this.state.availableSeekers.map((character, index) => (
                <Character
                  info={character}
                  onButtonClick={() => this.onChooseSeeker(index)} />
              ))
            }
          </div>

          <div className="TeamManager-position">
            <h2>Starting Chasers</h2>
            {
              this.state.chosenChasers.map((character, index) => (
                <Character
                  info={character}
                  onButtonClick={() => this.removeChaser(index)}
                  buttonText={"Remove"} />
              ))
            }

          </div>

          <div className="TeamManager-position">
            <h2>Roster (Chasers)</h2>
            {
              this.state.availableChasers.map((character, index) => (
                <Character
                  info={character}
                  onButtonClick={() => this.onChooseChaser(index)} />
              ))
            }
          </div>

          <div className="TeamManager-position">
            <h2>Starting Beaters</h2>
            {
              this.state.chosenBeaters.map((character, index) => (
                <Character
                  info={character}
                  onButtonClick={() => this.removeBeater(index)}
                  buttonText={"Remove"} />
              ))
            }

          </div>

          <div className="TeamManager-position">
            <h2>Roster (Beaters)</h2>
            {
              this.state.availableBeaters.map((character, index) => (
                <Character
                  info={character}
                  onButtonClick={() => this.onChooseBeater(index)} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
