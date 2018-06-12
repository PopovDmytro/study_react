import {Component} from 'react';

import {ToDoAdd} from './components/ToDoAdd';
import {ToDoFilter } from './components/ToDoFilter';
import {ToDoList} from './components/ToDoList';

import './scss/todostyle.scss';

export class ToDoApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDoItems : [],
			filterButtons: ['all', 'new', 'completed'],
			filterQuery: ''
		};

		this.handleToDoItemAdd = this.handleToDoItemAdd.bind(this);
		this.handleToDoCheck = this.handleToDoCheck.bind(this);
		this.handleToDoDelete = this.handleToDoDelete.bind(this);
		this.handleFilterQuery = this.handleFilterQuery.bind(this);
		this.handleToDoFilter = this.handleToDoFilter.bind(this);

		this._updateLocalStorage = this._updateLocalStorage.bind(this);
	}

	componentDidMount () {
		const localToDoItems = JSON.parse(localStorage.getItem("toDoItems"));
		if(localToDoItems) {
			this.setState ({
				toDoItems: localToDoItems
			});
		}
	}

	handleToDoItemAdd (newItem) {
		const newToDoItems = this.state.toDoItems.slice();
		newToDoItems.push(newItem);

		this.setState({toDoItems: newToDoItems});
	}

	handleToDoDelete (item) {
		const itemId = item.id;
		const newToDoItems = this.state.toDoItems.filter((item) => (item.id !== itemId));

		this.setState({toDoItems: newToDoItems});
	}

	handleToDoCheck (e, id) {
		const itemId = id;

		const newToDoItems = this.state.toDoItems.slice();
		for (let i = 0; i < newToDoItems.length; i++) {

			if(newToDoItems[i].id === itemId) {
				newToDoItems[i].done = e.target.checked;

				return this.setState({toDoItems: newToDoItems});
			}
		}

		return false;
	}

	handleFilterQuery (filterQuery) {
		this.setState({filterQuery: filterQuery});
	}

	handleToDoFilter (items ,filterQuery) {
		const newToDoItems = items.slice();

		if(filterQuery === 'new'){
			return  newToDoItems.filter((item) => (!item.done));
		} else if (filterQuery === 'completed') {
			return  newToDoItems.filter((item) => (item.done));
		}

		return newToDoItems;
	}

	componentDidUpdate () {
		this._updateLocalStorage();
	}

	render () {

		const {toDoItems, filterButtons, filterQuery} = this.state;

		return (
			<div className="to-do-list">
				<h1>To Do list</h1>

				<ToDoAdd onToDoItemAdd={this.handleToDoItemAdd} />
				<ToDoFilter filterButtons={filterButtons}
										onToDoFilter={this.handleFilterQuery} />
				<ToDoList toDoItems={this.handleToDoFilter(toDoItems, filterQuery)}
									onToDoDelete={this.handleToDoDelete}
									onToDoCheck={this.handleToDoCheck} />
			</div>
		);
	}

	_updateLocalStorage() {
		const toDoItems = JSON.stringify(this.state.toDoItems);
		localStorage.setItem('toDoItems', toDoItems);
	}

}