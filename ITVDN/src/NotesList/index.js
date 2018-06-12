import {Component} from 'react';

import {NoteEditor} from './components/NoteEditor'
import {NoteSearcher} from './components/NoteSearcher'
import {NotesGrid} from './components/NotesGrid'

import './scss/notes-list.scss';


export class NotesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [],
			searchString: ''
		};

		this.handleNoteAdd = this.handleNoteAdd.bind(this);
		this._updateLocalStorage = this._updateLocalStorage.bind(this);
		this.handleNoteDelete = this.handleNoteDelete.bind(this);
		this.getSearchString = this.getSearchString.bind(this);
		this.filteredNotes = this.filteredNotes.bind(this);
	}

	componentDidMount() {
		const localNotes = JSON.parse(localStorage.getItem("notes"));
		if(localNotes) {
			this.setState({
				notes: localNotes
			});
		}
	}


	handleNoteAdd(newNote) {
		const newNotes = this.state.notes.slice();
		newNotes.unshift(newNote);

		this.setState({
			notes: newNotes
		});
	}

	handleNoteDelete(note) {
		const noteId = note.id;
		const newNotes = this.state.notes.filter((note) => (note.id !== noteId));

		this.setState({
			notes: newNotes
		});
	}

	getSearchString(string) {
		this.setState({searchString: string.toLowerCase()});
	}

	filteredNotes(notes, filter) {

		if(filter) {
			const newNotes = notes.filter((el) => {
				let searchValue = el.text.toLowerCase();
				return searchValue.indexOf(filter) !== -1;
			});

			if(newNotes.length === 0) {
				return ["NO SUCH Notes"];
			} else {
				return newNotes;
			}
		}

		return notes;
	}

	componentDidUpdate() {
		this._updateLocalStorage();
	}

	render () {

		return (
			<div className="notes-app">

				<h1>Notes</h1>
				<NoteEditor onNoteAdd={this.handleNoteAdd} />
				<NoteSearcher onNoteSearch={this.getSearchString} />
				<NotesGrid onNoteDelete={this.handleNoteDelete}
									 notes={this.filteredNotes(this.state.notes, this.state.searchString)} />
			</div>
		);
	}

	_updateLocalStorage() {
		const notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	}
}

