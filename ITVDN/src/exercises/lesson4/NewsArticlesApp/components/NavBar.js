import {Component} from 'react';
import {NavLink} from 'react-router-dom'

export class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
				<nav className="nav-bar">
					<div className="menu-item">
						<NavLink className="menu-item-link" to="/articles" >Articles</NavLink>
					</div>
					<div className="menu-item">
						<NavLink className="menu-item-link" to="/news" >News</NavLink>
					</div>
				</nav>
		);
	}
}