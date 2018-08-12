import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: '',
    animals: [
        'cow',
        'horse',
        'pig',
        'cat',
        'donkey',
    ],
  }

  onNameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      name: value,
    });
  }
  deleteAnimal = (event) => {
    let ind = event.target.id;
    let animals = this.state.animals.concat([]);
    animals.splice(ind, 1);
    this.setState({
        animals: animals,
    });
  }
  addAnimal = () => {
    console.log('adding a new animal!',this.state.name[0]);
    const animals = this.state.animals.concat([]);
    animals.push(this.state.name);
    this.setState({
        animals: animals,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/HzafyBAb.jpg" />
          <h1 className="App-title">Farm Tracker</h1>
        </header>
        <div className="Form">

          <input
              placeholder="Enter an animal name"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          <button onClick={this.addAnimal}>Add</button>

          <div>
            <h2>Animals</h2>

            {this.state.animals.map((animal, index) => (
              <div>{index}: {animal}
                <button id={index} onClick={this.deleteAnimal}>Delete</button>
              </div>
            ))}

          </div>


          <div>
            <h2>Animals with C</h2>

            {this.state.animals.filter(animal => animal[0] === 'C' || animal[0] === 'c').map(animal => (
                  <div>{animal}</div>
              ))}


          </div>
        </div>
      </div>
    );
  }
}

export default App;
