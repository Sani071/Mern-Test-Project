import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/APP/App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
