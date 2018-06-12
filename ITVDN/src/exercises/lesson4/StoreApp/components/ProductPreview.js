import {Component} from 'react';

export class ProductPreview extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const {id, img, title, name, thumbnail, description, price, onClick} = this.props;

		return (
			<li onClick={onClick.bind(null, id)}>
				<div className="top-block">
					<h3>{title} - price : {price}$</h3>
					<img src={img} alt=""/>
				</div>
				<div className="content-block">
					<p className="name">{name}</p>
					<p>{description}</p>
				</div>
				<div className="button-wrap">to product details</div>
			</li>
		);
	}
}