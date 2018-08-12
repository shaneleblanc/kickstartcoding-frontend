import React, { Component } from 'react';
import './App.css';

import Books from './components/Books/Books.js';
import Paginator from './components/Paginator/Paginator.js';
import SearchBox from './components/SearchBox/SearchBox.js';

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
        <SearchBox
          onQueryChange={this.onQueryChange}
          onSearch={this.onSearch}
          query={this.state.query} />
        <Paginator
          incrementPage={this.incrementPage}
          decrementPage={this.decrementPage}
          page={this.state.page}
          totalPages={this.state.totalPages} />
        <Books
          isLoading={this.state.isLoading}
          books={this.state.books} />
      </div>
    );
  }
}

export default App;
