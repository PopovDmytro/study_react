import PropTypes from 'prop-types'

export const TodoItem = (props) => {
	
	return (
		<li className="todo">
			<strong> { props.todo.title } </strong>
		</li>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object
};