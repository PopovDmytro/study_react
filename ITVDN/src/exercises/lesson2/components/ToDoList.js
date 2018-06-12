import {Component} from 'react';

import {ToDoItem} from './ToDoItem';

export class ToDoList extends Component {
	constructor(props) {
		super(props);

	}

	render () {
		const onToDoDelete = this.props.onToDoDelete;

		return (
			<div className="div">
				<h2>To do list</h2>
				<ul>
					{
						this.props.toDoItems.map((item) => (
							<ToDoItem key={item.id}
												id={item.id}
												done={item.done}
												onCheckboxChange={this.props.onToDoCheck}
												onDelete={onToDoDelete.bind(null, item)}
							>
												{item.text}
							</ToDoItem>
						))
					}
				</ul>
			</div>
		);
	}
}