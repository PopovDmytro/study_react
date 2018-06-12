import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

export const Featured = (props) => {

	console.log(props);

		return (
			<div>
				<h1>{props.title}</h1>
			</div>
		);
};