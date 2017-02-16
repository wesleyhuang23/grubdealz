import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home/home.js';
import Master from '../styles/Master.scss';


class App extends React.Component{
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Home} />
			</Router>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
