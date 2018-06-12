import {Component} from 'react';
//
import {CartProductView} from './CartProductView';

export class Cart extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const {cartProducts} = this.props;

		return (
			<div className="cart-page">
				<h2 className="title"> Cart </h2>
				<div className="cart-inner-wrapper">
					{
						cartProducts.length ?
							cartProducts.map(product => <CartProductView key={product.id} {...product} onDeleteProduct={this.props.onDeleteProduct} />) :
							<div>
								<strong>no products in cart</strong>
							</div>
					}
				</div>
			</div>
		);
	}
}