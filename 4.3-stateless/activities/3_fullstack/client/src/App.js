import React, { Component } from 'react';
import './App.css';

import MovieDetails from './components/MovieDetails/MovieDetails.js';

class App extends Component {
  state = {
    movies: [],
    isLoading: false,
  }

  componentDidMount() {
    fetch('/api/all')
      .then(response => response.json())
      .then(data => {
        console.log('got data back!');
        console.log(data);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aye Em Dee Bee</h1>

          <div>
            <input />
            <button>🔎</button>
          </div>

          <img src="https://i.imgur.com/frWeK97.gif" />

        </header>
        <div className="App-results">

          {/* Hmmm Movie Details might need tweaking, too */}
          <MovieDetails
              name="The Shawshank Redemption"
              description="Two imprisoned men bond over a number of years"
              rating="9.3"
              year="1994"
              director="Frank Darabont"
              length="142" />
        </div>
      </div>
    );
  }
}

export default App;
