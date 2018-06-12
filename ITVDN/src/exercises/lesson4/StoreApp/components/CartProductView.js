import {Component} from 'react';
//
// import products from '../products.json';

export class CartProductView extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

		this.handleOnDeleteProduct = this.handleOnDeleteProduct.bind(this);

	}

	handleOnDeleteProduct (id) {
		this.props.onDeleteProduct(id);
	}

	render() {

		const {id, img, title, name, thumbnail, description, price, productAmount} = this.props;

		return (
			<div className="product-wrapper">
				<div className="top-block">
					<h3>{title}</h3>
					<hr />
					<img src={img} alt=""/>
				</div>
				<div className="content-block">
					<p className="name">{name} - price: {price}$</p>
				</div>
				<div className="button-wrap">
					<p>
						<strong>product amount :{productAmount}</strong>
					</p>
					<button className="button" type="button" onClick={this.handleOnDeleteProduct.bind(null, id)} >delete product</button>
				</div>
			</div>
		);
	}
}