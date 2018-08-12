import React, { Component } from 'react';

import './App.css';

import Pokemon from './components/Pokemon/Pokemon.js';

class App extends Component {
  state = {
    caught: [],
    opposingPokemon: null,
    yourPokemon: null,
  }

  componentDidMount() {
    this.fetchCaught();
    this.fetchRandomOpponent();
  }

  fetchCaught = () => {
    fetch('/api/caught/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          caught: data.results,
        });
      });
  }

  fetchRandomOpponent = (pokemon) => {
    fetch('/api/random/')
      .then(response => response.json())
      .then(data => {
        // Get data back from backend, show enemy pokemon
        console.log('got data', data);
        this.setState({
          opposingPokemon: data.result,
        });
      });
  }

  choosePokemon = (pokemon) => {
    this.setState({
      yourPokemon: pokemon,
    });
  }

  attackOpponent = () => {
    this.setState({
      message: 'You attack... results TBD',
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-navigation">
          <img src="https://i.imgur.com/7UWvXR1.png" />
          <h3>Poke Catch - Choose Pokemon strong against each opponent</h3>
        </div>

        <div className="App-sidebar">
          <h1>Roster</h1>
          {
            this.state.caught.map(pokemon => (
              <Pokemon
                data={pokemon}
                onClick={() => this.choosePokemon(pokemon)}
                />
            ))
          }
        </div>
        <div className="App-mainContent">
          <div className="App-poke">
            {
              this.state.yourPokemon ? (
                <Pokemon
                  data={this.state.yourPokemon}
                  isActive={true}
                />
              ) : (
                <div>...</div>
              )
            }
          </div>

          <div className="App-poke">
            {
              this.state.opposingPokemon ? (
                <Pokemon
                  data={this.state.opposingPokemon}
                  isActive={true}
                  onClick={this.attackOpponent}
                />
              ) : (
                <div>...</div>
              )
            }
          </div>
          <div className="App-message">

            {
              this.state.yourPokemon ? null : (
                <p>No Pokemon chosen!</p>
              )
            }

            {
              this.state.message ? (
                <p>{this.state.message}</p>
              ) : (
                null
              )
            }

            {/*
              <button onClick={this.catchPokemon}>
                <img src="https://i.imgur.com/BTqJABy.png" alt="Pokeball" />
                Throw a Pokeball!
              </button>
            */}
          </div>

        </div>

      </div>
    );
  }
}

export default App;
