import {Component} from 'react';

export class AboutPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="about-page">
				<h2 className="title"> About Page </h2>
				<div className="text">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium, assumenda, beatae commodi eius eveniet id ipsam natus necessitatibus obcaecati quasi quidem quis repellat veritatis!</p>
				</div>
			</div>
		);
	}
}