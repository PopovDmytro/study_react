import {Component} from 'react';

export class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="home-page">
				<h2 className="title"> Home Page </h2>
				<div className="text">
				<p>HOME PAGE !!!</p>
				</div>
			</div>
		);
	}
}