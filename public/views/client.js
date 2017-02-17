import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './home/Home.js';
import Browse from './browse/Browse.js';

import Master from './../styles/Master.scss';


class App extends React.Component{
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Home} />
				<Route path="/browse" component={Browse} />
			</Router>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
