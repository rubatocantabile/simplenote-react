import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './components/App';
import { unregister } from './serviceWorker.js'

ReactDOM.render(<App />, document.getElementById('root'));
unregister();