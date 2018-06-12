import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import { Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createHashHistory'

import './stylesheets/index.scss'
import './stylesheets/ui.scss'

const history = createHistory();

window.React = React;

render(
	<Router>
		<Switch>
			<Route path="/" component={App} />
			<Route path="list-days" component={App}>
				<Route path=":filter" params="log" component={App} />
			</Route>
			<Route path="add-day" component={App} />
			<Route path="*" component={Whoops404}/>
		</Switch>
	</Router>,

	document.getElementById('react-container')
);
