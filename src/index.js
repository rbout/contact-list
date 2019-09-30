import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Appbar from './Appbar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Appbar />, document.getElementById('root'));

serviceWorker.unregister();
