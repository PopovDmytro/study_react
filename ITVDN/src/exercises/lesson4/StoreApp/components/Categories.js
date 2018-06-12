import {Component} from 'react';
//
import {ProductPreview} from './ProductPreview';
import {FilterToolskBlock} from './FilterToolsBlock';
//
import products from '../products.json';
//


export class Categories extends Component {
	constructor(props) {
		super(props);

		this.state  = {
			sortValue: "",
			filter: ""
		};


		this.onProductClickHolder = this.onProductClickHolder.bind(this);
		this.handleSort = this.handleSort.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.filteredArray = this.filteredArray.bind(this);
	}

	onProductClickHolder (productId) {
		this.props.history.push(`/product/${productId}`);
	}

	filteredArray () {
		let filteredProducts = products.slice();

		if(this.state.filter) {
			filteredProducts = filteredProducts.filter((el) => {
				let searchValue = el.name.toLowerCase();
				return searchValue.indexOf(this.state.filter) !== -1;
			});

			if(filteredProducts.length === 0) {
				filteredProducts.push('NO SUCH products');
				return filteredProducts;
			}
		}

		if(this.state.sortValue && typeof filteredProducts[0] === 'object') {
			if(this.state.sortValue === 'up') {
				filteredProducts.sort(function(a,b) {return (parseFloat(a.price) > parseFloat(b.price)) ? 1 : ((parseFloat(b.price)> parseFloat(a.price)) ? -1 : 0);} );
			} else if(this.state.sortValue === 'down') {
				filteredProducts.sort(function(a,b) {return (parseFloat(a.price) > parseFloat(b.price)) ? -1 : ((parseFloat(b.price) > parseFloat(a.price)) ? 1 : 0);} );
			}
		}
		return filteredProducts;
	}

	handleSort (sortValue) {
		this.setState({sortValue: sortValue,});
	}

	handleFilter (filter) {
		this.setState({filter: filter});
	}

	render() {

		return (
			<div className="about-page">
				<h2 className="title"> Categories</h2>
				<div className="products-grid">
					<hr />
					<FilterToolskBlock
						onSort={this.handleSort}
						onFilter={this.handleFilter}
					/>
					<hr />
					<ul>
						{(typeof this.filteredArray()[0] === 'object') ?
							this.filteredArray().map(product => {
						 		return (
									<ProductPreview
										key={product.id} { ...product}
										onClick={this.onProductClickHolder} />
						 )}): this.filteredArray()[0]
						}
					</ul>
				</div>
			</div>
		);
	}
}