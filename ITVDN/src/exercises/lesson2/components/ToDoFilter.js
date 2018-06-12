import {Component} from 'react';

export class ToDoFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 'all'
		};

		this.filterQuery = this.filterQuery.bind(this);
		this.isActive = this.isActive.bind(this);
	}

	filterQuery(value) {
		this.props.onToDoFilter(value);
		this.setState({selected: value});
	}

	isActive(value) {
		return (value === this.state.selected)? 'active' : 'default';
	}

	render () {

		return (
			<div className="filter">
				<h3>Filter to do list</h3>
				{
					this.props.filterButtons.map((btn, i) => (
						<button key={i}
										className={this.isActive(btn)}
										onClick={() => (this.filterQuery(btn))} >{btn}</button>
					))
				}
			</div>
		);
	}
}