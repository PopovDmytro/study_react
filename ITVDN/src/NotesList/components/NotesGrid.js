import {Component} from 'react';
import {PropTypes} from 'prop-types';

import {Note} from './Note';

export class NotesGrid extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		const grid = this.refs.grid;
		this.msnry = new Masonry(grid, {
			itemSelector: '.note',
			columnWidth: 200,
			gutter: 10
		});
	}

	componentDidUpdate(prevsProps) {
		if(this.props.notes.length !== prevsProps.notes.length) {
			this.msnry.reloadItems();
			this.msnry.layout();
		}
	}

	render () {
		const {notes} = this.props;

		const onNoteDelete = this.props.onNoteDelete;

		return (
			<div className="notes-grid" ref="grid">
				{notes.map((note) =>  {
					return ( (typeof note === 'object')?
						<Note key={note.id} color={note.color} onDelete={onNoteDelete.bind(null, note)}>
							{note.text}
						</Note> :
						<h1 key={1}>{note}</h1>
					); })
				}
			</div>
		);
	}
}

NotesGrid.propTypes = {
	notes: PropTypes.array,
	onNoteDelete: PropTypes.func
};