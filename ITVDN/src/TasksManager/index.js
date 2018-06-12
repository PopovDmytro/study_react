import {Component} from 'react';
import {BrowserRouter, /*Router,*/ Route, Switch, NavLink} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// import createHashHistory from 'history/createHashHistory';
// const hashHistory = createHashHistory();
//
import './scss/styles.scss';
//
import {App} from './App';
import {LoginPage} from './components/LoginPage';
//
import SessionActions from './actions/SessionAction';

window.handleGoogleApiLoader = () => {
	SessionActions.authorize(true);
};

export class TasksManager extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

	render () {

		return (
			<MuiThemeProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/login" component={LoginPage} />
					</Switch>
				</BrowserRouter>
			</MuiThemeProvider>
		)
	}
}