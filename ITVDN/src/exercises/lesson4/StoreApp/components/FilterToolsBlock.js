import {Component} from 'react';

export class FilterToolskBlock extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		this.handlePriceSort = this.handlePriceSort.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handlePriceSort (e) {
		this.props.onSort(e.target.value);
	}

	handleSearch (e) {
		this.props.onFilter(e.target.value);
	}

	render() {

		return (
			<div className="sort-block">
				<div className="price">
					<span>price : </span>
					<button value="up" onClick={this.handlePriceSort}>&#8593;</button>
					<button value="down" onClick={this.handlePriceSort}>&#8595;</button>
				</div>
				<div className="search">
					<label htmlFor="">
						serch <input type="text" onChange={this.handleSearch}/>
					</label>
				</div>
			</div>
		);
	}
}