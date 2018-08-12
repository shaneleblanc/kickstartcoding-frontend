import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isLoading: false,
    username: '',
    results: [],
  }

  onUsernameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      username: value,
    });
  }

  onSubmit = () => {
    console.log('Getting clicked!', this.state.username);

    this.setState({
      isLoading: true,
    });

    fetch(`https://api.github.com/users/${this.state.username}/repos`)
      .then(response => response.json())
      .then(data => {

        // Check for errors:
        if (data.message ===  "Not Found") {
          this.setState({
              results: [],
              isLoading: false,
          });
          return;
        }

        console.log('data', data);
        this.setState({
            results: data,
            isLoading: false,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/IGjUDRd.png" alt="octo" />
          <h1 className="App-title">GitHub Profile Search</h1>
        </header>
        <div className="Form">

          <input
              placeholder="Enter your GitHub username"
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
          <h2>URL: github.com/{this.state.username || '...'}/</h2>
          <button onClick={() => this.onSubmit()}>Submit</button>


          <p>{this.state.results.length === 0 ? 'No results.' : ''}</p>

          {
            this.state.results.map((item, index) => (
              <div key={index}>
                <hr />
                <h2>{item.name}</h2>
                <p>{item.description}</p>

              </div>
            ))
          }

          {
            this.state.isLoading ? (
              <img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loading" />
            ) : null 
          }
        </div>
      </div>
    );
  }
}

export default App;
