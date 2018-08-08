import React from 'react';
import {Route, Switch} from 'react-router-dom';


import App from './componets/App';
import Contact from './componets/Contact';
import About from './componets/About';
import Home from './componets/Home';
import Page04 from './componets/Page04';

const AppRoutes= () =>
	<App>
		<Switch>
			<Route path="/about" component ={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/" component={Home} />
			<Route  component={Page04} />
		</Switch>

	</App>
	export default AppRoutes;