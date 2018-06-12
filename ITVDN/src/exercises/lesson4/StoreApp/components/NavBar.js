import {Component} from 'react';
import {NavLink} from 'react-router-dom'

export class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		 const {inCartValue} = this.props;

		return (
			<div className="">
				<nav className="menu-bar">
					<div className="menu-item">
						<NavLink className="menu-item-link" to="/" >Home</NavLink>
					</div>
					<div className="menu-item">
						<NavLink className="menu-item-link" to="/about" >About</NavLink>
					</div>
					<div className="menu-item">
						<NavLink className="menu-item-link" to="/categories" >Categories</NavLink>
					</div>
					<div className="menu-item">
						<NavLink className="menu-item-link" to={(inCartValue)? "/cart" : "#"} >
							CART { inCartValue? ' : ' + inCartValue : null}
						</NavLink>
					</div>
				</nav>
				<hr />
				<div className="">
					{this.props.children}
				</div>
			</div>
		);
	}

}