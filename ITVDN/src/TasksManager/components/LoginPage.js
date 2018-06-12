import {Component} from 'react';
import {NavLink} from 'react-router-dom'
//
import RaisedButton from 'material-ui/RaisedButton';


export class LoginPage extends Component {
	constructor(props) {
		super(props);

		this.handleLogIn = this.handleLogIn.bind(this);

	}

	handleLogIn () {}

	render() {

		return (
			<div className="LoginPage">
				<div className="LoginPage__banner">
					<div className="LoginPage__text">
						<h1>Almost google tasks</h1>
						<p>Organise your life</p>
						<RaisedButton
							className="login-btn"
							label="Log in"
							onClick={this.handleLogIn}
						/>
					</div>
					<img
						src="../img/"
						alt="login logo"
						className="LoginPage__image"
					/>
				</div>
			</div>
		);
	}

}