import React, { Component } from 'react';

class Roster extends Component {
    render() {
        (<div className="TeamManager-character">
            <h3>{this.props.character.name}</h3>
            <h4>{this.props.character.house}</h4>
            <button onClick={this.props.onClick}>Choose</button>
        </div>)
    }
}
export default Roster;