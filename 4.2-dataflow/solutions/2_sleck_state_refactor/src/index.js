import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppBonus from './AppBonus';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AppBonus />, document.getElementById('root'));
registerServiceWorker();

