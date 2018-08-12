import React, { Component } from 'react';
import './App.css';

const PAGE_SIZE = 10;

class App extends Component {
  state = {
    description: 'Hit refresh...',
    totalPages: 0,
    page: 0,
    books: [],
    isLoading: false,
    query: 'the lord of the rings',
  }

  /*
  This method is just used for generating the API's URL based on the state.
  */
  getURL = () => {
    // Create an array of all the principle parts of the URL, and then join the
    // array together. This is just to make the method more legible.
    return [
      'http://openlibrary.org/search.json?q=',
      this.state.query.replace(/\W+/g, '+'),
      '&limit=',
      PAGE_SIZE,
      '&offset=',
      PAGE_SIZE * (this.state.page || 0),
    ].join('');
  }

  /*
  doFetch will do the fetch to the API based on state, updating the state with
  the books retrieved.
  */
  doFetch = () => {
    const url = this.getURL();
    console.log('making query to ', url);
    this.setState({isLoading: true});
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Calculate the total pages, based on the page size and the number of
        // results
        const totalPages = Math.ceil(data.numFound / PAGE_SIZE);
        console.log('data', data);

        // Set the state of the new information, notably the total number of
        // pages, and the array of data we got back
        this.setState({
          totalPages: totalPages,
          books: data.docs,
          isLoading: false,
        });
      });
  }

  onSearch = () => {
    // Reset the page 0, then do a fetch to gather new data
    this.setState({page: 0}, this.doFetch);
  }

  onQueryChange = (ev) => {
    this.setState({query: ev.target.value});
  }

  decrementPage = () => {
    if (this.state.page <= 0) {
      return; // don't do anything
    }
    this.setState({page: this.state.page - 1}, this.doFetch);
  }

  componentDidMount() {
    this.doFetch();
  }

  incrementPage = () => {
    if (this.state.page >= this.state.totalPages) {
      return; // don't do anything
    }
    this.setState({page: this.state.page + 1}, this.doFetch)
  }

  render() {
    return (
      <div className="App">
        <div className="SearchBox">
          <input
            placeholder="Type a book title..."
            onChange={this.onQueryChange}
            value={this.state.query}
            />
          <button onClick={this.onSearch}>Search</button>
        </div>
        <div className="Paginator">
          <button onClick={this.decrementPage}pagin>&larr;</button>
          <span>{this.state.page + 1} / {this.state.totalPages + 1}</span>
          <button onClick={this.incrementPage}>&rarr;</button>
        </div>
        <div className="Books">
          {this.state.isLoading ?  (
              <div class="loader">Loading...</div>
            ) : this.state.books.map(book => (
              <div className="Books-book">
                <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />
                <div className="Books-book-details">
                  <div className="Books-book-title">{book.title_suggest}</div>
                  <strong>Author:</strong> {(book.author_name || []).join(',')}<br />
                  <strong>Language:</strong> {(book.language || []).join(',')}<br />
                  <strong>Year Published:</strong> {book.first_publish_year}<br />
                  <strong>Publisher(s):</strong> {(book.publisher || []).join(',')}<br />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
