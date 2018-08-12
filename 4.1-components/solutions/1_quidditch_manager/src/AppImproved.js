import React, { Component } from 'react';
import './App.css';

// Pull in player data from the players JSON file
import players from './players.json';

class App extends Component {
  state = {
    keepers: [],
    seekers: [],
    beaters: [],
    chasers: [],
  }

  addToTeam(positionName, index) {
    // Add the given index to the array of included players
    const positionNamePlural = positionName + 's';
    const clonedIndices = this.state[positionNamePlural].slice();
    clonedIndices.push(index);
    this.setState({
      [positionNamePlural]: clonedIndices,
    });
  }

  removeFromTeam(positionName, index) {
    // Remove the given number from the array of included players
    const positionNamePlural = positionName + 's';
    const clonedIndices = this.state[positionNamePlural].slice();
    clonedIndices.splice(clonedIndices.indexOf(index), 1);
    this.setState({
      [positionNamePlural]: clonedIndices,
    });
  }

  renderPosition(positionName, limit = 1) {
    // Find a few variations on the positionName --- used when accessing
    // the state (e.g. "keeper" becomes "keepers").
    const namePlural = positionName + 's';
    const capfirst = positionName[0].toUpperCase() + positionName.substr(1);
    const capfirstPlural = capfirst + 's';
    const chosenIndices = this.state[namePlural];

    // This means we have added enough to max out this position
    const isMaxed = chosenIndices.length >= limit;

    // Get the relevant roster for this position, by using "filter" to
    // only select the players that have the given position
    const roster = players.filter(p => p.position === capfirst);

    // Typically, React you can only return a single element, not two
    // adjacent ones. To get around this limitation, React 16 and newer
    // you can return an array.
    return [
      (
        <div className="TeamManager-position">
          <h2>Starting {limit === 1 ? capfirst : (
            <span>{capfirstPlural} - <small>{chosenIndices.length} / {limit}</small></span>
          )}</h2>
          {
            chosenIndices.length > 0 ? (
              chosenIndices.map(index => (
                <div className="TeamManager-character">
                  <h3>{roster[index].name}</h3>
                  <h4>{roster[index].house}</h4>
                  <button onClick={() => this.removeFromTeam(positionName, index)}>Remove</button>
                </div>
              ))
            ) : (
              <em>None selected</em>
            )
          }
        </div>
      ), (
        <div className="TeamManager-position">
          <h2>Roster ({capfirstPlural})</h2>
          {
            roster.map((character, index) => (
              <div className="TeamManager-character">
                <h3>{character.name}</h3>
                <h4>{character.house}</h4>
                {
                  isMaxed || chosenIndices.includes(index) ? (
                    <button disabled>Choose</button>
                  ) : (
                    <button onClick={() => this.addToTeam(positionName, index)}>Choose</button>
                  )
                }
              </div>
            ))
          }
        </div>
      )
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/NrJQBLb.png" alt="snitch" />
          <h1 className="App-title">Quidditch Manager</h1>
        </header>
        <div className="TeamManager">
          {this.renderPosition('keeper', 1)}
          {this.renderPosition('seeker', 1)}
          {this.renderPosition('chaser', 3)}
          {this.renderPosition('beater', 2)}
        </div>
      </div>
    );
  }
}

export default App;
