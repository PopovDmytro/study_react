import {Component} from 'react'
import {PropTypes} from 'prop-types'

export class NoteEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			color: ''
		};

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.handleNoteAdd = this.handleNoteAdd.bind(this);
	}

	handleTextChange(e) {
		this.setState({text: e.target.value});
	}

	handleColorChange(e) {
		this.setState({color: e.target.value});
	}

	handleNoteAdd() {
		const newNote = {
			text: this.state.text,
			color: this.state.color,
			id: Date.now()
		};

		this.props.onNoteAdd(newNote);
		this.setState({text: ''});
	}

	render () {

		return (
			<div className="note-editor">
				<textarea
					className="textarea"
					rows={5}
					placeholder="Enter your note ..."
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<input
					type="color"
					value="#33dd44"
					onChange={this.handleColorChange}
				/>
				<button className="add-button" onClick={this.handleNoteAdd}>Add note</button>
			</div>
		);
	}
}

NoteEditor.propTypes = {
	onNoteAdd: PropTypes.func
};