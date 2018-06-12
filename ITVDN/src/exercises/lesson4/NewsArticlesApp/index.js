import {Component} from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
//
import {NavBar} from './components/NavBar';
import {News} from './components/News';
import {Articles} from './components/Articles';
import {Article} from './components/Article';
//
import './scss/styles.scss';

const hashHistory = createHashHistory();

export class NewsArticlesApp extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

	render () {

		return (
			<div className="app-wrapper">
				<h1>news articles app</h1>
				<Router history={hashHistory}>
					<div>
						<NavBar />
						<Switch >
							<Route path="/news" component={News} />
							<Route path="/articles" component={Articles} />
							<Route path="/article/:articleId" component={Article} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}