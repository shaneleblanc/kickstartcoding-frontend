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
          <p>{this.props.rating}</p>

          <strong>Year</strong>
          <p>{this.props.year}</p>

          <strong>Director</strong>
          <p>{this.props.director}</p>

          <strong>Length</strong>
          <p>{this.props.length} minutes</p>
      </div>
    );
  }
}

export default MovieDetails;
