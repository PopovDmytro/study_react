import { ProjectsItem } from './ProjectItem';
import PropTypes from 'prop-types'

export const Projects = (props) => {

	let projectItems;

	const deleteProject = (id) => (
		props.onDelete(id)
	);

	if(props.projects) {
		projectItems = props.projects.map( (project, i) => {
			// show(project, i);

			return (
				<ProjectsItem onDelete={ deleteProject.bind(this) } key={ project.title } project={ project } />
			)
		});
	}

	return (
		<div className="row">
			<div className="column">
				<h3>Latest projects</h3>
				{ projectItems }
			</div>
		</div>
	)
};

Projects.propTypes = {
	projects: PropTypes.array,
	onDelete: PropTypes.func
};