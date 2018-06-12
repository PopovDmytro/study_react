import {Component} from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
//
import './scss/style.scss';
//
const browserHistory = createBrowserHistory();
const hashHistory = createHashHistory();
//
import {App} from './App'
import {AboutPage} from './components/AboutPage'
import {InboxPage} from './components/InboxPage';
import {Message} from './components/Message'

export class RouteMessagesApp extends Component {
	constructor(props) {
		super(props);

	}

	render() {

		return (
			<div className="route-messages-app">
				<Router history={hashHistory}>
					<App>
						<Switch >
							<Route path="/about" component={AboutPage} />
							<Switch>
								<InboxPage>
									<Route path="/inbox/message/:messageId" component={Message} />
								</InboxPage>
							</Switch>
						</Switch>
					</App>
				</Router>
			</div>
		);
	}
}