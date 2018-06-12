import {Component} from 'react';
//
import RaisedButton from 'material-ui/RaisedButton';

export class TableFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 'all'
		};

		this.filterQuery = this.filterQuery.bind(this);
		this.isActive = this.isActive.bind(this);
	}

	filterQuery (value) {
		this.props.onFilterInsOuts(value);
		this.setState({selected: value});
	}

	isActive (value, color) {
		if(color){
			return (value === this.state.selected) ? {color: '#1f8f25'} : null;
		} else {
			return (value === this.state.selected) ? {backgroundColor: 'orange'} : null;
		}
	}

	render() {

		return(
			<div className="filter-block">
				{
					this.props.filterButtons.map((btn, i) => (
						<RaisedButton
							key={i}
							label={btn}
							primary={true}
							labelStyle={this.isActive(btn, true)}
							buttonStyle={this.isActive(btn, false)}
							onClick={() => (this.filterQuery(btn))}
						/>
					))
				}
			</div>
		);
	}

}