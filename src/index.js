import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store';
import './appStyles.css'
import './cardStyles.css'
import './listStyles.css'

ReactDOM.render(<App store={STORE} />, document.getElementById('root'));
