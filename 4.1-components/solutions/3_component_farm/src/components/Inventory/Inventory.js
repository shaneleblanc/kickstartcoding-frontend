import React, { Component } from 'react';
import './Inventory.css';

import Wheat from '../Wheat/Wheat.js';
import Stew from '../Stew/Stew.js';
import Fish from '../Fish/Fish.js';

class Inventory extends Component {
  render() {
    return (
      <div className="Inventory">
        <h1>Inventory</h1>

        <Wheat />
        <Stew />
        <Fish />
      </div>
    );
  }
}

export default Inventory;
