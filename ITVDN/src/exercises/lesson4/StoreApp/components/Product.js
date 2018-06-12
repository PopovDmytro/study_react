import {Component} from 'react';
//
import products from '../products.json';

export class Product extends Component {
	constructor(props) {
		super(props);

		this.state = {
			product: this.findMessage()
		};

		this.findMessage = this.findMessage.bind(this);
		this.handleCurrentProductId = this.handleCurrentProductId.bind(this);

	}

	findMessage () {
		return products.find(product => product.id === this.props.match.params.id);
	}

	handleCurrentProductId(productId, product) {
		this.props.onAddToCart(productId, product);
	}

	render() {

		const {id, img, title, name, thumbnail, description, price} = this.state.product;

		return (
			<div className="product-wrapper">
				<div className="top-block">
					<h3>{title}</h3>
					<img src={img} alt=""/>
				</div>
				<div className="content-block">
					<p className="name">{name} - price: {price}$</p>
					<p>{description}</p>
				</div>
				<div className="button-wrap">
					<button className="button add-to-cart" type="button" onClick={this.handleCurrentProductId.bind(null ,id, this.state.product)}>add to cart</button>
				</div>
			</div>
		);
	}
}