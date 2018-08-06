
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import state from './state'

ReactDOM.render(<App {...state} />, document.getElementById('root'));
registerServiceWorker();
