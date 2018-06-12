import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types'

export const Todos = (props) => {

	let todoItems;

	if(props.todos) {
		todoItems = props.todos.map( (todo, i) => {

			return (
				<TodoItem key={ todo.title } todo={ todo } />
			)
		});
	}

	return (
		<div className="row">
			<div className="column">
				<h3>Latest todos</h3>
				{ todoItems }
			</div>
		</div>
	)
};

Todos.propTypes = {
	todos: PropTypes.array
};