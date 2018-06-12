import {Component} from 'react';
import {NavLink} from 'react-router-dom'

export class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="app-messages">
				<nav className="menu-bar">
					<div className="menu-item">
						<NavLink className="menu-item-link" to="/about" >About</NavLink>
					</div>
					<div className="menu-item">
						<NavLink className="menu-item-link" to="/inbox" >Inbox</NavLink>
					</div>
				</nav>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}

}