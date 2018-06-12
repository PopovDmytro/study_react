import React from "react"

import Title from "./Header/Title"

export default class Header extends React.Component {

	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {
		return (
		<header>
			<Title title={this.props.title} />
			<input type="text" value={this.props.title} onChange={this.handleChange.bind(this)} />
		</header>
		)
	}
}

// export const Header = ({title}) => (
// 	<header>
// 		<Title title={title} />
// 	</header>
// );