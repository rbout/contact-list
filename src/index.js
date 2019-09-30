import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appbar from './Appbar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Appbar />, document.getElementById('root'));

serviceWorker.unregister();
