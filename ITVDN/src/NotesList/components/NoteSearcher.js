import {Component} from 'react';
import { PropTypes } from 'prop-types';

export class NoteSearcher extends Component {
	constructor(props) {
		super(props);

		this.searchQuery = this.searchQuery.bind(this);
	}

	searchQuery(e) {
			const searchString = e.target.value;
			this.props.onNoteSearch(searchString);
	}

	render () {

		return (
			<div className="search-wrapper">
				<h3>Note FILTER</h3>
				<input type="text" onChange={this.searchQuery} />
			</div>
		);
	}
}

NoteSearcher.propTypes = {
	onNoteSearch: PropTypes.func
};