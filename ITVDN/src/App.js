import {Component} from 'react'

export class App extends Component {
	constructor(props) {
		super(props);

	}

	render() {

		const {name, action} = this.props;

		return (
			<div>
				<h1>{name}</h1>
				<h2>{action}</h2>
			</div>
		)
	}
}