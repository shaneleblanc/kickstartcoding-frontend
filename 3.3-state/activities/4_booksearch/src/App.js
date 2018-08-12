import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    searchBox: '',
    books: [],
  }

  onNameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      searchBox: value,
    });
  }

  doFetch = () => {
    let result;
    let query = this.state.searchBox;
    let url = `http://openlibrary.org/search.json?q=${query}&limit=10&offset=0`
    fetch(url).then(response => response.json())
    .then(data => {
      this.setState({
        books: data.docs,
      })
    })
    .catch(error => console.error(error));
    this.render();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.imgur.com/HzafyBAb.jpg" />
          <h1 className="App-title">Book Search</h1>
        </header>
        <div className="Form">

          <input
              placeholder="Enter an book name"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          <button onClick={this.doFetch}>Search</button>

          <div>
            <h2>Books</h2>

              {this.state.books.map(book => (
                <div class="Book">
                  <div class="Book-image"><img src={'http://covers.openlibrary.org/b/isbn/'+book.isbn[0]+'-M.jpg'} /></div>
                  <div class="Book-info"><h2>{book.title}</h2>
                  Published: {book.first_publish_year} <br />
                  By {book.contributor ? (book.contributor[0]) : (book.author_name)} <br />
                 </div>
                </div>
              ))}
          </div>


      </div>
    </div>
    );
  }
}

export default App;
