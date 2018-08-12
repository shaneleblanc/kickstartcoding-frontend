import React, { Component } from 'react';
import './App.css';

import MovieDetails from './components/MovieDetails/MovieDetails.js';

class App extends Component {
  state = {
    movies: [],
    isLoading: false,
    searchBoxText: '',
  }

  onChangeSearchBox = (ev) => {
    this.setState({
      searchBoxText: ev.target.value,
    });
  }

  onGenericFormInputChange = (ev) => {
    const nameOfInput = ev.target.name;
    const newValue = ev.target.value;
    this.setState({
      [nameOfInput]: newValue,
    });
  }

  fetchData() {
    this.setState({
      isLoading: true,
    });
    fetch('/api/all')
      .then(response => response.json())
      .then(data => {
        console.log('got data back!');
        console.log(data);
        this.setState({
          movies: data.movies,
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  search = () => {
    fetch('/api/search/' + this.state.searchBoxText)
      .then(response => response.json())
      .then(data => {
        console.log('got data back!');
        console.log(data);
        this.setState({
          movies: data.results,
          isLoading: false,
        });
      });

    this.setState({
      isLoading: true,
      searchBoxText: '',
    });
  }

  submit = () => {
    const formData = {
      name: this.state.name,
      desc: this.state.details,
      rate: this.state.rating,
      year: this.state.year,
      director: this.state.director,
      length: this.state.length,
    };

    this.setState({
      isLoading: true,
    });

    fetch('/api/add/movie' + this.state.searchBoxText, {
        method: 'POST',
        body: JSON.stringify(formData),
      }).then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
        });
        this.fetchData();
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aye Em Dee Bee</h1>

          <div>
            <input
              onChange={this.onChangeSearchBox}
              value={this.state.searchBoxText} />
            <button onClick={this.search}>🔎</button>
          </div>

          <img src="https://i.imgur.com/frWeK97.gif" />

        </header>
        <div className="App-results">
          {
            this.state.isLoading ? (
              <strong>Loading...</strong>
            ) : (
              this.state.movies.map(movie => (
                <MovieDetails
                    name={movie.name}
                    details={movie.desc}
                    rating={movie.rate}
                    year={movie.year}
                    director={movie.director}
                    length={movie.length} />
              ))
            )
          }
        </div>
        <div className="App-addMovie">

            <label>Name</label>
            <input
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onGenericFormInputChange}
              />

            <label>Details</label>
            <input
                name="details"
                placeholder="Details"
                value={this.state.details}
                onChange={this.onGenericFormInputChange}
              />

            <label>Rating</label>
            <input
                name="rating"
                placeholder="Rating"
                value={this.state.rating}
                onChange={this.onGenericFormInputChange}
              />

            <label>Director</label>
            <input
                name="director"
                placeholder="Director"
                value={this.state.director}
                onChange={this.onGenericFormInputChange}
              />

            <label>Year</label>
            <input
                type="number"
                name="year"
                placeholder="Year"
                value={this.state.year}
                onChange={this.onGenericFormInputChange}
              />

            <label>Length</label>
            <input
                type="number"
                name="length"
                placeholder="Length"
                value={this.state.length}
                onChange={this.onGenericFormInputChange}
              />

            <label> </label>
            <button onClick={this.submit}>Add New Movie</button>

        </div>
      </div>
    );
  }
}

export default App;
