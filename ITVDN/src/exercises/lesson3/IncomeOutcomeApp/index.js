import {Component} from 'react';
import $ from 'jquery';
//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
//
import './scss/style.scss'
import {TableHolder} from './components/TableHolder';
import {TableEdit} from './components/TableEdit';
import {TableFilter} from './components/TableFilter';

import './scss/style.scss'


const styles = {
	container: {
		// textAlign: 'center',
		// paddingTop: 50,
		// maxWidth: 768,
		// margin: '0 auto'
	},
};

const muiTheme = getMuiTheme({
	palette: {
		// accent1Color: deepOrange500,
	},
});

const x = [
	{
		"id": "1231231231",
		"val": "100",
		"date": "17/ 04/ 1986"
	},
	{
		"id": "1231212313425631563",
		"val": "-10",
		"date": "18/ 04/ 1986"
	},
	{
		"id": "1231231231asd",
		"val": "2000",
		"date": "17/ 04/ 1986"
	},
	{
		"id": "asd1231212313425631563",
		"val": "-210",
		"date": "18/ 04/ 1986"
	},
	{
		"id": "123asd123",
		"val": "300",
		"date": "17/ 04/ 1986"
	},
	{
		"id": "1231213",
		"val": "-30",
		"date": "18/ 04/ 1986"
	},
	{
		"id": "1231d",
		"val": "4000",
		"date": "17/ 04/ 1986"
	},
	{
		"id": "a3425631563",
		"val": "-410",
		"date": "18/ 04/ 1986"
	},
	{
		"id": "1509993257100",
		"val": "1",
		"date": "Wed/ Nov/ 01/ 2017"
	}
];

export class IncomeOutcomeApp extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			insOuts: [],
			filter: '',
			filterButtons: ['all', 'income', 'outcome']
		};

		this.filteredInsOuts = this.filteredInsOuts.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleInOutAdd = this.handleInOutAdd.bind(this);
		this._updateDb = this._updateDb.bind(this);
	}

	componentDidMount() {
		const self = this;
		$.ajax({
			url: "http://localhost:3000/insOuts",
			error: function(jqXHR, errorStatus, errorText){
				console.error(jqXHR, errorStatus, errorText);
			},

		}).done( function(data, status, jqXHR){
			if(Array.isArray(data)) {
				self.setState({
						insOuts: data
					});
				}
			}
		);
	}

	filteredInsOuts (inOuts, filter) {
		return (filter === 'income')? inOuts.filter((item) => (item.val > 0)):
					 (filter === 'outcome')? inOuts.filter((item) => (item.val < 0)): inOuts;
	}

	handleDelete(inOut) {
		const inOutId = inOut.id;
		const newInsOuts = this.state.insOuts.filter((inOut) => (inOut.id !== inOutId));

		this.setState({
			insOuts: newInsOuts
		});

		$.ajax({
			url: "http://localhost:3000/insOuts/" + inOutId,
			method: 'DELETE'
		});
	}

	handleEdit() {

	}

	handleFilter(filter) {
		this.setState({filter: filter.toLowerCase()});
	}

	handleInOutAdd (newInOut) {
		const newArrOfInOuts = this.state.insOuts.slice();
		newArrOfInOuts.push(newInOut);
		this.setState({insOuts : newArrOfInOuts});

		$.ajax({
			url: "http://localhost:3000/insOuts",
			method: "POST",
			data: newInOut,
			error: function(jqXHR, errorStatus, errorText){
				console.warn(jqXHR, errorStatus, errorText);
			},
		});
	}

	componentDidUpdate() {
		this._updateDb();
	}

	render() {

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div style={styles.container} className="container" >

					<TableEdit onInOutAdd={this.handleInOutAdd} />

					<TableHolder insOuts={this.filteredInsOuts(this.state.insOuts, this.state.filter)}
											 onDeleteInOut={this.handleDelete} />

					<TableFilter filterButtons={this.state.filterButtons}
											 onFilterInsOuts={this.handleFilter} />

				</div>
			</MuiThemeProvider>
		);
	}

	_updateDb() {}

}
