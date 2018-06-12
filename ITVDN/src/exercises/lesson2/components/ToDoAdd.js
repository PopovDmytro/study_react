import {Component} from 'react';

export class ToDoAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: false,
			text: '',
			isValid: ''
		};

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleItemAdd = this.handleItemAdd.bind(this);
	}

	handleTextChange(e) {
		this.setState({text:  e.target.value});

		if(e.target.value){
			this.setState({
				isValid: 'valid'
			});
		} else {
			this.setState({isValid: 'invalid'});
		}
	}

	handleItemAdd() {
		const newItem = {
			text: this.state.text,
			done: false,
			id: Date.now(),
			date: Date.now()
		};

		if(this.state.text) {
			this.props.onToDoItemAdd(newItem);
			this.setState({text: ''});
		} else {
			this.setState({isValid: 'invalid'});
		}
	}

	render () {

		return (
			<div className="to-do-add">
				<input
					type="text"
					placeholder="What you need to do?"
					value={this.state.text}
					onChange={this.handleTextChange}
					onKeyPress={(e) => (e.key === 'Enter'? this.handleItemAdd() : null)}
					className={this.state.isValid}
				/>
				<button
					className="add-button"
					onClick={this.handleItemAdd} >
					+
				</button>
			</div>
		);
	}
}