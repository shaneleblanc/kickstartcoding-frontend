import React, { Component } from 'react';
import './MovieDetails.css';
class MovieDetails extends Component {
  render() {
    return (
      <div className="MovieDetails">
          <strong>Name</strong>
          <p>{this.props.name}</p>

          <strong>Details</strong>
          <p>{this.props.details}</p>

          <strong>Rating</strong>
          <p></p>

          <strong>Year</strong>
          <p></p>

          <strong>Director</strong>
          <p></p>

          <strong>Length</strong>
          <p>minutes</p>
      </div>
    );
  }
}

export default MovieDetails;
