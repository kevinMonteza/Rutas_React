import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';
import { BrowserRouter as  Router} from 'react-router-dom';

import './index.css';

  ReactDOM.render(
  	<Router>
  		<AppRoutes />
  	</Router>, 
    document.getElementById("body"));
  registerServiceWorker();


