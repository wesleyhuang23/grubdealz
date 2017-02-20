import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import {createStore} from 'redux';
import allReducers from './../reducers';
//imports index by default if just give the folder
import {Provider} from 'react-redux';


import Home from './home/Home.js';
import Browse from './browse/Browse.js';

import Master from './../styles/Master.scss';
import Browser from './../styles/Browser.scss';

const store = createStore(allReducers);


class App extends React.Component{
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path='/' component={Home} />
					<Route path="/browse/:city" component={Browse} />
				</Router>
			</Provider>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
