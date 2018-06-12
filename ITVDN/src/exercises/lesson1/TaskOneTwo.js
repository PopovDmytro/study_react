import {Component} from 'react';

export class TaskOneTwo extends Component {
	constructor(props){
		super(props);

		this.state = {
			taskOne: {
				name: 'Lessons 1',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
			},
			displayedText: " ,stranger!",
		};

		this.setText = this.setText.bind(this);
	}

	setText(e) {

		this.setState({
			displayedText: (e.target.value) !== "" ? e.target.value :" ,stranger!"
		});
	}

	render () {

		return (
			<div className="block">
				<h1>{this.state.name}</h1>
				<p>{this.state.text}</p>

				<div className="text-input">
					<input type="text" onChange={this.setText}/>
					<p>Hello {this.state.displayedText}</p>
				</div>
			</div>
		);
	}
}