import PropTypes from 'prop-types'

export const ProjectsItem = (props) => {

	const deleteProject = (id) => (
		props.onDelete(id)
	);

	return (
		<li className="">
			<strong> { props.project.title } </strong> : { props.project.category } <a href="#" onClick={deleteProject.bind(this, props.project.id)}>X</a>
		</li>
		);
};

ProjectsItem.propTypes = {
	project: PropTypes.object,
	onDelete: PropTypes.func,
};