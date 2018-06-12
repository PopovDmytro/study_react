import {Component} from 'react';
//
import {NavBar} from './NavBar';

export class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render () {

		return (
			<div className="about-page">
				{/*<NavBar inCartValue="1" />*/}
				<h1>Home page</h1>
				<p>Home Page ...</p>
			</div>
		)
	}
}