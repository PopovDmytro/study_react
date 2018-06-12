import { Component } from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types';

export default class AddProject extends Component {

	constructor() {
		super();

		this.state = {
			newProject: {}
		}
	}

	static defaultProps = {
		categories: ["Web Design", "Web Dev", "Mobile Dev"]
	};

	handleSubmit (e) {
		if(this.refs.title.value === ''){
			alert('title is required');
		} else {
			this.setState({
				newProject: {
					id: uuid.v4(),
					title: this.refs.title.value,
					category: this.refs.category.value
				}
			}, function () {
				this.props.addProject(this.state.newProject);
			})
		}

		e.preventDefault();

	}

	render () {
		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value={category} >{category}</option>
		});
		return (
			<div className="row">
				<h3> Add Project </h3>
				<form action="" onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<lable>Title</lable><br />
						<input type="text" ref="title" />
					</div>
					<div>
						<lable>Category</lable><br />
						<select ref="category" >
							{ categoryOptions }
						</select>
					</div>
					<br />
					<input type="submit" value="Submit" />
					<br />
				</form>
			</div>
		)
	}
}

AddProject.propTypes = {
	category: PropTypes.array,
	addProject: PropTypes.func,
};