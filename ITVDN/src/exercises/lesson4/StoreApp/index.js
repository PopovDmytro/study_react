import {Component} from 'react';
import {BrowserRouter, /*Router,*/ Route, Switch} from 'react-router-dom';
// import createHashHistory from 'history/createHashHistory';
//
import {NavBar} from './components/NavBar';
import {HomePage} from './components/HomePage';
import {AboutPage} from './components/AboutPage';
import {Categories} from './components/Categories';
import {Product} from './components/Product';
import {Cart} from './components/Cart';
//
import './scss/styles.scss';
//
// const hashHistory = createHashHistory();
//
import products from './products.json';

export class StoreApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			arrProductsInCart: [],
			inCartProducts: []
		};

		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.handleDeleteProductFromCart = this.handleDeleteProductFromCart.bind(this);
	}

	handleAddToCart (productId, product) {
		const inCartProducts = this.state.inCartProducts.slice();
		const foundProduct = inCartProducts.find(inCartProduct => inCartProduct.id === product.id);

		if(foundProduct){
			product.productAmount += 1;
		} else {
			product.productAmount = 1;
			inCartProducts.push(product);
		}

		this.setState({inCartProducts : inCartProducts});
	}

	handleDeleteProductFromCart (productId) {
		const inCartProducts = this.state.inCartProducts.slice();
		const indexProduct = inCartProducts.findIndex(inCartProduct => inCartProduct.id === productId);

		if(~indexProduct) {
			inCartProducts.splice(indexProduct, 1);
			this.setState({inCartProducts : inCartProducts});
		}
	}

	render () {

		const {inCartProducts} = this.state;

		return (
			<div className="store-wrapper">
				<h1>Little Store</h1>
				<BrowserRouter>
					<Switch>
							<NavBar inCartValue={inCartProducts.length} >
								<Route exact path="/" component={HomePage} />
								<Route path="/about" component={AboutPage} />
								<Route path="/categories" component={Categories} />
								<Route
									path="/product/:id"
									render={(props) => <Product {...props} onAddToCart={this.handleAddToCart} /> }
								/>
								<Route
									path="/cart"
									render={(props) => <Cart {...props}
																					 cartProducts={inCartProducts}
																					 onDeleteProduct={this.handleDeleteProductFromCart} /> }
								/>
							</NavBar>
					</Switch>
				</BrowserRouter>
				<hr />
				<div className="footer">FOOTER</div>
			</div>
		)
	}
}