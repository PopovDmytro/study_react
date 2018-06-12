import { PropTypes } from 'prop-types';

export const Note = ({color, children, onDelete}) => {

	return (
		<div className="note" style={{color}}>
			{children}
			<span className="delete-note" onClick={onDelete}> × </span>
		</div>
	);

};

Note.propTypes = {
	color: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	onDelete: PropTypes.func
};