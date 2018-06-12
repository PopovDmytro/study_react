import {Component} from 'react';
//
import IconButton from 'material-ui/IconButton';
import {
	Table,
	TableBody,
	TableFooter,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
//icons
import Backspace from 'material-ui/svg-icons/content/backspace';
import Create from 'material-ui/svg-icons/content/create';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';

const styles = {
	icon: {
		marginRight: 10
	}
};

export class TableHolder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fixedHeader: true,
			fixedFooter: true,
			stripedRows: false,
			showRowHover: true,
			selectable: true,
			multiSelectable: false,
			enableSelectAll: false,
			deselectOnClickaway: true,
			showCheckboxes: false,
			height: '300px',
		};

		this.handleEdit = this.handleEdit.bind(this);

	}

	handleEdit () {

	}

	render() {
		const onDeleteInOut = this.props.onDeleteInOut;
		let total = 0;
		return(
			<Table
				height={this.state.height}
				fixedHeader={this.state.fixedHeader}
				fixedFooter={this.state.fixedFooter}
				selectable={this.state.selectable}
				multiSelectable={this.state.multiSelectable}
				// style={{marginBottom: 30}}
			>

				<TableHeader
					displaySelectAll={this.state.showCheckboxes}
					adjustForCheckbox={this.state.showCheckboxes}
					enableSelectAll={this.state.enableSelectAll}
				>
					<TableRow>
						<TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
							Income Outcome Table
						</TableHeaderColumn>
					</TableRow>
					<TableRow>
						<TableHeaderColumn ></TableHeaderColumn>
						<TableHeaderColumn >Value</TableHeaderColumn>
						<TableHeaderColumn >Date</TableHeaderColumn>
						<TableHeaderColumn ></TableHeaderColumn>
					</TableRow>
				</TableHeader>

				<TableBody
					displayRowCheckbox={this.state.showCheckboxes}
					deselectOnClickaway={this.state.deselectOnClickaway}
					showRowHover={this.state.showRowHover}
					stripedRows={this.state.stripedRows}
				>
					{this.props.insOuts.map( (inOut, index) => (
						<TableRow key={index}>
							{total = +total + +inOut.val}
							<TableRowColumn>{index}</TableRowColumn>
							<TableRowColumn>{inOut.val}</TableRowColumn>
							<TableRowColumn>{inOut.date}</TableRowColumn>
							<TableRowColumn>
								<IconButton onClick={onDeleteInOut.bind(null, inOut)} >
									<Backspace style={styles.icon} color="#c0c0c0" hoverColor="#f00" />
								</IconButton>
								<IconButton onClick={this.handleEdit} >
									<Create style={styles.icon} color="#c0c0c0" hoverColor="#2aaa1f" />
								</IconButton>
							</TableRowColumn>
						</TableRow>
					))}
				</TableBody>
				<TableFooter
					adjustForCheckbox={this.state.showCheckboxes}
				>
					<TableRow style={{borderTopColor: '#777', backgroundColor: '#dfdfdf'}}>
						<TableRowColumn style={{paddingBottom: 30, color: (total >= 0)? "#00bcd4": "#f00" }} >Total</TableRowColumn>
						<TableRowColumn style={{paddingBottom: 30, color: (total >= 0)? "#00bcd4": "#f00" }} >{total}</TableRowColumn>
					</TableRow>
				</TableFooter>

			</Table>
		);
	}

}