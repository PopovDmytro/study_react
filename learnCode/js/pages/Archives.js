import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Archives extends React.Component {
	render() {
		const { hash } = this.props.location;
		const { search } = this.props.location;
		const { params } = this.props.match;
		console.log(this.props);

		return (
			<div>
				<h1>Archives  </h1>

			</div>
		);
	}
}
