import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Router from './router/router';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.tentiraorta.com/';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
