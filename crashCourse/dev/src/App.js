import { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import uuid from 'uuid';
import $ from 'jquery';
//components
import { Projects } from './Components/Projects';
import AddProject from './Components/AddProject';
import {Todos} from './Components/Todos';
//

export class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			todos: []
		}
	}

	getTodos () {
		$.ajax({
			url: "https://jsonplaceholder.typicode.com/todos",
			dataType: 'json',
			cache: 'false',
			success: function (data) {
				this.setState( {todos: data}, function () {
					console.log(this.state);
				});
			}.bind(this),
			error: function (xhr, status, err) {
				console.error(err)
			}
		})
	}

	getProjects() {
		this.setState({
				projects: [
					{
						id: uuid.v4(),
						title: "Business Website",
						category: "Web design"
					},
					{
						id: uuid.v4(),
						title: "Social App",
						category: "Mob Dev"
					},
					{
						id: uuid.v4(),
						title: "Ecommerce Shoping Cart",
						category: "Web development"
					}
				]
			}
		);
	}

	componentWillMount() {
		this.getProjects();
		this.getTodos();
	}

	componentDidMount() {
		this.getTodos();
	}

	handleAddProject(project){
		let projects = this.state.projects;
		projects.push(project);
		this.setState({ projects: projects });
	}

	handleDeleteProject(id){
		let projects = this.state.projects;
		let index = projects.findIndex( x => x.id === id );
		projects.splice(index, 1);
		this.setState({ projects: projects });
	}

	render() {

		return (
			<div className="app">
					<AddProject addProject={ this.handleAddProject.bind(this) } />
					<Projects projects={ this.state.projects } onDelete={ this.handleDeleteProject.bind(this) } />

					<br />
					<hr />

					<Todos todos={ this.state.todos } />
			</div>
		)
	}
}

