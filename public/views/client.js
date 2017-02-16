import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Master from '../styles/Master.scss';


class App extends React.Component{
	render() {
		return (
			<div>
				<h1>Grubdealz</h1>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
